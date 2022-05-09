import { ResponseCode, StackStatus } from "../../..";
import { IAwsInvoker } from "../../../interface/aws-invoker";
import { WaitForAndAssertResource, WaitForAndAssertResourceProps } from "../../../patterns/automation/wait-for-and-assert-resource";
import { simulatePattern } from "../../../utils/simulate-pattern";

/**
 * Prop for something using AWS APIs
 */
interface AwsInvokerProp {
    /**
     * Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     */
    awsInvoker: IAwsInvoker;
}

/**
 * Wait for and assert on an EC2 resource value
 */
export function waitForAndAssertResource(props: WaitForAndAssertResourceProps): void {    
    const result = simulatePattern((scope) => {
        return new WaitForAndAssertResource(scope, "waitForAndAssertResource", props);
    }, {});
    if (result.responseCode !== ResponseCode.SUCCESS) {
        throw new Error(`Wait and assert for resource failes for ${JSON.stringify(props)}: ${result.stackTrace}`);
    }
}

/**
 * Props for waitForAndAssertInstanceState
 */
interface WaitForAndAssertInstanceStateProps extends AwsInvokerProp {
    /**
     * States to wait for
     */
    waitForState: string[];

    /**
     * State to assert
     */
    assertState: string;
    
    /**
     * Instance IDs to wait for and assert on
     */
    instanceIds: string[];
}

/**
 * Wait for and assert on an EC2 instance state
 */
export function waitForAndAssertInstanceState(props: WaitForAndAssertInstanceStateProps): void {
    const {waitForState, assertState, instanceIds, awsInvoker} = props;
    waitForAndAssertResource({
        service: "EC2",
        pascalCaseApi: "DescribeInstanceStatus",
        apiParams: {
            InstanceIds: instanceIds,
            IncludeAllInstances: true,
        },
        selector: "$.InstanceStatuses..InstanceState.Name",
        waitForValues: waitForState,
        desiredValues: [assertState],
        awsInvoker: awsInvoker,
    });
}

/**
 * Props for waitForAndAssertInstanceStatus
 */
interface WaitForAndAssertInstanceStatusProps extends AwsInvokerProp {
    /**
     * Statuses to wait for
     */
    waitForStatus: string[];

    /**
     * Status to assert
     */
    assertStatus: string;

    /**
     * Instance IDs to wait for and assert on
     */
    instanceIds: string[];
}

/**
 * Wait for and assert on an EC2 instance status
 */
export function waitForAndAssertInstanceStatus(props: WaitForAndAssertInstanceStatusProps): void {
    const {waitForStatus, assertStatus,instanceIds, awsInvoker} = props;
    waitForAndAssertResource({
        service: "EC2",
        pascalCaseApi: "DescribeInstanceStatus",
        apiParams: {
            InstanceIds: instanceIds,
            IncludeAllInstances: true,
        },
        selector: "$.InstanceStatuses..InstanceStatus.Status",
        waitForValues: waitForStatus,
        desiredValues: [assertStatus],
        awsInvoker: awsInvoker,
    });
}

/**
 * Props for waitForAndAssertImageAvailable
 */
interface WaitForAndAssertImageStateProps extends AwsInvokerProp {
    /**
     * Image ID to wait for and assert on
     */
    imageId: string;
}

/**
 * Wait for and assert on an EC2 image for available state
 */
export function waitForAndAssertImageAvailable(props: WaitForAndAssertImageStateProps): void {
    const {imageId, awsInvoker} = props;
    waitForAndAssertResource({
        service: "EC2",
        pascalCaseApi: "DescribeImages",
        selector: "$.Images..State",
        apiParams: {
            ImageIds: [imageId],
        },
        waitForValues: ['available', 'invalid', "deregistered", 'transient', "failed", "error"],
        desiredValues: ["available"],
        awsInvoker: awsInvoker,
    });
}

/**
 * Props for waitForAndAssertStackStatus
 */
 interface WaitForAndAssertStackStatusProps extends AwsInvokerProp {
    /**
     * Statuses to wait for
     */
    waitForStatus: StackStatus[];

    /**
     * Status to assert
     */
    assertStatus: StackStatus;

    /**
     * Stack name to wait for and assert status of
     */
    stackName: string;
}
 
/**
 * Wait for and assert on a stack's status
 */
export function waitForAndAssertStackStatus(props: WaitForAndAssertStackStatusProps): void {
    const {waitForStatus, assertStatus, stackName, awsInvoker} = props;
    waitForAndAssertResource({
        service: "CloudFormation",
        pascalCaseApi: "DescribeStacks",
        apiParams: {
            StackName: stackName,
        },
        selector: "$.Stacks[0].StackStatus",
        awsInvoker: awsInvoker,
        waitForValues: waitForStatus.map(x => StackStatus[x]),
        desiredValues: [StackStatus[assertStatus]],
    });
}