import { IRunCommandHook, RunCommandProps } from '../../interface/run-command-hook';
import { RunCommandStep } from '../../parent-steps/automation/run-command-step';
import { AutomationSimulationBase } from './automation-simulation-base';

/**
 * Properties for RunCommandStep
 */
export interface RunCommandSimulationProps {
  /**
   * Hook for simulating aws:runCommand.
   * @default - Uses AWS API to execute the document remotely.
   */
  readonly runCommandHook: IRunCommandHook;
}

/**
 * AutomationStep implementation of [aws:runCommand](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-runcommand.html)
 */
export class RunCommandSimulation extends AutomationSimulationBase {
  readonly action = 'aws:runCommand';
  private runCommandStep: RunCommandStep;
  private props: RunCommandSimulationProps;

  constructor(step: RunCommandStep, props: RunCommandSimulationProps) {
    super(step);
    this.runCommandStep = step;
    this.props = props;
  }

  /**
     * May perform a real approval ask based on the params used during instance creation.
     */
  public executeStep(inputs: Record<string, any>): Record<string, any> {
    const props: RunCommandProps = {
      documentName: this.runCommandStep.documentName?.resolve(inputs),
      targets: this.runCommandStep.targets?.resolve(inputs),
      parameters: this.runCommandStep.parameters?.resolve(inputs),
      cloudWatchOutputConfig: this.runCommandStep.cloudWatchOutputConfig?.resolve(inputs),
      comment: this.runCommandStep.comment?.resolve(inputs),
      documentHash: this.runCommandStep.documentHash?.resolve(inputs),
      documentHashType: this.runCommandStep.documentHashType?.resolve(inputs),
      notificationConfig: this.runCommandStep.notificationConfig?.resolve(inputs),
      outputS3BucketName: this.runCommandStep.outputS3BucketName?.resolve(inputs),
      outputS3KeyPrefix: this.runCommandStep.outputS3KeyPrefix?.resolve(inputs),
      serviceRoleArn: this.runCommandStep.serviceRoleArn?.resolve(inputs),
      timeoutSeconds: this.runCommandStep.commandTimeoutSeconds?.resolve(inputs),
      maxConcurrency: this.runCommandStep.maxConcurrency?.resolve(inputs),
      maxErrors: this.runCommandStep.maxErrors?.resolve(inputs),
    };

    console.log('RunCommand: Executing run command hook');
    const result = this.props.runCommandHook.execute(props);
    console.log('RunCommand: Finished executing hook');

    return {
      CommandId: result.commandId,
      Status: result.status,
      ResponseCode: result.responseCode ?? null,
      Output: result.output ?? null,
    };
  }

}