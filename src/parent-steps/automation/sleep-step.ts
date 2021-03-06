import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * Properties for sleep step.
 */
export interface SleepStepProps extends AutomationStepProps {

  /**
     * (Required) The amount of seconds to sleep for. May not exceed 604800.
     * This will be used in the SSM doc as well as how long to indicate sleep to the sleepHook.
     */
  readonly sleepSeconds: number;
}

/**
 * AutomationStep implemenation for aws:sleep
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-sleep.html
 */
export class SleepStep extends AutomationStep {

  readonly sleepSeconds: number;
  readonly action: string = 'aws:sleep';

  constructor(scope: Construct, id: string, props: SleepStepProps) {
    super(scope, id, props);
    this.sleepSeconds = props.sleepSeconds;
    if (this.sleepSeconds > 604800) {
      throw new Error('Sleep is greater than maximum of 604800. Seconds specified: ' + this.sleepSeconds);
    }
  }

  /**
     * No outputs emitted from Sleep step
     * @returns []
     */
  public listOutputs(): Output[] {
    return [];
  }

  /**
     * No inputs required for Sleep step
     * @returns []
     */
  public listInputs(): string[] {
    return [];
  }

  public toSsmEntry(): { [name: string]: any } {
    return super.prepareSsmEntry({ Duration: `PT${this.sleepSeconds}S` });
  }

}
