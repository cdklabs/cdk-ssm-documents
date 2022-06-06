import { Construct } from 'constructs';
import { ICommandComponent } from '../construct/document-component';
import { CommandDocumentBuilder } from '../document/document-builder';
import { Output } from '../domain/output';
import { Platform } from '../domain/platform';
import { Precondition } from '../domain/precondition';
import { StringVariable } from '../interface/variables/string-variable';
import { Step, StepProps } from './step';

export interface CommandStepProps extends StepProps {

  /**
   * (Optional) Whether to exit the document execution after failed execution of this step.
   * Finally step will be run.
   * @default false
   */
  readonly exitOnFailure?: boolean;

  /**
   * (Optional) Whether to exit the document execution after successful execution of this step.
   * Finally step will be run.
   * @default false
   */
  readonly exitOnSuccess?: boolean;

  readonly markSuccessAndExitOnFailure?: boolean;

  /**
   * (Optional) Step to jump to in the event that this step is cancelled.
   * @default undefined
   */
  readonly onCancel?: Step;

  readonly finallyStep?: boolean;

  /**
   * (Optional) A precondition to test before execution occurrs.
   * When the precondition isn't met, the command step isn't executed.
   * @default undefined
   */
  readonly precondition?: Precondition;

}

export abstract class CommandStep extends Step implements ICommandComponent {

  nextStep: CommandStep | undefined;
  allStepsInExecution: CommandStep[] | undefined;
  readonly exitOnFailure: boolean;
  readonly exitOnSuccess: boolean;
  readonly markSuccessAndExitOnFailure: boolean;
  readonly finallyStep: boolean;
  readonly precondition: Precondition | undefined;
  abstract readonly platforms: Platform[];

  protected constructor(scope: Construct, id: string, props: CommandStepProps) {
    super(scope, id, props);
    this.exitOnFailure = props.exitOnFailure ?? false;
    this.exitOnSuccess = props.exitOnSuccess ?? false;
    this.markSuccessAndExitOnFailure = props.markSuccessAndExitOnFailure ?? false;
    this.finallyStep = props.finallyStep ?? false;
    this.precondition = props.precondition;
  }

  public addToDocument(doc: CommandDocumentBuilder): void {
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
    if (this.precondition) {
      ssmDef.set('precondition', this.precondition.asSsmEntry());
    }
    ssmDef.set('inputs', inputs);

    if (this.exitOnFailure) {
      ssmDef.set('onFailure', 'exit');
    }
    if (this.markSuccessAndExitOnFailure) {
      ssmDef.set('onFailure', 'successAndExit');
    }
    if (this.exitOnSuccess) {
      ssmDef.set('onSuccess', 'exit');
    }
    if (this.finallyStep) {
      ssmDef.set('finallyStep', this.finallyStep);
    }
    const ssmDict: { [name: string]: any } = {};
    ssmDef.forEach((value, key) => {
      ssmDict[key] = value;
    });
    return ssmDict;
  }

  /**
   * RunCommand Steps do not have outputs.
   * @returns []
   */
  public listOutputs(): Output[] {
    return [];
  }

  public variables(): { [name: string]: any } {
    return Object.assign({}, ...this.listOutputs()
      .map(out => ({ [out.name]: new StringVariable(`${this.name}.${out.name}`) })));
  }

}