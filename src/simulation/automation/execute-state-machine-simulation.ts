import { Stack } from 'aws-cdk-lib';
import { DataTypeEnum } from '../../domain/data-type';
import { ResponseCode } from '../../domain/response-code';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { ExecuteStateMachineStep } from '../../parent-steps/automation/execute-state-machine-step';
import { waitForAndAssertResource } from '../../parent-steps/automation/sub-steps/wait-for-and-assert';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStepSimulation } from '../automation-step-simulation';
import { AutomationSimulationBase } from './automation-simulation-base';
import { AwsInvocationSimulationProps } from './aws-api-simulation';
import {AwsService} from "../../domain/aws-service";

enum ExecuteStateMachineStatus {
  RUNNING,
  SUCCEEDED,
  FAILED,
  TIMED_OUT,
  ABORTED,
}

/**
 * AutomationStep implementation of [aws:executeStateMachine](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeStateMachine.html)
 */
export class ExecuteStateMachineSimulation extends AutomationSimulationBase {
  readonly action: string = 'aws:executeStateMachine';
  readonly executeStateMachineStep: ExecuteStateMachineStep;
  readonly props: AwsInvocationSimulationProps;

  constructor(step: ExecuteStateMachineStep, props: AwsInvocationSimulationProps) {
    super(step);
    this.executeStateMachineStep = step;
    this.props = props;
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    const stateMachineArn = this.executeStateMachineStep.stateMachineArn.resolveToString(inputs);
    console.log(`ExecuteStateMachine: Invoke start execution of ${stateMachineArn}`);
    const executionId = this.startExecution(inputs);
    console.log(`ExecuteStateMachine: Started execution ${executionId}`);
    this.waitForExecution(executionId);
    console.log(`ExecuteStateMachine: Execution ${executionId} is complete`);
    return {};
  }

  private startExecution(inputs: Record<string, any>): string {
    const apiParams = pruneAndTransformRecord({
      stateMachineArn: this.executeStateMachineStep.stateMachineArn,
      name: this.executeStateMachineStep.executionName,
      input: this.executeStateMachineStep.input,
    }, x => x.resolve(inputs));

    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'startExecution', {
      service: AwsService.STEP_FUNCTIONS,
      pascalCaseApi: 'StartExecution',
      apiParams: apiParams,
      outputs: [{
        outputType: DataTypeEnum.STRING,
        selector: '$.executionArn',
        name: 'ExecutionId',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Failed to start execution ${apiParams.stateMachineArn}: ${result.stackTrace}`);
    }
    return result.outputs?.['startExecution.ExecutionId'];
  }

  private waitForExecution(executionId: string) {
    waitForAndAssertResource({
      service: AwsService.STEP_FUNCTIONS,
      pascalCaseApi: 'DescribeExecution',
      apiParams: {
        executionArn: executionId,
      },
      selector: '$.status',
      waitForValues: [
        ExecuteStateMachineStatus.ABORTED,
        ExecuteStateMachineStatus.FAILED,
        ExecuteStateMachineStatus.TIMED_OUT,
        ExecuteStateMachineStatus.SUCCEEDED,
      ].map(x => ExecuteStateMachineStatus[x]),
      desiredValues: [ExecuteStateMachineStatus[ExecuteStateMachineStatus.SUCCEEDED]],
    }, this.props);
  }

}