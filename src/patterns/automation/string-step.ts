import { Construct } from 'constructs';
import { parse, toSeconds } from 'iso8601-duration';
import { DataType, IAwsInvoker, IObserver, IPauseHook, ISleepHook, StringVariable } from '../..';
import { Choice } from '../../domain/choice';
import { OperationEvaluator } from '../../domain/operation';
import { Output } from '../../domain/output';
import { HardCodedString, IStringVariable } from '../../interface/variables/string-variable';
import { AssertAwsResourceStep } from '../../parent-steps/automation/assert-aws-resource-step';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { BranchStep } from '../../parent-steps/automation/branch-step';
import { ExecuteScriptStep } from '../../parent-steps/automation/execute-script-step';
import { PauseStep } from '../../parent-steps/automation/pause-step';
import { SleepStep } from '../../parent-steps/automation/sleep-step';
import { WaitForResourceStep } from '../../parent-steps/automation/wait-for-resource-step';
// eslint-disable-next-line
const yaml = require('js-yaml');

export interface SimulationProps {

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
}

/**
 * StringStep allows for including a step from an existing automation document verbatim.
 * This is useful in that it allows developers to integrate with existing document steps.
 * This step can be used just as you would use any other Step including simulation and deployment.
 */
export class StringStep extends Construct {

  /**
     * Builds a step object from a yaml declaration.
     * You may cast the step afterword to the associated Step for this action
     * if you wish to gain access to action specific functionality,
     * @returns Step associated with the provided activity.
     */
  static fromYaml(scope: Construct, inputYaml: string, simulationProps: SimulationProps) {
    return StringStep.fromObject(scope, yaml.load(inputYaml), simulationProps);
  }

  /**
     * Builds a step object from a json declaration.
     * You may cast the step afterword to the associated Step for this action
     * if you wish to gain access to action specific functionality,
     * @returns Step associated with the provided activity.
     */
  static fromJson(scope: Construct, json: string, simulationProps: SimulationProps) {
    return StringStep.fromObject(scope, JSON.parse(json), simulationProps);
  }

  /**
     * Builds a step object from an object.
     * You may cast the step afterword to the associated Step for this action
     * if you wish to gain access to action specific functionality,
     * @returns Step associated with the provided activity.
     */
  static fromObject(scope: Construct, props: {[name: string]: any}, simulationProps: SimulationProps) {
    return new StringStep(scope, props.name, props, simulationProps);
  }

  private constructor(scope: Construct, id: string, props: {[name: string]: any}, simulationProps: SimulationProps) {
    super(scope, id);

    const sharedProps: { [name: string]: any } = {};
    sharedProps.name = props.name;
    sharedProps.action = props.action;
    if (props.maxAttempts) {
      sharedProps.maxAttempts = props.maxAttempts;
    }
    if (props.timeoutSeconds) {
      sharedProps.timeoutSeconds = props.timeoutSeconds;
    }
    if (props.isEnd != undefined) {
      sharedProps.isEnd = props.isEnd;
    }
    if (props.isCritical != undefined) {
      sharedProps.isCritical = props.isCritical;
    }
    if (props.outputs != undefined) {
      sharedProps.outputs = this.toOutputs(props.outputs);
    }

    const { Service, Api, PropertySelector, DesiredValues, ...restParams } = props.inputs;

    switch (props.action) {
      case 'aws:executeAwsApi':
        new AwsApiStep(this, props.name, {
          service: Service,
          pascalCaseApi: Api,
          apiParams: restParams,
          outputs: sharedProps.outputs,
          ...sharedProps,
          ...simulationProps,
        });
        break;
      case 'aws:waitForAwsResourceProperty':
        new WaitForResourceStep(this, props.name, {
          service: Service,
          pascalCaseApi: Api,
          apiParams: restParams,
          selector: PropertySelector,
          desiredValues: DesiredValues,
          ...sharedProps,
          ...simulationProps,
        });
        break;
      case 'aws:assertAwsResourceProperty':
        new AssertAwsResourceStep(this, props.name, {
          service: Service,
          pascalCaseApi: Api,
          apiParams: restParams,
          selector: PropertySelector,
          desiredValues: DesiredValues,
          ...sharedProps,
          ...simulationProps,
        });
        break;
      case 'aws:pause':
        new PauseStep(this, props.name, {
          ...sharedProps,
          ...simulationProps,
        });
        break;
      case 'aws:sleep':
        new SleepStep(this, props.name, {
          sleepSeconds: toSeconds(parse(restParams.Duration)),
          ...sharedProps,
          ...simulationProps,
        });
        break;
      case 'aws:executeScript':
        new ExecuteScriptStep(this, props.name, {
          language: ExecuteScriptStep.getLanguage(restParams.Runtime),
          inputs: Object.keys(restParams.InputPayload),
          inlineCode: restParams.Script,
          handlerName: restParams.Handler,
          ...sharedProps,
          ...simulationProps,
        });
        break;
      case 'aws:branch':
        new BranchStep(this, props.name, {
          choices: this.toChoices(restParams.Choices),
          defaultStepName: restParams.Default,
          ...sharedProps,
          ...simulationProps,
        });
        break;
      default:
        throw new Error('Action not implemented as StringStep ' + props.action);
    }
  }

  private toOutputs(declaredOutputs: {[name: string]: string}[]): Output[] {
    return declaredOutputs.map(declaredOutput => this.toOutput(declaredOutput));
  }

  private toOutput(declaredOutput: {[name: string]: string}): Output {
    return {
      name: declaredOutput.Name,
      selector: declaredOutput.Selector,
      outputType: DataType.fromDataType(declaredOutput.Type).dataTypeEnum,
    };
  }

  private toChoices(declaredChoices: {[name: string]: string}[]): Choice[] {
    return declaredChoices.map(declaredChoice => this.toChoice(declaredChoice));
  }

  private toChoice(declaredChoice: {[name: string]: string}): Choice {
    const operationEntry = Object.entries(declaredChoice)
      .filter(entry => OperationEvaluator.STRING_TO_OPERATION[entry[0]] != undefined)[0];
    return new Choice({
      jumpToStepName: declaredChoice.NextStep,
      variable: this.toVariable(declaredChoice.Variable),
      operation: OperationEvaluator.fromOperationName(operationEntry[0]),
      constant: operationEntry[1],
    });
  }

  private toVariable(variable: string): IStringVariable {
    if (variable.includes('{{')) {
      return new StringVariable(variable.replace('{{', '').replace('}}', '').trim());
    }
    return new HardCodedString(variable.trim());
  }
}
