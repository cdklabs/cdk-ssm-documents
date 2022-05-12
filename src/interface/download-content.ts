import {IStringVariable} from "./variables/string-variable";
import {
    HardCodedString,
    HardCodedBoolean,
    IBooleanVariable
}from "../"

export enum SourceType {
    GITHUB=1,
    GIT,
    HTTP,
    S3,
    SSMDOCUMENT
}


export interface IDownloadableContent {
}

/**
 * getOptions: Extra options to retrieve content from a branch other than master or from a specific commit in the repository.
 * getOptions can be omitted if you're using the latest commit in the master branch.
 * If your repository was created after October 1, 2020 the default branch might be named main instead of master.
 * In this case, you will need to specify values for the getOptions parameter.
 */
export class Options {
    readonly branch: IStringVariable = new HardCodedString("master");
    readonly commitID: IStringVariable = new HardCodedString("head");
    constructor(branch?:IStringVariable,commitID?:IStringVariable) {
        if(branch != undefined) {
            this.branch = branch; }
        if(commitID != undefined) {
            this.commitID = commitID; }
    }
}
/**
 * Properties.json for sourceType GitHub
 */
export interface IGitHubContent extends IDownloadableContent {
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
     * The Systems Manager parameter (a SecureString parameter) where you store your GitHub access token information, in the format {{ssm-secure:secure-string-token-name}}.
     */
    readonly tokenInfo: IStringVariable;

    /**
     * branch:branch_name
     * The default is master.
     * branch parameter is required only if your SSM document is stored in a branch other than master.
     */
    readonly branch?: IStringVariable;

    /**
     * commitID:commitID
     * The default is head.
     * To use the version of your SSM document in a commit other than the latest, specify the full commit ID. For example:
     * "getOptions": "commitID:bbc1ddb94...b76d3bEXAMPLE",
     */
    readonly commitID?: IStringVariable;

}

export class GitHubContent implements IGitHubContent {
    readonly owner: IStringVariable;
    readonly repository: IStringVariable;
    readonly path: IStringVariable;
    readonly tokenInfo: IStringVariable;
    readonly options: Options;
    constructor(content: IGitHubContent) {
        this.owner = content.owner;
        this.repository = content.repository;
        this.path = content.path;
        this.tokenInfo = content.tokenInfo;
        this.options = new Options(content.branch,content.commitID);
    }
}

/**
 * Properties.json for sourceType GitHub
 */
export interface IGitContent extends IDownloadableContent {
    /**
     * The username to use when connecting to the repository you specify using HTTP.
     * You can use the following format to reference a SecureString parameter for the value of your username: {{ssm-secure:your-secure-string-parameter}}.
     */
    readonly username?: IStringVariable;

    /**
     * The password to use when connecting to the repository you specify using HTTP.
     * You can use the following format to reference a SecureString parameter for the value of your password: {{ssm-secure:your-secure-string-parameter}}.
     */
    readonly password?: IStringVariable;

    /**
     * The Git repository URL to the file or directory you want to download.
     */
    readonly repository: IStringVariable;


    /**
     * The SSH key to use when connecting to the repository you specify.
     * You can use the following format to reference a SecureString parameter for the value of your SSH key: {{ssm-secure:your-secure-string-parameter}}.
     */
    readonly privateSSHKey?: IStringVariable;

    /**
     * Determines the value of the StrictHostKeyChecking option when connecting to the repository you specify.
     * The default value is false.
     */
    readonly skipHostKeyChecking?: IBooleanVariable;

    /**
     * branch:branch_name
     * The default is master.
     * branch parameter is required only if your SSM document is stored in a branch other than master.
     */
    readonly branch?: IStringVariable;

    /**
     * commitID:commitID
     * The default is head.
     * To use the version of your SSM document in a commit other than the latest, specify the full commit ID. For example:
     * "getOptions": "commitID:bbc1ddb94...b76d3bEXAMPLE",
     */
    readonly commitID?: IStringVariable
}

export class GitContent implements IGitContent {
    readonly username?: IStringVariable;
    readonly password?: IStringVariable;
    readonly repository: IStringVariable;
    readonly privateSSHKey?: IStringVariable;
    readonly skipHostKeyChecking?: IBooleanVariable = new HardCodedBoolean(false);
    readonly options: Options;
    constructor(content: IGitContent) {
        this.username = content.username;
        this.password = content.password;
        this.repository = content.repository;
        this.privateSSHKey = content.privateSSHKey;
        if(content.skipHostKeyChecking != undefined)
            this.skipHostKeyChecking = content.skipHostKeyChecking;
        this.options = new Options(content.branch,content.commitID);
    }
}

/**
 * Properties.json for sourceType GitHub
 */
export interface IHTTPContent extends IDownloadableContent {
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
    readonly authMethod?: IStringVariable;


    /**
     * The username to use when connecting to the url you specify using Basic authentication.
     * You can use the following format to reference a SecureString parameter for the value of your username: {{ssm-secure:your-secure-string-parameter}}.
     */
    readonly username?: IStringVariable;

    /**
     * The password to use when connecting to the url you specify using Basic authentication.
     * You can use the following format to reference a SecureString parameter for the value of your password: {{ssm-secure:your-secure-string-parameter}}.
     */
    readonly password?: IStringVariable;

}

export class HTTPContent implements IHTTPContent {
    readonly url: IStringVariable;
    readonly allowInsecureDownload?: IBooleanVariable = new HardCodedBoolean(false);
    readonly authMethod?: IStringVariable = new HardCodedString("None");
    readonly username?: IStringVariable;
    readonly password?: IStringVariable;
    constructor(content: IHTTPContent) {
        this.url = content.url;
        if(content.allowInsecureDownload != undefined) {
            this.allowInsecureDownload = content.allowInsecureDownload;}
        if(content.authMethod != undefined) {
            this.authMethod = content.authMethod;}
        this.username = content.username;
        this.password = content.password;
    }
}

/**
 * Properties.json for sourceType GitHub
 */
export interface IS3Content extends IDownloadableContent {
    /**
     * The URL to the file or directory you want to download.
     */
    readonly path: IStringVariable;

}

export class S3Content implements IS3Content {
    readonly path: IStringVariable;
    constructor(content: IS3Content) {
        this.path = content.path;
    }
}

/**
 * Properties.json for sourceType GitHub
 */
export interface ISSMDocumentContent extends IDownloadableContent {
    /**
     * specify one of the following
     * The name and version of the document in the following format: name:version. Version is optional.
     * or The ARN for the document in the following format: arn:aws:ssm:region:account_id:document/document_name
     */
    readonly docInfo: IDocInfo;

}

export interface IDocInfo {
    formatRequest(): {Name:string,DocumentVersion?:string}
    readonly  name: string
}


export class ArnDoc implements IDocInfo {
    readonly name: string
    constructor(name: string) {
        this.name = name;
    }
    formatRequest(): {Name:string} {
        let params = {Name:this.name}
        return params;
    }

}

export class NameDoc implements IDocInfo {
    readonly name: string
    readonly version?: string
    constructor(name: string, version?: string) {
        this.name = name;
        this.version = version;
    }
    formatRequest(): {Name:string,DocumentVersion?:string} {
        var params;
        if(this.version!=undefined)
        {
            params = {
                Name:this.name,
                DocumentVersion:this.version
            }
        }
        else
        {
            params = {Name:this.name};
        }
        return params;
    }
}

export class SSMDocumentContent implements ISSMDocumentContent {
    readonly docInfo: IDocInfo;
    constructor(content: ISSMDocumentContent) {
        this.docInfo = content.docInfo;
    }
}