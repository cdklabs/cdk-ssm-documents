import { SecureVariable } from './variables/secure-string-variable';

export abstract class AuthMethod {
  public static ofNone(): AuthMethod {
    return new NoAuthMethod();
  }
  public static ofBasic(userName: SecureVariable, password: SecureVariable): AuthMethod {
    return new UsernamePasswordAuthMethod('Basic', userName, password);
  }
  public static ofDigest(userName: SecureVariable, password: SecureVariable): AuthMethod {
    return new UsernamePasswordAuthMethod('Digest', userName, password);
  }

  abstract toEntry(): { [p: string]: any };
  abstract requiredInputs(): string[];
}

export class NoAuthMethod extends AuthMethod {
  requiredInputs(): string[] {
    return [];
  }

  toEntry(): { [p: string]: any } {
    return {
      authMethod: 'None',
    };
  }
}

export class UsernamePasswordAuthMethod extends AuthMethod {
  readonly authMethod: string;
  readonly userName: SecureVariable;
  readonly password: SecureVariable;
  constructor(authMethod: string, userName: SecureVariable, password: SecureVariable) {
    super();
    this.authMethod = authMethod;
    this.userName = userName;
    this.password = password;
  }
  requiredInputs(): string[] {
    const inputs = [
      this.userName,
      this.password,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  toEntry(): { [p: string]: any } {
    return {
      authMethod: this.authMethod,
      username: this.userName,
      password: this.password,
    };
  }
}
