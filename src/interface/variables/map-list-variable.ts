import { isStringMap } from './string-map-variable';
import { IGenericVariable, GenericVariable, HardCodedValueBase } from './variable';

/**
 * MapList type that can be null
 */
export type NullableMapList = Record<string, any>[];

/**
 * A map list variable
 */
export interface IMapListVariable extends IGenericVariable {
  /**
     * Given the execution inputs, return the resolved value of this variable.
     * @param inputs are the execution inputs.
     */
  resolveToMapList(inputs: Record<string, any>): NullableMapList;
}

/**
 * A hard-coded map list variable.
 * Used when not dependent on step inputs.
 */
export class HardCodedMapList extends HardCodedValueBase<Record<string, any>[]> implements IMapListVariable {
  resolveToMapList(inputs: Record<string, any>): NullableMapList {
    return this.resolve(inputs);
  }

  protected assertType(value: any): void {
    assertMapList(value);
  }
}

/**
 * A map list variable reference.
 * Used to resolve the value from step inputs.
 */
export class MapListVariable extends GenericVariable implements IMapListVariable {
  resolveToMapList(inputs: Record<string, any>): NullableMapList {
    return this.resolve(inputs);
  }

  protected assertType(value: any): void {
    assertMapList(value);
  }
}

/**
 * Assert that the given value is a NullableMapList.
 * @param value value to assert
 */
export function assertMapList(value: any): asserts value is NullableMapList {
  if (!isMapList(value)) { throw new Error(`${value} is not a map list`); }
}

/**
 * Whether the given value is a NullableMapList.
 * @param value value to check
 * @returns true if the value is a NullableMapList, otherwise false
 */
export function isMapList(value: any): value is NullableMapList {
  if (value === null) { return true; }
  return Array.isArray(value) && value.every(x => isStringMap(x));
}