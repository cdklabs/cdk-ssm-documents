import { GenericVariable, HardCodedValueBase, IGenericVariable } from './variable';

/**
 * Boolean type that can be null
 */
export type NullableBoolean = boolean;

/**
 * A boolean variable
 */
export interface IBooleanVariable extends IGenericVariable {
  /**
     * Given the execution inputs, return the resolved value of this variable.
     * @param inputs are the execution inputs.
     */
  resolveToBoolean(inputs: Record<string, any>): NullableBoolean;
}

/**
 * A hard-coded boolean variable.
 * Used when not dependent on step inputs.
 */
export class HardCodedBoolean extends HardCodedValueBase<boolean> implements IBooleanVariable {
  public static readonly TRUE: HardCodedBoolean = new HardCodedBoolean(true);
  public static readonly FALSE: HardCodedBoolean = new HardCodedBoolean(false);

  resolveToBoolean(inputs: Record<string, any>): NullableBoolean {
    return this.resolve(inputs);
  }

  protected assertType(value: any): void {
    assertBoolean(value);
  }
}

/**
 * A boolean variable reference.
 * Used to resolve the value from step inputs.
 */
export class BooleanVariable extends GenericVariable implements IBooleanVariable {
  public static of(reference: string): BooleanVariable {
    return new BooleanVariable(reference);
  }

  resolveToBoolean(inputs: Record<string, any>): NullableBoolean {
    return this.resolve(inputs);
  }

  protected assertType(value: any): void {
    assertBoolean(value);
  }
}

/**
 * Assert that the given value is a NullableBoolean.
 * @param value value to assert
 */
export function assertBoolean(value: any): asserts value is NullableBoolean {
  if (!isBoolean(value)) { throw new Error(`${value} is not a boolean`); }
}

/**
 * Whether the given value is a NullableBoolean.
 * @param value value to check
 * @returns true if the value is a NullableBoolean, otherwise false
 */
export function isBoolean(value: any): value is NullableBoolean {
  if (value === null) { return true; }
  return typeof value === 'boolean' || value instanceof Boolean;
}