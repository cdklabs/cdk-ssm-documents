import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AwsApiStep, IAwsInvoker, ISleepHook, ReflectiveAwsInvoker, ResponseCode } from '../..';
import { DataTypeEnum } from '../../domain/data-type';
import { Output } from '../../domain/output';
import { EnumVariable, HardCodedEnum, IEnumVariable } from '../../interface/variables/enum-variable';
import { IMapListVariable } from '../../interface/variables/map-list-variable';
import { IStringListVariable } from '../../interface/variables/string-list-variable';
import { IGenericVariable } from '../../interface/variables/variable';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStep, AutomationStepProps } from '../automation-step';
import { SleepStep } from './sleep-step';

/**
 * Properties for CreateTagStep
 */
export interface CreateTagsStepProps extends AutomationStepProps {
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

  /**
     * The IDs of the resource(s) to be tagged. If resource type isn't “EC2”, this field can contain only a single item.
     */
  readonly resourceIds: IStringListVariable;

  /**
     * The tags to associate with the resource(s).
     */
  readonly tags: IMapListVariable;

  /**
     * (Optional) The type of resource(s) to be tagged.
     * Valid values: EC2 | ManagedInstance | MaintenanceWindow | Parameter
     * @default EC2
     */
  readonly resourceType?: IEnumVariable<typeof ResourceType>;
}

export enum ResourceType {
  EC2,
  MAINTENANCE_INSTANCE = 'ManagedInstance',
  MAINTENANCE_WINDOW = 'MaintenanceWindow',
  PARAMETER = 'Parameter',
}

/**
 * A resource type variable reference.
 */
export class ResourceTypeVariable extends EnumVariable<typeof ResourceType> {
  constructor(reference: string) {
    super(reference, ResourceType);
  }
}

/**
 * A hard coded resource type.
 */
export class HardCodedResourceType extends HardCodedEnum<typeof ResourceType> {
  constructor(value: ResourceType) {
    super(value, ResourceType);
  }
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
export class CreateTagsStep extends AutomationStep {
  readonly action = 'aws:createTags';
  readonly awsInvoker: IAwsInvoker;
  readonly sleepHook?: ISleepHook;
  readonly resourceIds: IStringListVariable;
  readonly tags: IMapListVariable;
  readonly resourceType?: IEnumVariable<typeof ResourceType>;

  constructor(scope: Construct, id: string, props: CreateTagsStepProps) {
    super(scope, id, props);
    this.awsInvoker = props.awsInvoker ?? new ReflectiveAwsInvoker();
    this.sleepHook = props.sleepHook;
    this.resourceIds = props.resourceIds;
    this.tags = props.tags;
    this.resourceType = props.resourceType;
  }

  /**
     * This step has no outputs.
     */
  public listOutputs(): Output[] {
    return [];
  }

  public listInputs(): string[] {
    const inputs = [
      this.resourceIds,
      this.tags,
      this.resourceType,
    ];

    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    const resourceType = this.resourceType?.resolveToEnum(inputs) ?? ResourceType.EC2;
    switch (resourceType) {
      case ResourceType.EC2:
        this.createEc2Tags(inputs);
        break;
      case ResourceType.MAINTENANCE_INSTANCE:
      case ResourceType.MAINTENANCE_WINDOW:
      case ResourceType.PARAMETER:
        this.createSsmTags(resourceType, inputs);
        break;
      default:
        throw new Error(`${resourceType} is not a valid resource type for tagging`);
    }
    return {};
  }

  private createEc2Tags(inputs: Record<string, any>): void {
    const resourceIds = this.resourceIds.resolveToStringList(inputs);
    const tags = this.tags.resolveToMapList(inputs);

    console.log('CreateTags: Create EC2 tags for resources');
    this.callEc2CreateTags(resourceIds, tags);
    console.log('CreateTags: Wait for tags to be completed');
    this.waitForEc2Tags(resourceIds, tags);
    console.log('CreateTags: EC2 tags are associated to the resources');
  }

  private callEc2CreateTags(resourceIds: string[], tags: Record<string, any>[]): void {
    const result = new AwsApiStep(new Stack(), 'ec2CreateTags', {
      service: 'EC2',
      pascalCaseApi: 'CreateTags',
      apiParams: {
        Resources: resourceIds,
        Tags: tags,
      },
      outputs: [],
      awsInvoker: this.awsInvoker,
    }).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Create EC2 tags failed: ${result.stackTrace}`);
    }
  }

  private waitForEc2Tags(resourceIds: string[], tags: Record<string, any>[]): void {
    while (!this.areEc2TagsAssociatedToTheResources(resourceIds, tags)) {
      new SleepStep(new Stack(), 'sleep', {
        sleepSeconds: 2,
        sleepHook: this.sleepHook,
      }).invoke({});
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
    const result = new AwsApiStep(new Stack(), 'ec2DescribeTags', {
      service: 'EC2',
      pascalCaseApi: 'DescribeTags',
      apiParams: {
        Filters: filters,
      },
      outputs: [{
        outputType: DataTypeEnum.MAP_LIST,
        selector: '$.Tags',
        name: 'Tags',
      }],
      awsInvoker: this.awsInvoker,
    }).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Describe EC2 tags failed: ${result.stackTrace}`);
    }
    return result.outputs?.['ec2DescribeTags.Tags'] ?? [];
  }

  private createSsmTags(resourceType: string, inputs: Record<string, any>): void {
    const resourceId = this.getSingleResourceId(resourceType, inputs);
    const tags = this.tags.resolveToMapList(inputs);

    console.log('CreateTags: Create tags for resource');
    this.callSsmAddTagsToResource(resourceType, resourceId, tags);
    console.log('CreateTags: Wait for tags to be completed');
    this.waitForSsmTags(resourceType, resourceId, tags);
    console.log('CreateTags: Tags are associated to the resource');
  }

  private callSsmAddTagsToResource(resourceType: string, resourceId: string, tags: Record<string, any>[]): void {
    const result = new AwsApiStep(new Stack(), 'ssmAddTagsToResource', {
      service: 'SSM',
      pascalCaseApi: 'AddTagsToResource',
      apiParams: {
        ResourceType: resourceType,
        ResourceId: resourceId,
        Tags: tags,
      },
      outputs: [],
      awsInvoker: this.awsInvoker,
    }).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Add tags failed: ${result.stackTrace}`);
    }
  }

  private waitForSsmTags(resourceType: string, resourceId: string, tags: Record<string, any>[]): void {
    while (!this.areAllSsmTagsListed(resourceType, resourceId, tags)) {
      new SleepStep(new Stack(), 'sleep', {
        sleepSeconds: 2,
        sleepHook: this.sleepHook,
      }).invoke({});
    }
  }

  private areAllSsmTagsListed(resourceType: string, resourceId: string, tags: Record<string, any>[]): boolean {
    const listedTags = this.ssmListTagsForResource(resourceType, resourceId);
    const listedTagMap = new Map(listedTags.map(tag => [tag.Key, tag.Value]));
    return tags.every(tag => listedTagMap.get(tag.Key) === tag.Value);
  }

  private ssmListTagsForResource(resourceType: string, resourceId: string): SsmTag[] {
    const result = new AwsApiStep(new Stack(), 'ssmListTagsForResource', {
      service: 'SSM',
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
      awsInvoker: this.awsInvoker,
    }).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`SSM List tags failed: ${result.stackTrace}`);
    }
    return result.outputs?.['ssmListTagsForResource.Tags'] ?? [];
  }

  private getSingleResourceId(resourceType: string, inputs: Record<string, any>): string {
    const resourceIds = this.resourceIds.resolve(inputs);
    if (resourceIds.length !== 1) { throw new Error(`Only 1 resource allowed for type ${resourceType}`); }
    return resourceIds[0];
  }

  public toSsmEntry(): Record<string, any> {
    const entryMap: Record<string, IGenericVariable | undefined> = {
      ResourceIds: this.resourceIds,
      Tags: this.tags,
      ResourceType: this.resourceType,
    };
    const entries = pruneAndTransformRecord(entryMap, x => x.print());
    return super.prepareSsmEntry(entries);
  }
}