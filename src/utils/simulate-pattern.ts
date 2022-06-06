import { Stack } from 'aws-cdk-lib';
import { IAutomationComponent } from '../construct/document-component';
import { AutomationDocument } from '../document/automation-document';
import { DocumentResult } from '../domain/document-result';
import { Simulation, SimulationProps } from '../simulation/simulation';

export function simulatePattern(automationComponent: IAutomationComponent, simulationProps: SimulationProps, inputs: Record<string, any>):
DocumentResult {
  const stack = new Stack();
  const document = new AutomationDocument(stack, 'SimulatePatternDoc', {});
  document.addStep(automationComponent);
  return Simulation.ofAutomation(document, simulationProps).simulate(inputs);
}