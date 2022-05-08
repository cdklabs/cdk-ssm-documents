import {Step, StepProps} from "./step";
import {Output} from "../domain/output";
import {SimulationResult} from "../domain/simulation-result";
import {ResponseCode} from "../domain/response-code";
import {NonRetriableException} from "../domain/non-retriable-exception";
import {Construct} from "@aws-cdk/core";
import {Platform} from "../domain/platform";
import { StringVariable } from "..";

export interface CommandStepProps extends StepProps {

    /**
     * (Optional) Whether to exit the document execution after failed execution of this step.
     * Finally step will be run.
     * @default false
     */
    readonly exitOnFailure?: boolean;

    /**
     * (Optional) Whether to exit the document execution after successful execution of this step.
     * Finally step will be run.
     * @default false
     */
    readonly exitOnSuccess?: boolean;

    readonly markSuccessAndExitOnFailure?: boolean

    /**
     * (Optional) Step to jump to in the event that this step is cancelled.
     * @default undefined
     */
    readonly onCancel?: Step;

    readonly finallyStep?: boolean;

}

export abstract class CommandStep extends Step {

    nextStep: CommandStep | undefined;
    allStepsInExecution: CommandStep[] | undefined;
    readonly exitOnFailure: boolean;
    readonly exitOnSuccess: boolean;
    readonly markSuccessAndExitOnFailure: boolean;
    readonly finallyStep: boolean;
    abstract readonly platforms: Platform[];

    protected constructor(scope: Construct, id: string, props: CommandStepProps) {
        super(scope, id, props);
        this.exitOnFailure = props.exitOnFailure ?? false;
        this.exitOnSuccess = props.exitOnSuccess ?? false;
        this.markSuccessAndExitOnFailure = props.markSuccessAndExitOnFailure ?? false;
        this.finallyStep = props.finallyStep ?? false;
    }

    protected prepareSsmEntry(inputs: { [name: string]: any; }): { [name: string]: any; } {
        // Maps maintain insertion order
        const ssmDef: Map<string, any> = new Map();
        if (this.description) {
            ssmDef.set('description', this.description);
        }
        ssmDef.set('name', this.name);
        ssmDef.set('action', this.action);
        ssmDef.set('inputs', inputs);

        if (this.exitOnFailure) {
            ssmDef.set('onFailure', "exit");
        }
        if (this.markSuccessAndExitOnFailure) {
            ssmDef.set('onFailure', "successAndExit");
        }
        if (this.exitOnSuccess) {
            ssmDef.set('onSuccess', "exit");
        }
        if (this.finallyStep) {
            ssmDef.set('finallyStep', this.finallyStep);
        }
        const ssmDict: { [name: string]: any; } = {};
        ssmDef.forEach((value, key) => {
            ssmDict[key] = value
        });
        return ssmDict;
    }

    /**
     * Invokes the current step on the input and will return a SimulationResult.
     * @param inputs must contain all of the inputs declared by the current step.
     * @returns a SimulationResult with the step outputs in the case of success or stacktrace in the case of failure.
     */
    public invoke(inputs: { [name: string]: any; }): SimulationResult {
        console.log("Executing Step: " + this.name)
        return this.invokeWithFallback(inputs)
    }

    /**
     * RunCommand Steps do not have outputs.
     * @returns []
     */
    public listOutputs(): Output[] {
        return [];
    }

    /**
     * If fallback/retries are specified for this step, the retry or skip logic is handled in this function.
     */
    private invokeWithFallback(allInputs: { [name: string]: any; }): SimulationResult {
        try {
            const filteredInputs = this.filterInputs(allInputs);
            this.inputObserver.accept(filteredInputs);
            this.tryExecute(filteredInputs);
            this.outputObserver.accept({});
            if (this.nextStep && !this.exitOnSuccess) {
                const nextStepRes = this.nextStep.invoke(allInputs);
                return this.formatResult(nextStepRes);
            } else {
                const finallyStep = this.runFinally(allInputs);
                const finallyList = finallyStep ? [finallyStep] : [];
                return {responseCode: ResponseCode.SUCCESS, executedSteps: [this.name, ...finallyList]};
            }
        } catch (error) {
            if (this.exitOnFailure) {
                const finallyStep = this.runFinally(allInputs);
                const finallyList = finallyStep ? [finallyStep] : [];
                return {
                    responseCode: ResponseCode.FAILED,
                    stackTrace: (error as Error).message + "\n" + (error as Error).stack,
                    executedSteps: [this.name, ...finallyList]
                };
            } else if (this.markSuccessAndExitOnFailure) {
                const finallyStep = this.runFinally(allInputs);
                const finallyList = finallyStep ? [finallyStep] : [];
                return {
                    responseCode: ResponseCode.SUCCESS,
                    stackTrace: (error as Error).message + "\n" + (error as Error).stack,
                    executedSteps: [this.name, ...finallyList]
                };
            }
            if (this.nextStep) {
                const nextStepRes = this.nextStep.invoke(allInputs);
                return this.formatResult(nextStepRes);
            } else {
                return {
                    responseCode: ResponseCode.FAILED,
                    stackTrace: (error as Error).message + "\n" + (error as Error).stack,
                    executedSteps: [this.name]
                };
            }
        }
    }

    private runFinally(allInputs: { [name: string]: any; }): string | undefined {
        let last: CommandStep = this;
        while(last.nextStep != undefined) {
            last = last.nextStep;
        }
        if (last.finallyStep && last != this) {
            last.invoke(allInputs);
            return last.name;
        }
        return undefined;
    }

    private formatResult(nextStepRes: SimulationResult) {
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
                executedSteps: this.prependSelf(nextStepRes.executedSteps)
            }
        }
    }

    /**
     * This function receives all of the available inputs and returns the subset of inputs that were requested.
     * If any input requested in the current step is not available in the received inputs, this will throw.
     * @param inputs all available inputs for the currently executing step
     * @returns the subset of inputs which are requested by the current step
     */
    private filterInputs(inputs: { [name: string]: any; }) {
        const foundAll = this.listInputs().every(required => Object.keys(inputs).includes(required));
        if (!foundAll) {
            throw new NonRetriableException(`Not all inputs required were provided. Required: ${this.listInputs()}. Provided: ${JSON.stringify(inputs)}`);
        }
        const filteredEntries = Object.entries(inputs).filter(entry => {
            const [key] = entry;
            return key.startsWith("global:") || key.startsWith("automation:") || this.listInputs().includes(key)
        });
        return Object.fromEntries(filteredEntries);
    }

    /**
     * Adds this step name to the list of executed steps.
     * Since the steps are invoked as a chain, the current step is prepended as invocation stack is popped.
     */
    protected prependSelf(futureSteps: string[]): string[] {
        return [this.name, ...futureSteps];
    }

    private tryExecute(inputs: { [name: string]: any; }): void {
        const start = Date.now();
        console.log(`Execute step ${this.name} start: ${start}`);
         this.executeStep(inputs);
        console.log(`Execute step ${this.name} end: ${Date.now()}`);
    }

    /**
     * Runs this step (and only this step) in simulation with the provided inputs.
     */
    public abstract executeStep(inputs: { [name: string]: any }): void;

    public variables(): { [name: string]: any; } {
        return Object.assign({}, ...this.listOutputs()
            .map(out => ({[out.name]: new StringVariable(`${this.name}.${out.name}`)})));
    }

}