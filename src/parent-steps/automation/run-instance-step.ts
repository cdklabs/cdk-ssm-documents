import { Construct } from 'constructs';
import { DataTypeEnum, IBooleanVariable, IMapListVariable, INumberVariable, IStringListVariable, IStringMapVariable, IStringVariable } from '../..';
import { Output } from '../../domain/output';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * Properties for RunInstanceStep
 */
export interface RunInstanceStepProps extends AutomationStepProps {

  /**
   * The ID of the Amazon Machine Image (AMI).
   */
  readonly imageId: IStringVariable;

  /**
   * (Optional) The instance type.
   */
  readonly instanceType?: IStringVariable;

  /**
   * (Optional) The minimum number of instances to be launched.
   */
  readonly minInstanceCount?: INumberVariable;

  /**
   * (Optional) The maximum number of instances to be launched.
   */
  readonly maxInstanceCount?: INumberVariable;

  /**
   * (Optional) Reserved.
   */
  readonly additionalInfo?: IStringVariable;

  /**
   * (Optional) The block devices for the instance.
   */
  readonly blockDeviceMappings?: IMapListVariable;

  /**
   * (Optional) The identifier to ensure idempotency of the request.
   */
  readonly clientToken?: IStringVariable;

  /**
   * (Optional) Turns on or turns off instance API termination.
   */
  readonly disableApiTermination?: IBooleanVariable;

  /**
   * (Optional) Turns on or turns off Amazon Elastic Block Store (Amazon EBS) optimization.
   */
  readonly ebsOptimized?: IBooleanVariable;

  /**
   * (Optional) The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) instance profile for the instance.
   */
  readonly iamInstanceProfileArn?: IStringVariable;

  /**
   * (Optional) The name of the IAM instance profile for the instance.
   */
  readonly iamInstanceProfileName?: IStringVariable;

  /**
   * (Optional) Indicates whether the instance stops or terminates on system shutdown.
   */
  readonly instanceInitiatedShutdownBehavior?: IStringVariable;

  /**
   * (Optional) The ID of the kernel.
   */
  readonly kernelId?: IStringVariable;

  /**
   * (Optional) The name of the key pair.
   */
  readonly keyName?: IStringVariable;

  /**
   * (Optional) Turns on or turns off detailed monitoring.
   */
  readonly monitoring?: IBooleanVariable;

  /**
   * (Optional) The network interfaces.
   */
  readonly networkInterfaces?: IMapListVariable;

  /**
   * (Optional) The placement for the instance.
   */
  readonly placement?: IStringMapVariable;

  /**
   * (Optional) The primary IPv4 address.
   */
  readonly privateIpAddress?: IStringVariable;

  /**
   * (Optional) The ID of the RAM disk.
   */
  readonly ramdiskId?: IStringVariable;

  /**
   * (Optional) The IDs of the security groups for the instance.
   */
  readonly securityGroupIds?: IStringListVariable;

  /**
   * (Optional) The names of the security groups for the instance.
   */
  readonly securityGroups?: IStringListVariable;

  /**
   * (Optional) The subnet ID.
   */
  readonly subnetId?: IStringVariable;

  /**
   * (Optional) The tags to apply to the resources during launch. You can only tag instances and volumes at launch. The specified tags are applied to all instances or volumes that are created during launch.
   * To tag an instance after it has been launched, use the aws:createTags – Create tags for AWS resources action.
   */
  readonly tagSpecifications?: IMapListVariable;

  /**
   * (Optional) A script provided as a string literal value. If a literal value is entered, then it must be Base64-encoded.
   */
  readonly userData?: IStringVariable;
}

/**
 * AutomationStep implemenation for aws:runInstance
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-runinstance.html
 */
export class RunInstanceStep extends AutomationStep {

  readonly imageId: IStringVariable;
  readonly instanceType?: IStringVariable;
  readonly minInstanceCount?: INumberVariable;
  readonly maxInstanceCount?: INumberVariable;
  readonly additionalInfo?: IStringVariable;
  readonly blockDeviceMappings?: IMapListVariable;
  readonly clientToken?: IStringVariable;
  readonly disableApiTermination?: IBooleanVariable;
  readonly ebsOptimized?: IBooleanVariable;
  readonly iamInstanceProfileArn?: IStringVariable;
  readonly iamInstanceProfileName?: IStringVariable;
  readonly instanceInitiatedShutdownBehavior?: IStringVariable;
  readonly kernelId?: IStringVariable;
  readonly keyName?: IStringVariable;
  readonly monitoring?: IBooleanVariable;
  readonly networkInterfaces?: IMapListVariable;
  readonly placement?: IStringMapVariable;
  readonly privateIpAddress?: IStringVariable;
  readonly ramdiskId?: IStringVariable;
  readonly securityGroupIds?: IStringListVariable;
  readonly securityGroups?: IStringListVariable;
  readonly subnetId?: IStringVariable;
  readonly tagSpecifications?: IMapListVariable;
  readonly userData?: IStringVariable;
  readonly action: string = 'aws:runInstances';

  constructor(scope: Construct, id: string, props: RunInstanceStepProps) {
    super(scope, id, props);
    this.imageId = props.imageId;
    this.instanceType = props.instanceType;
    this.minInstanceCount = props.minInstanceCount;
    this.maxInstanceCount = props.maxInstanceCount;
    this.additionalInfo = props.additionalInfo;
    this.blockDeviceMappings = props.blockDeviceMappings;
    this.clientToken = props.clientToken;
    this.disableApiTermination = props.disableApiTermination;
    this.ebsOptimized = props.ebsOptimized;
    this.iamInstanceProfileArn = props.iamInstanceProfileArn;
    this.iamInstanceProfileName = props.iamInstanceProfileName;
    this.instanceInitiatedShutdownBehavior = props.instanceInitiatedShutdownBehavior;
    this.kernelId = props.kernelId;
    this.keyName = props.keyName;
    this.monitoring = props.monitoring;
    this.networkInterfaces = props.networkInterfaces;
    this.placement = props.placement;
    this.privateIpAddress = props.privateIpAddress;
    this.ramdiskId = props.ramdiskId;
    this.securityGroupIds = props.securityGroupIds;
    this.securityGroups = props.securityGroups;
    this.subnetId = props.subnetId;
    this.tagSpecifications = props.tagSpecifications;
    this.userData = props.userData;
  }

  /**
     * @returns IDs and states of the new instances
     */
  public listOutputs(): Output[] {
    return [{
      outputType: DataTypeEnum.STRING_LIST,
      name: 'InstanceIds',
      selector: '$.InstanceIds',
    }, {
      outputType: DataTypeEnum.STRING_LIST,
      name: 'InstanceStates',
      selector: '$.InstanceStates',
    }];
  }

  /**
     * Derives the inputs based on given variables
     * @returns list of required inputs.
     */
  public listInputs(): string[] {
    const inputs = [
      this.imageId,
      this.instanceType,
      this.minInstanceCount,
      this.maxInstanceCount,
      this.additionalInfo,
      this.blockDeviceMappings,
      this.clientToken,
      this.disableApiTermination,
      this.ebsOptimized,
      this.iamInstanceProfileArn,
      this.iamInstanceProfileName,
      this.instanceInitiatedShutdownBehavior,
      this.kernelId,
      this.keyName,
      this.monitoring,
      this.networkInterfaces,
      this.placement,
      this.privateIpAddress,
      this.ramdiskId,
      this.securityGroupIds,
      this.securityGroups,
      this.subnetId,
      this.tagSpecifications,
      this.userData,
    ];

    const requiredInputs: string[] = [];
    for (const input of inputs) {
      requiredInputs.push(...input?.requiredInputs() ?? []);
    }
    return requiredInputs;
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputMap: Record<string, any> = {
      ImageId: this.imageId,
      InstanceType: this.instanceType,
      MinInstanceCount: this.minInstanceCount,
      MaxInstanceCount: this.maxInstanceCount,
      AdditionalInfo: this.additionalInfo,
      BlockDeviceMappings: this.blockDeviceMappings,
      ClientToken: this.clientToken,
      DisableApiTermination: this.disableApiTermination,
      EbsOptimized: this.ebsOptimized,
      IamInstanceProfileArn: this.iamInstanceProfileArn,
      IamInstanceProfileName: this.iamInstanceProfileName,
      InstanceInitiatedShutdownBehavior: this.instanceInitiatedShutdownBehavior,
      KernelId: this.kernelId,
      KeyName: this.keyName,
      Monitoring: this.monitoring,
      NetworkInterfaces: this.networkInterfaces,
      Placement: this.placement,
      PrivateIpAddress: this.privateIpAddress,
      RamdiskId: this.ramdiskId,
      SecurityGroupIds: this.securityGroupIds,
      SecurityGroups: this.securityGroups,
      SubnetId: this.subnetId,
      TagSpecifications: this.tagSpecifications,
      UserData: this.userData,
    };

    const inputs = pruneAndTransformRecord(inputMap, x => x.print());

    return super.prepareSsmEntry(inputs);
  }
}
