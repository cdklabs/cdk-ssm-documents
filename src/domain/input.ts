import { DataTypeEnum } from './data-type';

/**
 * Properties of inputs supported by SSM documents.
 * These are NOT used for declaring step inputs, rather only for document inputs.
 * See https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-doc-syntax.html
 */
export interface Input {

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