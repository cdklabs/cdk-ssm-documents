import { Construct } from 'constructs';
import { DataTypeEnum } from '../../domain/data-type';
import { Output } from '../../domain/output';
import { INumberVariable } from '../../interface/variables/number-variable';
import { IStringListVariable } from '../../interface/variables/string-list-variable';
import { IStringVariable } from '../../interface/variables/string-variable';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * Properties for ApproveStep
 */
export interface ApproveStepProps extends AutomationStepProps {

  /**
     * A list of AWS authenticated principals who are able to either approve or reject the action. The maximum number of approvers is 10.
     *
     * You can specify principals by using any of the following formats:
     * * An AWS Identity and Access Management (IAM) user name
     * * An IAM user ARN
     * * An IAM role ARN
     * * An IAM assume role user ARN
     */
  readonly approvers: IStringListVariable;

  /**
     * (Optional) The Amazon Resource Name (ARN of an Amazon Simple Notification Service (Amazon SNS) topic for Automation approvals. When you specify an aws:approve step in a runbook, Automation sends a message to this topic letting principals know that they must either approve or reject an Automation step. The title of the Amazon SNS topic must be prefixed with "Automation".
     */
  readonly notificationArn?: IStringVariable;

  /**
     * (Optional) The information you want to include in the Amazon SNS topic when the approval request is sent. The maximum message length is 4096 characters.
     */
  readonly message?: IStringVariable;

  /**
     * (Optional) The minimum number of approvals required to resume the automation. If you don't specify a value, the system defaults to one. The value for this parameter must be a positive number. The value for this parameter can't exceed the number of approvers defined by the Approvers parameter.
     */
  readonly minRequiredApprovals?: INumberVariable;
}

/**
 * AutomationStep implementation for aws:approve
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-approve.html
 */
export class ApproveStep extends AutomationStep {
  readonly action = 'aws:approve';
  readonly approvers: IStringListVariable;
  readonly notificationArn?: IStringVariable;
  readonly message?: IStringVariable;
  readonly minRequiredApprovals?: INumberVariable;

  constructor(scope: Construct, id: string, props: ApproveStepProps) {
    super(scope, id, props);
    this.approvers = props.approvers;
    this.notificationArn = props.notificationArn;
    this.message = props.message;
    this.minRequiredApprovals = props.minRequiredApprovals;
  }

  public listOutputs(): Output[] {
    return [{
      outputType: DataTypeEnum.STRING,
      selector: '$.ApprovalStatus',
      name: 'ApprovalStatus',
    }, {
      outputType: DataTypeEnum.MAP_LIST,
      selector: '$.ApproverDecisions',
      name: 'ApproverDecisions',
    }];
  }

  public listInputs(): string[] {
    const inputs = [
      this.approvers,
      this.notificationArn,
      this.message,
      this.minRequiredApprovals,
    ];

    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): Record<string, any> {
    return super.prepareSsmEntry(pruneAndTransformRecord({
      Approvers: this.approvers,
      NotificationArn: this.notificationArn,
      Message: this.message,
      MinRequiredApprovals: this.minRequiredApprovals,
    }, x => x.print()));
  }

  /**
   * Override to mock the date the reviewer approved
   */
  protected provideDate(): Date {
    return new Date();
  }
}
