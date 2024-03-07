import {
  ApiExecuteAutomationHook,
  ExecuteAutomationStep,
  IExecuteAutomationHook,
  UpdateVariableStep,
} from '..';
import { CancellationException } from '../domain/cancellation-exception';
import { DataType, DataTypeEnum } from '../domain/data-type';
import { NonRetriableException } from '../domain/non-retriable-exception';
import { ResponseCode } from '../domain/response-code';
import { SimulationResult } from '../domain/simulation-result';
import { ApproveImpl, IApproveHook } from '../interface/approve-hook';
import { IAwsInvoker, ReflectiveAwsInvoker } from '../interface/aws-invoker';
import { IObserver, NoopObserver } from '../interface/observer';
import { IPauseHook, PauseImpl } from '../interface/pause-hook';
import { IRunCommandHook } from '../interface/run-command-hook';
import { ApiRunCommandHook } from '../interface/run-command-hook/api-run-command-hook';
import { ISleepHook, SleepImpl } from '../interface/sleep-hook';
import { IWebhook, WebhookImpl } from '../interface/webhook';
import { AutomationStep } from '../parent-steps/automation-step';
import { ApproveStep } from '../parent-steps/automation/approve-step';
import { AssertAwsResourceStep } from '../parent-steps/automation/assert-aws-resource-step';
import { AwsApiStep } from '../parent-steps/automation/aws-api-step';
import { BranchStep } from '../parent-steps/automation/branch-step';
import { ChangeInstanceStateStep } from '../parent-steps/automation/change-instance-state-step';
import { CopyImageStep } from '../parent-steps/automation/copy-image-step';
import { CreateImageStep } from '../parent-steps/automation/create-image-step';
import { CreateStackStep, IParameterResolver } from '../parent-steps/automation/create-stack-step';
import { CreateTagsStep } from '../parent-steps/automation/create-tags-step';
import { DeleteImageStep } from '../parent-steps/automation/delete-image-step';
import { DeleteStackStep } from '../parent-steps/automation/delete-stack-step';
import { ExecuteScriptStep } from '../parent-steps/automation/execute-script-step';
import { ExecuteStateMachineStep } from '../parent-steps/automation/execute-state-machine-step';
import { InvokeLambdaFunctionStep } from '../parent-steps/automation/invoke-lambda-function-step';
import { InvokeWebhookStep } from '../parent-steps/automation/invoke-webhook-step';
import { PauseStep } from '../parent-steps/automation/pause-step';
import { RunCommandStep } from '../parent-steps/automation/run-command-step';
import { RunInstanceStep } from '../parent-steps/automation/run-instance-step';
import { SleepStep } from '../parent-steps/automation/sleep-step';
import { WaitForResourceStep } from '../parent-steps/automation/wait-for-resource-step';
import { ApproveSimulation } from './automation/approve-simulation';
import { AssertAwsResourceSimulation } from './automation/assert-aws-resource-simulation';
import { AutomationSimulationBase } from './automation/automation-simulation-base';
import { AwsApiSimulation } from './automation/aws-api-simulation';
import { BranchSimulation } from './automation/branch-simulation';
import { ChangeInstanceStateSimulation } from './automation/change-instance-state-simulation';
import { CopyImageSimulation } from './automation/copy-image-simulation';
import { CreateImageSimulation } from './automation/create-image-simulation';
import { CreateStackSimulation } from './automation/create-stack-simulation';
import { CreateTagsSimulation } from './automation/create-tags-simulation';
import { DeleteImageSimulation } from './automation/delete-image-simulation';
import { DeleteStackSimulation } from './automation/delete-stack-simulation';
import { ExecuteAutomationSimulation } from './automation/execute-automation-simulation';
import { ExecuteScriptSimulation } from './automation/execute-script-simulation';
import { ExecuteStateMachineSimulation } from './automation/execute-state-machine-simulation';
import { InvokeLambdaFunctionSimulation } from './automation/invoke-lambda-function-simulation';
import { InvokeWebhookSimulation } from './automation/invoke-webhook-simulation';
import { PauseSimulation } from './automation/pause-simulation';
import { RunCommandSimulation } from './automation/run-command-simulation';
import { RunInstanceSimulation } from './automation/run-instance-simulation';
import { SleepSimulation } from './automation/sleep-simulation';
import { UpdateVariableSimulation } from './automation/update-variable-simulation';
import { WaitForResourceSimulation } from './automation/wait-for-resource-simulation';
import { AutomationSimulationProps } from './simulation';
// eslint-disable-next-line
const jp = require('jsonpath');

/**
 * The same interface as AutomationSimulationProps but all fields are required.
 */
export interface RequiredAutomationSimulationProps {
  readonly sleepHook: ISleepHook;
  readonly awsInvoker: IAwsInvoker;
  readonly pauseHook: IPauseHook;
  readonly inputObserver: IObserver;
  readonly outputObserver: IObserver;
  readonly approveHook: IApproveHook;
  readonly parameterResolver: IParameterResolver;
  readonly webhook: IWebhook;
  readonly runCommandHook: IRunCommandHook;
  readonly executeAutomationHook: IExecuteAutomationHook;
}

export class AutomationStepSimulation {
  readonly step: AutomationStep;
  readonly props: RequiredAutomationSimulationProps;

  constructor(step: AutomationStep, props: AutomationSimulationProps) {
    const awsInvoker = props.awsInvoker ?? new ReflectiveAwsInvoker();
    const sleepHook = props.sleepHook ?? new SleepImpl();
    this.props = {
      sleepHook,
      awsInvoker,
      pauseHook: props.pauseHook ?? new PauseImpl(),
      inputObserver: props.inputObserver ?? new NoopObserver(),
      outputObserver: props.outputObserver ?? new NoopObserver(),
      approveHook: props.approveHook ?? new ApproveImpl(),
      parameterResolver: props.parameterResolver ?? { resolve: (x) => x },
      webhook: props.webhook ?? new WebhookImpl(),
      runCommandHook: props.runCommandHook ?? new ApiRunCommandHook(awsInvoker, sleepHook),
      executeAutomationHook: props.executeAutomationHook ?? new ApiExecuteAutomationHook(awsInvoker, sleepHook),
    };
    this.step = step;
  }

  /**
   * Invokes the current step on the input and will return a SimulationResult.
   * @param inputs must contain all of the inputs declared by the current step.
   * @returns a SimulationResult with the step outputs in the case of success or stacktrace in the case of failure.
   */
  public invoke(inputs: { [name: string]: any }): SimulationResult {
    console.log('Executing Step: ' + this.step.name);
    return this.invokeWithFallback(inputs);
  }

  /**
   * If fallback/retries are specified for this step, the retry or skip logic is handled in this function.
   */
  private invokeWithFallback(allInputs: { [name: string]: any }): SimulationResult {
    try {
      const filteredInputs = this.filterInputs(allInputs);
      this.step.inputObserver.accept(filteredInputs);
      const response = this.executeWithRetries(filteredInputs);
      this.step.outputObserver.accept(response);
      Object.assign(allInputs, filteredInputs);
      Object.assign(allInputs, response);
      const nextStep = this.mySimulation().nextStep(allInputs);
      if (nextStep && !this.step.isEnd) {
        const nextStepRes = new AutomationStepSimulation(nextStep, this.props).invoke(allInputs);
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
          executedSteps: [this.step.name],
        };
      }
      // JSII does not differentiate between exceptions. For the API we therefore return a ResponseCode
    } catch (error) {
      if (error instanceof NonRetriableException) {
        throw error;
      } else if (error instanceof CancellationException) {
        if (this.step.onCancel.stepToInvoke(this.step)) {
          const onCancelStepName: string = this.step.onCancel.stepToInvoke(this.step);
          console.log('Step cancelled: ' + this.step.name + '. Executing onCancel step ' + onCancelStepName);
          const onCancelStep = this.step.allStepsInExecution?.filter(s => s.name == this.step.onCancel.stepToInvoke(this.step));
          if (onCancelStep == undefined || onCancelStep.length != 1) {
            throw new Error('Could not find cancellation step ' + onCancelStepName);
          }
          return new AutomationStepSimulation(onCancelStep[0], this.props).invoke(allInputs);
        } else {
          return {
            responseCode: ResponseCode.CANCELED,
            stackTrace: error.message + '\n' + error.stack,
            executedSteps: [this.step.name],
          };
        }
      } else {
        if (this.step.onFailure.stepToInvoke(this.step)) {
          const onFailureStepName: string = this.step.onFailure.stepToInvoke(this.step);
          console.log('Step failed: ' + this.step.name + '. Executing onFailure step ' + onFailureStepName);
          const onFailureStep = this.step.allStepsInExecution?.filter(s => s.name == this.step.onFailure.stepToInvoke(this.step));
          if (onFailureStep == undefined || onFailureStep.length != 1) {
            throw new Error('Could not find onFailure step ' + onFailureStepName);
          }
          return new AutomationStepSimulation(onFailureStep[0], this.props).invoke(allInputs);
        } else {
          return {
            responseCode: ResponseCode.FAILED,
            outputs: {},
            stackTrace: (error as Error).message + '\n' + (error as Error).stack,
            executedSteps: [this.step.name],
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
    const foundAll = this.step.listInputs().every(required => Object.keys(inputs).includes(required));
    if (!foundAll) {
      throw new NonRetriableException(`Not all inputs required were provided. Required: ${this.step.listInputs()}. Provided: ${JSON.stringify(inputs)}`);
    }
    const filteredEntries = Object.entries(inputs).filter(entry => {
      const [key] = entry;
      return key.startsWith('global:')
        || key.startsWith('automation:')
        || key.startsWith('variable:')
        || this.step.listInputs().includes(key);
    });
    return Object.fromEntries(filteredEntries);
  }

  /**
   * Adds this step name to the list of executed steps.
   * Since the steps are invoked as a chain, the current step is prepended as invocation stack is popped.
   */
  protected prependSelf(subsequentSteps: string[]): string[] {
    return [this.step.name, ...subsequentSteps];
  }

  private executeWithRetries(inputs: { [name: string]: any }): { [name: string]: any } {
    let exception;
    for (let i = 0; i < this.step.maxAttempts; i++) {
      try {
        console.log('Invoking step ' + this.step.name + ': attempt ' + i);
        return this.tryExecute(inputs);
      } catch (error) {
        if (error instanceof NonRetriableException) {
          throw error;
        } else {
          exception = error;
        }
      }
    }
    console.log('Exception occurred in this step: ' + this.step.name);

    throw exception;
  }

  private tryExecute(inputs: { [name: string]: any }): { [name: string]: any } {
    const start = Date.now();
    console.log(`Execute step ${this.step.name} start: ${start}`);
    const response = this.mySimulation().executeStep(inputs);
    console.log(`Execute step ${this.step.name} end: ${Date.now()}`);
    const relevantResponse = this.getSelectedResponse(response);
    this.checkExecutionTime(start);
    return relevantResponse;
  }

  private mySimulation(): AutomationSimulationBase {
    switch (this.step.action) {
      case 'aws:approve':
        return new ApproveSimulation(<ApproveStep> this.step, this.props);
      case 'aws:assertAwsResourceProperty':
        return new AssertAwsResourceSimulation(<AssertAwsResourceStep> this.step, this.props);
      case 'aws:executeAwsApi':
        return new AwsApiSimulation(<AwsApiStep> this.step, this.props);
      case 'aws:branch':
        return new BranchSimulation(<BranchStep> this.step);
      case 'aws:changeInstanceState':
        return new ChangeInstanceStateSimulation(<ChangeInstanceStateStep> this.step, this.props);
      case 'aws:copyImage':
        return new CopyImageSimulation(<CopyImageStep> this.step, this.props);
      case 'aws:createImage':
        return new CreateImageSimulation(<CreateImageStep> this.step, this.props);
      case 'aws:createStack':
        return new CreateStackSimulation(<CreateStackStep> this.step, this.props);
      case 'aws:createTags':
        return new CreateTagsSimulation(<CreateTagsStep> this.step, this.props);
      case 'aws:deleteImage':
        return new DeleteImageSimulation(<DeleteImageStep> this.step, this.props);
      case 'aws:deleteStack':
        return new DeleteStackSimulation(<DeleteStackStep> this.step, this.props);
      case 'aws:executeAutomation':
        return new ExecuteAutomationSimulation(<ExecuteAutomationStep> this.step, this.props);
      case 'aws:executeScript':
        return new ExecuteScriptSimulation(<ExecuteScriptStep> this.step);
      case 'aws:executeStateMachine':
        return new ExecuteStateMachineSimulation(<ExecuteStateMachineStep> this.step, this.props);
      case 'aws:invokeLambdaFunction':
        return new InvokeLambdaFunctionSimulation(<InvokeLambdaFunctionStep> this.step, this.props);
      case 'aws:invokeWebhook':
        return new InvokeWebhookSimulation(<InvokeWebhookStep> this.step, this.props);
      case 'aws:pause':
        return new PauseSimulation(<PauseStep> this.step, this.props);
      case 'aws:runCommand':
        return new RunCommandSimulation(<RunCommandStep> this.step, this.props);
      case 'aws:runInstances':
        return new RunInstanceSimulation(<RunInstanceStep> this.step, this.props);
      case 'aws:sleep':
        return new SleepSimulation(<SleepStep> this.step, this.props);
      case 'aws:updateVariable':
        return new UpdateVariableSimulation(<UpdateVariableStep> this.step);
      case 'aws:waitForAwsResourceProperty':
        return new WaitForResourceSimulation(<WaitForResourceStep> this.step, this.props);
      default:
        throw new Error('No simulation available for action: ' + this.step.name);
    }
  }

  /**
   * A timeout may be set as a property of a step.
   * This function checks the timeout to ensure that the execution time for the step was not exceeded.
   * The execution will not be killed when timeout is reached.
   * Rather an error will be thrown after the fact if time is exceeded.
   */
  private checkExecutionTime(start: number) {
    const executionTime = Date.now() - start;
    if (executionTime > this.step.timeoutSeconds * 1000) {
      throw new Error('Execution time exceeded timeout: timeout set to ' +
        this.step.timeoutSeconds + ' seconds but took ' + executionTime + ' ms');
    }
  }

  /**
   * Finds each declared step output using the json selector specified.
   * @returns the mapping of output name to the value selected from the step execution response.
   */
  private getSelectedResponse(response: { [name: string]: any }) {
    const relevantResponse: { [name: string]: any } = {};
    this.step.listOutputs().forEach(declaredOutput => {
      if (response == undefined) {
        throw new Error(`Output ${declaredOutput.name} specified selector ${declaredOutput.selector} but response was undefined for step ${this.step.name}`);
      }
      // I cannot explain the hack below. But it needs to be reformed into an object.
      const hackedResponse = JSON.parse(JSON.stringify(response));
      const selectedResponse = jp.query(hackedResponse, declaredOutput.selector)[0];
      if (selectedResponse === undefined) {
        throw new Error(`Output ${declaredOutput.name} specified selector ${declaredOutput.selector} but not found in response ${JSON.stringify(response)}`);
      }
      relevantResponse[this.step.name + '.' + declaredOutput.name] = selectedResponse;
      if (!new DataType(declaredOutput.outputType).validateType(selectedResponse)) {
        throw new Error(`DataType of output ${declaredOutput.name}:${DataTypeEnum[declaredOutput.outputType]} does not match response type ${JSON.stringify(selectedResponse)}`);
      }
    });
    return relevantResponse;
  }

}
