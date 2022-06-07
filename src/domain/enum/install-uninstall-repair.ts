import { assertString, HardCodedString, IStringVariable, StringVariable } from '../../interface/variables/string-variable';

export interface IInstallUninstallRepairVariable extends IStringVariable {
}

export class HardCodedInstallUninstallRepair extends HardCodedString implements IInstallUninstallRepairVariable {
  public static readonly INSTALL = new HardCodedInstallUninstallRepair('Install');
  public static readonly REPAIR = new HardCodedInstallUninstallRepair('Repair');
  public static readonly UNINSTALL = new HardCodedInstallUninstallRepair('Uninstall');
  private constructor(val: string) {
    super(val);
  }
}

export class InstallUninstallRepairVariable extends StringVariable implements IInstallUninstallRepairVariable {
  readonly validValues = ['Install', 'Repair', 'Uninstall'];

  protected assertType(value: any): void {
    assertString(value);
    if (!this.validValues.includes(value)) {
      throw new Error(`${value} is not a valid enum value`);
    }
  }
}

