import { AutomationStep } from '../parent-steps/automation-step';

/**
 * Class to reference AutomationSteps.
 * The class allows steps to be referenced by the Step object or by the step name.
 */
export class StepRef {
  /**
   * Static constructor for creating a reference to a step from an AutomationStep object.
   */
  static fromObject(step: AutomationStep): StepRef {
    return new StepRef(step.name);
  }

  /**
   * Static constructor for creating a reference to a step from a step name.
   */
  static fromName(stepName: string): StepRef {
    return new StepRef(stepName);
  }
  readonly stepName: string;
  constructor(stepName: string) {
    this.stepName = stepName;
  }

  /**
   * Resolve to an AutomationStep object. Provide all the steps in the execution to find the associated step.
   */
  resolve(allStepsInExecution: AutomationStep[]): AutomationStep {
    const stepObj = allStepsInExecution.filter(s => s.name == this.stepName);
    if (stepObj == undefined || stepObj.length != 1) {
      throw new Error('Cannot find step from reference: ' + this.stepName);
    }
    return stepObj[0];
  }
}
