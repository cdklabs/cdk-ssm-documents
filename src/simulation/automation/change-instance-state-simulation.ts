import { Stack } from 'aws-cdk-lib';
import { ResponseCode } from '../../domain/response-code';
import { IAwsInvoker } from '../../interface/aws-invoker';
import { NullableStringList } from '../../interface/variables/string-list-variable';
import { IGenericVariable } from '../../interface/variables/variable';
import { AutomationStepProps } from '../../parent-steps/automation-step';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { ChangeInstanceStateStep } from '../../parent-steps/automation/change-instance-state-step';
import { waitForAndAssertInstanceState, waitForAndAssertInstanceStatus } from '../../parent-steps/automation/sub-steps/wait-for-and-assert';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStepSimulation } from '../automation-step-simulation';
import { AutomationSimulationBase } from './automation-simulation-base';
import { AwsInvocationSimulationProps } from './aws-api-simulation';
import {AwsService} from "../../domain/aws-service";

/**
 * Properties for ChangeInstanceStateStep
 */
export interface ChangeInstanceStateSimulationProps extends AutomationStepProps {
  /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
  readonly awsInvoker: IAwsInvoker;

}

/**
 * AutomationStep implemenation for aws:changeInstanceState
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-changestate.html
 */
export class ChangeInstanceStateSimulation extends AutomationSimulationBase {
  readonly action: string = 'aws:changeInstanceState';
  private changeInstanceStateStep: ChangeInstanceStateStep;
  private props: AwsInvocationSimulationProps;

  constructor(step: ChangeInstanceStateStep, props: AwsInvocationSimulationProps) {
    super(step);
    this.changeInstanceStateStep = step;
    this.props = props;

  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    const checkStateOnly = this.changeInstanceStateStep.checkStateOnly?.resolveToBoolean(inputs) ?? false;
    const desiredState = this.changeInstanceStateStep.desiredState.resolveToString(inputs);

    if (!checkStateOnly) {
      console.log(`ChangeInstanceState: Setting instances state to ${desiredState}`);
      this.changeInstanceState(desiredState, inputs);
    }
    console.log(`ChangeInstanceState: Waiting for instances to be ${desiredState}`);
    this.waitForInstanceState(desiredState, inputs);
    console.log(`ChangeInstanceState: Instances are now ${desiredState}`);

    return {};
  }

  private changeInstanceState(desiredState: string, inputs: Record<string, any>): void {
    switch (desiredState) {
      case 'running':
        return this.changeInstanceStateToRunning(inputs);
      case 'stopped':
        return this.changeInstanceStateToStopped(inputs);
      case 'terminated':
        return this.changeInstanceStateToTerminated(inputs);
      default:
        throw new Error(`Desired state: ${desiredState} is not an end-state to change to.`);
    }
  }

  private changeInstanceStateToRunning(inputs: Record<string, any>): void {
    this.changeInstanceStateCall('StartInstances', {
      AdditionalInfo: this.changeInstanceStateStep.additionalInfo,
    }, inputs);
  }

  private changeInstanceStateToStopped(inputs: Record<string, any>): void {
    this.changeInstanceStateCall('StopInstances', {
      Force: this.changeInstanceStateStep.force,
    }, inputs);
  }

  private changeInstanceStateToTerminated(inputs: Record<string, any>) {
    this.changeInstanceStateCall('TerminateInstances', {}, inputs);
  }

  private changeInstanceStateCall(endpoint: string, moreParams: Record<string, IGenericVariable | undefined>, inputs: Record<string, any>): void {
    const apiParams = pruneAndTransformRecord({
      InstanceIds: this.changeInstanceStateStep.instanceIds,
      ...moreParams,
    }, x => x.resolve(inputs));

    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'changeInstanceState', {
      service: AwsService.EC2,
      pascalCaseApi: endpoint,
      apiParams,
      outputs: [],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Change instance state failed for ${apiParams.InstanceIds}: ${result.stackTrace}`);
    }
  }

  private waitForInstanceState(desiredState: string, inputs: Record<string, any>): void {
    const instanceIds = this.changeInstanceStateStep.instanceIds.resolveToStringList(inputs);
    switch (desiredState) {
      case 'running':
        return this.waitForStateRunningAndStatusOk(instanceIds);
      case 'stopped':
        return this.waitForStateStopped(instanceIds);
      case 'terminated':
        return this.waitForStateTerminated(instanceIds);
      default:
        throw new Error(`Desired state: ${desiredState} is not an end-state to wait for.`);
    }
  }

  private waitForStateRunningAndStatusOk(instanceIds: NullableStringList): void {
    waitForAndAssertInstanceState({
      waitForState: ['shutting-down', 'terminated', 'running'],
      assertState: 'running',
      instanceIds: instanceIds,
    }, this.props);

    // For running, we also check if the state is 'ok'
    waitForAndAssertInstanceStatus({
      waitForStatus: ['ok', 'impaired', 'insufficient-data', 'not-applicable'],
      assertStatus: 'ok',
      instanceIds: instanceIds,
    }, this.props);
  }

  private waitForStateStopped(instanceIds: NullableStringList): void {
    waitForAndAssertInstanceState({
      waitForState: ['shutting-down', 'terminated', 'stopped'],
      assertState: 'stopped',
      instanceIds: instanceIds,
    }, this.props);
  }

  private waitForStateTerminated(instanceIds: NullableStringList): void {
    waitForAndAssertInstanceState({
      waitForState: ['terminated'],
      assertState: 'terminated',
      instanceIds: instanceIds,
    }, this.props);
  }

}