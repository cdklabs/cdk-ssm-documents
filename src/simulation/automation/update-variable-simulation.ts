import { UpdateVariableStep } from '../../parent-steps/automation/update-variable';
import { AutomationSimulationBase } from './automation-simulation-base';

/**
 * AutomationStep implementation for aws:update-variable
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-update-variable.html
 */
export class UpdateVariableSimulation extends AutomationSimulationBase {
  readonly updateVariableStep: UpdateVariableStep;
  readonly action: string = 'aws:update-variable';

  constructor(step: UpdateVariableStep) {
    super(step);
    this.updateVariableStep = step;
  }

  public executeStep(_inputs: { [name: string]: any }): { [name: string]: any } {
    if (!_inputs.hasOwnProperty(this.updateVariableStep.variableName)) {
      throw new Error(`Variable ${this.updateVariableStep.variableName} is not defined in the document`);
    }

    _inputs[this.updateVariableStep.variableName] = this.updateVariableStep.variableValue.resolve(_inputs);

    return {};
  }

}
