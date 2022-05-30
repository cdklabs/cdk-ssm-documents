import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { IStringVariable } from '../../interface/variables/string-variable';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * Props for ExecuteStateMachine step
 */
export interface ExecuteStateMachineStepProps extends AutomationStepProps {

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

/**
 * AutomationStep implementation of [aws:executeStateMachine](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeStateMachine.html)
 */
export class ExecuteStateMachineStep extends AutomationStep {
  readonly action: string = 'aws:executeStateMachine';
  readonly stateMachineArn: IStringVariable;
  readonly executionName?: IStringVariable;
  readonly input?: IStringVariable;

  constructor(scope: Construct, id: string, props: ExecuteStateMachineStepProps) {
    super(scope, id, props);
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

  public toSsmEntry(): Record<string, any> {
    return this.prepareSsmEntry(pruneAndTransformRecord({
      stateMachineArn: this.stateMachineArn,
      name: this.executionName,
      input: this.input,
    }, x => x.print()));
  }
}