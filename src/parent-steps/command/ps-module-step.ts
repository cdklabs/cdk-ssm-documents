import { Construct } from 'constructs';
import { Platform } from '../../domain/platform';
import { IStringVariable } from '../../interface/variables/string-variable';
import { CommandStep, CommandStepProps } from '../command-step';

/**
 * Properties for ps Module step.
 */
export interface PsModuleStepProps extends CommandStepProps {

  /**
     * Specify the commands to run or the path to an existing script on the instance.
     */
  readonly runCommand?: IStringVariable[];

  /**
     * The URL or local path on the instance to the application .zip file.
     * The name of the zip file must be the name of the module to be installed
     */
  readonly source: IStringVariable;

  /**
     * (Optional) The SHA256 hash of the .zip file
     */
  readonly sourceHash?: IStringVariable;

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
 * AutomationStep implemenation for aws:psmodule
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-psModule
 */
export class PsModuleStep extends CommandStep {

  readonly runCommand?: IStringVariable[];
  readonly source: IStringVariable;
  readonly sourceHash?: IStringVariable;
  readonly timeoutSeconds?: number;
  readonly workingDirectory?: IStringVariable;

  readonly platforms = [Platform.WINDOWS];
  readonly action = 'aws:psModule';

  constructor(scope: Construct, id: string, props: PsModuleStepProps) {
    super(scope, id, props);
    this.runCommand = props.runCommand;
    this.source = props.source;
    this.sourceHash = props.sourceHash;
    this.timeoutSeconds = props.timeoutSeconds;
    this.workingDirectory = props.workingDirectory;
  }

  /**
     * Inputs required for this command includes both the runCommand variables and workingDirectory if provided.
     */
  public listInputs(): string[] {
    return [
      ...this.runCommand?.flatMap(v => v.requiredInputs()) ?? [],
      ...this.source.requiredInputs(),
      ...this.workingDirectory?.requiredInputs() ?? [],
      ...this.sourceHash?.requiredInputs() ?? [],
    ];
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = { source: this.source };
    if (this.workingDirectory != undefined) {
      inputs.workingDirectory = this.workingDirectory;
    }
    if (this.timeoutSeconds != undefined) {
      inputs.timeoutSeconds = this.timeoutSeconds;
    }
    if (this.sourceHash != undefined) {
      inputs.sourceHash = this.sourceHash;
    }
    if (this.runCommand != undefined) {
      inputs.runCommand = this.runCommand;
    }
    return super.prepareSsmEntry(inputs);
  }

}