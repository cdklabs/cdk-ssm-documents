import { AutomationDocument } from '../document/automation-document';
import { CommandDocument } from '../document/command-document';
import { SsmDocument } from '../document/ssm-document';
import { DataType } from '../domain/data-type';
import { DocumentResult } from '../domain/document-result';
import { Platform } from '../domain/platform';
import { ResponseCode } from '../domain/response-code';
import { SimulationResult } from '../domain/simulation-result';
import { IApproveHook } from '../interface/approve-hook';
import { IAwsInvoker } from '../interface/aws-invoker';
import { IEnvironment } from '../interface/environment';
import { IObserver } from '../interface/observer';
import { IPauseHook } from '../interface/pause-hook';
import { IRunCommandHook } from '../interface/run-command-hook';
import { ISleepHook } from '../interface/sleep-hook';
import { IWebhook } from '../interface/webhook';
import { IParameterResolver } from './automation/create-stack-simulation';
import { AutomationSimulation } from './document/automation-simulation';
import { CommandSimulation } from './document/command-simulation';

export interface AutomationSimulationProps {

  /**
   * (Optional) Hook to inject alternate ISleeper (to mock the sleep between failed invocations).
   * @default - really perform sleep using SleeperImpl class.
   */
  readonly sleepHook?: ISleepHook;

  /**
   * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
   * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
   */
  readonly awsInvoker?: IAwsInvoker;

  /**
   * (Optional) Pause hook to be called to pause the execution.
   * To mock this implemenation either inject an instance of IPauseHook or use the provided MockPause class.
   * @default PauseHook instance. PauseHook may not work in exported JSII languages. Override interface as needed.
   */
  readonly pauseHook?: IPauseHook;

  /**
   * (Optional) Allows for observing the input to steps as they run.
   * @default NoopObserver
   */
  readonly inputObserver?: IObserver;

  /**
   * (Optional) Allows for observing the output of steps as they run.
   * @default NoopObserver
   */
  readonly outputObserver?: IObserver;

  /**
   * (Optional) Approve hook to be called to pause the execution.
   * To mock this implementation either inject an instance of IApproveHook or use the provided MockApprove class.
   * @default ApproveHook instance. ApproveHook may not work in exported JSII languages. Override interface as needed.
   */
  readonly approveHook?: IApproveHook;

  /**
   * (Optional) Resolver for secure strings in parameters.
   * Required to simulate if using tokens in parameters input.
   * @default - Treats parameters as literal
   */
  readonly parameterResolver?: IParameterResolver;

  /**
   * (Optional) Hook for simulating aws:invokeWebhook
   * @default - Returns 204 with an empty response
   */
  readonly webhook?: IWebhook;

  /**
   * Hook for simulating aws:runCommand.
   * @default - Uses AWS API to execute the document remotely.
   */
  readonly runCommandHook?: IRunCommandHook;
}


export interface CommandSimulationProps {
  /**
   * (Optional) Specify here the environment in which to execute the scripts.
   * Use the DockerEnvironment to execute the commands inside the docker.
   * You can alternatively use the LoggingEnvironment which simply logs the commands
   * or MockEnvironment which saves them for validation.
   * @default LoggingEnvironment
   */
  readonly environment?: IEnvironment;

  /**
   * The Platform used in executing the command step.
   */
  readonly simulationPlatform: Platform;
}


/**
 * Universe of Automation and Command simulation props
 */
export interface SimulationProps {
  readonly sleepHook?: ISleepHook;
  readonly awsInvoker?: IAwsInvoker;
  readonly pauseHook?: IPauseHook;
  readonly inputObserver?: IObserver;
  readonly outputObserver?: IObserver;
  readonly approveHook?: IApproveHook;
  readonly parameterResolver?: IParameterResolver;
  readonly webhook?: IWebhook;
  readonly runCommandHook?: IRunCommandHook;
  readonly environment?: IEnvironment;
  readonly simulationPlatform?: Platform;
}

export class Simulation {

  public static ofAutomation(document: AutomationDocument, props: AutomationSimulationProps) {
    return new Simulation(document, props);
  }

  public static ofCommand(document: CommandDocument, props: CommandSimulationProps) {
    return new Simulation(document, props);
  }

  readonly document: SsmDocument;
  readonly props: SimulationProps;

  private constructor(document: SsmDocument, props: SimulationProps) {
    this.document = document;
    this.props = props;
  }


  /**
   * Synthesize before calling this function!
   * You can use this to Synthesize: SynthUtils.synthesize(stack);
   *
   * Executes the SSM Document in simulation mode.
   * This method DOES NOT result in invocation of SSM APIs.
   * Rather, all steps are executed locally and mimic the behavior of SSM.
   * If any inputs are not provided in this function, the specified defaults for the inputs will be used.
   * @param inputs the inputs to feed into the simulated execution.
   * @returns the outputs of all the executed steps.
   */
  public simulate(inputs: { [name: string]: any }): DocumentResult {
    this.document.docInputs.forEach(docInput => {
      if (inputs[docInput.name] == undefined) {
        inputs[docInput.name] = docInput.defaultValue;
        if (docInput.defaultValue == undefined) {
          throw new Error(`Value not provided for ${docInput.name} and no default value was provided`);
        }
      }
    });
    for (let key in inputs) {
      const value = inputs[key];
      const matchedInput = this.document.docInputs.filter(docInput => docInput.name == key)[0];
      if (matchedInput == undefined) {
        throw new Error(`Value provided to simulation {${key}:${value}} is not a supported input for this document`);
      }
      if (!(new DataType(matchedInput.inputType).validateType(value))) {
        throw new Error(`Value provided for ${key} was ${value} which does not match type ${matchedInput.inputType}`);
      }
      if (matchedInput.maxItems && Array.isArray(value) && matchedInput.maxItems < value.length) {
        throw new Error(`Values for input ${key} were ${value} which is greater than maxItems: ${matchedInput.maxItems}`);
      }
      if (matchedInput.minItems && Array.isArray(value) && matchedInput.minItems > value.length) {
        throw new Error(`Values for input ${key} were ${value} which is less than minItems: ${matchedInput.maxItems}`);
      }
      if (matchedInput.allowedPattern && !value.match(matchedInput.allowedPattern)) {
        throw new Error(`Value for input ${key} was ${value} which does not match regex ${matchedInput.allowedPattern}`);
      }
      if (matchedInput.allowedValues && !matchedInput.allowedValues.includes(value)) {
        throw new Error(`Value for input ${key} was ${value} which is not among allowedValues ${matchedInput.allowedValues}`);
      }
    }
    const simulationResult = this.start(inputs);
    var outputValues = [];
    if (simulationResult.responseCode == ResponseCode.SUCCESS) {
      outputValues = this.document.docOutputs.map(docOutput => {
        const valueOfOutput = (simulationResult.outputs ?? {})[docOutput.name];
        if (!new DataType(docOutput.outputType).validateType(valueOfOutput)) {
          throw new Error(`Document output ${docOutput.name} did not match type ${docOutput.outputType}: ${valueOfOutput}`);
        }
        return valueOfOutput;
      });
    }
    return { ...{ documentOutputs: outputValues }, ...simulationResult };
  }

  /**
   * Delegates the execution of the Document to the subclass (Automation, etc).
   * @param inputs a merge of the defined inputs to the document and the default values if not supplied.
   * @returns the outputs that were emitted from all of the steps.
   */
  protected start(inputs: { [name: string]: any }): SimulationResult {
    switch (this.document.documentType()) {
      case ('Automation'):
        return new AutomationSimulation(<AutomationDocument> this.document, this.props).start(inputs);
      case ('Command'):
        return new CommandSimulation(<CommandDocument> this.document, this.props).start(inputs);
      default:
        throw new Error('No simulation available for document of type: ' + this.document.documentType());
    }
  }


}