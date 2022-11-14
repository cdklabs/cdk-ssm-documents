import { Stack } from 'aws-cdk-lib';
import { ResponseCode } from '../../../domain/response-code';
import { StackStatus } from '../../../domain/stack-status';
import { WaitForAndAssertResource, WaitForAndAssertResourceProps } from '../../../patterns/automation/wait-for-and-assert-resource';
import { SimulationProps } from '../../../simulation/simulation';
import { simulatePattern } from '../../../utils/simulate-pattern';
import {AwsService} from "../../../domain/aws-service";

/**
 * Wait for and assert on an EC2 resource value
 */
export function waitForAndAssertResource(props: WaitForAndAssertResourceProps, simulationProps: SimulationProps): void {
  const component = new WaitForAndAssertResource(new Stack(), 'waitForAndAssertResource', props);
  const result = simulatePattern(component, simulationProps, {});
  if (result.responseCode !== ResponseCode.SUCCESS) {
    throw new Error(`Wait and assert for resource failes for ${JSON.stringify(props)}: ${result.stackTrace}`);
  }
}

/**
 * Props for waitForAndAssertInstanceState
 */
interface WaitForAndAssertInstanceStateProps {
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
export function waitForAndAssertInstanceState(props: WaitForAndAssertInstanceStateProps, simulationProps: SimulationProps): void {
  const { waitForState, assertState, instanceIds } = props;
  waitForAndAssertResource({
    service: AwsService.EC2,
    pascalCaseApi: 'DescribeInstanceStatus',
    apiParams: {
      InstanceIds: instanceIds,
      IncludeAllInstances: true,
    },
    selector: '$.InstanceStatuses..InstanceState.Name',
    waitForValues: waitForState,
    desiredValues: [assertState],
  }, simulationProps);
}

/**
 * Props for waitForAndAssertInstanceStatus
 */
interface WaitForAndAssertInstanceStatusProps {
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
export function waitForAndAssertInstanceStatus(props: WaitForAndAssertInstanceStatusProps, simulationProps: SimulationProps): void {
  const { waitForStatus, assertStatus, instanceIds } = props;
  waitForAndAssertResource({
    service: AwsService.EC2,
    pascalCaseApi: 'DescribeInstanceStatus',
    apiParams: {
      InstanceIds: instanceIds,
      IncludeAllInstances: true,
    },
    selector: '$.InstanceStatuses..InstanceStatus.Status',
    waitForValues: waitForStatus,
    desiredValues: [assertStatus],
  }, simulationProps);
}

/**
 * Props for waitForAndAssertImageAvailable
 */
interface WaitForAndAssertImageStateProps {
  /**
     * Image ID to wait for and assert on
     */
  imageId: string;
}

/**
 * Wait for and assert on an EC2 image for available state
 */
export function waitForAndAssertImageAvailable(props: WaitForAndAssertImageStateProps, simulationProps: SimulationProps): void {
  const { imageId } = props;
  waitForAndAssertResource({
    service: AwsService.EC2,
    pascalCaseApi: 'DescribeImages',
    selector: '$.Images..State',
    apiParams: {
      ImageIds: [imageId],
    },
    waitForValues: ['available', 'invalid', 'deregistered', 'transient', 'failed', 'error'],
    desiredValues: ['available'],
  }, simulationProps);
}

/**
 * Props for waitForAndAssertStackStatus
 */
interface WaitForAndAssertStackStatusProps {
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
export function waitForAndAssertStackStatus(props: WaitForAndAssertStackStatusProps, simulationProps: SimulationProps): void {
  const { waitForStatus, assertStatus, stackName } = props;
  waitForAndAssertResource({
    service: AwsService.CLOUD_FORMATION,
    pascalCaseApi: 'DescribeStacks',
    apiParams: {
      StackName: stackName,
    },
    selector: '$.Stacks[0].StackStatus',
    waitForValues: waitForStatus.map(x => StackStatus[x]),
    desiredValues: [StackStatus[assertStatus]],
  }, simulationProps);
}