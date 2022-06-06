import { assertString, HardCodedString, IStringVariable, StringVariable } from '../../interface/variables/string-variable';

export interface IInstallationTypeVariable extends IStringVariable {
}

export class HardCodedInstallationType extends HardCodedString implements IInstallationTypeVariable {
  public static readonly UNINSTALL_AND_REINSTALL = new HardCodedInstallationType('Uninstall and reinstall');
  public static readonly IN_PLACE_UPDATE = new HardCodedInstallationType('In-place update');
  private constructor(val: string) {
    super(val);
  }
}

export class InstallationTypeVariable extends StringVariable implements IInstallationTypeVariable {
  readonly validValues = ['Uninstall and reinstall', 'In-place update'];

  protected assertType(value: any): void {
    assertString(value);
    if (!this.validValues.includes(value)) {
      throw new Error(`${value} is not a valid enum value`);
    }
  }
}
