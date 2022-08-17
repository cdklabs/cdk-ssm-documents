import { ExecuteScriptStep } from '../../parent-steps/automation/execute-script-step';
import { AutomationSimulationBase } from './automation-simulation-base';

/**
 * AutomationStep implementation for aws:executeScript
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeScript.html
 */
export class ExecuteScriptSimulation extends AutomationSimulationBase {

  readonly action: string = 'aws:executeScript';
  readonly executeScriptStep: ExecuteScriptStep;
  constructor(step: ExecuteScriptStep) {
    super(step);
    this.executeScriptStep = step;
  }

  /**
   * Runs the simulation. Nests returned object into a "Payload" key to mimic SSM behavior.
   * Switch by language and execute code based on specified language.
   */
  public executeStep(inputs: { [name: string]: any }): { [name: string]: any } {
    const inputValues = Object.fromEntries(Object.entries(this.executeScriptStep.inputs)
      .map(([k, v]) => [k, v.resolve(inputs)]));
    return this.executeScriptStep.language.simulate(this.executeScriptStep.code, inputValues);
  }

}
