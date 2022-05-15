import { DataTypeEnum } from './data-type';

/**
 * Object used to specify step output.
 */
export interface Output {
  /**
     * The DataType expected by this output.
     * This will be validated in simulation mode and will also be used when printing to yaml/json.
     */
  readonly outputType: DataTypeEnum;

  /**
     * The name that can be used by subsequent steps to refernce the stored value.
     * Note that Outputs will be PREPENDED with the step name.
     */
  readonly name: string;

  /**
     * Json selector for locating the value in the json step response.
     */
  readonly selector: string;
}