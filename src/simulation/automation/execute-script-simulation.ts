import { ExecuteScriptStep, ScriptLanguage } from '../../parent-steps/automation/execute-script-step';
import { PythonScriptHandler } from '../../script/python-script-handler';
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
    switch (this.executeScriptStep.language) {
      case ScriptLanguage.PYTHON:
        const pyHandler = new PythonScriptHandler();
        return pyHandler.run(this.executeScriptStep.fullPathToCode, this.executeScriptStep.handlerName, inputs);
      default:
        throw new Error(`Language ${this.executeScriptStep.language} not supported.`);
    }
  }

}