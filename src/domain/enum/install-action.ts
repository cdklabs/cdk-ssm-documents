import { assertString, HardCodedString, IStringVariable, StringVariable } from '../../interface/variables/string-variable';

export interface IActionVariable extends IStringVariable {
}

export class HardCodedAction extends HardCodedString implements IActionVariable {
  public static readonly INSTALL = new HardCodedAction('Install');
  public static readonly UNINSTALL = new HardCodedAction('Uninstall');
  private constructor(val: string) {
    super(val);
  }
}

export class ActionVariable extends StringVariable implements IActionVariable {
  readonly validValues = ['Install', 'Uninstall'];

  protected assertType(value: any): void {
    assertString(value);
    if (!this.validValues.includes(value)) {
      throw new Error(`${value} is not a valid enum value`);
    }
  }
}