import { Construct } from 'constructs';
import { StringVariable } from '..';
import { DataType } from '../domain/data-type';
import { Output } from '../domain/output';
import { Step, StepProps } from './step';

export interface AutomationStepProps extends StepProps {

  /**
     * Whether to stop document execution after this step.
     * @default false
     */
  readonly isEnd?: boolean;

  /**
     * (Optional) Step to jump to in the event that this step fails.
     * @default undefined
     */
  readonly onFailure?: AutomationStep;

  /**
     * (Optional) Step to jump to in the event that this step is cancelled.
     * @default undefined
     */
  readonly onCancel?: AutomationStep;


  /**
     * (Optional) max attempts to run this step if there are failures.
     * @default Step.DEFAULT_MAX_ATTEMPTS
     */
  readonly maxAttempts?: number;

  /**
     * (Optional) timeout seconds to run this step.
     * In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.
     * @default Step.DEFAULT_TIMEOUT
     */
  readonly timeoutSeconds?: number;

}

/**
 * Parent class for AutomationSteps. These steps are using in an AutomationDocument.
 * You can instantiate steps using the AutomationBuilder for convenience.
 * You can use these steps to simulate their execution (mimics the SSM run) AND to build their yaml/json declaration.
 * Control flow of the subsequent step is determined by the currently executing step.
 * The flow of the execution therefore follows a chain-of-responsibility pattern.
 * The inputs received into a step AND the outputs of previous steps are merged to form inputs of subsequent steps.
 */
export abstract class AutomationStep extends Step {
  static readonly DEFAULT_TIMEOUT = 3600;
  static readonly DEFAULT_MAX_ATTEMPTS = 1;
  readonly maxAttempts: number;
  readonly timeoutSeconds: number;
  readonly isEnd: boolean;
  readonly onFailure: AutomationStep | undefined;
  readonly onCancel: AutomationStep | undefined;

  nextStep: AutomationStep | undefined;
  allStepsInExecution: AutomationStep[] | undefined;

  constructor(scope: Construct, id: string, props: AutomationStepProps) {
    super(scope, id, props);
    this.maxAttempts = props.maxAttempts ?? AutomationStep.DEFAULT_MAX_ATTEMPTS;
    this.timeoutSeconds = props.timeoutSeconds ?? AutomationStep.DEFAULT_TIMEOUT;
    this.isEnd = props.isEnd ?? false;
    this.onFailure = props.onFailure;
    this.onCancel = props.onCancel ?? undefined;
  }

  protected prepareSsmEntry(inputs: { [name: string]: any }): { [name: string]: any } {
    // Maps maintain insertion order
    const ssmDef: Map<string, any> = new Map();
    if (this.description) {
      ssmDef.set('description', this.description);
    }
    ssmDef.set('name', this.name);
    ssmDef.set('action', this.action);
    ssmDef.set('inputs', inputs);

    const formattedOutputs = this.listOutputs().map(output => this.formatOutput(output));
    if (this.listOutputs().length > 0) {
      ssmDef.set('outputs', formattedOutputs);
    }
    if (this.isEnd) {
      ssmDef.set('isEnd', true);
    }
    if (this.maxAttempts != AutomationStep.DEFAULT_MAX_ATTEMPTS) {
      ssmDef.set('maxAttempts', this.maxAttempts);
    }
    if (this.timeoutSeconds != AutomationStep.DEFAULT_TIMEOUT) {
      ssmDef.set('maxAttempts', this.timeoutSeconds);
    }
    if (this.onCancel) {
      ssmDef.set('onCancel', 'step:' + this.onCancel.name);
    }
    if (this.onFailure) {
      ssmDef.set('onCancel', 'step:' + this.onFailure.name);
    }
    const ssmDict: { [name: string]: any } = {};
    ssmDef.forEach((value, key) => {
      ssmDict[key] = value;
    });
    return ssmDict;
  }

  /**
     * Formats the provided output into an object that can be used to generate the SSM yaml/json representation.
     */
  private formatOutput(output: Output): {[name: string]: string} {
    return {
      Name: output.name,
      Selector: output.selector,
      Type: new DataType(output.outputType).toSsmString(),
    };
  }

  public variables(): { [name: string]: any } {
    return Object.assign({}, ...this.listOutputs()
      .map(out => ({ [out.name]: new StringVariable(`${this.name}.${out.name}`) })));
  }
}
