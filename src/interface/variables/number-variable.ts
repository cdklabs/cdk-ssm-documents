import { IGenericVariable, GenericVariable, HardCodedValueBase } from './variable';

/**
 * Number type that can be null
 */
export type NullableNumber = number;

/**
 * A number variable
 */
export interface INumberVariable extends IGenericVariable {
  /**
     * Given the execution inputs, return the resolved value of this variable.
     * @param inputs are the execution inputs.
     */
  resolveToNumber(inputs: Record<string, any>): NullableNumber;
}

/**
 * A hard-coded number variable.
 * Used when not dependent on step inputs.
 */
export class HardCodedNumber extends HardCodedValueBase<number> implements INumberVariable {
  public static of(val: number): HardCodedNumber {
    return new HardCodedNumber(val);
  }

  resolveToNumber(inputs: Record<string, any>): NullableNumber {
    return this.resolve(inputs);
  }

  protected assertType(value: any): void {
    assertNumber(value);
  }
}

/**
 * A number variable reference.
 * Used to resolve the value from step inputs.
 */
export class NumberVariable extends GenericVariable implements INumberVariable {
  public static of(reference: string): NumberVariable {
    return new NumberVariable(reference);
  }

  resolveToNumber(inputs: Record<string, any>): NullableNumber {
    return this.resolve(inputs);
  }

  protected assertType(value: any): void {
    assertNumber(value);
  }
}

/**
 * Assert that the given value is a NullableNumber.
 * @param value value to assert
 */
export function assertNumber(value: any): asserts value is NullableNumber {
  if (!isNumber(value)) { throw new Error(`${value} is not a number`); }
}

/**
 * Whether the given value is a NullableNumber.
 * @param value value to check
 * @returns true if the value is a NullableNumber, otherwise false
 */
export function isNumber(value: any): value is NullableNumber {
  if (value === null) { return true; }
  return typeof value === 'number' || value instanceof Number;
}