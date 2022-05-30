import { CommandDocument } from '../../document/command-document';
import { Platform } from '../../domain/platform';
import { SimulationResult } from '../../domain/simulation-result';
import { LoggingEnvironment } from '../../interface/environment';
import { CommandStep } from '../../parent-steps/command-step';
import { CommandStepSimulation, RequiredCommandSimulationProps } from '../command-step-simulation';
import { SimulationProps } from '../simulation';

export class CommandSimulation {
  private commandDocument: CommandDocument;
  private props: RequiredCommandSimulationProps;

  constructor(commandDocument: CommandDocument, props: SimulationProps) {
    this.commandDocument = commandDocument;
    this.props = {
      environment: props.environment ?? new LoggingEnvironment(),
      simulationPlatform: props.simulationPlatform ?? Platform.LINUX,
    };
  }

  public start(inputs: { [name: string]: any }): SimulationResult {
    const dateString = new Date().toISOString(); // Example 2021-10-08T08:44:02.106Z
    inputs['global:DATE'] = dateString.split('T')[0];
    inputs['global:DATE_TIME'] = dateString.split('.')[0]
      .replace('T', '_') // Example 2021-10-08_08:44:02
      .replace(/:/g, '.');
    const prefix = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
    inputs['automation:EXECUTION_ID'] = prefix + '-1a2b3c-1a2b3c-1a2b3c1a2b3c1a2b3c';
    return new CommandStepSimulation(this.createChain(this.commandDocument.collectedSteps()), this.props).invoke(inputs);
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
