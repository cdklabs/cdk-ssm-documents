import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { IGenericVariable } from '../../interface/variables/variable';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * Properties for update variable step.
 */
export interface UpdateVariableProps extends AutomationStepProps {

  /**
   * (Required) The name of the variable to be updated. Must use format `variable:<variable name>`.
   */
  readonly variableName: string;

  /**
   * (Required) The value of the variable to be updated.
   */
  readonly variableValue: IGenericVariable;
}

/**
 * AutomationStep implementation for aws:updateVariable
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-update-variable.html
 */
export class UpdateVariableStep extends AutomationStep {
  readonly variableName: string;
  readonly variableValue: IGenericVariable;
  readonly action: string = 'aws:updateVariable';

  constructor(scope: Construct, id: string, props: UpdateVariableProps) {
    super(scope, id, props);
    this.variableName = props.variableName;
    this.variableValue = props.variableValue;

    if (!this.variableName.startsWith('variable')) {
      throw new Error('The variable name should start with "variable:" indicator, e.g., variable:name');
    }
  }

  /**
   * No outputs emitted from update variable step
   * @returns []
   */
  public listOutputs(): Output[] {
    return [];
  }

  public listInputs(): string[] {
    const inputs = [
      this.variableValue,
    ];

    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): { [name: string]: any } {
    return super.prepareSsmEntry({
      name: this.variableName,
      value: this.variableValue.print(),
    });
  }
}
