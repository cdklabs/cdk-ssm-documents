import { ExecuteAutomationProps, ExecuteAutomationStep, IExecuteAutomationHook } from '../..';
import { AutomationSimulationBase } from './automation-simulation-base';

/**
 * Properties for ExecuteAutomationStep
 */
export interface ExecuteAutomationSimulationProps {
  /**
   * Hook for simulating aws:executeAutomation.
   * @default - Uses AWS API to execute the document remotely.
   */
  readonly executeAutomationHook: IExecuteAutomationHook;
}

/**
 * AutomationStep implementation of [aws:executeAutomation](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeAutomation.html)
 */
export class ExecuteAutomationSimulation extends AutomationSimulationBase {
  readonly action = 'aws:executeAutomation';
  private executeAutomationStep: ExecuteAutomationStep;
  private props: ExecuteAutomationSimulationProps;

  constructor(step: ExecuteAutomationStep, props: ExecuteAutomationSimulationProps) {
    super(step);
    this.executeAutomationStep = step;
    this.props = props;
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    const props: ExecuteAutomationProps = {
      documentName: this.executeAutomationStep.documentName.resolveToString(inputs),
      documentVersion: this.executeAutomationStep.documentVersion?.resolveToString(inputs),
      maxConcurrency: this.executeAutomationStep.maxConcurrency?.resolveToString(inputs),
      maxErrors: this.executeAutomationStep.maxErrors?.resolveToString(inputs),
      runtimeParameters: this.executeAutomationStep.runtimeParameters?.resolveToStringMap(inputs),
      tags: this.executeAutomationStep.tags?.resolveToMapList(inputs),
      targetLocations: this.executeAutomationStep.targetLocations?.resolveToMapList(inputs),
      targetMaps: this.executeAutomationStep.targetMaps?.resolveToMapList(inputs),
      targetParameterName: this.executeAutomationStep.targetParameterName?.resolveToString(inputs),
      targets: this.executeAutomationStep.targets?.resolveToMapList(inputs),
    };

    console.log('ExecuteAutomation: Executing automation hook');
    const result = this.props.executeAutomationHook.execute(props);
    console.log('ExecuteAutomation: Finished executing hook');

    return {
      ExecutionId: result.executionId,
      Status: result.status,
      Output: result.output,
    };
  }

}