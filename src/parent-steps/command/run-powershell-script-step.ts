import { Construct } from 'constructs';
import { Platform } from '../../domain/platform';
import { IStringVariable } from '../../interface/variables/string-variable';
import { CommandStep, CommandStepProps } from '../command-step';

/**
 * Properties for runPowerShellScript step.
 */
export interface RunPowerShellScriptStepProps extends CommandStepProps {

  /**
     * Specify the commands to run or the path to an existing script on the instance.
     */
  readonly runCommand: IStringVariable[];

  /**
     * (Optional) The time in seconds for a command to be completed before it's considered to have failed.
     * When the timeout is reached, Systems Manager stops the command execution.
     */
  readonly timeoutSeconds?: number;

  /**
     * (Optional) The path to the working directory on your instance.
     */
  readonly workingDirectory?: IStringVariable;

}

/**
 * AutomationStep implementation for aws:runPowerShellScript
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-runPowerShellScript
 */
export class RunPowerShellScriptStep extends CommandStep {

  readonly runCommand: IStringVariable[];
  readonly timeoutSeconds?: number;
  readonly workingDirectory?: IStringVariable;

  readonly platforms = [Platform.WINDOWS];
  readonly action = 'aws:runPowerShellScript';

  constructor(scope: Construct, id: string, props: RunPowerShellScriptStepProps) {
    super(scope, id, props);
    this.runCommand = props.runCommand;
    this.timeoutSeconds = props.timeoutSeconds;
    this.workingDirectory = props.workingDirectory;
  }

  /**
     * Inputs required for this command includes both the runCommand variables and workingDirectory if provided.
     */
  public listInputs(): string[] {
    return [
      ...this.runCommand.flatMap(v => v.requiredInputs()),
      ...this.workingDirectory?.requiredInputs() ?? [],
    ];
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = { runCommand: this.runCommand };
    if (this.workingDirectory != undefined) {
      inputs.workingDirectory = this.workingDirectory;
    }
    if (this.timeoutSeconds != undefined) {
      inputs.timeoutSeconds = this.timeoutSeconds;
    }
    return super.prepareSsmEntry(inputs);
  }

}
