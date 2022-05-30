import { Stack } from 'aws-cdk-lib';
import { DataTypeEnum } from '../../domain/data-type';
import { ResponseCode } from '../../domain/response-code';
import { StackStatus } from '../../domain/stack-status';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { DeleteStackStep } from '../../parent-steps/automation/delete-stack-step';
import { waitForAndAssertStackStatus } from '../../parent-steps/automation/sub-steps/wait-for-and-assert';
import { AutomationStepSimulation } from '../automation-step-simulation';
import { AutomationSimulationBase } from './automation-simulation-base';
import { AwsInvocationSimulationProps } from './aws-api-simulation';

/**
 * AutomationStep implemenation for aws:deleteStack
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-deletestack.html
 */
export class DeleteStackSimulation extends AutomationSimulationBase {

  private deleteStackStep: DeleteStackStep;
  private props: AwsInvocationSimulationProps;
  readonly action: string = 'aws:deleteStack';

  constructor(step: DeleteStackStep, props: AwsInvocationSimulationProps) {
    super(step);
    this.deleteStackStep = step;
    this.props = props;
  }

  public executeStep(inputs: { [name: string]: any }): { [name: string]: any } {
    const stackName = this.deleteStackStep.stackNameVariable.resolve(inputs);
    const clientToken = stackName + inputs['automation:EXECUTION_ID'];
    console.log(`DeleteStack: Querying stack id for ${stackName}`);
    const stackId = this.getStackId(stackName);
    console.log(`DeleteStack: StackId for StackName ${stackName} determine ${stackId}`);
    this.deleteStack(stackId, clientToken);
    console.log(`DeleteStack: Initiated deletion of ${stackId}`);
    this.waitForStackDeletion(stackId);
    console.log(`DeleteStack: Stack ${stackName} successfully deleted`);
    return {};
  }

  private getStackId(stackName: string): string {
    const apiParams: { [name: string]: any } = { StackName: stackName };
    if (this.deleteStackStep.roleArn != undefined) {
      apiParams.RoleARN = this.deleteStackStep.roleArn;
    }
    const describeResponse = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'describeResponse', {
      service: 'CloudFormation',
      pascalCaseApi: 'DescribeStacks',
      apiParams,
      outputs: [{
        outputType: DataTypeEnum.STRING,
        name: 'StackId',
        selector: '$.Stacks[0].StackId',
      }],
    }), this.props).invoke({});
    if (describeResponse.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Describe stack failed for ${stackName}: ${describeResponse.stackTrace}`);
    }
    return (describeResponse.outputs ?? {})['describeResponse.StackId'];
  }

  private deleteStack(stackId: string, clientToken: string) {
    const apiParams: { [name: string]: any } = { StackName: stackId };
    if (this.deleteStackStep.roleArn != undefined) {
      apiParams.RoleARN = this.deleteStackStep.roleArn;
    }
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'executeDelete', {
      service: 'CloudFormation',
      pascalCaseApi: 'DeleteStack',
      apiParams: {
        RoleARN: this.deleteStackStep.roleArn,
        ClientRequestToken: clientToken,
        StackName: stackId,
      },
      outputs: [],
    }), this.props).invoke({});
    if (result.responseCode != ResponseCode.SUCCESS) {
      throw new Error('Delete stack failed for ' + stackId);
    }
  }

  private waitForStackDeletion(stackId: string) {
    waitForAndAssertStackStatus({
      stackName: stackId,
      waitForStatus: [StackStatus.DELETE_FAILED, StackStatus.DELETE_COMPLETE],
      assertStatus: StackStatus.DELETE_COMPLETE,
    }, this.props);
  }


}
