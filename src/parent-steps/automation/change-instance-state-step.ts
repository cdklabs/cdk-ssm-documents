import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AwsApiStep, IAwsInvoker, ReflectiveAwsInvoker, ResponseCode } from '../..';
import { Output } from '../../domain/output';
import { IBooleanVariable } from '../../interface/variables/boolean-variable';
import { IEnumVariable, HardCodedEnum, EnumVariable } from '../../interface/variables/enum-variable';
import { IStringListVariable, NullableStringList } from '../../interface/variables/string-list-variable';
import { IStringVariable } from '../../interface/variables/string-variable';
import { IGenericVariable } from '../../interface/variables/variable';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStepProps, AutomationStep } from '../automation-step';
import { waitForAndAssertInstanceState, waitForAndAssertInstanceStatus } from './sub-steps/wait-for-and-assert';

/**
 * Properties for ChangeInstanceStateStep
 */
export interface ChangeInstanceStateStepProps extends AutomationStepProps {
  /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
  readonly awsInvoker?: IAwsInvoker;

  /**
     * The IDs of the instances.
     */
  readonly instanceIds: IStringListVariable;

  /**
     * The desired state. When set to running, this action waits for the Amazon EC2 state to be Running, the Instance Status to be OK,
     * and the System Status to be OK before completing.
     */
  readonly desiredState: IEnumVariable<typeof DesiredState>;

  /**
     * (Optional) If false, sets the instance state to the desired state. If true, asserts the desired state using polling.
     * @default false
     */
  readonly checkStateOnly?: IBooleanVariable;

  /**
     * (Optional) If set, forces the instances to stop. The instances don't have an opportunity to flush file system caches or file system metadata.
     * If you use this option, you must perform file system check and repair procedures.
     * This option isn't recommended for EC2 instances for Windows Server.
     */
  readonly force?: IBooleanVariable;

  /**
     * (Optional) Reserved.
     */
  readonly additionalInfo?: IStringVariable;
}

export enum DesiredState {
  RUNNING = 'running',
  STOPPED = 'stopped',
  TERMINATED = 'terminated',
}

/**
 * A desired state variable reference.
 */
export class DesiredStateVariable extends EnumVariable<typeof DesiredState> {
  constructor(reference: string) {
    super(reference, DesiredState);
  }
}

/**
 * A hard coded desired state.
 */
export class HardCodedDesiredState extends HardCodedEnum<typeof DesiredState> {
  constructor(value: DesiredState) {
    super(value, DesiredState);
  }
}

/**
 * AutomationStep implemenation for aws:changeInstanceState
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-changestate.html
 */
export class ChangeInstanceStateStep extends AutomationStep {
  readonly action: string = 'aws:changeInstanceState';
  readonly awsInvoker: IAwsInvoker;
  readonly instanceIds: IStringListVariable;
  readonly desiredState: IEnumVariable<typeof DesiredState>;
  readonly checkStateOnly?: IBooleanVariable;
  readonly force?: IBooleanVariable;
  readonly additionalInfo?: IStringVariable;

  constructor(scope: Construct, id: string, props: ChangeInstanceStateStepProps) {
    super(scope, id, props);
    this.awsInvoker = props.awsInvoker ?? new ReflectiveAwsInvoker();
    this.instanceIds = props.instanceIds;
    this.desiredState = props.desiredState;
    this.checkStateOnly = props.checkStateOnly;
    this.force = props.force;
    this.additionalInfo = props.additionalInfo;
  }

  /**
     * This step has no outputs.
     */
  public listOutputs(): Output[] {
    return [];
  }

  public listInputs(): string[] {
    const inputs = [
      this.instanceIds,
      this.desiredState,
      this.checkStateOnly,
      this.force,
      this.additionalInfo,
    ];

    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    const checkStateOnly = this.checkStateOnly?.resolveToBoolean(inputs) ?? false;
    const desiredState = this.desiredState.resolveToEnum(inputs);

    if (!checkStateOnly) {
      console.log(`ChangeInstanceState: Setting instances state to ${desiredState}`);
      this.changeInstanceState(desiredState, inputs);
    }
    console.log(`ChangeInstanceState: Waiting for instances to be ${desiredState}`);
    this.waitForInstanceState(desiredState, inputs);
    console.log(`ChangeInstanceState: Instances are now ${desiredState}`);

    return {};
  }

  private changeInstanceState(desiredState: DesiredState, inputs: Record<string, any>): void {
    switch (desiredState) {
      case DesiredState.RUNNING:
        return this.changeInstanceStateToRunning(inputs);
      case DesiredState.STOPPED:
        return this.changeInstanceStateToStopped(inputs);
      case DesiredState.TERMINATED:
        return this.changeInstanceStateToTerminated(inputs);
      default:
        throw new Error(`Desired state: ${desiredState} is not an end-state to change to.`);
    }
  }

  private changeInstanceStateToRunning(inputs: Record<string, any>): void {
    this.changeInstanceStateCall('StartInstances', {
      AdditionalInfo: this.additionalInfo,
    }, inputs);
  }

  private changeInstanceStateToStopped(inputs: Record<string, any>): void {
    this.changeInstanceStateCall('StopInstances', {
      Force: this.force,
    }, inputs);
  }

  private changeInstanceStateToTerminated(inputs: Record<string, any>) {
    this.changeInstanceStateCall('TerminateInstances', {}, inputs);
  }

  private changeInstanceStateCall(endpoint: string, moreParams: Record<string, IGenericVariable | undefined>, inputs: Record<string, any>): void {
    const apiParams = pruneAndTransformRecord({
      InstanceIds: this.instanceIds,
      ...moreParams,
    }, x => x.resolve(inputs));

    const result = new AwsApiStep(new Stack(), 'changeInstanceState', {
      service: 'EC2',
      pascalCaseApi: endpoint,
      apiParams,
      outputs: [],
      awsInvoker: this.awsInvoker,
    }).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Change instance state failed for ${apiParams.InstanceIds}: ${result.stackTrace}`);
    }
  }

  private waitForInstanceState(desiredState: DesiredState, inputs: Record<string, any>): void {
    const instanceIds = this.instanceIds.resolveToStringList(inputs);
    switch (desiredState) {
      case DesiredState.RUNNING:
        return this.waitForStateRunningAndStatusOk(instanceIds);
      case DesiredState.STOPPED:
        return this.waitForStateStopped(instanceIds);
      case DesiredState.TERMINATED:
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
      awsInvoker: this.awsInvoker,
    });

    // For running, we also check if the state is 'ok'
    waitForAndAssertInstanceStatus({
      waitForStatus: ['ok', 'impaired', 'insufficient-data', 'not-applicable'],
      assertStatus: 'ok',
      instanceIds: instanceIds,
      awsInvoker: this.awsInvoker,
    });
  }

  private waitForStateStopped(instanceIds: NullableStringList): void {
    waitForAndAssertInstanceState({
      waitForState: ['shutting-down', 'terminated', 'stopped'],
      assertState: 'stopped',
      instanceIds: instanceIds,
      awsInvoker: this.awsInvoker,
    });
  }

  private waitForStateTerminated(instanceIds: NullableStringList): void {
    waitForAndAssertInstanceState({
      waitForState: ['terminated'],
      assertState: 'terminated',
      instanceIds: instanceIds,
      awsInvoker: this.awsInvoker,
    });
  }

  public toSsmEntry(): Record<string, any> {
    const entryMap: Record<string, IGenericVariable | undefined> = {
      InstanceIds: this.instanceIds,
      DesiredState: this.desiredState,
      CheckStateOnly: this.checkStateOnly,
      Force: this.force,
      AdditionalInfo: this.additionalInfo,
    };
    const entries = pruneAndTransformRecord(entryMap, x => x.print());
    return super.prepareSsmEntry(entries);
  }
}