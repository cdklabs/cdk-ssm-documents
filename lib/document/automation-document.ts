import { SimulationResult } from "../domain/simulation-result";
import { AutomationStep } from "../parent-steps/automation-step";
import { SsmDocumentProps, SsmDocument } from "./ssm-document";
import { Construct } from "@aws-cdk/core";

/**
 * Options for AutomationDocument
 */
export interface AutomationDocumentProps extends SsmDocumentProps {

}

/**
 * The AutomationDocuemnt used to both build the SSM Automation yaml/json and to use in simulation.
 * The AutomationDocument will delegate execution responsibility to the AutomationSteps that it receives.
 * The SsmDocument parent class contains methods to runSimulation() as well as print().
 */
export class AutomationDocument extends SsmDocument {

    constructor(scope: Construct, id: string, props: AutomationDocumentProps) {
        super(scope, id, props);
    }

    /**
     * Starts the execution of the steps by invoking the first step.
     * The subsequent steps will be invoked by the steps themselves.
     * @param inputs all of the inputs necessary for the document to execute.
     * @returns the outputs specified by all of the steps.
     */
    protected start(inputs: { [name: string]: any; }): SimulationResult {
        require('ts-node');
        const dateString = new Date().toISOString(); // Example 2021-10-08T08:44:02.106Z
        inputs['global:DATE'] = dateString.split('T')[0];
        inputs['global:DATE_TIME'] = dateString.split(".")[0]
            .replace('T', '_') // Example 2021-10-08_08:44:02
            .replace(/:/g, '.');
        const prefix = Math.floor(Math.random() * 999999).toString().padStart(6 ,"0");
        inputs['automation:EXECUTION_ID'] = prefix + '-1a2b3c-1a2b3c-1a2b3c1a2b3c1a2b3c';
        return this.createChain(this.collectedSteps()).invoke(inputs);
    }

    /**
     * Chains the steps together in their default orientation (like a linked list).
     * The order of steps can change depending on the properties provided to the steps.
     * @returns the first step of the chain
     */
     private createChain(steps: AutomationStep[]): AutomationStep {
        const firstStep = steps[0];
        var previousStep: AutomationStep = firstStep;
        steps.slice(1).forEach(s => {
            previousStep.nextStep = s;
            previousStep.allStepsInExecution = steps;
            previousStep = s;
        });
        return firstStep;
    }

    protected collectedSteps(): AutomationStep[] {
        this.validateOutputs(this.stepCollector.automationSteps);
        if (this.stepCollector.automationSteps.length == 0) {
            throw new Error(`No Steps found. Either you did not declare steps or did not synthesize CDK. ` +
                `Be sure to run cdk.SynthUtils.synthesize(stack) prior to printing or running simulation`)
        }
        return this.stepCollector.automationSteps;
    }

    /**
     * @returns an object that can be used to build the json/yaml string representation of this document.
     */
    protected buildSsmDocument(): { [name: string]: any; } {
        const automationSteps = this.collectedSteps().map(step => step.toSsmEntry());

        const root: { [name: string]: any; } = {
            'description': this.description,
            'schemaVersion': '0.3',
            'parameters': this.formatInputs()}
        if (this.assumeRole) {
            root['assumeRole'] = this.assumeRole;
        }
        if (this.docOutputs.length > 0){
            root['outputs'] = this.docOutputs;
        }
        root['mainSteps'] = automationSteps;
        return root;
    }

    /**
     * Ensures that all outputs specified in the Automation document are valid and that the steps and outputs exist.
     * Throws if any output specified cannot be found.
     */
    private validateOutputs(steps: AutomationStep[]) {
        this.docOutputs.forEach(docOutput => {
            if (!docOutput.name.includes('.')) {
                throw new Error(`Automation document outputs must be formatted Step.OutputName, failed validation: ${docOutput}`);
            }
            const stepAndOutput = docOutput.name.split('.');
            const stepOfOutput = steps.filter(step => step.name == stepAndOutput[0]);
            if (stepOfOutput.length != 1) {
                throw new Error(`Document must contain the step for output ${docOutput.name} but found: ${JSON.stringify(stepOfOutput)}`);
            }
            if (!stepOfOutput[0].listOutputs().map(out => out.name).includes(stepAndOutput[1])) {
                throw new Error(`Cannot find output ${JSON.stringify(docOutput)} specified as an output of step ${stepOfOutput[0].name}`);
            }
        });
    }

}
