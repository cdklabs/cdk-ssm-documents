import { isString } from "./string-variable";
import { IGenericVariable, GenericVariable, HardCodedValueBase } from "./variable";

/**
 * StringList type that can be null
 */
export type NullableStringList = string[];

/**
 * A string list variable
 */
export interface IStringListVariable extends IGenericVariable {
    /**
     * Given the execution inputs, return the resolved value of this variable.
     * @param inputs are the execution inputs.
     */
    resolveToStringList(inputs: Record<string, any>): NullableStringList;
}

/**
 * A hard-coded string list variable.
 * Used when not dependent on step inputs.
 */
export class HardCodedStringList extends HardCodedValueBase<string[]> implements IStringListVariable {
    resolveToStringList(inputs: Record<string, any>): NullableStringList {
        return this.resolve(inputs);
    }

    protected assertType(value: any): void {
        assertStringList(value);
    }
}

/**
 * A string list variable reference.
 * Used to resolve the value from step inputs.
 */
export class StringListVariable extends GenericVariable implements IStringListVariable {
    resolveToStringList(inputs: Record<string, any>): NullableStringList {
        return this.resolve(inputs);
    }

    protected assertType(value: any): void {
        assertStringList(value);
    }
}

/**
 * Assert that the given value is a NullableStringList.
 * @param value value to assert
 */
export function assertStringList(value: any): asserts value is NullableStringList {
    if (!isStringList(value)) { throw new Error(`${value} is not a string list`); }
}

/**
 * Whether the given value is a NullableStringList.
 * @param value value to check
 * @returns true if the value is a NullableStringList, otherwise false
 */
export function isStringList(value: any): value is NullableStringList {
    if (value === null) { return true; }
    return Array.isArray(value) && value.every(isString);
}