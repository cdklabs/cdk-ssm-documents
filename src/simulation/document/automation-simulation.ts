import { AutomationDocument } from '../../document/automation-document';
import { SimulationResult } from '../../domain/simulation-result';
import { AutomationStep } from '../../parent-steps/automation-step';
import { AutomationStepSimulation } from '../automation-step-simulation';
import { SimulationProps } from '../simulation';

export class AutomationSimulation {
  private automationDocument: AutomationDocument;
  private props: SimulationProps;

  constructor(automationDocument: AutomationDocument, props: SimulationProps) {
    this.automationDocument = automationDocument;
    this.props = props;
  }

  /**
   * Starts the execution of the steps by invoking the first step.
   * The subsequent steps will be invoked by the steps themselves.
   * @param inputs all of the inputs necessary for the document to execute.
   * @returns the outputs specified by all the steps.
   */
  public start(inputs: { [name: string]: any }): SimulationResult {
    const dateString = new Date().toISOString(); // Example 2021-10-08T08:44:02.106Z
    inputs['global:DATE'] = dateString.split('T')[0];
    inputs['global:DATE_TIME'] = dateString.split('.')[0]
      .replace('T', '_') // Example 2021-10-08_08:44:02
      .replace(/:/g, '.');
    const prefix = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
    inputs['automation:EXECUTION_ID'] = prefix + '-1a2b3c-1a2b3c-1a2b3c1a2b3c1a2b3c';
    return new AutomationStepSimulation(this.createChain(this.automationDocument.collectedSteps()), this.props).invoke(inputs);
  }

  /**
   * Chains the steps together in their default orientation (like a linked list).
   * The order of steps can change depending on the properties provided to the steps.
   * @returns the first step of the chain
   */
  private createChain(steps: AutomationStep[]): AutomationStep {
    const firstStep = steps[0];
    let previousStep: AutomationStep = firstStep;
    steps.slice(1).forEach(s => {
      previousStep.nextStep = s;
      previousStep.allStepsInExecution = steps;
      previousStep = s;
    });
    return firstStep;
  }
}