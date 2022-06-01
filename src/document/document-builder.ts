import { AutomationStep } from '../parent-steps/automation-step';
import { CommandStep } from '../parent-steps/command-step';

export class AutomationDocumentBuilder {
  readonly steps: AutomationStep[] = [];

  addStep(step: AutomationStep): void {
    this.steps.push(step);
  }
}

export class CommandDocumentBuilder {
  readonly steps: CommandStep[] = [];

  addStep(step: CommandStep): void {
    this.steps.push(step);
  }
}