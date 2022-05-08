import { IGenericVariable, GenericVariable, HardCodedValueBase } from "./variable";

/**
 * StringMap type that can be null
 */
export type NullableStringMap = Record<string, any>;

/**
 * A string map variable
 */
export interface IStringMapVariable extends IGenericVariable {
    /**
     * Given the execution inputs, return the resolved value of this variable.
     * @param inputs are the execution inputs.
     */
    resolveToStringMap(inputs: Record<string, any>): NullableStringMap;
}

/**
 * A hard-coded string map variable.
 * Used when not dependent on step inputs.
 */
export class HardCodedStringMap extends HardCodedValueBase<Record<string, any>> implements IStringMapVariable {
    resolveToStringMap(inputs: Record<string, any>): NullableStringMap {
        return this.resolve(inputs);
    }

    protected assertType(value: any): void {
        assertStringMap(value);
    }
}

/**
 * A string map variable reference.
 * Used to resolve the value from step inputs.
 */
export class StringMapVariable extends GenericVariable implements IStringMapVariable {
    resolveToStringMap(inputs: Record<string, any>): NullableStringMap {
        return this.resolve(inputs);
    }

    protected assertType(value: any): void {
        assertStringMap(value);
    }
}

/**
 * Assert that the given value is a NullableStringMap.
 * @param value value to assert
 */
export function assertStringMap(value: any): asserts value is NullableStringMap {
    if (!isStringMap(value)) { throw new Error(`${value} is not a string map`); }
}

/**
 * Whether the given value is a NullableStringMap.
 * @param value value to check
 * @returns true if the value is a NullableStringMap, otherwise false
 */
export function isStringMap(value: any): value is NullableStringMap {
    if (value === null) { return true; }
    return typeof value === "object" && !Array.isArray(value);
}