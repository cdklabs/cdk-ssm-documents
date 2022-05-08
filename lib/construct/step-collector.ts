import { IAspect, IConstruct } from "@aws-cdk/core";
import { AutomationStep } from "../parent-steps/automation-step";
import { CommandStep } from "../parent-steps/command-step";

/**
 * Collects steps found in the tree using the visitor pattern (IAspect).
 */
export class StepCollector implements IAspect {

    /**
     * All AutomationSteps found in tree.
     */
    readonly automationSteps: AutomationStep[] = [];

    /**
     * All RunCommandSteps found in tree.
     */
    readonly runCommandSteps: CommandStep[] = [];

    /**
     * This is called prior to synthesis thereby allowing all Steps to be found.
     */
    public visit(node: IConstruct): void {
        if (node instanceof AutomationStep) {
            this.automationSteps.push(node);
        }
        if (node instanceof CommandStep) {
            this.runCommandSteps.push(node);
        }
    }
}
