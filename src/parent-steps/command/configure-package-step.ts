import { Construct } from 'constructs';
import { IActionVariable } from '../../domain/enum/install-action';
import { IInstallationTypeVariable } from '../../domain/enum/installation-type';
import { IPackageNameVariable } from '../../domain/enum/package-name';
import { Platform } from '../../domain/platform';
import { IStringMapVariable } from '../../interface/variables/string-map-variable';
import { IStringVariable } from '../../interface/variables/string-variable';
import { CommandStep, CommandStepProps } from '../command-step';

/**
 * Properties ConfigurePackage step
 */
export interface ConfigurePackageStepProps extends CommandStepProps {

  /**
   * The name of the AWS package to install or uninstall.
   */
  readonly packageName: IPackageNameVariable;

  /**
   * Install or uninstall a package.
   */
  readonly packageAction: IActionVariable;

  /**
   * The type of installation to perform. If you specify Uninstall and reinstall, the package is completely uninstalled, and then reinstalled.
   * The application is unavailable until the reinstallation is complete.
   * If you specify In-place update, only new or changed files are added to the existing installation according you instructions you provide in an update script.
   * The application remains available throughout the update process.
   * The In-place update option isn't supported for AWS-published packages. Uninstall and reinstall is the default value.
   */
  readonly installationType?: IInstallationTypeVariable;

  /**
   * The additional parameters to provide to your install, uninstall, or update scripts. Each parameter must be prefixed with SSM_.
   * You can reference a Parameter Store parameter in your additional arguments by using the convention {{ssm:parameter-name}}.
   * To use the additional parameter in your install, uninstall, or update script,
   * you must reference the parameter as an environment variable using the syntax appropriate for the operating system.
   * For example, in PowerShell, you reference the SSM_arg argument as $Env:SSM_arg.
   * There is no limit to the number of arguments you define, but the additional argument input has a 4096 character limit.
   * This limit includes all of the keys and values you define.
   */
  readonly additionalArguments?: IStringMapVariable;

  /**
   * A specific version of the package to install or uninstall. If installing, the system installs the latest published version, by default.
   * If uninstalling, the system uninstalls the currently installed version, by default.
   * If no installed version is found, the latest published version is downloaded, and the uninstall action is run.
   */
  readonly version?: IStringVariable;

}

/**
 * CommandStep implemenation for aws:configurePackage
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-configurepackage
 */
export class ConfigurePackageStep extends CommandStep {

  readonly packageName: IPackageNameVariable;
  readonly packageAction: IActionVariable;
  readonly installationType?: IInstallationTypeVariable;
  readonly additionalArguments?: IStringMapVariable;
  readonly version?: IStringVariable;

  readonly platforms = [Platform.WINDOWS];
  readonly action = 'aws:configurePackage';

  constructor(scope: Construct, id: string, props: ConfigurePackageStepProps) {
    super(scope, id, props);
    this.packageName = props.packageName;
    this.packageAction = props.packageAction;
    this.installationType = props.installationType;
    this.additionalArguments = props.additionalArguments;
    this.version = props.version;
  }

  /**
   * Inputs required for this command include ...
   */
  public listInputs(): string[] {
    const inputs = [
      this.packageName,
      this.packageAction,
      this.installationType,
      this.additionalArguments,
      this.version,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = { name: this.packageName };
    inputs.action = this.packageAction;
    if (this.installationType != undefined) {
      inputs.installationType = this.installationType;
    }
    if (this.additionalArguments != undefined) {
      inputs.additionalArguments = this.additionalArguments;
    }
    if (this.version != undefined) {
      inputs.version = this.version;
    }
    return super.prepareSsmEntry(inputs);
  }

}
