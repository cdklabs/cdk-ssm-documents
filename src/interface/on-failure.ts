import { AutomationStep } from '../parent-steps/automation-step';

/**
 * Steps can specify an action to take onFailure.
 * See docs here: https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-actions.html#failProp
 * The supported actions are abort (default), continue, or invoking a specific step.
 * This behavior can be adopted by using the static methods available on OnFailure.
 */
export abstract class OnFailure {
  /**
   * Invoke a specific step. Provide the step object to execute for the onFailure action.
   * If you don't have a handle to the step object, use the invokeStepByName function.
   */
  public static invokeStep(step: AutomationStep): OnCancel {
    return new StepFallback(step, false);
  }

  /**
   * Invoke a specific step by the step name for the OnFailure action.
   */
  public static invokeStepByName(stepName: string): OnCancel {
    return new StepNameFallback(stepName, false);
  }

  /**
   * To abort execution if a failure occurs during execution of the current step.
   * (This is the default behavior.)
   */
  public static abort(): OnCancel {
    return new Abort();
  }

  /**
   * To continue execution of the subsequent step if a failure occurs during execution of the current step.
   */
  public static continue(): OnFailure {
    return new Continue();
  }
  abstract stepToInvoke(currentStep: AutomationStep): string;
  abstract toSsmValue(): string;
}

/**
 * Steps can specify an action to take onCancel.
 * See docs here: https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-actions.html#canProp
 * The supported actions are abort (default) or invoking a specific step.
 * This behavior can be adopted by using the static methods available on OnCancel.
 */
export abstract class OnCancel extends OnFailure {
  /**
   * Invoke a specific step. Provide the step object to execute for the onCancel action.
   * If you don't have a handle to the step object, use the invokeStepByName function.
   * Not all action types may be invoked during cancellation. See documentation referenced on this class.
   */
  public static invokeStep(step: AutomationStep): OnCancel {
    return new StepFallback(step, true);
  }

  /**
   * Invoke a specific step by the step name for the OnCancel action.
   * Not all action types may be invoked during cancellation. See documentation referenced on this class.
   */
  public static invokeStepByName(stepName: string): OnCancel {
    return new StepNameFallback(stepName, true);
  }

  /**
   * To abort execution if a cancellation occurs during execution of the current step.
   * (This is the default behavior.)
   */
  public static abort(): OnCancel {
    return new Abort();
  }
}

export class StepFallback extends OnCancel {
  static readonly ILLEGAL_FALLBACK_ACTIONS = ['aws:approve', 'aws:copyImage', 'aws:createImage', 'aws:createStack',
    'aws:createTags', 'aws:pause', 'aws:runInstances', 'aws:sleep'];
  readonly step: AutomationStep;
  constructor(step: AutomationStep, validateStepAction: boolean) {
    super();
    this.step = step;
    if (validateStepAction && StepFallback.ILLEGAL_FALLBACK_ACTIONS.includes(step.action)) {
      throw new Error('Cannot fallback to step of type ' + step.action);
    }
  }

  stepToInvoke(_currentStep: AutomationStep): string {
    return this.step.name;
  }

  toSsmValue(): string {
    return 'step:' + this.step.name;
  }
}

export class StepNameFallback extends OnCancel {
  readonly step: string;
  readonly validateStepAction: boolean;
  constructor(step: string, validateStepAction: boolean) {
    super();
    this.step = step;
    this.validateStepAction = validateStepAction;
  }

  stepToInvoke(currentStep: AutomationStep): string {
    const stepToJumpTo = currentStep.allStepsInExecution?.filter(s => s.name == this.step);
    if (stepToJumpTo == undefined || stepToJumpTo.length != 1) {
      throw new Error('Cannot find fallback step ' + this.step);
    }
    if (this.validateStepAction && StepFallback.ILLEGAL_FALLBACK_ACTIONS.includes(stepToJumpTo[0].action)) {
      throw new Error('Cannot fallback to step of type ' + stepToJumpTo[0].action);
    }
    return this.step;
  }

  toSsmValue(): string {
    return 'step:' + this.step;
  }
}

export class Abort extends OnCancel {

  stepToInvoke(_currentStep: AutomationStep): string {
    return '';
  }

  toSsmValue(): string {
    return 'Abort';
  }
}

export class Continue extends OnFailure {

  stepToInvoke(currentStep: AutomationStep): string {
    return currentStep.nextStep?.name ?? '';
  }

  toSsmValue(): string {
    return 'Continue';
  }
}
