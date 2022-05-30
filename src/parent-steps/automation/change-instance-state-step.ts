import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { IBooleanVariable } from '../../interface/variables/boolean-variable';
import { IEnumVariable, HardCodedEnum, EnumVariable } from '../../interface/variables/enum-variable';
import { IStringListVariable } from '../../interface/variables/string-list-variable';
import { IStringVariable } from '../../interface/variables/string-variable';
import { IGenericVariable } from '../../interface/variables/variable';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStepProps, AutomationStep } from '../automation-step';

/**
 * Properties for ChangeInstanceStateStep
 */
export interface ChangeInstanceStateStepProps extends AutomationStepProps {

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
  readonly instanceIds: IStringListVariable;
  readonly desiredState: IEnumVariable<typeof DesiredState>;
  readonly checkStateOnly?: IBooleanVariable;
  readonly force?: IBooleanVariable;
  readonly additionalInfo?: IStringVariable;

  constructor(scope: Construct, id: string, props: ChangeInstanceStateStepProps) {
    super(scope, id, props);
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