import { Construct } from 'constructs';
import { StringVariable } from '..';
import { IAutomationComponent } from '../construct/document-component';
import { AutomationDocumentBuilder } from '../document/document-builder';
import { DataType } from '../domain/data-type';
import { Output } from '../domain/output';
import { Abort, OnCancel, OnFailure } from '../interface/on-failure';
import { StepRef } from '../interface/step-ref';
import { Step, StepProps } from './step';

export interface AutomationStepProps extends StepProps {

  /**
   * Whether to stop document execution after this step.
   * @default false
   */
  readonly isEnd?: boolean;

  /**
   * (Optional) Fallback action to take in the event that this step fails.
   * @default undefined
   */
  readonly onFailure?: OnFailure;

  /**
   * (Optional) Fallback action to take in the event that this step is cancelled.
   * @default undefined
   */
  readonly onCancel?: OnCancel;


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

  /**
   * (Optional) explicit step to go to after this step completes.
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-actions.html#nextProp
   * @default will implicitly choose the next step in the sequence that the steps are added to the document.
   */
  readonly explicitNextStep?: StepRef;

}

/**
 * Parent class for AutomationSteps. These steps are using in an AutomationDocument.
 * You can instantiate steps using the AutomationBuilder for convenience.
 * You can use these steps to simulate their execution (mimics the SSM run) AND to build their yaml/json declaration.
 * Control flow of the subsequent step is determined by the currently executing step.
 * The flow of the execution therefore follows a chain-of-responsibility pattern.
 * The inputs received into a step AND the outputs of previous steps are merged to form inputs of subsequent steps.
 */
export abstract class AutomationStep extends Step implements IAutomationComponent {
  static readonly DEFAULT_TIMEOUT = 3600;
  static readonly DEFAULT_MAX_ATTEMPTS = 1;
  readonly maxAttempts: number;
  readonly timeoutSeconds: number;
  readonly isEnd: boolean;
  readonly onFailure: OnFailure;
  readonly onCancel: OnCancel;
  readonly explicitNextStep?: StepRef;

  nextStep?: AutomationStep;
  allStepsInExecution?: AutomationStep[];

  constructor(scope: Construct, id: string, props: AutomationStepProps) {
    super(scope, id, props);
    this.maxAttempts = props.maxAttempts ?? AutomationStep.DEFAULT_MAX_ATTEMPTS;
    this.timeoutSeconds = props.timeoutSeconds ?? AutomationStep.DEFAULT_TIMEOUT;
    this.isEnd = props.isEnd ?? false;
    this.onFailure = props.onFailure ?? new Abort();
    this.onCancel = props.onCancel ?? new Abort();
    this.explicitNextStep = props.explicitNextStep;
  }

  public addToDocument(doc: AutomationDocumentBuilder): void {
    doc.addStep(this);
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

    if (this.listUserOutputs().length > 0) {
      const formattedOutputs = this.listUserOutputs().map(this.formatOutput);
      ssmDef.set('outputs', formattedOutputs);
    }
    if (this.isEnd) {
      ssmDef.set('isEnd', true);
    }
    if (this.maxAttempts != AutomationStep.DEFAULT_MAX_ATTEMPTS) {
      ssmDef.set('maxAttempts', this.maxAttempts);
    }
    if (this.timeoutSeconds != AutomationStep.DEFAULT_TIMEOUT) {
      ssmDef.set('timeoutSeconds', this.timeoutSeconds);
    }
    if (!(this.onCancel instanceof Abort)) {
      ssmDef.set('onCancel', this.onCancel.toSsmValue());
    }
    if (!(this.onFailure instanceof Abort)) {
      ssmDef.set('onFailure', this.onFailure.toSsmValue());
    }
    if (this.explicitNextStep != undefined) {
      ssmDef.set('nextStep', this.explicitNextStep.stepName);
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

  /**
   * Lists the outputs defined by the user for this step.
   */
  public listUserOutputs(): Output[] {
    return [];
  }

  public listOutputs(): Output[] {
    return this.listUserOutputs();
  }
}
