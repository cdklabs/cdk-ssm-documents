import { Stack } from 'aws-cdk-lib';
import { DataTypeEnum } from '../../domain/data-type';
import { ResponseCode } from '../../domain/response-code';
import { IGenericVariable } from '../../interface/variables/variable';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { CopyImageStep } from '../../parent-steps/automation/copy-image-step';
import { waitForAndAssertImageAvailable } from '../../parent-steps/automation/sub-steps/wait-for-and-assert';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStepSimulation } from '../automation-step-simulation';
import { AutomationSimulationBase } from './automation-simulation-base';
import { AwsInvocationSimulationProps } from './aws-api-simulation';
import {AwsService} from "../../domain/aws-service";

/**
 * AutomationStep implemenation for aws:copyImage
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-copyimage.html
 */
export class CopyImageSimulation extends AutomationSimulationBase {
  readonly action: string = 'aws:copyImage';
  private copyImageStep: CopyImageStep;
  private props: AwsInvocationSimulationProps;

  constructor(step: CopyImageStep, props: AwsInvocationSimulationProps) {
    super(step);
    this.copyImageStep = step;
    this.props = props;
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    console.log(`CopyImage: Creating copy of image ${this.copyImageStep.sourceImageId}`);
    const imageId = this.copyImage(inputs);
    console.log(`CopyImage: Waiting for ${imageId} to be available`);
    const state = this.waitForImageAvailable(imageId);
    console.log(`CopyImage: Image ${imageId} is available`);

    return {
      ImageId: imageId,
      ImageState: state,
    };
  }

  private copyImage(inputs: Record<string, any>): string {
    const apiParamMap: Record<string, IGenericVariable | undefined> = {
      Name: this.copyImageStep.imageName,
      SourceImageId: this.copyImageStep.sourceImageId,
      SourceRegion: this.copyImageStep.sourceRegion,
      ClientToken: this.copyImageStep.clientToken,
      Description: this.copyImageStep.imageDescription,
      Encrypted: this.copyImageStep.encrypted,
      KmsKeyId: this.copyImageStep.kmsKeyId,
    };
    const apiParams = pruneAndTransformRecord(apiParamMap, x => x.resolve(inputs));

    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'copyImage', {
      service: AwsService.EC2,
      pascalCaseApi: 'CopyImage',
      apiParams,
      outputs: [{
        outputType: DataTypeEnum.STRING,
        name: 'ImageId',
        selector: '$.ImageId',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Copy image failed for ${apiParams.SourceImageId}: ${result.stackTrace}`);
    }
    return result.outputs?.['copyImage.ImageId'];
  }

  private waitForImageAvailable(imageId: string): string {
    waitForAndAssertImageAvailable({
      imageId: imageId,
    }, this.props);
    return 'available';
  }

}