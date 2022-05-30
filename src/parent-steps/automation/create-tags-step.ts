import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { EnumVariable, HardCodedEnum, IEnumVariable } from '../../interface/variables/enum-variable';
import { IMapListVariable } from '../../interface/variables/map-list-variable';
import { IStringListVariable } from '../../interface/variables/string-list-variable';
import { IGenericVariable } from '../../interface/variables/variable';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * Properties for CreateTagStep
 */
export interface CreateTagsStepProps extends AutomationStepProps {
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

/**
 * AutomationStep implemenation for aws:createTags
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-createtag.html
 */
export class CreateTagsStep extends AutomationStep {
  readonly action = 'aws:createTags';
  readonly resourceIds: IStringListVariable;
  readonly tags: IMapListVariable;
  readonly resourceType?: IEnumVariable<typeof ResourceType>;

  constructor(scope: Construct, id: string, props: CreateTagsStepProps) {
    super(scope, id, props);
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