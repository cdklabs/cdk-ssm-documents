/**
 * Variables hold references to a value.
 * There are two implementations: HardCodedValue and ExportedVariable.
 * This interface allows you to reference variable outputs from previous steps via the exported step.variable().
 * If you do not have a reference to a variable, you may generate your own variable using the ExportedVariable ctor.
 * In the event that a hardcoded value is passed into a step, you can reference the value with a HardCodedValue.
 */
export interface IGenericVariable {
  /**
     * Given the execution inputs, return the resolved value of this variable.
     * @param inputs are the execution inputs.
     */
  resolve(inputs: Record<string, any>): any;

  /**
     * Prints the variable in a way that SSM understands. This is typically in the form of {{Variable}} or the value.
     * @example {{MyVariable}}
     */
  print(): string | any;

  /**
     * The inputs that are required for determining the value of this variable.
     * In the case of a single variable string, this will return a single value.
     */
  requiredInputs(): string[];

  /**
     * JSON.stringify(variable) will implicitly invoke this variable.
     */
  toJSON(): any;
}

export abstract class HardCodedValueBase<TValue> implements IGenericVariable {
  readonly val: TValue;

  constructor(val: TValue) {
    this.assertType(val);
    this.val = val;
  }

  resolve(_inputs: Record<string, any>): any {
    return this.val;
  }

  print(): string | any {
    return this.val;
  }

  requiredInputs(): string[] {
    return [];
  }

  toJSON(): any {
    return this.val;
  }

  protected abstract assertType(value: any): void;

  toString(): string {
    return this.print() ?? '';
  }
}

/**
 * Abstraction of SSM variables.
 * Variables are printed as using this syntax: {{myVariable}}
 * To resolve a variable, you must supply the available inputs and the variable will resolve the value.
 */
export abstract class GenericVariable implements IGenericVariable {
  readonly reference: string;

  constructor(reference: string) {
    this.reference = reference;
  }

  resolve(inputs: Record<string, any>): any {
    const result = inputs[this.reference];
    if (result === undefined) { return result; }
    this.assertType(result);
    return result;
  }

  print(): string | any {
    return this.toPlaceholder();
  }

  private toPlaceholder(): string {
    return `{{${this.reference}}}`;
  }

  requiredInputs(): string[] {
    return [this.reference];
  }

  toJSON(): any {
    return this.toPlaceholder();
  }

  protected abstract assertType(value: any): void;

  toString(): string {
    return this.print() ?? '';
  }
}