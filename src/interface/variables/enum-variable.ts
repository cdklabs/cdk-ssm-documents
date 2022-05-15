import { isNumber } from './number-variable';
import { assertString, isString } from './string-variable';
import { GenericVariable, IGenericVariable } from './variable';

type StandardEnum<T> = {
  [key: string]: T | string;
  [value: number]: string;
}

/**
 * An enum variable
 */
export interface IEnumVariable<TEnum extends StandardEnum<unknown>> extends IGenericVariable {
  /**
     * Given the execution inputs, return the resolved value of this variable.
     * @param inputs are the execution inputs.
     */
  resolveToEnum(inputs: Record<string, any>): TEnum[keyof TEnum];
}

/**
 * A hard-coded enum variable.
 * Used when not dependent on step inputs.
 */
export abstract class HardCodedEnum<TEnum extends StandardEnum<unknown>> implements IEnumVariable<TEnum> {
  private readonly enumType: TEnum;
  private readonly val: TEnum[keyof TEnum];

  constructor(value: TEnum[keyof TEnum], enumType: TEnum) {
    this.enumType = enumType;
    this.assertType(value);
    this.val = value;
  }

  resolveToEnum(_inputs: Record<string, any>): TEnum[keyof TEnum] {
    return this.val;
  }

  resolve(_inputs: Record<string, any>): any {
    return this.print();
  }

  print(): any {
    if (isString(this.val)) {
      return this.val;
    }
    return Object.keys(this.enumType)
      .filter(x => this.enumType[x] === this.val)[0];
  }

  toJSON(): any {
    return this.print();
  }

  requiredInputs(): string[] {
    return [];
  }

  private assertType(value: any): void {
    if (!Object.values(this.enumType).includes(value)) {
      throw new Error(`${this.val} is not a valid enum value`);
    }
  }
}

/**
 * An enum variable reference.
 * Used to resolve the value from step inputs.
 */
export abstract class EnumVariable<TEnum extends StandardEnum<unknown>> extends GenericVariable implements IEnumVariable<TEnum> {
  private readonly enumType: TEnum;

  constructor(reference: string, enumType: TEnum) {
    super(reference);
    this.enumType = enumType;
  }

  resolveToEnum(inputs: Record<string, any>): TEnum[keyof TEnum] {
    const stringValue = this.resolve(inputs);

    // Case 1: stringValue is a key of TEnum
    if (getEnumKeysWithNumberValues(this.enumType).includes(stringValue)) {
      return this.enumType[stringValue as keyof TEnum];
    }

    // Case 2: stringValue is a value of TEnum
    return this.enumType[getEnumKeysWithStringValues(this.enumType)
      .filter(x => this.enumType[x] === stringValue)[0] as keyof TEnum];
  }

  protected assertType(value: any): void {
    assertString(value);
    if (!getStringEquivalentsForEnum(this.enumType).includes(value)) {
      throw new Error(`${value} is not a valid enum value`);
    }
  }
}

function getEnumKeysWithNumberValues<TEnum extends StandardEnum<unknown>>(enumType: TEnum): string[] {
  return Object.keys(enumType).filter(x => isNumber(enumType[x]));
}

function getEnumKeysWithStringValues<TEnum extends StandardEnum<unknown>>(enumType: TEnum): string[] {
  return Object.keys(enumType).filter(x => isString(enumType[x]));
}

function getStringEquivalentsForEnum<TEnum extends StandardEnum<unknown>>(enumType: TEnum): string[] {
  return [
    ...getEnumKeysWithNumberValues(enumType),
    ...getEnumKeysWithStringValues(enumType).map(x => enumType[x] as string),
  ];
}