import { DataTypeEnum } from './data-type';

/**
 * Outputs from a document via one of the steps.
 * The outputs are available for use in other documents calling this document via aws:executeAutomation.
 * The outputs returned from an automation document are returned as a String list named "ouptuts".
 */
export interface DocumentOutput {
  /**
     * The DataType expected by this output.
     * This will be validated in simulation mode and will also be used when printing to yaml/json.
     */
  readonly outputType: DataTypeEnum;

  /**
     * The step and name (in STEP.NAME format) to identify an output expected from one of the document steps.
     * The name must therefore identify a step and an output or will fail validation.
     * @example MyStep.MyOutput
     */
  readonly name: string;
}