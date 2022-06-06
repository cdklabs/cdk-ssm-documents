import { EnumVariable, HardCodedEnum } from '../../interface/variables/enum-variable';

export enum Action {
  INSTALL = 'Install',
  UNINSTALL = 'Uninstall',
}

/**
 * Action variable
 */
export class ActionVariable extends EnumVariable<typeof Action> {
  constructor(value: string) {
    super(value, Action);
  }
}

/**
 * A hard coded Action.
 */
export class HardCodedAction extends HardCodedEnum<typeof Action> {
  constructor(value: Action) {
    super(value, Action);
  }
}
