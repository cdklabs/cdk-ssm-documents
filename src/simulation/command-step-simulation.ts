import { NonRetriableException } from '../domain/non-retriable-exception';
import { Platform } from '../domain/platform';
import { Precondition } from '../domain/precondition';
import { ResponseCode } from '../domain/response-code';
import { SimulationResult } from '../domain/simulation-result';
import { IEnvironment, LoggingEnvironment } from '../interface/environment';
import { CommandStep } from '../parent-steps/command-step';
import { PsModuleStep } from '../parent-steps/command/ps-module-step';
import { RunPowerShellScriptStep } from '../parent-steps/command/run-powershell-script-step';
import { RunShellScriptStep } from '../parent-steps/command/run-shell-script-step';
import { CommandSimulationBase } from './command/command-simulation-base';
import { PsModuleSimulation } from './command/ps-module-simulation';
import { RunPowerShellScriptSimulation } from './command/run-powershell-script-simulation';
import { RunShellScriptSimulation } from './command/run-shell-script-simulation';
import { CommandSimulationProps } from './simulation';

/**
 * The same interface as CommandSimulationProps but all fields are required.
 */
export interface RequiredCommandSimulationProps {
  readonly environment: IEnvironment;
  readonly simulationPlatform: Platform;
}

export class CommandStepSimulation {
  readonly step: CommandStep;
  readonly props: RequiredCommandSimulationProps;

  constructor(step: CommandStep, props: CommandSimulationProps) {
    this.props = {
      environment: props.environment ?? new LoggingEnvironment(),
      simulationPlatform: props.simulationPlatform ?? Platform.LINUX,
    };
    this.step = step;
  }

  /**
   * Invokes the current step on the input and will return a SimulationResult.
   * @param inputs must contain all of the inputs declared by the current step.
   * @returns a SimulationResult with the step outputs in the case of success or stacktrace in the case of failure.
   */
  public invoke(inputs: { [name: string]: any }): SimulationResult {
    console.log('Executing Step: ' + this.step.name);
    return this.invokeWithFallback(inputs);
  }

  /**
   * If fallback/retries are specified for this step, the retry or skip logic is handled in this function.
   */
  private invokeWithFallback(allInputs: { [name: string]: any }): SimulationResult {
    try {
      const shouldExecute = this.shouldExecuteStep(allInputs);
      if (shouldExecute) {
        const filteredInputs = this.filterInputs(allInputs);
        this.step.inputObserver.accept(filteredInputs);
        this.tryExecute(filteredInputs);
        this.step.outputObserver.accept({});
      } else {
        console.log(`skipping step execution for ${this.step.name}`);
      }

      const chainPrefix = shouldExecute ? [this.step.name] : [];
      if (this.step.nextStep && !this.step.exitOnSuccess) {
        const nextStepRes = new CommandStepSimulation(this.step.nextStep, this.props).invoke(allInputs);
        return this.formatResult(nextStepRes);
      } else {
        const finallyStep = this.runFinally(allInputs);
        const finallyList = finallyStep ? [finallyStep] : [];
        return {
          responseCode: ResponseCode.SUCCESS,
          executedSteps: [...chainPrefix, ...finallyList],
        };
      }
    } catch (error) {
      if (this.step.exitOnFailure) {
        const finallyStep = this.runFinally(allInputs);
        const finallyList = finallyStep ? [finallyStep] : [];
        return {
          responseCode: ResponseCode.FAILED,
          stackTrace: (error as Error).message + '\n' + (error as Error).stack,
          executedSteps: [this.step.name, ...finallyList],
        };
      } else if (this.step.markSuccessAndExitOnFailure) {
        const finallyStep = this.runFinally(allInputs);
        const finallyList = finallyStep ? [finallyStep] : [];
        return {
          responseCode: ResponseCode.SUCCESS,
          stackTrace: (error as Error).message + '\n' + (error as Error).stack,
          executedSteps: [this.step.name, ...finallyList],
        };
      }
      if (this.step.nextStep) {
        const nextStepRes = new CommandStepSimulation(this.step.nextStep, this.props).invoke(allInputs);
        return this.formatResult(nextStepRes);
      } else {
        return {
          responseCode: ResponseCode.FAILED,
          stackTrace: (error as Error).message + '\n' + (error as Error).stack,
          executedSteps: [this.step.name],
        };
      }
    }
  }

  private runFinally(allInputs: { [name: string]: any }): string | undefined {
    let last: CommandStep = this.step;
    while (last.nextStep != undefined) {
      last = last.nextStep;
    }
    if (last.finallyStep && last != this.step) {
      new CommandStepSimulation(last, this.props).invoke(allInputs);
      return last.name;
    }
    return undefined;
  }

  private formatResult(nextStepRes: SimulationResult) {
    if (nextStepRes.responseCode != ResponseCode.SUCCESS) {
      return {
        responseCode: nextStepRes.responseCode,
        outputs: {},
        stackTrace: nextStepRes.stackTrace,
        executedSteps: this.prependSelf(nextStepRes.executedSteps),
      };
    } else {
      return {
        responseCode: ResponseCode.SUCCESS,
        executedSteps: this.prependSelf(nextStepRes.executedSteps),
      };
    }
  }

  /**
   * This function receives all of the available inputs and returns the subset of inputs that were requested.
   * If any input requested in the current step is not available in the received inputs, this will throw.
   * @param inputs all available inputs for the currently executing step
   * @returns the subset of inputs which are requested by the current step
   */
  private filterInputs(inputs: { [name: string]: any }) {
    const foundAll = this.step.listInputs().every(required => Object.keys(inputs).includes(required));
    if (!foundAll) {
      throw new NonRetriableException(`Not all inputs required were provided. Required: ${this.step.listInputs()}. Provided: ${JSON.stringify(inputs)}`);
    }
    const filteredEntries = Object.entries(inputs).filter(entry => {
      const [key] = entry;
      return key.startsWith('global:') || key.startsWith('automation:') || this.step.listInputs().includes(key);
    });
    return Object.fromEntries(filteredEntries);
  }

  /**
   * Adds this step name to the list of executed steps.
   * Since the steps are invoked as a chain, the current step is prepended as invocation stack is popped.
   */
  protected prependSelf(futureSteps: string[]): string[] {
    return [this.step.name, ...futureSteps];
  }

  private tryExecute(inputs: { [name: string]: any }): void {
    const start = Date.now();
    console.log(`Execute step ${this.step.name} start: ${start}`);
    this.mySimulation().executeStep(inputs);
    console.log(`Execute step ${this.step.name} end: ${Date.now()}`);
  }

  private shouldExecuteStep(inputs: { [name: string]: any }): boolean {
    const copiedInputs = Object.assign({}, inputs);
    copiedInputs[Precondition.INJECTED_PLAYFORM_TYPE_KEY] = this.props.simulationPlatform.toString();
    if (!this.step.precondition) {
      // This mimics the "Using the precondition parameter" section
      // of https://docs.aws.amazon.com/systems-manager/latest/userguide/document-schemas-features.html
      // "For documents that use schema version 2.2 or later, if precondition isn't specified, each plugin is either run or skipped based on the plugin’s"
      // "compatibility with the operating system. Plugin compatibility with the operating system is evaluated before the precondition. For"
      // "documents that use schema 2.0 or earlier, incompatible plugins throw an error."
      return this.step.platforms.some(platform => Precondition.newPlatformPrecondition(platform).evaluate(copiedInputs));
    }

    return this.step.precondition.evaluate(copiedInputs);
  }

  private mySimulation(): CommandSimulationBase {
    switch (this.step.action) {
      case 'aws:runShellScript':
        return new RunShellScriptSimulation(<RunShellScriptStep> this.step, this.props);
      case 'aws:runPowerShellScript':
        return new RunPowerShellScriptSimulation(<RunPowerShellScriptStep> this.step, this.props);
      case 'aws:psModule':
        return new PsModuleSimulation(<PsModuleStep> this.step, this.props);
      default:
        throw new Error('No simulation available for action: ' + this.step.name);
    }
  }

}