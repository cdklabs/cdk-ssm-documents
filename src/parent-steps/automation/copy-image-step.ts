import { Construct } from 'constructs';
import { DataTypeEnum } from '../../domain/data-type';
import { Output } from '../../domain/output';
import { IBooleanVariable } from '../../interface/variables/boolean-variable';
import { IStringVariable } from '../../interface/variables/string-variable';
import { IGenericVariable } from '../../interface/variables/variable';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * Properties for CopyImageStep
 */
export interface CopyImageStepProps extends AutomationStepProps {

  /**
     * The region where the source AMI exists.
     */
  readonly sourceRegion: IStringVariable;

  /**
     * The AMI ID to copy from the source Region.
     */
  readonly sourceImageId: IStringVariable;

  /**
     * The name for the image.
     */
  readonly imageName: IStringVariable;

  /**
     * (Optional) A description of the image.
     */
  readonly imageDescription?: IStringVariable;

  /**
     * (Optional) Encrypt the target AMI.
     */
  readonly encrypted?: IBooleanVariable;

  /**
     * (Optional) The full Amazon Resource Name (ARN) of the AWS KMS key to use when encrypting the snapshots of an image during a copy operation.
     */
  readonly kmsKeyId?: IStringVariable;

  /**
     * (Optional) A unique, case-sensitive identifier that you provide to ensure request idempotency.
     */
  readonly clientToken?: IStringVariable;
}

/**
 * AutomationStep implemenation for aws:copyImage
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-copyimage.html
 */
export class CopyImageStep extends AutomationStep {
  readonly action: string = 'aws:copyImage';
  readonly sourceRegion: IStringVariable;
  readonly sourceImageId: IStringVariable;
  readonly imageName: IStringVariable;
  readonly imageDescription?: IStringVariable;
  readonly encrypted?: IBooleanVariable;
  readonly kmsKeyId?: IStringVariable;
  readonly clientToken?: IStringVariable;

  constructor(scope: Construct, id: string, props: CopyImageStepProps) {
    super(scope, id, props);
    this.sourceRegion = props.sourceRegion;
    this.sourceImageId = props.sourceImageId;
    this.imageName = props.imageName;
    this.imageDescription = props.imageDescription;
    this.encrypted = props.encrypted;
    this.kmsKeyId = props.kmsKeyId;
    this.clientToken = props.clientToken;
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
      this.sourceRegion,
      this.sourceImageId,
      this.imageName,
      this.imageDescription,
      this.encrypted,
      this.kmsKeyId,
      this.clientToken,
    ];

    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): Record<string, any> {
    const entryMap: Record<string, IGenericVariable | undefined> = {
      SourceRegion: this.sourceRegion,
      SourceImageId: this.sourceImageId,
      ImageName: this.imageName,
      ImageDescription: this.imageDescription,
      Encrypted: this.encrypted,
      KmsKeyId: this.kmsKeyId,
      ClientToken: this.clientToken,
    };
    const entries = pruneAndTransformRecord(entryMap, x => x.print());
    return super.prepareSsmEntry(entries);
  }
}