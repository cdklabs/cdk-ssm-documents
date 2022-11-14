import { Stack } from 'aws-cdk-lib';
import { DataTypeEnum } from '../../domain/data-type';
import { ResponseCode } from '../../domain/response-code';
import { IAwsInvoker } from '../../interface/aws-invoker';
import { ISleepHook } from '../../interface/sleep-hook';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { CreateTagsStep } from '../../parent-steps/automation/create-tags-step';
import { SleepStep } from '../../parent-steps/automation/sleep-step';
import { AutomationStepSimulation } from '../automation-step-simulation';
import { AutomationSimulationBase } from './automation-simulation-base';
import {AwsService} from "../../domain/aws-service";

/**
 * Properties for CreateTagStep
 */
export interface CreateTagsSimulationProps {
  /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
  readonly awsInvoker: IAwsInvoker;

  /**
     * (Optional) Whether to really perform a pause of the runtime.
     * To override sleep behavior, inject an ISleepHook impl or use the provided MockSleep class.
     * @default SleeperImpl
     */
  readonly sleepHook: ISleepHook;
}

interface Ec2TagFilter {
  Name: string;
  Values: string[];
}

interface Ec2TagDescription {
  Key: string;
  Value: string;
  ResourceId: string;
}

interface SsmTag {
  Key: string;
  Value: string;
}

/**
 * AutomationStep implemenation for aws:createTags
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-createtag.html
 */
export class CreateTagsSimulation extends AutomationSimulationBase {
  readonly action = 'aws:createTags';
  private createTagsStep: CreateTagsStep;
  private props: CreateTagsSimulationProps;

  constructor(step: CreateTagsStep, props: CreateTagsSimulationProps) {
    super(step);
    this.createTagsStep = step;
    this.props = props;
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    const resourceType = this.createTagsStep.resourceType?.resolveToString(inputs) ?? 'EC2';
    switch (resourceType) {
      case 'EC2':
        this.createEc2Tags(inputs);
        break;
      case 'ManagedInstance':
      case 'MaintenanceWindow':
      case 'Parameter':
        this.createSsmTags(resourceType, inputs);
        break;
      default:
        throw new Error(`${resourceType} is not a valid resource type for tagging`);
    }
    return {};
  }

  private createEc2Tags(inputs: Record<string, any>): void {
    const resourceIds = this.createTagsStep.resourceIds.resolveToStringList(inputs);
    const tags = this.createTagsStep.tags.resolveToMapList(inputs);

    console.log('CreateTags: Create EC2 tags for resources');
    this.callEc2CreateTags(resourceIds, tags);
    console.log('CreateTags: Wait for tags to be completed');
    this.waitForEc2Tags(resourceIds, tags);
    console.log('CreateTags: EC2 tags are associated to the resources');
  }

  private callEc2CreateTags(resourceIds: string[], tags: Record<string, any>[]): void {
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'ec2CreateTags', {
      service: AwsService.EC2,
      pascalCaseApi: 'CreateTags',
      apiParams: {
        Resources: resourceIds,
        Tags: tags,
      },
      outputs: [],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Create EC2 tags failed: ${result.stackTrace}`);
    }
  }

  private waitForEc2Tags(resourceIds: string[], tags: Record<string, any>[]): void {
    while (!this.areEc2TagsAssociatedToTheResources(resourceIds, tags)) {
      new AutomationStepSimulation(new SleepStep(new Stack(), 'sleep', {
        sleepSeconds: 2,
      }), this.props).invoke({});
    }
  }

  private areEc2TagsAssociatedToTheResources(resourceIds: string[], tags: Record<string, any>[]): boolean {
    const tagKeys: string[] = tags.map(tag => tag.Key);
    const tagValues: string[] = tags.map(tag => tag.Value);

    const filters = this.buildEc2TagFilter(resourceIds, tagKeys, tagValues);
    const tagDescriptions = this.ec2DescribeTags(filters);

    for (const tag of tags) {
      const descriptionsOfTag = tagDescriptions.filter(x => x.Key === tag.Key && x.Value === tag.Value);
      const describedResourceIds = new Set(descriptionsOfTag.map(x => x.ResourceId));

      if (!resourceIds.every(x => describedResourceIds.has(x))) {
        return false;
      }
    }

    return true;
  }

  private buildEc2TagFilter(resourceIds: string[], tagKeys: string[], tagValues: string[]): Ec2TagFilter[] {
    const potentialFilters: Record<string, string[]> = {
      'resource-id': resourceIds,
      'key': tagKeys,
      'value': tagValues,
    };
    const filters: Ec2TagFilter[] = [];
    for (const name of Object.keys(potentialFilters)) {
      if (potentialFilters[name].length !== 0) {
        filters.push({ Name: name, Values: potentialFilters[name] });
      }
    }
    return filters;
  }

  private ec2DescribeTags(filters: Ec2TagFilter[]): Ec2TagDescription[] {
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'ec2DescribeTags', {
      service: AwsService.EC2,
      pascalCaseApi: 'DescribeTags',
      apiParams: {
        Filters: filters,
      },
      outputs: [{
        outputType: DataTypeEnum.MAP_LIST,
        selector: '$.Tags',
        name: 'Tags',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Describe EC2 tags failed: ${result.stackTrace}`);
    }
    return result.outputs?.['ec2DescribeTags.Tags'] ?? [];
  }

  private createSsmTags(resourceType: string, inputs: Record<string, any>): void {
    const resourceId = this.getSingleResourceId(resourceType, inputs);
    const tags = this.createTagsStep.tags.resolveToMapList(inputs);

    console.log('CreateTags: Create tags for resource');
    this.callSsmAddTagsToResource(resourceType, resourceId, tags);
    console.log('CreateTags: Wait for tags to be completed');
    this.waitForSsmTags(resourceType, resourceId, tags);
    console.log('CreateTags: Tags are associated to the resource');
  }

  private callSsmAddTagsToResource(resourceType: string, resourceId: string, tags: Record<string, any>[]): void {
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'ssmAddTagsToResource', {
      service: AwsService.SSM,
      pascalCaseApi: 'AddTagsToResource',
      apiParams: {
        ResourceType: resourceType,
        ResourceId: resourceId,
        Tags: tags,
      },
      outputs: [],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Add tags failed: ${result.stackTrace}`);
    }
  }

  private waitForSsmTags(resourceType: string, resourceId: string, tags: Record<string, any>[]): void {
    while (!this.areAllSsmTagsListed(resourceType, resourceId, tags)) {
      new AutomationStepSimulation(new SleepStep(new Stack(), 'sleep', {
        sleepSeconds: 2,
      }), this.props).invoke({});
    }
  }

  private areAllSsmTagsListed(resourceType: string, resourceId: string, tags: Record<string, any>[]): boolean {
    const listedTags = this.ssmListTagsForResource(resourceType, resourceId);
    const listedTagMap = new Map(listedTags.map(tag => [tag.Key, tag.Value]));
    return tags.every(tag => listedTagMap.get(tag.Key) === tag.Value);
  }

  private ssmListTagsForResource(resourceType: string, resourceId: string): SsmTag[] {
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'ssmListTagsForResource', {
      service: AwsService.SSM,
      pascalCaseApi: 'ListTagsForResource',
      apiParams: {
        ResourceType: resourceType,
        ResourceId: resourceId,
      },
      outputs: [{
        outputType: DataTypeEnum.MAP_LIST,
        selector: '$.TagList',
        name: 'Tags',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`SSM List tags failed: ${result.stackTrace}`);
    }
    return result.outputs?.['ssmListTagsForResource.Tags'] ?? [];
  }

  private getSingleResourceId(resourceType: string, inputs: Record<string, any>): string {
    const resourceIds = this.createTagsStep.resourceIds.resolve(inputs);
    if (resourceIds.length !== 1) { throw new Error(`Only 1 resource allowed for type ${resourceType}`); }
    return resourceIds[0];
  }

}