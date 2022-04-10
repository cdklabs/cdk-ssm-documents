import { IGenericVariable } from '..';
import { HardCodedString, StringVariable } from '../interface/variables/string-variable';
import { OperationEvaluator, Operation } from './operation';
import { Platform } from './platform';

const PLATFORM_TYPE = 'platformType';

/**
 * The precondition parameter is used as a comparator of SSM documents inputs
 * to determine whether a command step would be executed or not.
 * See https://docs.aws.amazon.com/systems-manager/latest/userguide/document-schemas-features.html
 */
export interface PreconditionProps {

  /**
    * (Required) the operation used to compare the parameter with the variable.
    */
  readonly operationType: Operation;

  /**
      * (Required) the variable to compare against the constant.
      */
  readonly variable1: IGenericVariable;


  /**
      * (Required) the being compared against the variable.
      */
  readonly variable2: IGenericVariable;
}


export class Precondition {

  public static readonly INJECTED_PLAYFORM_TYPE_KEY = 'injected_platform_type';

  /**
     * Returns a new Precondition
     * @param platform The platform the preconditions tests against
     * @returns new Precondition with platformType EnvironmentVariable, operation and a constant
     */
  public static newPlatformPrecondition(platform: Platform): Precondition {
    return new Precondition({
      operationType: Operation.STRING_EQUALS,
      variable1: new PlatformTypeStringVariable(PLATFORM_TYPE),
      variable2: new HardCodedString(platform),
    });
  }

  readonly operationType: Operation;
  readonly variable1: IGenericVariable;
  readonly variable2: IGenericVariable;

  private constructor(props: PreconditionProps) {
    this.operationType = props.operationType;
    this.variable1 = props.variable1;
    this.variable2 = props.variable2;
  }

  /**
     * Evaluates if the precondition is met, by comparing the variable with the constant using the operator.
     * @returns true if the evaluation is true. False otherwise.
     */
  public evaluate(inputs: { [name: string]: any }): boolean {
    const value1 = inputs[Precondition.INJECTED_PLAYFORM_TYPE_KEY];
    const value2 = this.variable2.resolve(inputs);
    return new OperationEvaluator(this.operationType).evaluate(value1, value2);
  }

  /**
     * @returns an object that can be used to print this choice into yaml/json format.
     */
  public asSsmEntry(): { [name: string]: any } {
    const variable1Entry = this.variable1.print();
    const variable2Entry = this.variable2.print();
    return {
      [new OperationEvaluator(this.operationType).toOperationName()]: [
        variable1Entry,
        variable2Entry,
      ],
    };
  }

}

/**
 * These string variables are being set by SSM agent during execution. For example; platformType.
 * Variables are printed as using with brackets, e.g, myVariable instead of {{ myVariable }}.
 * To resolve a variable, you must supply the available inputs and the variable will resolve the value.
 */
class PlatformTypeStringVariable extends StringVariable {
  readonly reference: string;

  constructor(reference: string) {
    super(reference);
    this.reference = reference;
  }

  print(): string {
    return `${this.reference}`;
  }

  toJSON(): string {
    return this.print();
  }

}

