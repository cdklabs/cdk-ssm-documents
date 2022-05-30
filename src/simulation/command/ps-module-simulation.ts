import { PsModuleStep } from '../../parent-steps/command/ps-module-step';
import { CommandSimulationBase } from './command-simulation-base';
import { EnvironmentProps } from './interface/environment-props';

export class PsModuleSimulation extends CommandSimulationBase {
  private step: PsModuleStep;
  private props: EnvironmentProps;

  constructor(step: PsModuleStep, props: EnvironmentProps) {
    super();
    this.step = step;
    this.props = props;
  }
  /**
   * Installs the module specified by source then runs the specified commands
   */
  public executeStep(inputs: { [name: string]: any }): void {
    // TODO what should we enclose the string with if it contains both ' and "
    const resolvedSource = this.step.source.resolve(inputs);
    const quote = resolvedSource.includes("\'") ? '\"' : '\'';
    let commands = this.buildCommands(resolvedSource, inputs);
    this.props.environment.run(`pwsh -c ${quote}${commands}${quote}`);

  }

  private buildCommands(resolvedSource:string, inputs: { [name: string]: any}):string {
    let commands = `Expand-Archive -Path ${resolvedSource} -DestinationPath (Join-Path -Path (Get-Item ${resolvedSource}).DirectoryName -ChildPath (Get-Item ${resolvedSource}).BaseName) -Force ; \
        Set-Location -Path (Join-Path -Path (Get-Item ${resolvedSource}).DirectoryName -ChildPath (Get-Item ${resolvedSource}).BaseName) ; \
        Remove-Item -Path package -Recurse -Force ; \
        Remove-Item -Path _rels -Recurse -Force ; \
        Remove-Item -LiteralPath [Content_Types].xml -Force ; \
        Remove-Item -Path (-Join ((Split-Path -Path ${resolvedSource} -LeafBase),".nuspec")) -Force ; \
        $paths = ($env:PSModulePath -split ":") ; \
        foreach ($path in $paths) \
        {Copy-Item -Path ((Join-Path -Path (Get-Item ${resolvedSource}).DirectoryName -ChildPath (Get-Item ${resolvedSource}).BaseName)) -Destination $path -Recurse -Force} ; \
        Import-Module (Split-Path -Path ${resolvedSource} -LeafBase)`;
    if (this.step.runCommand != undefined) {
      this.step.runCommand.forEach(cmd => {
        const command = cmd.resolve(inputs);
        commands += ` ; ${command}`;
      });
    }
    return commands;
  }
}