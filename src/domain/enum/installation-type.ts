import { EnumVariable, HardCodedEnum } from '../../interface/variables/enum-variable';

/**
 * The type of installation to perform.
 * If you specify Uninstall and reinstall, the package is completely uninstalled, and then reinstalled.
 * The application is unavailable until the reinstallation is complete.
 * If you specify In-place update,
 * only new or changed files are added to the existing installation according you instructions you provide in an update script.
 * The application remains available throughout the update process.
 * The In-place update option isn't supported for AWS-published packages.
 * Uninstall and reinstall is the default value.
 */
export enum InstallationType {
  UNINSTALL_AND_REINSTALL = 'Uninstall and reinstall',
  IN_PLACE_UPDATE = 'In-place update',
}

/**
 * InstallationType variable
 */
export class InstallationTypeVariable extends EnumVariable<typeof InstallationType> {
  constructor(reference: string) {
    super(reference, InstallationType);
  }
}
/**
 * A hard coded InstallationType.
 */
export class HardCodedInstallationType extends HardCodedEnum<typeof InstallationType> {
  constructor(value: InstallationType) {
    super(value, InstallationType);
  }
}