import { ISleepHook } from '../../interface/sleep-hook';
import { SleepStep } from '../../parent-steps/automation/sleep-step';
import { AutomationSimulationBase } from './automation-simulation-base';

/**
 * Properties for sleep step.
 */
export interface SleepSimulationProps {
  /**
     * (Optional) Whether to really perform a pause of the runtime.
     * To override sleep behavior, inject an ISleepHook impl or use the provided MockSleep class.
     * @default SleeperImpl
     */
  readonly sleepHook: ISleepHook;
}

/**
 * AutomationStep implemenation for aws:sleep
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-sleep.html
 */
export class SleepSimulation extends AutomationSimulationBase {

  private sleepStep: SleepStep;
  private props: SleepSimulationProps;
  readonly action: string = 'aws:sleep';

  constructor(step: SleepStep, props: SleepSimulationProps) {
    super(step);
    this.sleepStep = step;
    this.props = props;
  }

  public executeStep(_inputs: { [name: string]: any }): { [name: string]: any } {
    this.props.sleepHook.sleep(1000 * this.sleepStep.sleepSeconds);
    return {};
  }

}
