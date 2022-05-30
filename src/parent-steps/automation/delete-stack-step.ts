import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { IStringVariable } from '../../interface/variables/string-variable';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * Properties for DeleteStackStep
 */
export interface DeleteStackStepProps extends AutomationStepProps {

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

  readonly roleArn?: IStringVariable;
  readonly stackNameVariable: IStringVariable;
  readonly action: string = 'aws:deleteStack';

  constructor(scope: Construct, id: string, props: DeleteStackStepProps) {
    super(scope, id, props);
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
