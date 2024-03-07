import { Construct } from 'constructs';
import { IAutomationComponent } from '../construct/document-component';
import { Input } from '../domain/input';
import { AutomationStep } from '../parent-steps/automation-step';
import { AutomationDocumentBuilder } from './document-builder';
import { SsmDocumentProps, SsmDocument } from './ssm-document';

/**
 * Options for AutomationDocument
 */
export interface AutomationDocumentProps extends SsmDocumentProps {
  /**
   * (Optional) Custom document variables.
   */
  readonly docVariables?: Input[];
}

/**
 * The AutomationDocument used to both build the SSM Automation yaml/json and to use in simulation.
 * The AutomationDocument will delegate execution responsibility to the AutomationSteps that it receives.
 * The SsmDocument parent class contains methods to runSimulation() as well as print().
 */
export class AutomationDocument extends SsmDocument {

  readonly docVariables?: Input[];
  readonly builder: AutomationDocumentBuilder;

  constructor(scope: Construct, id: string, props: AutomationDocumentProps) {
    super(scope, id, props);
    this.docVariables = props.docVariables;
    this.builder = new AutomationDocumentBuilder();
  }

  public addStep(component: IAutomationComponent) {
    component.addToDocument(this.builder);
  }

  public collectedSteps(): AutomationStep[] {
    this.validateOutputs(this.builder.steps);
    if (this.builder.steps.length == 0) {
      throw new Error('No Steps found. Either you did not declare steps or did not synthesize CDK. ' +
                'Be sure to run cdk.SynthUtils.synthesize(stack) prior to printing or running simulation');
    }
    return this.builder.steps;
  }

  protected formatVariables(): { [name: string]: any } {
    const ssmVariables: {[name: string]: any} = {};
    this.docVariables?.forEach(inp => {
      ssmVariables[inp.name] = inp.toSsm();
    });
    return ssmVariables;
  }

  /**
     * @returns an object that can be used to build the json/yaml string representation of this document.
     */
  protected buildSsmDocument(): { [name: string]: any } {
    const automationSteps = this.collectedSteps().map(step => step.toSsmEntry());

    const root: { [name: string]: any } = {
      description: this.description,
      schemaVersion: '0.3',
      parameters: this.formatInputs(),
    };
    if (this.assumeRole) {
      root.assumeRole = this.assumeRole;
    }
    if (this.docOutputs.length > 0) {
      root.outputs = this.docOutputs.map(o => o.name);
    }
    if (this.docVariables) {
      root.variables = this.formatVariables();
    }
    root.mainSteps = automationSteps;
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

  public documentType(): string {
    return 'Automation';
  }

}
