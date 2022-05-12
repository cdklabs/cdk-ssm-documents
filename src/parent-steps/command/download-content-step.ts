import { Construct } from 'constructs';
import {CommandStep, CommandStepProps} from "../command-step";
import {Platform} from "../../domain/platform";
import {IEnvironment, LoggingEnvironment} from "../../interface/environment";
import { IStringVariable } from '../../interface/variables/string-variable';
import S3 = require('aws-sdk/clients/s3');
import SSM = require('aws-sdk/clients/ssm');
import axios = require('axios');
const AmazonS3URI = require('amazon-s3-uri');
const path = require('path');
var fs = require('fs');
import * as stream from 'stream';
import { promisify } from 'util';
import * as DC from "../../interface/download-content";

/**
 * Properties.json for ps Module step.
 */
export interface DownloadContentStepProps extends CommandStepProps {

    /**
     * The download source. Systems Manager supports the following source types for downloading scripts and SSM documents: GitHub, Git, HTTP, S3, and SSMDocument.
     */
    readonly sourceType: DC.SourceType;


    /**
     * The information required to retrieve the content from the required source.
     * This is a dictionary whose format changes based on the sourceType
     * See the aws documentation for more info
     * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-downloadContent
     */
    readonly sourceInfo: DC.IDownloadableContent;

    /**
     * (Optional) An optional local path on the instance where you want to download the file. If you don't specify a path, the content is downloaded to a path relative to your command ID.
     */
    readonly destinationPath?: IStringVariable;


    /**
     * (Optional) Specify here the environment in which to execute the scripts.
     * Use the DockerEnvironment to execute the commands inside the docker.
     * You can alternatively use the LoggingEnvironment which simply logs the commands
     * or MockEnvironment which saves them for validation.
     * @default LoggingEnvironment
     */
    readonly environment?: IEnvironment;
}

/**
 * AutomationStep implemenation for aws:downloadContent
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-downloadContent
 */
const finished = promisify((stream.finished));

export class DownloadContentStep extends CommandStep {

    readonly sourceType: DC.SourceType;
    readonly sourceInfo: DC.IDownloadableContent;
    readonly destinationPath?: IStringVariable;
    readonly environment: IEnvironment;

    readonly platforms = [Platform.WINDOWS, Platform.LINUX];
    readonly action = "aws:downloadContent";
    readonly tempdir:string

    constructor(scope: Construct, id: string, props: DownloadContentStepProps) {
        super(scope, id, props);
        this.sourceType = props.sourceType;
        this.sourceInfo = props.sourceInfo;
        this.destinationPath = props.destinationPath;
        this.environment = props.environment ?? new LoggingEnvironment();
        this.tempdir = "./tmp"+Date.now();
    }

    /**
     * Inputs required for this command includes both the sourceType and sourceInfo variables and  destinationPath if provided.
     */
    public listInputs(): string[] {
        return [
            ...this.destinationPath?.requiredInputs() ?? []];
    }

    /**
     * Downloads the content from the specified source type
     */
    public async executeStep(inputs: { [name: string]: any }): Promise<void> {
        let destination = "./";
        if (this.destinationPath != undefined)
        {
            destination =this.destinationPath.resolve(inputs);
        }
        if (!fs.existsSync(this.tempdir)){
            fs.mkdirSync(this.tempdir);
        }
        switch(this.sourceType) {
            case DC.SourceType.GITHUB: {
                await this.downloadGitHub(inputs,destination);
                break;
            }case DC.SourceType.GIT: {
                await this.downloadGit(inputs,destination);
                break;
            }case DC.SourceType.HTTP: {
                await this.downloadHTTP(inputs,destination);
                break;
            }case DC.SourceType.S3: {
                await this.downloadS3(inputs,destination);
                break;
            }case DC.SourceType.SSMDOCUMENT: {
                await this.downloadSSMDocument(destination);
                break;
            }
        }

            if (fs.existsSync(this.tempdir)){
                //await wait(10000);
                fs.rmSync(this.tempdir, {recursive: true});
            }

    }

    /**
     * downloads content from a GitHub repository
     * SourceInfo required: the repository, a privateSSHKey, username, and password
     * SourceInfo optional: skipHostChecking
     */
    private async downloadGitHub(inputs: { [name: string]: any },destination:string):Promise<void> {

            let gitHubSourceInfo = new DC.GitHubContent(this.sourceInfo as DC.IGitHubContent)
            let owner = gitHubSourceInfo.owner.resolve(inputs);
            let repo = gitHubSourceInfo.repository.resolve(inputs);
            let filepath = gitHubSourceInfo.path.resolve(inputs);
            let tokenInfo = gitHubSourceInfo.tokenInfo.resolve(inputs);
            let branch = gitHubSourceInfo.options.branch.resolve(inputs);
            let commitId = gitHubSourceInfo.options.commitID.resolve(inputs);
            let uri;
            if (branch != "master" || commitId != "head") {
                uri = `https://api.github.com/repos/${owner}/${repo}/contents/${branch}/${commitId}/${filepath}`;
            } else {
                uri = `https://api.github.com/repos/${owner}/${repo}/contents/${filepath}`;
            }
            let config = {
                url: uri,
                method: 'get',
                responseType: "stream",
                encoding:null,
                headers: {'Authorization': tokenInfo,'Content-Type': 'application/json','Accept':'application/vnd.github.v3+json'}};

            let basename = path.basename(uri);
            let location = `${this.tempdir}/${basename}`
            await this.downloadFile(uri, config, `${location}`)
                let data = fs.readFileSync(`${location}`,'utf8');
                let obj = JSON.parse(data);
                if(obj.length ==undefined)
                {
                    this.writeGitHubFile(obj.content,location,destination,this.tempdir)
                }
                else
                {
                    let subdir = `${location}`;
                    fs.unlinkSync(`${location}`);
                    fs.mkdirSync(subdir);
                    for(let i=0;i<obj.length;i++) {
                        let filename = obj[i].name;
                        let downloadUrl = obj[i].git_url
                        config.url= downloadUrl;
                        await this.downloadFile(downloadUrl,config,`./${subdir}/${filename}`)
                        data = fs.readFileSync(`./${subdir}/${filename}`,'utf8');
                        let content = JSON.parse(data);
                        this.writeGitHubFile(content.content,filename,destination,this.tempdir);
                    }
                }
    }

    private writeGitHubFile(content: string,filename:string,destination:string,tempdir:string)
    {
        let buff = Buffer.from(content,'base64');
        let text = buff.toString('ascii');
        fs.writeFileSync(`./${tempdir}/${filename}`,text);
        this.environment.run(`--copy ./${tempdir}/${filename} ${destination}/${filename}`);
    }

    /**
     * downloads content from a Git repository
     * SourceInfo required: url
     * SourceInfo optional: allowInsecureDownload, authMethod, username, and password
     */
    private async downloadGit(inputs: { [name: string]: any },destination:string):Promise<void> {
        let gitSourceInfo = new DC.GitContent(this.sourceInfo as DC.IGitContent)
        let repository = gitSourceInfo.repository.resolve(inputs);
        let branch = gitSourceInfo.options.branch.resolve(inputs);
        let commitId = gitSourceInfo.options.commitID.resolve(inputs);
        let skipHostKeyChecking = gitSourceInfo.skipHostKeyChecking?.resolve(inputs);
        repository = repository.toString().replace('https://','')
        let url = `http://${repository}`;
        if(gitSourceInfo.privateSSHKey != undefined)
        {

            url = `https://${gitSourceInfo.privateSSHKey}@${repository}`
        }
        if(gitSourceInfo.username !=undefined && gitSourceInfo.password != undefined)
        {
            url = `https://${gitSourceInfo.username}:${gitSourceInfo.password}@${repository}`;
        }
        this.environment.run(`GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=${skipHostKeyChecking?"yes":"no"}" git clone ${url} ${destination} --branch ${branch}`)
        if(commitId != "head") {
            this.environment.run(`git checkout ${commitId}`);
        }
    }

    /**
     * downloads a file from HTTP
     * SourceInfo required: the filepath in s3 to download
     */
    private async downloadHTTP(inputs: { [name: string]: any },destination:string):Promise<void> {
        let httpSourceInfo = new DC.HTTPContent(this.sourceInfo as DC.IHTTPContent);
        let url = httpSourceInfo.url.resolve(inputs);
        //let allowInsecureDownload = httpSourceInfo.allowInsecureDownload.resolveToBoolean(inputs); need to figure out how this factors in
        let authMethod = httpSourceInfo.authMethod?.resolve(inputs);
        let config;
        if (authMethod != "None") {
            if (httpSourceInfo.username == undefined || httpSourceInfo.password == undefined) {
                console.log("If using Basic or Digest auth you must provide values for username and password");
                return;
            }
            let username = httpSourceInfo.username.resolve(inputs);
            let password = httpSourceInfo.password.resolve(inputs);
            config = {
                method: 'get',
                url: url,
                responseType: 'stream',
                encoding: null,
                headers: {'Content-Type': 'application/json'},
                auth: {username: username, password: password}
            }
        } else {
            config = {
                method: 'get',
                url: url,
                responseType: 'stream',
                encoding: null,
                headers: {'Content-Type': 'application/json'}
            }
        }
        let filename = path.basename(url);
        await this.downloadFile(url, config, `${this.tempdir}/${filename}`)
        this.environment.run(`--copy ${this.tempdir}/${filename} ${destination}/${filename}`);
    }

    private async downloadFile(url:string,config: {} ,destination:string){
            const writer = fs.createWriteStream(destination);
            return axios.default.get(url, config).then(response => {
                response.data.pipe(writer);
                return finished(writer);
            });
    }

    /**
     * downloads a file from S3
     * SourceInfo required: the filepath in s3 to download
     */
    private async downloadS3(inputs: { [name: string]: any },destination:string): Promise<void> {
        let S3SourceInfo = new DC.S3Content(this.sourceInfo as DC.IS3Content);
        let uri = S3SourceInfo.path.resolve(inputs);
        let s3Info = DownloadContentStep.getBucketKey(uri);
        var client = new S3()
        var params = {
            Bucket: s3Info[0],
            Key: s3Info[1],
        }
         let response = await client.getObject(params).promise();
        if (response== undefined) {
            console.error("response undefined");
        } else {
        if (response.Body == undefined) {
            console.error("Unable to retreive s3 data.");
            return;
        }
        let body = response.Body.toString().replace(/\n+$/, ""); //remove all trailing newlines so we can write it to a file cleanly
        let filename = path.basename(s3Info[1]);
        fs.writeFileSync(`${this.tempdir}/${filename}`, body)
        this.environment.run(`--copy ${this.tempdir}/${filename} ${destination}/${filename}`);
    }
    }

    private static getBucketKey(s3url:string): string[]
    {
        const {bucket,key} = AmazonS3URI(s3url)
        return [bucket,key];
    }

    /**
     * downloads a document from SSMDocuments
     * requires the document name
     */
    private async downloadSSMDocument(destination:string): Promise<void> {

        let SSMDocumentSourceInfo = new DC.SSMDocumentContent(this.sourceInfo as DC.ISSMDocumentContent);
        process.env.AWS_SDK_LOAD_CONFIG = "1";
        let ssmClient = new SSM();
        let param = SSMDocumentSourceInfo.docInfo.formatRequest();
        let response = await ssmClient.getDocument(param).promise();
        if (response == undefined) {
            console.error("response is undefined");
        }
        let extension
        switch (response.DocumentFormat) {
            case "YAML" : {
                extension = ".yml";
                break;
            }
            case "TEXT" : {
                extension = ".txt";
                break;
            }
            default :
                extension = ".json"
        }
        if (response.Content == undefined) {
            throw new Error("Document Content undefined.")
        }
        let filename = path.basename(response.Name) + extension;
        fs.writeFileSync(`${this.tempdir}/${filename}`, response.Content)
        this.environment.run(`--copy ${this.tempdir}/${filename} ${destination}/${filename}`);
    }

    public toSsmEntry(): { [name: string]: any; } {
        const inputs: { [name: string]: any; } = {'sourceInfo': this.sourceInfo};
        inputs["sourceType"] = this.sourceType;
        if (this.destinationPath != undefined) {
            inputs['workingDirectory'] = this.destinationPath;
        }
        return super.prepareSsmEntry(inputs);
    }

}