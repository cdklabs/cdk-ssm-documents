import { DataType, DataTypeEnum } from './data-type';

/**
 * Properties of inputs supported by SSM documents.
 * These are NOT used for declaring step inputs, rather only for document inputs.
 * See https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-doc-syntax.html
 */
export interface InputProps {

  /**
     * (Required) The name of the input by which to be referenced by steps in the document.
     */
  readonly name: string;

  /**
     * (Required) The DataTypeEnum of the input.
     */
  readonly inputType: DataTypeEnum;

  /**
     * (Optional) The description of the input.
     * @default name
     */
  readonly description?: string;

  /**
     * (Optional) Default value to use for this input if not specified when invoking the document.
     * @default undefined
     */
  readonly defaultValue?: any;

  /**
     * (Optional) List of allowed values that this input may be.
     * @default undefined
     */
  readonly allowedValues?: any[];

  /**
     * (Optional) Pattern that this input value must match.
     * @default undefined
     */
  readonly allowedPattern?: string;

  /**
     * (Optional) Minimum number of items that this input value (list) must contain.
     * @default undefined
     */
  readonly minItems?: number;

  /**
     * (Optional) Maximum number of items that this input value (list) must contain.
     * @default undefined
     */
  readonly maxItems?: number;

  /**
   * (Optional) Minimum number of chars that this input value (string) must contain.
   * @default undefined
   */
  readonly minChars?: number;

  /**
   * (Optional) Maximum number of chars that this input value (string) must contain.
   * @default undefined
   */
  readonly maxChars?: number;
}

export abstract class Input {

  public static ofTypeString(name: string, props?: StringInputProps): Input {
    return new StringInput(name, props);
  }

  public static ofTypeInteger(name: string, props?: IntegerInputProps): Input {
    return new IntegerInput(name, props);
  }

  public static ofTypeBoolean(name: string, props?: BooleanInputProps): Input {
    return new BooleanInput(name, props);
  }

  public static ofTypeStringList(name: string, props?: StringListInputProps): Input {
    return new StringListInput(name, props);
  }

  public static ofTypeMapList(name: string, props?: MapListInputProps): Input {
    return new MapListInput(name, props);
  }

  public static ofTypeStringMap(name: string, props?: StringMapInputProps): Input {
    return new StringMapInput(name, props);
  }

  public static ofSpecifiedType(type: DataTypeEnum, inputName: string, props: InputProps): Input {
    switch (type) {
      case DataTypeEnum.STRING:
        return this.ofTypeString(inputName, props);
      case DataTypeEnum.INTEGER:
        return this.ofTypeInteger(inputName, props);
      case DataTypeEnum.BOOLEAN:
        return this.ofTypeBoolean(inputName, props);
      case DataTypeEnum.STRING_LIST:
        return this.ofTypeStringList(inputName, props);
      case DataTypeEnum.MAP_LIST:
        return this.ofTypeMapList(inputName, props);
      case DataTypeEnum.STRING_MAP:
        return this.ofTypeStringMap(inputName, props);
      default:
        throw new Error('DataTypeEnum not supported: ' + type);
    }
  }

  readonly name: string;
  readonly inputType: DataTypeEnum;
  readonly description?: string;
  readonly defaultValue?: string;
  readonly allowedValues?: string[];
  readonly allowedPattern?: string;
  readonly minItems?: number;
  readonly maxItems?: number;
  readonly minChars?: number;
  readonly maxChars?: number;

  constructor(props: InputProps) {
    this.name = props.name;
    this.inputType = props.inputType;
    this.description = props.description;
    this.defaultValue = props.defaultValue;
    this.allowedValues = props.allowedValues;
    this.allowedPattern = props.allowedPattern;
    this.minItems = props.minItems;
    this.maxItems = props.maxItems;
    this.minChars = props.minChars;
    this.maxChars = props.maxChars;
  }

  public toSsm(): {[name: string]: any} {
    const nested: {[name: string]: any} = {
      type: new DataType(this.inputType).toSsmString(),
    };
    if (this.description != undefined) {
      nested.description = this.description;
    }
    if (this.defaultValue != undefined) {
      nested.default = this.defaultValue;
    }
    if (this.allowedValues != undefined) {
      nested.allowedValues = this.allowedValues;
    }
    if (this.allowedPattern != undefined) {
      nested.allowedPattern = this.allowedPattern;
    }
    if (this.minItems != undefined) {
      nested.minItems = this.minItems;
    }
    if (this.maxItems != undefined) {
      nested.maxItems = this.maxItems;
    }
    return nested;
  }

  public validate(value: any) {
    if (!(new DataType(this.inputType).validateType(value))) {
      throw new Error(`Value ${value} does not match type ${this.inputType}`);
    }
    if (this.maxItems && Array.isArray(value) && this.maxItems < value.length) {
      throw new Error(`Values ${value} is greater than maxItems: ${this.maxItems}`);
    }
    if (this.minItems && Array.isArray(value) && this.minItems > value.length) {
      throw new Error(`Values ${value} is less than minItems: ${this.maxItems}`);
    }
    if (this.allowedPattern && !value.match(this.allowedPattern)) {
      throw new Error(`Value ${value} does not match regex ${this.allowedPattern}`);
    }
    if (this.allowedValues && !this.allowedValues.includes(value)) {
      throw new Error(`Value ${value} is not among allowedValues ${this.allowedValues}`);
    }
  }
}

export interface StringInputProps {

  /**
   * (Optional) The description of the input.
   * @default name
   */
  readonly description?: string;

  /**
   * (Optional) Default value to use for this input if not specified when invoking the document.
   * @default undefined
   */
  readonly defaultValue?: string;

  /**
   * (Optional) List of allowed values that this input may be.
   * @default undefined
   */
  readonly allowedValues?: string[];

  /**
   * (Optional) Pattern that this input value must match.
   * @default undefined
   */
  readonly allowedPattern?: string;

  /**
   * (Optional) Minimum number of chars that this input value (string) must contain.
   * @default undefined
   */
  readonly minChars?: number;

  /**
   * (Optional) Maximum number of chars that this input value (string) must contain.
   * @default undefined
   */
  readonly maxChars?: number;
}

class StringInput extends Input {
  constructor(name: string, props?: StringInputProps) {
    super({ name: name, inputType: DataTypeEnum.STRING, ...props });
  }

  validate(value: any) {
    super.validate(value);
    const stringVal = (value as string);
    if (this.minChars != undefined && this.minChars > stringVal.length) {
      new Error(`Value ${value} is less than minimum specified ${this.minChars}`);
    }
    if (this.maxChars != undefined && this.maxChars < stringVal.length) {
      new Error(`Value ${value} is greater than minimum specified ${this.maxChars}`);
    }
  }
}

export interface IntegerInputProps {

  /**
   * (Optional) The description of the input.
   * @default name
   */
  readonly description?: string;

  /**
   * (Optional) Default value to use for this input if not specified when invoking the document.
   * @default undefined
   */
  readonly defaultValue?: number;

  /**
   * (Optional) List of allowed values that this input may be.
   * @default undefined
   */
  readonly allowedValues?: number[];
}

class IntegerInput extends Input {
  constructor(name: string, props?: IntegerInputProps) {
    super({ name: name, inputType: DataTypeEnum.INTEGER, ...props });
  }
}

export interface BooleanInputProps {

  /**
   * (Optional) The description of the input.
   * @default name
   */
  readonly description?: string;

  /**
   * (Optional) Default value to use for this input if not specified when invoking the document.
   * @default undefined
   */
  readonly defaultValue?: boolean;

}

class BooleanInput extends Input {
  constructor(name: string, props?: BooleanInputProps) {
    super({ name: name, inputType: DataTypeEnum.BOOLEAN, ...props });
  }
}

export interface StringListInputProps {

  /**
   * (Optional) The description of the input.
   * @default name
   */
  readonly description?: string;

  /**
   * (Optional) Default value to use for this input if not specified when invoking the document.
   * @default undefined
   */
  readonly defaultValue?: any;

  /**
   * (Optional) List of allowed values that this input may be.
   * @default undefined
   */
  readonly allowedValues?: any[];

  /**
   * (Optional) Minimum number of items that this input value (list) must contain.
   * @default undefined
   */
  readonly minItems?: number;

  /**
   * (Optional) Maximum number of items that this input value (list) must contain.
   * @default undefined
   */
  readonly maxItems?: number;
}

class StringListInput extends Input {
  constructor(name: string, props?: StringListInputProps) {
    super({ name: name, inputType: DataTypeEnum.STRING_LIST, ...props });
  }
}

export interface MapListInputProps {

  /**
   * (Optional) The description of the input.
   * @default name
   */
  readonly description?: string;

  /**
   * (Optional) Default value to use for this input if not specified when invoking the document.
   * @default undefined
   */
  readonly defaultValue?: any;

  /**
   * (Optional) List of allowed values that this input may be.
   * @default undefined
   */
  readonly allowedValues?: any[];

  /**
   * (Optional) Minimum number of items that this input value (list) must contain.
   * @default undefined
   */
  readonly minItems?: number;

  /**
   * (Optional) Maximum number of items that this input value (list) must contain.
   * @default undefined
   */
  readonly maxItems?: number;
}

class MapListInput extends Input {
  constructor(name: string, props?: MapListInputProps) {
    super({ name: name, inputType: DataTypeEnum.MAP_LIST, ...props });
  }
}

export interface StringMapInputProps {

  /**
   * (Optional) The description of the input.
   * @default name
   */
  readonly description?: string;

  /**
   * (Optional) Default value to use for this input if not specified when invoking the document.
   * @default undefined
   */
  readonly defaultValue?: any;

  /**
   * (Optional) List of allowed values that this input may be.
   * @default undefined
   */
  readonly allowedValues?: any[];

  /**
   * (Optional) Minimum number of items that this input value (list) must contain.
   * @default undefined
   */
  readonly minItems?: number;

  /**
   * (Optional) Maximum number of items that this input value (list) must contain.
   * @default undefined
   */
  readonly maxItems?: number;
}

class StringMapInput extends Input {
  constructor(name: string, props?: StringMapInputProps) {
    super({ name: name, inputType: DataTypeEnum.STRING_MAP, ...props });
  }
}