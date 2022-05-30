import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { IStringVariable } from '../../interface/variables/string-variable';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * Properties for DeleteImageStep
 */
export interface DeleteImageStepProps extends AutomationStepProps {

  /**
   * The ID of the image to be deleted.
   */
  readonly imageId: IStringVariable;
}

/**
 * AutomationStep implementation for aws:deleteImage
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-delete.html
 */
export class DeleteImageStep extends AutomationStep {
  readonly action: string = 'aws:deleteImage';
  readonly imageId: IStringVariable;

  constructor(scope: Construct, id: string, props: DeleteImageStepProps) {
    super(scope, id, props);
    this.imageId = props.imageId;
  }

  /**
     * This step has no outputs.
     */
  public listOutputs(): Output[] {
    return [];
  }

  public listInputs(): string[] {
    const inputs = [
      this.imageId,
    ];

    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): Record<string, any> {
    return super.prepareSsmEntry({
      ImageId: this.imageId.print(),
    });
  }
}