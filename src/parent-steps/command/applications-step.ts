import { Construct } from 'constructs';
import { IInstallUninstallRepairVariable } from '../../domain/enum/install-uninstall-repair';
import { Platform } from '../../domain/platform';
import { IStringVariable } from '../../interface/variables/string-variable';
import { CommandStep, CommandStepProps } from '../command-step';

export interface ApplicationsStepProps extends CommandStepProps {

  /*
  * The action to take.
  */
  readonly action: IInstallUninstallRepairVariable;

  /*
  * The parameters for the installer.
  */
  readonly parameters?: IStringVariable;

  /*
  * The URL of the .msi file for the application.
  */
  readonly source: IStringVariable;

  /*
  * The SHA256 hash of the .msi file.
  */
  readonly sourceHash?: IStringVariable;

}

/**
 * CommandStep implemenation for aws:applications
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-applications
 */
export class ApplicationsStep extends CommandStep {

  readonly installAction: IInstallUninstallRepairVariable;
  readonly parameters?: IStringVariable;
  readonly source: IStringVariable;
  readonly sourceHash?: IStringVariable;

  readonly platforms = [Platform.WINDOWS, Platform.LINUX];
  readonly action = 'aws:applications';

  constructor(scope: Construct, id: string, props: ApplicationsStepProps) {
    super(scope, id, props);
    this.installAction = props.action;
    this.parameters = props.parameters;
    this.source = props.source;
    this.sourceHash = props.sourceHash;
  }

  public listInputs(): string[] {
    const inputs = [
      this.installAction,
      this.parameters,
      this.source,
      this.sourceHash,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = {
      action: this.installAction,
      source: this.source,
    };
    if (this.parameters != undefined) {
      inputs.parameters = this.parameters;
    }
    if (this.sourceHash != undefined) {
      inputs.sourceHash = this.sourceHash;
    }
    return super.prepareSsmEntry(inputs);
  }

}
