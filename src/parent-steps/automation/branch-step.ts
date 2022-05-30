import { Construct } from 'constructs';
import { Choice } from '../../domain/choice';
import { Output } from '../../domain/output';
import { AutomationStep, AutomationStepProps } from '../automation-step';


export interface BranchStepProps extends AutomationStepProps {
  /**
     * (Required) list of choices. The first matched choice will be used to jump to the step specified in the choice.
     */
  readonly choices: Choice[];

  /**
     * (Optional) default step in all of the choices evaluate to false.
     * @default undefined - the next step in the chain will be invoked. See AWS Documentation for branch below.
     */
  readonly defaultStepName?: string;
}

/**
 * AutomationStep implementation of aws:branch
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-branch.html
 */
export class BranchStep extends AutomationStep {

  readonly choices: Choice[];
  readonly defaultStepName?: string;
  readonly action: string = 'aws:branch';

  constructor(scope: Construct, id: string, props: BranchStepProps) {
    super(scope, id, props);
    this.choices = props.choices;
    this.defaultStepName = props.defaultStepName;
  }

  /**
     * There is no output from branch steps.
     * @returns empty list
     */
  public listOutputs(): Output[] {
    return [];
  }

  /**
     * @returns all of the inputsToTest from the choices provided to the constructor
     */
  public listInputs(): string[] {
    return [...new Set(this.choices
      .flatMap(choice => choice.variable.requiredInputs()))];
  }

  public toSsmEntry(): { [name: string]: any } {
    const choicesInputs: { [name: string]: any } = { Choices: this.choices.map(choice => choice.asSsmEntry()) };
    if (this.defaultStepName) {
      choicesInputs.Default = this.defaultStepName;
    }
    return super.prepareSsmEntry(choicesInputs);
  }

}
