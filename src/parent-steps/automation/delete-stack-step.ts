import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { StackStatus } from '../..';
import { DataTypeEnum } from '../../domain/data-type';
import { Output } from '../../domain/output';
import { ResponseCode } from '../../domain/response-code';
import { IAwsInvoker, ReflectiveAwsInvoker } from '../../interface/aws-invoker';
import { IStringVariable } from '../../interface/variables/string-variable';
import { AutomationStep, AutomationStepProps } from '../automation-step';
import { AwsApiStep } from './aws-api-step';
import { waitForAndAssertStackStatus } from './sub-steps/wait-for-and-assert';

/**
 * Properties for DeleteStackStep
 */
export interface DeleteStackStepProps extends AutomationStepProps {

  /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
  readonly awsInvoker?: IAwsInvoker;

  /**
     * (Optional) The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that CloudFormation
     * assumes to create the stack. CloudFormation uses the role's credentials to make calls on your behalf.
     * CloudFormation always uses this role for all future operations on the stack.
     * As long as users have permission to operate on the stack, CloudFormation uses this role even
     * if the users don't have permission to pass it. Ensure that the role grants the least amount of privileges.
     *
     * If you don't specify a value, CloudFormation uses the role that was previously associated with the stack.
     * If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.
     */
  readonly roleArn?: IStringVariable;

  /**
     * (Optional) Variable that is fed into this step declaring which stack to delete.
     * @default - StackName is the default value.
     */
  readonly stackNameVariable: IStringVariable;
}

/**
 * AutomationStep implemenation for aws:deleteStack
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-deletestack.html
 */
export class DeleteStackStep extends AutomationStep {

  readonly awsInvoker: IAwsInvoker;
  readonly roleArn?: IStringVariable;
  readonly stackNameVariable: IStringVariable;
  readonly action: string = 'aws:deleteStack';

  constructor(scope: Construct, id: string, props: DeleteStackStepProps) {
    super(scope, id, props);
    this.awsInvoker = props.awsInvoker ?? new ReflectiveAwsInvoker();
    this.roleArn = props.roleArn;
    this.stackNameVariable = props.stackNameVariable;
  }

  /**
     * No outputs emitted from Delete Stack step
     * @returns []
     */
  public listOutputs(): Output[] {
    return [];
  }

  /**
     * The input required for this step is the stackNameVariable.
     * @returns the stackNameVariable as declared in the constructor
     */
  public listInputs(): string[] {
    return [
      ...this.stackNameVariable.requiredInputs(),
      ...this.roleArn == undefined ? [] : this.roleArn.requiredInputs(),
    ];
  }

  public executeStep(inputs: { [name: string]: any }): { [name: string]: any } {
    const stackName = this.stackNameVariable.resolve(inputs);
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
    if (this.roleArn != undefined) {
      apiParams.RoleARN = this.roleArn;
    }
    const describeResponse = new AwsApiStep(new Stack(), 'describeResponse', {
      service: 'CloudFormation',
      pascalCaseApi: 'DescribeStacks',
      apiParams,
      outputs: [{
        outputType: DataTypeEnum.STRING,
        name: 'StackId',
        selector: '$.Stacks[0].StackId',
      }],
      awsInvoker: this.awsInvoker,
    }).invoke({});
    if (describeResponse.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Describe stack failed for ${stackName}: ${describeResponse.stackTrace}`);
    }
    return (describeResponse.outputs ?? {})['describeResponse.StackId'];
  }

  private deleteStack(stackId: string, clientToken: string) {
    const apiParams: { [name: string]: any } = { StackName: stackId };
    if (this.roleArn != undefined) {
      apiParams.RoleARN = this.roleArn;
    }
    const result = new AwsApiStep(new Stack(), 'executeDelete', {
      service: 'CloudFormation',
      pascalCaseApi: 'DeleteStack',
      apiParams: {
        RoleARN: this.roleArn,
        ClientRequestToken: clientToken,
        StackName: stackId,
      },
      outputs: [],
      awsInvoker: this.awsInvoker,
    }).invoke({});
    if (result.responseCode != ResponseCode.SUCCESS) {
      throw new Error('Delete stack failed for ' + stackId);
    }
  }

  private waitForStackDeletion(stackId: string) {
    waitForAndAssertStackStatus({
      stackName: stackId,
      awsInvoker: this.awsInvoker,
      waitForStatus: [StackStatus.DELETE_FAILED, StackStatus.DELETE_COMPLETE],
      assertStatus: StackStatus.DELETE_COMPLETE,
    });
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = {
      StackName: this.stackNameVariable.print(),
      ClientRequestToken: `${this.stackNameVariable.print()}{{automation:EXECUTION_ID}}`,
    };
    if (this.roleArn != undefined) {
      inputs.RoleARN = this.roleArn;
    }
    return super.prepareSsmEntry(inputs);
  }

}
