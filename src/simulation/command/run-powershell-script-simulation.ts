import { RunPowerShellScriptStep } from '../../parent-steps/command/run-powershell-script-step';
import { CommandSimulationBase } from './command-simulation-base';
import { EnvironmentProps } from './interface/environment-props';

export class RunPowerShellScriptSimulation extends CommandSimulationBase {
  private step: RunPowerShellScriptStep;
  private props: EnvironmentProps;

  constructor(step: RunPowerShellScriptStep, props: EnvironmentProps) {
    super();
    this.step = step;
    this.props = props;
  }
  /**
   * Executes the runCommands against the environment provided in the constructor.
   */
  public executeStep(inputs: { [name: string]: any }): void {
    this.step.runCommand.forEach(cmd => {
      const command = cmd.resolve(inputs);
      // TODO what should we enclose the string with if it contains both ' and "
      const quote = command.includes("\'") ? '\"' : '\'';
      this.props.environment.run(`pwsh -c ${quote}${command}${quote}`);
    });
  }
}