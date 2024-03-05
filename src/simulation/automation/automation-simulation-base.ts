import { AutomationStep } from '../../parent-steps/automation-step';

export abstract class AutomationSimulationBase {
  readonly step: AutomationStep;

  constructor(step: AutomationStep) {
    this.step = step;
  }

  abstract executeStep(inputs: Record<string, any>): Record<string, any>;
  nextStep(_inputs: Record<string, any>): AutomationStep | undefined {
    return this.step.nextStep;
  }
}
