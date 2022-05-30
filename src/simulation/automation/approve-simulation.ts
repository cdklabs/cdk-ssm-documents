import { IApproveHook } from '../../interface/approve-hook';
import { ApproveStep } from '../../parent-steps/automation/approve-step';
import { AutomationSimulationBase } from './automation-simulation-base';

/**
 * Properties for ApproveStep
 */
export interface ApproveSimulationProps {
  /**
     * (Optional) Approve hook to be called to pause the execution.
     * To mock this implementation either inject an instance of IApproveHook or use the provided MockApprove class.
     * @default ApproveHook instance. ApproveHook may not work in exported JSII languages. Override interface as needed.
     */
  readonly approveHook: IApproveHook;
}

type OverallApprovalStatus = 'Approved' | 'Rejected';
type IndividualApprovalStatus = 'Approve' | 'Reject';

interface Approval {
  Approver: string;
  ApprovalStatus: IndividualApprovalStatus;
  ApprovalDecisionTime: Date;
}

interface ApproveStepOutput {
  ApprovalStatus: OverallApprovalStatus;
  ApproverDecisions: Approval[];
}

/**
 * AutomationStep implementation for aws:approve
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-approve.html
 */
export class ApproveSimulation extends AutomationSimulationBase {
  readonly action = 'aws:approve';
  readonly approveHook: IApproveHook;
  private approveStep: ApproveStep;

  constructor(step: ApproveStep, props: ApproveSimulationProps) {
    super(step);
    this.approveStep = step;
    this.approveHook = props.approveHook;
  }

  /**
     * May perform a real approval ask based on the params used during instance creation.
     */
  public executeStep(inputs: Record<string, any>): Record<string, any> {
    const approvers = this.approveStep.approvers.resolveToStringList(inputs);
    const requiredApprovals = this.approveStep.minRequiredApprovals?.resolveToNumber(inputs) ?? 1;

    console.log('Approve: Requesting approval from approvers');
    const result = this.requestApproval(approvers, requiredApprovals);
    console.log('Approve: Done requesting approvals');

    return result;
  }

  private requestApproval(approvers: string[], requiredApprovals: number): ApproveStepOutput {
    let isApproved = true;
    const decisions: Approval[] = [];
    for (const i of [...Array(requiredApprovals).keys()]) {
      const approval = this.approveHook.ask(approvers[i]);
      isApproved = isApproved && approval;
      decisions.push({
        Approver: approvers[i],
        ApprovalStatus: approval ? 'Approve' : 'Reject',
        ApprovalDecisionTime: this.provideDate(),
      });
    }

    return {
      ApprovalStatus: isApproved ? 'Approved' : 'Rejected',
      ApproverDecisions: decisions,
    };
  }

  /**
     * Override to mock the date the reviewer approved
     */
  protected provideDate(): Date {
    return new Date();
  }
}
