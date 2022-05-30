import { Construct } from 'constructs';
import { DataTypeEnum } from '../../domain/data-type';
import { Output } from '../../domain/output';
import { IBooleanVariable } from '../../interface/variables/boolean-variable';
import { IStringMapVariable } from '../../interface/variables/string-map-variable';
import { IStringVariable } from '../../interface/variables/string-variable';
import { IGenericVariable } from '../../interface/variables/variable';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * Properties for CreateImageStep
 */
export interface CreateImageStepProps extends AutomationStepProps {

  /**
   * The ID of the instance.
   */
  readonly instanceId: IStringVariable;

  /**
   * The name for the image.
   */
  readonly imageName: IStringVariable;

  /**
   * (Optional) A description of the image.
   */
  readonly imageDescription?: IStringVariable;

  /**
   * (Optional) By default, Amazon Elastic Compute Cloud (Amazon EC2) attempts to shut down and reboot the instance before creating the image. If the No Reboot option is set to true, Amazon EC2 doesn't shut down the instance before creating the image. When this option is used, file system integrity on the created image can't be guaranteed.
   * If you don't want the instance to run after you create an AMI from it, first use the aws:changeInstanceState – Change or assert instance state action to stop the instance, and then use this aws:createImage action with the NoReboot option set to true.
   */
  readonly noReboot?: IBooleanVariable;

  /**
   * (Optional) The block devices for the instance.
   */
  readonly blockDeviceMappings?: IStringMapVariable;
}

/**
 * AutomationStep implemenation for aws:createImage
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-create.html
 */
export class CreateImageStep extends AutomationStep {
  readonly action: string = 'aws:createImage';
  readonly instanceId: IStringVariable;
  readonly imageName: IStringVariable;
  readonly imageDescription?: IStringVariable;
  readonly noReboot?: IBooleanVariable;
  readonly blockDeviceMappings?: IStringMapVariable;

  constructor(scope: Construct, id: string, props: CreateImageStepProps) {
    super(scope, id, props);
    this.instanceId = props.instanceId;
    this.imageName = props.imageName;
    this.imageDescription = props.imageDescription;
    this.noReboot = props.noReboot;
    this.blockDeviceMappings = props.blockDeviceMappings;
  }

  public listOutputs(): Output[] {
    return [{
      outputType: DataTypeEnum.STRING,
      name: 'ImageId',
      selector: '$.ImageId',
    }, {
      outputType: DataTypeEnum.STRING,
      name: 'ImageState',
      selector: '$.ImageState',
    }];
  }

  public listInputs(): string[] {
    const inputs = [
      this.instanceId,
      this.imageName,
      this.imageDescription,
      this.noReboot,
      this.blockDeviceMappings,
    ];

    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): Record<string, any> {
    const entryMap: Record<string, IGenericVariable | undefined> = {
      InstanceId: this.instanceId,
      ImageName: this.imageName,
      ImageDescription: this.imageDescription,
      NoReboot: this.noReboot,
      BlockDeviceMappings: this.blockDeviceMappings,
    };
    const entries = pruneAndTransformRecord(entryMap, x => x.print());
    return super.prepareSsmEntry(entries);
  }
}