import { IBooleanVariable } from '../';
import { AuthMethod } from './auth-method';
import { SecureVariable } from './variables/secure-string-variable';
import { IStringVariable } from './variables/string-variable';

export interface IDownloadableContent {
  readonly sourceType: string;
  requiredInputs(): string[];
  formatSourceInfo(): { [name: string]: any };
}

/**
 * Properties for sourceType GitHub
 */
export interface GitHubContentProps {
  /**
   * The repository owner.
   */
  readonly owner: IStringVariable;

  /**
   * The name of the repository.
   */
  readonly repository: IStringVariable;

  /**
   * The path to the file or directory you want to download.
   */
  readonly path: IStringVariable;

  /**
   * The Systems Manager parameter (a SecureString parameter) where you store your GitHub access token information.
   */
  readonly tokenInfo: SecureVariable;

  /**
   * The default is master.
   * branch parameter is required only if your SSM document is stored in a branch other than master.
   * Supply either commitId or branch (or neither).
   * @example main
   */
  readonly branch?: string;

  /**
   * The default is head.
   * To use the version of your SSM document in a commit other than the latest, specify the full commit ID.
   * For example: "bbc1ddb94...b76d3bEXAMPLE".
   * Supply either commitId or branch (or neither).
   */
  readonly commitId?: string;

}

export class GitHubContent implements IDownloadableContent {
  readonly sourceType = 'GitHub';

  readonly owner: IStringVariable;
  readonly repository: IStringVariable;
  readonly path: IStringVariable;
  readonly tokenInfo: SecureVariable;
  readonly branch?: string;
  readonly commitId?: string;
  constructor(props: GitHubContentProps) {
    this.owner = props.owner;
    this.repository = props.repository;
    this.path = props.path;
    this.tokenInfo = props.tokenInfo;
    this.branch = props.branch;
    this.commitId = props.commitId;
    if (this.branch != undefined && this.commitId != undefined) {
      throw new Error('May define either branch or commitId, not both');
    }
  }

  requiredInputs(): string[] {
    const inputs = [
      this.owner,
      this.repository,
      this.path,
      this.tokenInfo,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  formatSourceInfo(): { [name: string]: any } {
    const sourceInfo: { [name: string]: any } = {
      owner: this.owner,
      repository: this.repository,
      path: this.path,
      tokenInfo: this.tokenInfo,
    };
    if (this.branch != undefined) {
      sourceInfo.getOptions = `branch:${this.branch}`;
    }
    if (this.commitId != undefined) {
      sourceInfo.getOptions = `commitID:${this.commitId}`;
    }
    return sourceInfo;
  }
}

/**
 * Properties for sourceType Git
 */
export interface GitContentProps {
  /**
   * The username to use when connecting to the repository you specify using HTTP.
   */
  readonly userName?: SecureVariable;

  /**
   * The password to use when connecting to the repository you specify using HTTP.
   */
  readonly password?: SecureVariable;

  /**
   * The Git repository URL to the file or directory you want to download.
   */
  readonly repository: IStringVariable;


  /**
   * The SSH key to use when connecting to the repository you specify.
   */
  readonly privateSshKey?: SecureVariable;

  /**
   * Determines the value of the StrictHostKeyChecking option when connecting to the repository you specify.
   * The default value is false.
   */
  readonly skipHostKeyChecking?: IBooleanVariable;

  /**
   * The default is master.
   * branch parameter is required only if your SSM document is stored in a branch other than master.
   * Supply either commitId or branch (or neither).
   * @example main
   */
  readonly branch?: string;

  /**
   * The default is head.
   * To use the version of your SSM document in a commit other than the latest, specify the full commit ID.
   * For example: "bbc1ddb94...b76d3bEXAMPLE".
   * Supply either commitId or branch (or neither).
   */
  readonly commitId?: string;
}

export class GitContent implements IDownloadableContent {
  readonly sourceType = 'Git';

  readonly userName?: SecureVariable;
  readonly password?: SecureVariable;
  readonly repository: IStringVariable;
  readonly privateSshKey?: SecureVariable;
  readonly skipHostKeyChecking?: IBooleanVariable;
  readonly branch?: string;
  readonly commitId?: string;
  constructor(props: GitContentProps) {
    this.userName = props.userName;
    this.password = props.password;
    this.repository = props.repository;
    this.privateSshKey = props.privateSshKey;
    this.skipHostKeyChecking = props.skipHostKeyChecking;
    this.branch = props.branch;
    this.commitId = props.commitId;
  }

  requiredInputs(): string[] {
    const inputs = [
      this.repository,
      this.skipHostKeyChecking,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  formatSourceInfo(): { [name: string]: any } {
    const sourceInfo: { [name: string]: any } = {
      repository: this.repository,
    };
    if (this.skipHostKeyChecking != undefined) {
      sourceInfo.skipHostKeyChecking = this.skipHostKeyChecking;
    }
    if (this.privateSshKey != undefined) {
      sourceInfo.privateSSHKey = this.privateSshKey;
    }
    if (this.userName != undefined) {
      sourceInfo.username = this.userName;
    }
    if (this.password != undefined) {
      sourceInfo.password = this.password;
    }
    if (this.branch != undefined) {
      sourceInfo.getOptions = `branch:${this.branch}`;
    }
    if (this.commitId != undefined) {
      sourceInfo.getOptions = `commitID:${this.commitId}`;
    }
    return sourceInfo;
  }

}

/**
 * Properties for sourceType HTTP
 */
export interface HttpContentProps {
  /**
   * The URL to the file or directory you want to download.
   */
  readonly url: IStringVariable;

  /**
   * Determines whether a download can be performed over a connection that isn't encrypted with Secure Socket Layer (SSL) or Transport Layer Security (TLS).
   * The default value is false. We don't recommend performing downloads without encryption. If you choose to do so, you assume all associated risks.
   * Security is a shared responsibility between AWS and you. This is described as the shared responsibility model. To learn more, see the shared responsibility model.
   */
  readonly allowInsecureDownload?: IBooleanVariable;

  /**
   * Determines whether a username and password are used for authentication when connecting to the url you specify.
   * If you specify Basic or Digest, you must provide values for the username and password parameters.
   * To use the Digest method, SSM Agent version 3.0.1181.0 or later must be installed on your instance. The Digest method supports MD5 and SHA256 encryption.
   */
  readonly authMethod?: AuthMethod;

}

export class HttpContent implements IDownloadableContent {
  readonly sourceType = 'HTTP';

  readonly url: IStringVariable;
  readonly allowInsecureDownload?: IBooleanVariable;
  readonly authMethod?: AuthMethod;
  constructor(props: HttpContentProps) {
    this.url = props.url;
    this.allowInsecureDownload = props.allowInsecureDownload;
    this.authMethod = props.authMethod;
  }

  requiredInputs(): string[] {
    const inputs = [
      this.url,
      this.allowInsecureDownload,
    ];
    return [...inputs.flatMap(i => i?.requiredInputs() ?? []), ...(this.authMethod?.requiredInputs() ?? [])];
  }

  formatSourceInfo(): { [p: string]: any } {
    const sourceInfo: { [name: string]: any } = {
      url: this.url,
    };
    if (this.allowInsecureDownload != undefined) {
      sourceInfo.allowInsecureDownload = this.allowInsecureDownload;
    }
    if (this.authMethod != undefined) {
      return {
        ...sourceInfo,
        ...this.authMethod.toEntry(),
      };
    }
    return sourceInfo;
  }

}

/**
 * Properties.json for sourceType GitHub
 */
export interface S3ContentProps {
  /**
   * The URL to the file or directory you want to download.
   */
  readonly path: IStringVariable;

}

export class S3Content implements IDownloadableContent {
  readonly sourceType = 'S3';

  readonly path: IStringVariable;
  constructor(props: S3ContentProps) {
    this.path = props.path;
  }

  requiredInputs(): string[] {
    const inputs = [
      this.path,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  formatSourceInfo(): { [p: string]: any } {
    return { path: this.path };
  }

}

/**
 * Properties.json for sourceType SsmDocument
 */
export interface SsmDocumentContentProps {
  /**
   * specify one of the following
   * The name and version of the document in the following format: name:version. Version is optional.
   * or The ARN for the document in the following format: arn:aws:ssm:region:account_id:document/document_name
   */
  readonly documentSource: DocumentSource;

}

export abstract class DocumentSource {
  static fromArn(arn: IStringVariable): DocumentSource {
    return new ArnDoc(arn);
  }

  static fromName(name: IStringVariable, version?: IStringVariable): DocumentSource {
    return new NameDoc(name, version);
  }

  abstract formatRequest(): { [name: string]: any };

  abstract requiredInputs(): string[];

}

export class ArnDoc extends DocumentSource {
  readonly arn: IStringVariable;
  constructor(arn: IStringVariable) {
    super();
    this.arn = arn;
  }
  formatRequest(): { [name: string]: any } {
    return { Name: this.arn };
  }

  requiredInputs(): string[] {
    return this.arn.requiredInputs();
  }
}

export class NameDoc extends DocumentSource {
  readonly name: IStringVariable;
  readonly version?: IStringVariable;
  constructor(name: IStringVariable, version?: IStringVariable) {
    super();
    this.name = name;
    this.version = version;
  }
  formatRequest(): { [name: string]: any } {
    if (this.version != undefined) {
      return { Name: this.name.print() + ':' + this.version.print() };
    }
    return { Name: this.name };
  }
  requiredInputs(): string[] {
    return [...this.name.requiredInputs(), ...this.version?.requiredInputs() ?? []];
  }
}

export class SSMDocumentContent implements IDownloadableContent {
  readonly sourceType = 'SSMDocument';

  readonly documentSource: DocumentSource;
  constructor(props: SsmDocumentContentProps) {
    this.documentSource = props.documentSource;
  }

  formatSourceInfo(): { [p: string]: any } {
    return this.documentSource.formatRequest();
  }

  requiredInputs(): string[] {
    return this.documentSource.requiredInputs();
  }
}
