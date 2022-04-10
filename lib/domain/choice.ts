import { IStringVariable } from "..";
import { IBooleanVariable } from "../interface/variables/boolean-variable";
import { INumberVariable } from "../interface/variables/number-variable";
import {OperationEvaluator, Operation} from "./operation";


/**
 * Properties for a Choice used by the BranchStep.
 */
export interface ChoiceProps {

    /**
     * (Required) The operation used to compare the inputToTest with the constant.
     */
    readonly operation: Operation;

    /**
     * (Required) the constant to test against the inputToTest.
     */
    readonly constant: any;

    /**
     * (Required) the input used to test using the operation with the constant.
     */
    readonly variable: IStringVariable | INumberVariable | IBooleanVariable;

    /**
     * A step to jump to if this choice is evaluated to true.
     * Must reference another step in the currently executing AutomationDocument.
     */
    readonly jumpToStepName: string;
}

/**
 * Choices are supplied to the BranchStep to determine under which conditions to jump to which steps.
 */
export class Choice {

    readonly operation: Operation;
    readonly constant: any;
    readonly variable: IStringVariable | INumberVariable | IBooleanVariable;
    readonly jumpToStepName: string;

    constructor(props: ChoiceProps) {
        this.operation = props.operation;
        this.constant = props.constant;
        this.variable = props.variable;
        this.jumpToStepName = props.jumpToStepName;
    }

    /**
     * @returns an object that can be used to print this choice into yaml/json format.
     */
    public asSsmEntry(): { [name: string]: any; } {
        const variableName = this.variable.print();
        return {
            'NextStep': this.jumpToStepName,
            'Variable': variableName,
            [new OperationEvaluator(this.operation).toOperationName()]: this.constant
        };
    }

    /**
     * Evaluates this choice against the provided inputs.
     * The value keyed on the inputToTest will be tested against the declared constant using the Operation specified.
     * @returns true if the evaluation is true. False otherwise.
     */
    public evaluate(inputs: { [name: string]: any; }): boolean {
        const value = this.variable.resolve(inputs);
        return new OperationEvaluator(this.operation).evaluate(value, this.constant);
    }

}
