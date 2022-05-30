import { IPauseHook } from '../../interface/pause-hook';
import { PauseStep } from '../../parent-steps/automation/pause-step';
import { AutomationSimulationBase } from './automation-simulation-base';

/**
 * Properties for PauseStep
 */
export interface PauseSimulationProps {

  /**
   * (Optional) Pause hook to be called to pause the execution.
   * To mock this implementation either inject an instance of IPauseHook or use the provided MockPause class.
   * @default PauseHook instance. PauseHook may not work in exported JSII languages. Override interface as needed.
   */
  readonly pauseHook: IPauseHook;
}

/**
 * AutomationStep implementation for aws:pause
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-pause.html
 */
export class PauseSimulation extends AutomationSimulationBase {

  private props: PauseSimulationProps;
  readonly action: string = 'aws:pause';

  constructor(step: PauseStep, props: PauseSimulationProps) {
    super(step);
    this.props = props;
  }

  /**
     * May perform a real pause based on the params used during instance creation.
     */
  public executeStep(_inputs: { [name: string]: any }): { [name: string]: any } {
    this.props.pauseHook.pause();
    return {};
  }

}
