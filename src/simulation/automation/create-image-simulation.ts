import { Stack } from 'aws-cdk-lib';
import { DataTypeEnum } from '../../domain/data-type';
import { ResponseCode } from '../../domain/response-code';
import { IGenericVariable } from '../../interface/variables/variable';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { CreateImageStep } from '../../parent-steps/automation/create-image-step';
import { waitForAndAssertImageAvailable } from '../../parent-steps/automation/sub-steps/wait-for-and-assert';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStepSimulation } from '../automation-step-simulation';
import { AutomationSimulationBase } from './automation-simulation-base';
import { AwsInvocationSimulationProps } from './aws-api-simulation';
import {AwsService} from "../../domain/aws-service";

/**
 * AutomationStep implemenation for aws:createImage
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-create.html
 */
export class CreateImageSimulation extends AutomationSimulationBase {
  readonly action: string = 'aws:createImage';
  private createImageStep: CreateImageStep;
  private props: AwsInvocationSimulationProps;

  constructor(step: CreateImageStep, props: AwsInvocationSimulationProps) {
    super(step);
    this.createImageStep = step;
    this.props = props;
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    console.log(`CreateImage: Creating image of ${this.createImageStep.instanceId}`);
    const imageId = this.createImage(inputs);
    console.log(`CreateImage: Waiting for ${imageId} to be available`);
    const state = this.waitForImageAvailable(imageId);
    console.log(`CreateImage: Image ${imageId} is available`);

    return {
      ImageId: imageId,
      ImageState: state,
    };
  }

  private createImage(inputs: Record<string, any>): string {
    const apiParamMap: Record<string, IGenericVariable | undefined> = {
      InstanceId: this.createImageStep.instanceId,
      Name: this.createImageStep.imageName,
      Description: this.createImageStep.imageDescription,
      NoReboot: this.createImageStep.noReboot,
      BlockDeviceMappings: this.createImageStep.blockDeviceMappings,
    };
    const apiParams = pruneAndTransformRecord(apiParamMap, x => x.resolve(inputs));

    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'createImage', {
      service: AwsService.EC2,
      pascalCaseApi: 'CreateImage',
      apiParams,
      outputs: [{
        outputType: DataTypeEnum.STRING,
        name: 'ImageId',
        selector: '$.ImageId',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Create image failed for ${apiParams.InstanceId}: ${result.stackTrace}`);
    }
    return result.outputs?.['createImage.ImageId'];
  }

  private waitForImageAvailable(imageId: string): string {
    waitForAndAssertImageAvailable({
      imageId: imageId,
    }, this.props);
    return 'available';
  }

}