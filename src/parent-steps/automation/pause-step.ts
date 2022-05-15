import {AutomationStep, AutomationStepProps} from "../automation-step";
import { Output } from "../../domain/output";
import { IPauseHook, PauseImpl } from "../../interface/pause-hook";
import { Construct } from 'constructs';

/**
 * Properties for PauseStep
 */
export interface PauseStepProps extends AutomationStepProps {

    /**
     * (Optional) Pause hook to be called to pause the execution.
     * To mock this implementation either inject an instance of IPauseHook or use the provided MockPause class.
     * @default PauseHook instance. PauseHook may not work in exported JSII languages. Override interface as needed.
     */
    readonly pauseHook?: IPauseHook;
}

/**
 * AutomationStep implementation for aws:pause
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-pause.html
 */
export class PauseStep extends AutomationStep {

    readonly pauseHook: IPauseHook;
    readonly action: string = 'aws:pause';

    constructor(scope: Construct, id: string, props: PauseStepProps) {
        super(scope, id, props);
        this.pauseHook = props.pauseHook ?? new PauseImpl();
    }

    /**
     * No outputs emitted from Pause step
     * @returns []
     */
    public listOutputs(): Output[] {
        return [];
    }

    /**
     * No inputs required for Pause step
     * @returns []
     */
    public listInputs(): string[] {
        return [];
    }

    /**
     * May perform a real pause based on the params used during instance creation.
     */
    public executeStep(_inputs: { [name: string]: any }): { [name: string]: any } {
        this.pauseHook.pause();
        return {};
    }

    public toSsmEntry(): { [name: string]: any; } {
        return super.prepareSsmEntry({});
    }

}
