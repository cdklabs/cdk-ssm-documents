/**
 * Operation to use for comparing a Choice's or Preconditions with provided value.
 * See https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-branch.html
 * or https://docs.aws.amazon.com/systems-manager/latest/userguide/document-schemas-features.html
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


export class OperationEvaluator {

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

  /**
     * Converts a string to OperationType
     * @param operationName an operation name to return its OperationType
     * @returns an OperationType
     * @throws if operationName is not supported
     */
  public static fromOperationName(operationName: string): Operation {
    const operation = OperationEvaluator.STRING_TO_OPERATION[operationName];
    if (operation != undefined) {
      return operation;
    } else {
      throw new Error(`Runtime ${operationName} not supported.`);
    }
  }

  readonly operation: Operation;

  constructor(operation: Operation) {
    this.operation = operation;
  }

  /**
     * Evaluates this operation against the provided inputs.
     * @returns true if the evaluation is true. False otherwise.
     */
  public evaluate(value1: any, value2: any): boolean {
    switch (this.operation) {
      case Operation.BOOLEAN_EQUALS:
        return value1 == value2;
      case Operation.STRING_EQUALS:
        return value1 === value2;
      case Operation.EQUALS_IGNORE_CASE:
        return value1.toLowerCase() === value2.toLowerCase();
      case Operation.STARTS_WITH:
        return value1.startsWith(value2);
      case Operation.ENDS_WITH:
        return value1.endsWith(value2);
      case Operation.CONTAINS:
        return value1.includes(value2);
      case Operation.NUMERIC_EQUALS:
        return value1 == value2;
      case Operation.NUMERIC_GREATER:
        return value1 > value2;
      case Operation.NUMERIC_LESSER:
        return value1 < value2;
      case Operation.NUMERIC_GREATER_OR_EQUALS:
        return value1 >= value2;
      case Operation.NUMERIC_LESSER_OR_EQUALS:
        return value1 <= value2;
      default:
        throw new Error('No implementation for evaluate found for operation ' + this.operation);
    }
  }

  /**
     * @returns the string representation used by SSM for the operation.
     */
  public toOperationName(): string {
    const operationEntry = Object.entries(OperationEvaluator.STRING_TO_OPERATION)
      .filter(entry => entry[1] == this.operation)[0];
    if (operationEntry) {
      return operationEntry[0];
    } else {
      throw new Error(`Operation ${this.operation} not supported.`);
    }
  }

}
