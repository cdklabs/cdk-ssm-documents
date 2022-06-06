import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { IMapListVariable } from '../../interface/variables/map-list-variable';
import { IStringListVariable } from '../../interface/variables/string-list-variable';
import { assertString, HardCodedString, IStringVariable, StringVariable } from '../../interface/variables/string-variable';
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
  readonly resourceType?: IResourceTypeVariable;
}

export interface IResourceTypeVariable extends IStringVariable {
}

export class HardCodedResourceType extends HardCodedString implements IResourceTypeVariable {
  public static readonly EC2 = new HardCodedResourceType('EC2');
  public static readonly MANAGED_INSTANCE = new HardCodedResourceType('ManagedInstance');
  public static readonly MAINTENANCE_WINDOW = new HardCodedResourceType('MaintenanceWindow');
  public static readonly PARAMETER = new HardCodedResourceType('Parameter');
  private constructor(val: string) {
    super(val);
  }
}

export class ResourceTypeVariable extends StringVariable implements IResourceTypeVariable {
  readonly validValues = ['EC2', 'ManagedInstance', 'MaintenanceWindow', 'Parameter'];

  protected assertType(value: any): void {
    assertString(value);
    if (!this.validValues.includes(value)) {
      throw new Error(`${value} is not a valid enum value`);
    }
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
  readonly resourceType?: IResourceTypeVariable;

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