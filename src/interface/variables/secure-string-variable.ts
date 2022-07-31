import { IGenericVariable } from './variable';

/**
 * A secure string variable. Only supported by Command documents (only supported in downloadContent plugin).
 */
export abstract class SecureVariable implements IGenericVariable {
  public static ofSecureToken(secureToken: string): SsmSecureVariable {
    return new SsmSecureVariable(secureToken);
  }
  public static ofParameter(reference: string): NonSecureVariable {
    return new NonSecureVariable(reference);
  }
  public static ofValue(value: string): HardCodedSecureVariable {
    return new HardCodedSecureVariable(value);
  }

  abstract print(): any;

  abstract requiredInputs(): string[];

  abstract resolve(inputs: Record<string, any>): any;

  toJSON(): any {
    return this.print();
  }
}

/**
 * A hard-coded string variable.
 * Used when not dependent on step inputs.
 */
export class HardCodedSecureVariable extends SecureVariable {
  readonly val: string;

  constructor(val: string) {
    super();
    this.val = val;
  }

  print(): any {
    return this.val;
  }

  requiredInputs(): string[] {
    return [];
  }

  resolve(_inputs: Record<string, any>): any {
    return this.val;
  }
}

/**
 * A string variable reference.
 * Used to resolve the value from step inputs.
 */
export class NonSecureVariable extends SecureVariable {
  readonly reference: string;
  constructor(reference: string) {
    super();
    this.reference = reference;
  }

  resolve(inputs: Record<string, any>): any {
    const result = inputs[this.reference];
    if (result === undefined) { return result; }
    return result;
  }

  print(): string | any {
    return `{{ ${this.reference} }}`;
  }

  requiredInputs(): string[] {
    return [this.reference];
  }
}
export class SsmSecureVariable extends SecureVariable {
  readonly secureToken: string;
  constructor(secureToken: string) {
    super();
    this.secureToken = secureToken;
  }

  resolve(_inputs: Record<string, any>): any {
    throw new Error('Not yet supported');
  }

  print(): string | any {
    return `{{ ssm-secure:${this.secureToken} }}`;
  }

  requiredInputs(): string[] {
    return [];
  }
}