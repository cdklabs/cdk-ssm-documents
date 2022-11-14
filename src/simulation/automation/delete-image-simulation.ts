import { Stack } from 'aws-cdk-lib';
import { DataTypeEnum } from '../../domain/data-type';
import { ResponseCode } from '../../domain/response-code';
import { IAwsInvoker } from '../../interface/aws-invoker';
import { ISleepHook } from '../../interface/sleep-hook';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { DeleteImageStep } from '../../parent-steps/automation/delete-image-step';
import { SleepStep } from '../../parent-steps/automation/sleep-step';
import { AutomationStepSimulation } from '../automation-step-simulation';
import { AutomationSimulationBase } from './automation-simulation-base';
import {AwsService} from "../../domain/aws-service";

/**
 * Properties for DeleteImageStep
 */
export interface DeleteImageSimulationProps {
  /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
  readonly awsInvoker?: IAwsInvoker;

  /**
     * (Optional) Whether to really perform a pause of the runtime.
     * To override sleep behavior, inject an ISleepHook impl or use the provided MockSleep class.
     * @default SleeperImpl
     */
  readonly sleepHook?: ISleepHook;

}

interface DescribeImageResult {
  BlockDeviceMappings: [{
    Ebs: {
      SnapshotId: string;
    };
  }];
}

/**
 * AutomationStep implementation for aws:deleteImage
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-delete.html
 */
export class DeleteImageSimulation extends AutomationSimulationBase {
  readonly action: string = 'aws:deleteImage';
  private deleteImageStep: DeleteImageStep;
  private props: DeleteImageSimulationProps;

  constructor(step: DeleteImageStep, props: DeleteImageSimulationProps) {
    super(step);
    this.deleteImageStep = step;
    this.props = props;
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    const imageId = this.deleteImageStep.imageId.resolveToString(inputs);
    console.log(`DeleteImage: Get snapshots of ${imageId}`);
    const snapshots = this.getSnapshots(imageId);
    console.log(`DeleteImage: Deregister ${imageId}`);
    this.deregisterImage(imageId);
    console.log(`DeleteImage: Delete snapshots for ${imageId}`);
    this.deleteSnapshotsOfImage(snapshots);
    console.log(`DeleteImage: ${imageId} is deleted`);
    return {};
  }

  private getSnapshots(imageId: string): string[] {
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'describeImage', {
      service: AwsService.EC2,
      pascalCaseApi: 'DescribeImages',
      apiParams: {
        ImageIds: [imageId],
      },
      outputs: [{
        outputType: DataTypeEnum.STRING_MAP,
        selector: '$.Images[0]',
        name: 'Image',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Describe image failed for ${imageId}: ${result.stackTrace}`);
    }
    const image: DescribeImageResult | null = result.outputs?.['describeImage.Image'];
    return image?.BlockDeviceMappings.map(mapping => mapping.Ebs.SnapshotId) ?? [];
  }

  private deregisterImage(imageId: string): void {
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'deregisterImage', {
      service: AwsService.EC2,
      pascalCaseApi: 'DeregisterImage',
      apiParams: {
        ImageId: imageId,
      },
      outputs: [],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Deregister image failed for ${imageId}: ${result.stackTrace}`);
    }
  }

  private deleteSnapshotsOfImage(snapshotIds: string[]): void {
    for (const snapshotId of snapshotIds) {
      if (snapshotId === null || snapshotId === undefined) { continue; }
      try {
        this.deleteSnapshot(snapshotId);
      } catch (e) {
        if ((e as Error).message.indexOf('InvalidSnapshot.InUse') < 0) { throw e; }
        console.log('InvalidSnapshot.InUse case found. Attempt to retry after 2 seconds.');
        new AutomationStepSimulation(new SleepStep(new Stack(), 'sleep', {
          sleepSeconds: 2,
        }), this.props).invoke({});
        this.deleteSnapshot(snapshotId);
      }
    }
  }

  private deleteSnapshot(snapshotId: string): void {
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'deleteSnapshot', {
      service: AwsService.EC2,
      pascalCaseApi: 'DeleteSnapshot',
      apiParams: {
        SnapshotId: snapshotId,
      },
      outputs: [],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Delete snapshot failed for ${snapshotId}: ${result.stackTrace}`);
    }
  }

}