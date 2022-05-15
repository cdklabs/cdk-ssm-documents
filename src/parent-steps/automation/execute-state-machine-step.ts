import {AutomationStep, AutomationStepProps} from "../automation-step";
import {Output} from "../../domain/output";
import {IAwsInvoker, ReflectiveAwsInvoker} from "../../interface/aws-invoker";
import { Stack } from "aws-cdk-lib";
import { Construct } from "constructs";
import { pruneAndTransformRecord } from "../../utils/prune-and-transform-record";
import { IStringVariable } from "../../interface/variables/string-variable";
import { AwsApiStep } from "./aws-api-step";
import { DataTypeEnum } from "../../domain/data-type";
import { ResponseCode } from "../../domain/response-code";
import { waitForAndAssertResource } from "./sub-steps/wait-for-and-assert";

/**
 * Props for ExecuteStateMachine step
 */
export interface ExecuteStateMachineStepProps extends AutomationStepProps {
    /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
    readonly awsInvoker?: IAwsInvoker;

    /**
     * The Amazon Resource Name (ARN) of the Step Functions state machine.
     */
    readonly stateMachineArn: IStringVariable;

    /**
     * (Optional) The name of the execution.
     */
    readonly executionName?: IStringVariable;

    /**
     * (Optional) A string that contains the JSON input data for the execution.
     */
    readonly input?: IStringVariable;
}

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
export class ExecuteStateMachineStep extends AutomationStep {
    readonly action: string = 'aws:executeStateMachine';
    readonly awsInvoker: IAwsInvoker;
    readonly stateMachineArn: IStringVariable;
    readonly executionName?: IStringVariable;
    readonly input?: IStringVariable;

    constructor(scope: Construct, id: string, props: ExecuteStateMachineStepProps) {
        super(scope, id, props);
        this.awsInvoker = props.awsInvoker ?? new ReflectiveAwsInvoker();
        this.stateMachineArn = props.stateMachineArn;
        this.executionName = props.executionName;
        this.input = props.input;
    }

    /**
     * No outputs emitted from Delete Stack step
     * @returns []
     */
    public listOutputs(): Output[] {
        return [];
    }

    public listInputs(): string[] {
        const inputs = [
            this.stateMachineArn,
            this.executionName,
            this.input,
        ];

        return inputs.flatMap(i => i?.requiredInputs() ?? []);
    }

    public executeStep(inputs: Record<string, any>): Record<string, any> {
        const stateMachineArn = this.stateMachineArn.resolveToString(inputs);
        console.log(`ExecuteStateMachine: Invoke start execution of ${stateMachineArn}`);
        const executionId = this.startExecution(inputs);
        console.log(`ExecuteStateMachine: Started execution ${executionId}`);
        this.waitForExecution(executionId);
        console.log(`ExecuteStateMachine: Execution ${executionId} is complete`);
        return {};
    }

    private startExecution(inputs: Record<string, any>): string {
        const apiParams = pruneAndTransformRecord({
            stateMachineArn: this.stateMachineArn,
            name: this.executionName,
            input: this.input,
        }, x => x.resolve(inputs));

        const result = new AwsApiStep(new Stack(), "startExecution", {
            service: "StepFunctions",
            pascalCaseApi: "StartExecution",
            apiParams: apiParams,
            outputs: [{
                outputType: DataTypeEnum.STRING,
                selector: "$.executionArn",
                name: "ExecutionId",
            }],
            awsInvoker: this.awsInvoker,
        }).invoke({});
        if (result.responseCode !== ResponseCode.SUCCESS) {
            throw new Error(`Failed to start execution ${apiParams.stateMachineArn}: ${result.stackTrace}`);
        }
        return result.outputs?.["startExecution.ExecutionId"];
    }
    
    private waitForExecution(executionId: string) {
        waitForAndAssertResource({
            service: "StepFunctions",
            pascalCaseApi: "DescribeExecution",
            apiParams: {
                executionArn: executionId,
            },
            selector: "$.status",
            awsInvoker: this.awsInvoker,
            waitForValues: [
                ExecuteStateMachineStatus.ABORTED,
                ExecuteStateMachineStatus.FAILED,
                ExecuteStateMachineStatus.TIMED_OUT,
                ExecuteStateMachineStatus.SUCCEEDED,
            ].map(x => ExecuteStateMachineStatus[x]),
            desiredValues: [ExecuteStateMachineStatus[ExecuteStateMachineStatus.SUCCEEDED]],
        });
    }

    public toSsmEntry(): Record<string, any> {
        return this.prepareSsmEntry(pruneAndTransformRecord({
            stateMachineArn: this.stateMachineArn,
            name: this.executionName,
            input: this.input,
        }, x => x.print()));
    }
}