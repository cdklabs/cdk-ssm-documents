import { Construct } from 'constructs';
import { StringVariable } from '..';
import { CancellationException } from '../domain/cancellation-exception';
import { DataType, DataTypeEnum } from '../domain/data-type';
import { NonRetriableException } from '../domain/non-retriable-exception';
import { Output } from '../domain/output';
import { ResponseCode } from '../domain/response-code';
import { SimulationResult } from '../domain/simulation-result';
import { Step, StepProps } from './step';
// eslint-disable-next-line
const jp = require('jsonpath');

export interface AutomationStepProps extends StepProps {

  /**
     * Whether to stop document execution after this step.
     * @default false
     */
  readonly isEnd?: boolean;

  /**
     * (Optional) Step to jump to in the event that this step fails.
     * @default undefined
     */
  readonly onFailure?: Step;

  /**
     * (Optional) Step to jump to in the event that this step is cancelled.
     * @default undefined
     */
  readonly onCancel?: Step;


  /**
     * (Optional) max attempts to run this step if there are failures.
     * @default Step.DEFAULT_MAX_ATTEMPTS
     */
  readonly maxAttempts?: number;

  /**
     * (Optional) timeout seconds to run this step.
     * In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.
     * @default Step.DEFAULT_TIMEOUT
     */
  readonly timeoutSeconds?: number;

}

/**
 * Parent class for AutomationSteps. These steps are using in an AutomationDocument.
 * You can instantiate steps using the AutomationBuilder for convenience.
 * You can use these steps to simulate their execution (mimics the SSM run) AND to build their yaml/json declaration.
 * Control flow of the subsequent step is determined by the currently executing step.
 * The flow of the execution therefore follows a chain-of-responsibility pattern.
 * The inputs received into a step AND the outputs of previous steps are merged to form inputs of subsequent steps.
 */
export abstract class AutomationStep extends Step {
  static readonly DEFAULT_TIMEOUT = 3600;
  static readonly DEFAULT_MAX_ATTEMPTS = 1;
  readonly maxAttempts: number;
  readonly timeoutSeconds: number;
  readonly isEnd: boolean;
  readonly onFailure: Step | undefined;
  readonly onCancel: Step | undefined;

  nextStep: AutomationStep | undefined;
  allStepsInExecution: AutomationStep[] | undefined;

  constructor(scope: Construct, id: string, props: AutomationStepProps) {
    super(scope, id, props);
    this.maxAttempts = props.maxAttempts ?? AutomationStep.DEFAULT_MAX_ATTEMPTS;
    this.timeoutSeconds = props.timeoutSeconds ?? AutomationStep.DEFAULT_TIMEOUT;
    this.isEnd = props.isEnd ?? false;
    this.onFailure = props.onFailure;
    this.onCancel = props.onCancel ?? undefined;
  }

  protected prepareSsmEntry(inputs: { [name: string]: any }): { [name: string]: any } {
    // Maps maintain insertion order
    const ssmDef: Map<string, any> = new Map();
    if (this.description) {
      ssmDef.set('description', this.description);
    }
    ssmDef.set('name', this.name);
    ssmDef.set('action', this.action);
    ssmDef.set('inputs', inputs);

    const formattedOutputs = this.listOutputs().map(output => this.formatOutput(output));
    if (this.listOutputs().length > 0) {
      ssmDef.set('outputs', formattedOutputs);
    }
    if (this.isEnd) {
      ssmDef.set('isEnd', true);
    }
    if (this.maxAttempts != AutomationStep.DEFAULT_MAX_ATTEMPTS) {
      ssmDef.set('maxAttempts', this.maxAttempts);
    }
    if (this.timeoutSeconds != AutomationStep.DEFAULT_TIMEOUT) {
      ssmDef.set('maxAttempts', this.timeoutSeconds);
    }
    if (this.onCancel) {
      ssmDef.set('onCancel', 'step:' + this.onCancel.name);
    }
    if (this.onFailure) {
      ssmDef.set('onCancel', 'step:' + this.onFailure.name);
    }
    const ssmDict: { [name: string]: any } = {};
    ssmDef.forEach((value, key) => {
      ssmDict[key] = value;
    });
    return ssmDict;
  }

  /**
     * Formats the provided output into an object that can be used to generate the SSM yaml/json representation.
     */
  private formatOutput(output: Output): {[name: string]: string} {
    return {
      Name: output.name,
      Selector: output.selector,
      Type: new DataType(output.outputType).toSsmString(),
    };
  }

  /**
     * Invokes the current step on the input and will return a SimulationResult.
     * @param inputs must contain all of the inputs declared by the current step.
     * @returns a SimulationResult with the step outputs in the case of success or stacktrace in the case of failure.
     */
  public invoke(inputs: { [name: string]: any }): SimulationResult {
    console.log('Executing Step: ' + this.name);
    return this.invokeWithFallback(inputs);
  }

  /**
     * If fallback/retries are specified for this step, the retry or skip logic is handled in this function.
     */
  private invokeWithFallback(allInputs: { [name: string]: any }): SimulationResult {
    try {
      const filteredInputs = this.filterInputs(allInputs);
      this.inputObserver.accept(filteredInputs);
      const response = this.executeWithRetries(filteredInputs);
      this.outputObserver.accept(response);
      Object.assign(allInputs, response);
      if (this.nextStep && !this.isEnd) {
        const nextStepRes = this.nextStep.invoke(allInputs);
        if (nextStepRes.responseCode != ResponseCode.SUCCESS) {
          return {
            responseCode: nextStepRes.responseCode,
            stackTrace: nextStepRes.stackTrace,
            executedSteps: this.prependSelf(nextStepRes.executedSteps),
          };
        } else {
          return {
            responseCode: ResponseCode.SUCCESS,
            outputs: { ...response, ...nextStepRes.outputs },
            executedSteps: this.prependSelf(nextStepRes.executedSteps),
          };
        }
      } else {
        return {
          responseCode: ResponseCode.SUCCESS,
          outputs: response,
          executedSteps: [this.name],
        };
      }
      // JSII does not differentiate between exceptions. For the API we therefore return a ResponseCode
    } catch (error) {
      if (error instanceof CancellationException) {
        if (this.onCancel) {
          console.log('Step failed: ' + this.name + '. Executing onCancel step ' + this.onCancel.name);
          return this.onCancel.invoke(allInputs);
        } else {
          return {
            responseCode: ResponseCode.CANCELED,
            stackTrace: error.message + '\n' + error.stack,
            executedSteps: [this.name],
          };
        }
      } else {
        if (this.onFailure) {
          console.log('Step failed: ' + this.name + '. Executing onFailure step ' + this.onFailure.name);
          return this.onFailure.invoke(allInputs);
        } else {
          return {
            responseCode: ResponseCode.FAILED,
            outputs: [],
            stackTrace: (error as Error).message + '\n' + (error as Error).stack,
            executedSteps: [this.name],
          };
        }
      }
    }
  }

  /**
     * This function receives all of the available inputs and returns the subset of inputs that were requested.
     * If any input requested in the current step is not available in the received inputs, this will throw.
     * @param inputs all available inputs for the currently executing step
     * @returns the subset of inputs which are requested by the current step
     */
  private filterInputs(inputs: { [name: string]: any }) {
    const foundAll = this.listInputs().every(required => Object.keys(inputs).includes(required));
    if (!foundAll) {
      throw new NonRetriableException(`Not all inputs required were provided. Required: ${this.listInputs()}. Provided: ${JSON.stringify(inputs)}`);
    }
    const filteredEntries = Object.entries(inputs).filter(entry => {
      const [key] = entry;
      return key.startsWith('global:') || key.startsWith('automation:') || this.listInputs().includes(key);
    });
    return Object.fromEntries(filteredEntries);
  }

  /**
     * Adds this step name to the list of executed steps.
     * Since the steps are invoked as a chain, the current step is prepended as invocation stack is popped.
     */
  protected prependSelf(subsequentSteps: string[]): string[] {
    return [this.name, ...subsequentSteps];
  }

  private executeWithRetries(inputs: { [name: string]: any }): { [name: string]: any } {
    let exception;
    for (let i = 0; i < this.maxAttempts; i++) {
      try {
        console.log('Invoking step ' + this.name + ': attempt ' + i);
        return this.tryExecute(inputs);
      } catch (error) {
        if (error instanceof NonRetriableException) {
          throw error;
        } else {
          exception = error;
        }
      }
    }
    console.log('Exception occurred in this step: ' + this.name);

    throw exception;
  }

  private tryExecute(inputs: { [name: string]: any }): { [name: string]: any } {
    const start = Date.now();
    console.log(`Execute step ${this.name} start: ${start}`);
    const response = this.executeStep(inputs);
    console.log(`Execute step ${this.name} end: ${Date.now()}`);
    const relevantResponse = this.getSelectedResponse(response);
    this.checkExecutionTime(start);
    return relevantResponse;
  }

  /**
     * Runs this step (and only this step) in simulation with the provided inputs.
     * @returns the entire response (will not apply json path selection of the result)
     */
  public abstract executeStep(inputs: { [name: string]: any }): { [name: string]: any };

  /**
     * A timeout may be set as a property of a step.
     * This function checks the timeout to ensure that the execution time for the step was not exceeded.
     * The execution will not be killed when timeout is reached.
     * Rather an error will be thrown after the fact if time is exceeded.
     */
  private checkExecutionTime(start: number) {
    const executionTime = Date.now() - start;
    if (executionTime > this.timeoutSeconds * 1000) {
      throw new Error('Execution time exceeded timeout: timeout set to ' +
            this.timeoutSeconds + ' seconds but took ' + executionTime + ' ms');
    }
  }

  /**
     * Finds each declared step output using the json selector specified.
     * @returns the mapping of output name to the value selected from the step execution response.
     */
  private getSelectedResponse(response: { [name: string]: any }) {
    const relevantResponse: { [name: string]: any } = {};
    this.listOutputs().forEach(declaredOutput => {
      if (response == undefined) {
        throw new Error(`Output ${declaredOutput.name} specified selector ${declaredOutput.selector} but response was undefined for step ${this.name}`);
      }
      // I cannot explain the hack below. But it needs to be reformed into an object.
      const hackedResponse = JSON.parse(JSON.stringify(response));
      const selectedResponse = jp.query(hackedResponse, declaredOutput.selector)[0];
      if (selectedResponse === undefined) {
        throw new Error(`Output ${declaredOutput.name} specified selector ${declaredOutput.selector} but not found in response ${JSON.stringify(response)}`);
      }
      relevantResponse[this.name + '.' + declaredOutput.name] = selectedResponse;
      if (!new DataType(declaredOutput.outputType).validateType(selectedResponse)) {
        throw new Error(`DataType of output ${declaredOutput.name}:${DataTypeEnum[declaredOutput.outputType]} does not match response type ${JSON.stringify(selectedResponse)}`);
      }
    });
    return relevantResponse;
  }

  public variables(): { [name: string]: any } {
    return Object.assign({}, ...this.listOutputs()
      .map(out => ({ [out.name]: new StringVariable(`${this.name}.${out.name}`) })));
  }
}
