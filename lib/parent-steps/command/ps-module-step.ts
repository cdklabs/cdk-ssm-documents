import { Construct } from '@aws-cdk/core';
import {CommandStep, CommandStepProps} from "../command-step";
import {Platform} from "../../domain/platform";
import {IEnvironment, LoggingEnvironment} from "../../interface/environment";
import {IStringVariable} from "../../interface/variables/string-variable";

/**
 * Properties for ps Module step.
 */
export interface PsModuleStepProps extends CommandStepProps {

    /**
     * Specify the commands to run or the path to an existing script on the instance.
     */
    readonly runCommand?: IStringVariable[];

    /**
     * The URL or local path on the instance to the application .zip file.
     * The name of the zip file must be the name of the module to be installed
     */
    readonly source: IStringVariable;

    /**
     * (Optional) The SHA256 hash of the .zip file
     */
    readonly sourceHash?: IStringVariable;

    /**
     * (Optional) The time in seconds for a command to be completed before it's considered to have failed.
     * When the timeout is reached, Systems Manager stops the command execution.
     */
    readonly timeoutSeconds?: number;

    /**
     * (Optional) The path to the working directory on your instance.
     */
    readonly workingDirectory?: IStringVariable;

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
     * AutomationStep implemenation for aws:psmodule
     * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-psModule
     */

export class PsModuleStep extends CommandStep {

    readonly runCommand?: IStringVariable[];
    readonly source: IStringVariable;
    readonly sourceHash?: IStringVariable;
    readonly timeoutSeconds?: number;
    readonly workingDirectory?: IStringVariable;
    readonly environment: IEnvironment;

    readonly platforms = [Platform.WINDOWS];
    readonly action = "aws:psModule";

    constructor(scope: Construct, id: string, props: PsModuleStepProps) {
        super(scope, id, props);
        this.runCommand = props.runCommand;
        this.source = props.source
        this.sourceHash = props.sourceHash
        this.timeoutSeconds = props.timeoutSeconds;
        this.workingDirectory = props.workingDirectory;
        this.environment = props.environment ?? new LoggingEnvironment();
    }

    /**
     * Inputs required for this command includes both the runCommand variables and workingDirectory if provided.
     */
    public listInputs(): string[] {
        return [
            ...this.runCommand?.flatMap(v => v.requiredInputs()) ?? [],
            ...this.source.requiredInputs(),
            ...this.workingDirectory?.requiredInputs() ?? [],
            ...this.sourceHash?.requiredInputs() ?? []];
    }

    /**
     * Installs the module specified by source then runs the specified commands
     */
    public executeStep(inputs: { [name: string]: any }): void {
        // TODO what should we enclose the string with if it contains both ' and "
        const resolvedSource = this.source.resolve(inputs);
        const quote = resolvedSource.includes("\'") ? '\"' : '\''
        let commands = this.buildCommands(resolvedSource,inputs);
        this.environment.run(`pwsh -c ${quote}${commands}${quote}`)

    }

    private buildCommands(resolvedSource:string,inputs: { [name: string]: any}):string {
        let commands = `Expand-Archive -Path ${resolvedSource} -DestinationPath (Join-Path -Path (Get-Item ${resolvedSource}).DirectoryName -ChildPath (Get-Item ${resolvedSource}).BaseName) -Force ; \
        Set-Location -Path (Join-Path -Path (Get-Item ${resolvedSource}).DirectoryName -ChildPath (Get-Item ${resolvedSource}).BaseName) ; \
        Remove-Item -Path package -Recurse -Force ; \
        Remove-Item -Path _rels -Recurse -Force ; \
        Remove-Item -LiteralPath [Content_Types].xml -Force ; \
        Remove-Item -Path (-Join ((Split-Path -Path ${resolvedSource} -LeafBase),".nuspec")) -Force ; \
        $paths = ($env:PSModulePath -split ":") ; \
        foreach ($path in $paths) \
        {Copy-Item -Path ((Join-Path -Path (Get-Item ${resolvedSource}).DirectoryName -ChildPath (Get-Item ${resolvedSource}).BaseName)) -Destination $path -Recurse -Force} ; \
        Import-Module (Split-Path -Path ${resolvedSource} -LeafBase)`
        if(this.runCommand != undefined)
            this.runCommand.forEach(cmd => {
                const command = cmd.resolve(inputs);
                commands += ` ; ${command}`
            });
        return commands;
    }

    public toSsmEntry(): { [name: string]: any; } {
        const inputs: { [name: string]: any; } = {'source': this.source};
        if (this.workingDirectory != undefined) {
            inputs['workingDirectory'] = this.workingDirectory;
        }
        if (this.timeoutSeconds != undefined) {
            inputs['timeoutSeconds'] = this.timeoutSeconds;
        }
        if (this.sourceHash != undefined) {
            inputs['sourceHash'] = this.sourceHash;
        }
        if (this.runCommand != undefined) {
            inputs['runCommand'] = this.runCommand;
        }
        return super.prepareSsmEntry(inputs);
    }

}