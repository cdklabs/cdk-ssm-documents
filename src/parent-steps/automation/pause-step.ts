import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * AutomationStep implementation for aws:pause
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-pause.html
 */
export class PauseStep extends AutomationStep {

  readonly action: string = 'aws:pause';

  constructor(scope: Construct, id: string, props: AutomationStepProps) {
    super(scope, id, props);
  }

  /**
   * No outputs emitted from Pause step
   * @returns []
   */
  public listOutputs(): Output[] {
    return [];
  }

  /**
   * No inputs required for Pause step
   * @returns []
   */
  public listInputs(): string[] {
    return [];
  }

  public toSsmEntry(): { [name: string]: any } {
    return super.prepareSsmEntry({});
  }

}
