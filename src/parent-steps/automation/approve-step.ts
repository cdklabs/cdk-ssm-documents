import { DataTypeEnum } from "../../domain/data-type";
import { Output } from "../../domain/output";
import { ApproveImpl, IApproveHook } from "../../interface/approve-hook";
import { INumberVariable } from "../../interface/variables/number-variable";
import { IStringListVariable } from "../../interface/variables/string-list-variable";
import { IStringVariable } from "../../interface/variables/string-variable";
import { AutomationStep, AutomationStepProps } from "../automation-step";
import { pruneAndTransformRecord } from "../../utils/prune-and-transform-record";
import {Construct} from "constructs";

/**
 * Properties for ApproveStep
 */
export interface ApproveStepProps extends AutomationStepProps {
    /**
     * (Optional) Approve hook to be called to pause the execution.
     * To mock this implementation either inject an instance of IApproveHook or use the provided MockApprove class.
     * @default ApproveHook instance. ApproveHook may not work in exported JSII languages. Override interface as needed.
     */
    readonly approveHook?: IApproveHook;

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

type OverallApprovalStatus = "Approved" | "Rejected";
type IndividualApprovalStatus = "Approve" | "Reject";

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
export class ApproveStep extends AutomationStep {
    readonly action = 'aws:approve';
    readonly approveHook: IApproveHook;
    readonly approvers: IStringListVariable;
    readonly notificationArn?: IStringVariable;
    readonly message?: IStringVariable;
    readonly minRequiredApprovals?: INumberVariable;

    constructor(scope: Construct, id: string, props: ApproveStepProps) {
        super(scope, id, props);
        this.approveHook = props.approveHook ?? new ApproveImpl();
        this.approvers = props.approvers;
        this.notificationArn = props.notificationArn;
        this.message = props.message;
        this.minRequiredApprovals = props.minRequiredApprovals;
    }

    public listOutputs(): Output[] {
        return [{
            outputType: DataTypeEnum.STRING,
            selector: "$.ApprovalStatus",
            name: "ApprovalStatus",
        },{
            outputType: DataTypeEnum.MAP_LIST,
            selector: "$.ApproverDecisions",
            name: "ApproverDecisions",
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

    /**
     * May perform a real approval ask based on the params used during instance creation.
     */
    public executeStep(inputs: Record<string, any>): Record<string, any> {
        const approvers = this.approvers.resolveToStringList(inputs);
        const requiredApprovals = this.minRequiredApprovals?.resolveToNumber(inputs) ?? 1;

        console.log("Approve: Requesting approval from approvers")
        const result = this.requestApproval(approvers, requiredApprovals);
        console.log("Approve: Done requesting approvals")
        
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
                ApprovalStatus: approval ? "Approve" : "Reject",
                ApprovalDecisionTime: this.provideDate(),
            });
        }
        
        return {
            ApprovalStatus: isApproved ? "Approved" : "Rejected",
            ApproverDecisions: decisions,
        };
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
