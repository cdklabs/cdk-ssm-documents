import { Construct } from 'constructs';
import { Output } from '../domain/output';
import { IObserver, NoopObserver } from '../interface/observer';

export interface StepProps {
  /**
     * (Optional) Name of the current step.
     * The name will be prepended onto all of the outputs emitted from this step.
     * This name will also be used to reference this step in logs.
     * Defaults to the id of the CDK node.
     */
  readonly name?: string;

  /**
     * (Optional) description of the current step.
     * @default undefined
     */
  readonly description?: string;

  /**
     * (Optional) Allows for observing the input to steps as they run.
     * @default NoopObserver
     */
  readonly inputObserver?: IObserver;

  /**
     * (Optional) Allows for observing the output of steps as they run.
     * @default NoopObserver
     */
  readonly outputObserver?: IObserver;
}

export abstract class Step extends Construct {

  readonly name: string;
  readonly description: string | undefined;
  readonly inputObserver: IObserver;
  readonly outputObserver: IObserver;
  readonly abstract action: string;

  constructor(scope: Construct, id: string, props: StepProps) {
    super(scope, id);
    this.name = props.name ?? id;
    if (this.name.length < 3 || this.name.length > 128) {
      throw new Error('Name is not in size range [3:128] rather was ' + this.name.length);
    }
    this.description = props.description ?? undefined;
    this.inputObserver = props.inputObserver ?? new NoopObserver();
    this.outputObserver = props.outputObserver ?? new NoopObserver();
  }

  /**
     * Lists the outputs that will be returned from this step.
     */
  public abstract listOutputs(): Output[]

  /**
     * Lists the inputs that are required for this step.
     */
  public abstract listInputs(): string[]

  /**
     * Converts this step into an object to prepare for yaml/json representation of this step.
     */
  public abstract toSsmEntry(): { [name: string]: any };

}