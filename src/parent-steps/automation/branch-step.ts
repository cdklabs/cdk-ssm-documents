import {AutomationStep, AutomationStepProps} from "../automation-step";
import { Output } from "../../domain/output";
import { Choice } from "../../domain/choice";
import { ResponseCode } from "../../domain/response-code";
import { SimulationResult } from "../../domain/simulation-result";
import { Construct } from 'constructs';


export interface BranchStepProps extends AutomationStepProps {
    /**
     * (Required) list of choices. The first matched choice will be used to jump to the step specified in the choice.
     */
    readonly choices: Choice[];

    /**
     * (Optional) default step in all of the choices evaluate to false.
     * @default undefined - the next step in the chain will be invoked. See AWS Documentation for branch below.
     */
    readonly defaultStepName?: string;
}

/**
 * AutomationStep implementation of aws:branch
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-branch.html
 */
export class BranchStep extends AutomationStep {

    readonly choices: Choice[];
    readonly defaultStepName?: string;
    readonly action: string = 'aws:branch';

    constructor(scope: Construct, id: string, props: BranchStepProps) {
        super(scope, id, props);
        this.choices = props.choices;
        this.defaultStepName = props.defaultStepName;
    }

    /**
     * There is no output from branch steps.
     * @returns empty list
     */
    public listOutputs(): Output[] {
        return [];
    }

    /**
     * @returns all of the inputsToTest from the choices provided to the constructor
     */
    public listInputs(): string[] {
        return [...new Set(this.choices
            .flatMap(choice => choice.variable.requiredInputs()))];
    }

    /**
     * Overrides invoke because control flow of execution is different than standard steps.
     * Will traverse the choices until one evaluated to true; will skip to that choice.
     */
    public invoke(inputs: { [name: string]: any; }): SimulationResult {
        const matchedChoice = this.choices.find(choice => choice.evaluate(inputs));
        if (matchedChoice == undefined) {
            console.log(`Did not find matching choice to branch to. Will proceed to ${this.getFallbackStep().name}`)
            return this.invokeSpecificStep(this.getFallbackStep(), inputs);
        } else {
            console.log(`Identified a branch that matched evaluation. Will proceed to ${matchedChoice.jumpToStepName}`)
            return this.invokeSpecificStep(this.findStep(matchedChoice.jumpToStepName), inputs);
        }
    }

    /**
     * Jumps to specific step and continues chain-or-responsibility.
     */
    private invokeSpecificStep(specificStep: AutomationStep, inputs: { [name: string]: any; }) {
        const nextStepRes = specificStep.invoke(inputs);
        if (nextStepRes.responseCode != ResponseCode.SUCCESS) {
            return {
                responseCode: nextStepRes.responseCode,
                outputs: {},
                stackTrace: nextStepRes.stackTrace,
                executedSteps: this.prependSelf(nextStepRes.executedSteps)
            };
        } else {
            return {
                responseCode: ResponseCode.SUCCESS,
                outputs: nextStepRes.outputs,
                executedSteps: this.prependSelf(nextStepRes.executedSteps)
            };
        }
    }

    private findStep(name: string): AutomationStep {
        const matchedSteps = this.allStepsInExecution?.filter(step => step.name == name);
        if (matchedSteps?.length != 1) {
            throw new Error("No step found to match step name: " + name);
        }
        return matchedSteps[0];
    }

    private getFallbackStep(): AutomationStep {
        const fallbackStep = this.defaultStepName ? this.findStep(this.defaultStepName) : this.nextStep;
        if (fallbackStep == undefined) {
            throw new Error("No default or next step provided for branch step!");
        }
        return fallbackStep;
    }

    /**
     * noop. The logic performed in the branch step happens in the invoke() function.
     */
    public executeStep(_inputs: { [name: string]: any }): { [name: string]: any } {
        // unused
        return {};
    }

    public toSsmEntry(): { [name: string]: any; } {
        const choicesInputs: { [name: string]: any; } = {"Choices": this.choices.map(choice => choice.asSsmEntry())}
        if (this.defaultStepName) {
            choicesInputs.Default = this.defaultStepName;
        }
        return super.prepareSsmEntry(choicesInputs);
    }

}
