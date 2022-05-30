import { NonRetriableException } from '../../domain/non-retriable-exception';
import { AutomationStep } from '../../parent-steps/automation-step';
import { BranchStep } from '../../parent-steps/automation/branch-step';
import { AutomationSimulationBase } from './automation-simulation-base';

/**
 * AutomationStep implementation of aws:branch
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-branch.html
 */
export class BranchSimulation extends AutomationSimulationBase {

  readonly action: string = 'aws:branch';
  private branchStep: BranchStep;

  constructor(step: BranchStep) {
    super(step);
    this.branchStep = step;
  }

  /**
     * Overrides invoke because control flow of execution is different than standard steps.
     * Will traverse the choices until one evaluated to true; will skip to that choice.
     */
  public nextStep(inputs: Record<string, any>): AutomationStep | undefined {
    const matchedChoice = this.branchStep.choices.find(choice => choice.evaluate(inputs));
    if (matchedChoice == undefined) {
      console.log(`Did not find matching choice to branch to. Will proceed to ${this.getFallbackStep().name}`);
      return this.getFallbackStep();
    } else {
      console.log(`Identified a branch that matched evaluation. Will proceed to ${matchedChoice.jumpToStepName}`);
      return this.findStep(matchedChoice.jumpToStepName);
    }
  }

  private findStep(name: string): AutomationStep {
    const matchedSteps = this.branchStep.allStepsInExecution?.filter(step => step.name == name);
    if (matchedSteps?.length != 1) {
      throw new NonRetriableException('No branchStep found to match branchStep name: ' + name);
    }
    return matchedSteps[0];
  }

  private getFallbackStep(): AutomationStep {
    const fallbackStep = this.branchStep.defaultStepName ? this.findStep(this.branchStep.defaultStepName) : this.branchStep.nextStep;
    if (fallbackStep == undefined) {
      throw new NonRetriableException('No default or next branchStep provided for branch branchStep!');
    }
    return fallbackStep;
  }

  /**
     * noop. The logic performed in the branch branchStep happens in the invoke() function.
     */
  public executeStep(_inputs: { [name: string]: any }): { [name: string]: any } {
    // unused
    return {};
  }

}
