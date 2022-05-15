import { Construct } from 'constructs';
import { SimulationResult } from '../domain/simulation-result';
import { CommandStep } from '../parent-steps/command-step';
import { SsmDocumentProps, SsmDocument } from './ssm-document';

export interface CommandDocumentProps extends SsmDocumentProps {

}

/**
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html
 * The CommandDocument will delegate execution responsibility to the CammandSteps that it receives.
 * The SsmDocument parent class contains methods to runSimulation() as well as print().
 */
export class CommandDocument extends SsmDocument {

  constructor(scope: Construct, id: string, props: CommandDocumentProps) {
    super(scope, id, props);
  }

  protected buildSsmDocument(): { [p: string]: any } {
    const runCommandSteps = this.collectedSteps().map(step => step.toSsmEntry());

    const root: { [name: string]: any } = {
      description: this.description,
      schemaVersion: '2.2',
      parameters: this.formatInputs(),
    };
    if (this.assumeRole) {
      root.assumeRole = this.assumeRole;
    }
    if (this.docOutputs.length > 0) {
      root.outputs = this.docOutputs;
    }
    root.mainSteps = runCommandSteps;
    return root;
  }

  protected collectedSteps(): CommandStep[] {
    if (this.stepCollector.runCommandSteps.length == 0) {
      throw new Error('No Steps found. Either you did not declare steps or did not synthesize CDK. ' +
                'Be sure to run cdk.SynthUtils.synthesize(stack) prior to printing or running simulation');
    }
    return this.stepCollector.runCommandSteps;
  }

  /**
     * Starts the execution of the steps by invoking the first step.
     * The subsequent steps will be invoked by the steps themselves.
     * @param inputs all of the inputs necessary for the document to execute.
     * @returns the outputs specified by all of the steps.
     */
  protected start(inputs: { [name: string]: any }): SimulationResult {
    const dateString = new Date().toISOString(); // Example 2021-10-08T08:44:02.106Z
    inputs['global:DATE'] = dateString.split('T')[0];
    inputs['global:DATE_TIME'] = dateString.split('.')[0]
      .replace('T', '_') // Example 2021-10-08_08:44:02
      .replace(/:/g, '.');
    const prefix = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
    inputs['automation:EXECUTION_ID'] = prefix + '-1a2b3c-1a2b3c-1a2b3c1a2b3c1a2b3c';
    return this.createChain(this.collectedSteps()).invoke(inputs);
  }

  /**
     * Chains the steps together in their default orientation (like a linked list).
     * The order of steps can change depending on the properties provided to the steps.
     * @returns the first step of the chain
     */
  private createChain(steps: CommandStep[]): CommandStep {
    const firstStep = steps[0];
    let previousStep: CommandStep = firstStep;
    steps.slice(1).forEach(s => {
      previousStep.nextStep = s;
      previousStep.allStepsInExecution = steps;
      previousStep = s;
    });
    return firstStep;
  }

}
