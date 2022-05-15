import { IStringVariable } from '..';
import { IBooleanVariable } from '../interface/variables/boolean-variable';
import { INumberVariable } from '../interface/variables/number-variable';

/**
 * Operation to use for comparing a Choice's constant with the value provided.
 * See https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-branch.html
 */
export enum Operation {
  BOOLEAN_EQUALS,
  CONTAINS,
  ENDS_WITH,
  STARTS_WITH,
  STRING_EQUALS,
  EQUALS_IGNORE_CASE,
  NUMERIC_EQUALS,
  NUMERIC_GREATER,
  NUMERIC_GREATER_OR_EQUALS,
  NUMERIC_LESSER,
  NUMERIC_LESSER_OR_EQUALS,
}

/**
 * Properties for a Choice used by the BranchStep.
 */
export interface ChoiceProps {

  /**
     * (Required) The operation used to compare the inputToTest with the constant.
     */
  readonly operation: Operation;

  /**
     * (Required) the constant to test against the inputToTest.
     */
  readonly constant: any;

  /**
     * (Required) the input used to test using the operation with the constant.
     */
  readonly variable: IStringVariable | INumberVariable | IBooleanVariable;

  /**
     * A step to jump to if this choice is evaluated to true.
     * Must reference another step in the currently executing AutomationDocument.
     */
  readonly jumpToStepName: string;
}

/**
 * Choices are supplied to the BranchStep to determine under which conditions to jump to which steps.
 */
export class Choice {

  public static readonly STRING_TO_OPERATION: { [name: string]: Operation } = {
    BooleanEquals: Operation.BOOLEAN_EQUALS,
    StringEquals: Operation.STRING_EQUALS,
    EqualsIgnoreCase: Operation.EQUALS_IGNORE_CASE,
    StartsWith: Operation.STARTS_WITH,
    EndsWith: Operation.ENDS_WITH,
    Contains: Operation.CONTAINS,
    NumericEquals: Operation.NUMERIC_EQUALS,
    NumericGreater: Operation.NUMERIC_GREATER,
    NumericLesser: Operation.NUMERIC_LESSER,
    NumericGreaterOrEquals: Operation.NUMERIC_GREATER_OR_EQUALS,
    NumericLesserOrEquals: Operation.NUMERIC_LESSER_OR_EQUALS,
  };

  public static fromOperationName(operationName: string) {
    const operation = Choice.STRING_TO_OPERATION[operationName];
    if (operation != undefined) {
      return operation;
    } else {
      throw new Error(`Runtime ${operationName} not supported.`);
    }
  }

  readonly operation: Operation;
  readonly constant: any;
  readonly variable: IStringVariable | INumberVariable | IBooleanVariable;
  readonly jumpToStepName: string;

  constructor(props: ChoiceProps) {
    this.operation = props.operation;
    this.constant = props.constant;
    this.variable = props.variable;
    this.jumpToStepName = props.jumpToStepName;
  }

  /**
     * @returns an object that can be used to print this choice into yaml/json format.
     */
  public asSsmEntry(): { [name: string]: any } {
    const variableName = this.variable.print();
    return {
      NextStep: this.jumpToStepName,
      Variable: variableName,
      [this.getOperationName()]: this.constant,
    };
  }

  /**
     * Evaluates this choice against the provided inputs.
     * The value keyed on the inputToTest will be tested against the declared constant using the Operation specified.
     * @returns true if the evaluation is true. False otherwise.
     */
  public evaluate(inputs: { [name: string]: any }): boolean {
    const value = this.variable.resolve(inputs);
    switch (this.operation) {
      case Operation.BOOLEAN_EQUALS:
        return value == this.constant;
      case Operation.STRING_EQUALS:
        return value === this.constant;
      case Operation.EQUALS_IGNORE_CASE:
        return value.toLowerCase() === this.constant.toLowerCase();
      case Operation.STARTS_WITH:
        return value.startsWith(this.constant);
      case Operation.ENDS_WITH:
        return value.endsWith(this.constant);
      case Operation.CONTAINS:
        return value.includes(this.constant);
      case Operation.NUMERIC_EQUALS:
        return value == this.constant;
      case Operation.NUMERIC_GREATER:
        return value > this.constant;
      case Operation.NUMERIC_LESSER:
        return value < this.constant;
      case Operation.NUMERIC_GREATER_OR_EQUALS:
        return value >= this.constant;
      case Operation.NUMERIC_LESSER_OR_EQUALS:
        return value <= this.constant;
      default:
        throw new Error('No implementation for evaluate found for operation ' + this.operation);
    }
  }

  /**
     * @returns the string representation used by SSM for the operation.
     */
  private getOperationName() {
    const operationEntry = Object.entries(Choice.STRING_TO_OPERATION)
      .filter(entry => entry[1] == this.operation)[0];
    if (operationEntry) {
      return operationEntry[0];
    } else {
      throw new Error(`Operation ${this.operation} not supported.`);
    }
  }

}
