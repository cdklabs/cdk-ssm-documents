import { Stack } from 'aws-cdk-lib';
import { DataTypeEnum } from '../../domain/data-type';
import { ResponseCode } from '../../domain/response-code';
import { HardCodedNumber } from '../../interface/variables/number-variable';
import { IGenericVariable } from '../../interface/variables/variable';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { RunInstanceStep } from '../../parent-steps/automation/run-instance-step';
import { waitForAndAssertInstanceState, waitForAndAssertInstanceStatus } from '../../parent-steps/automation/sub-steps/wait-for-and-assert';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStepSimulation } from '../automation-step-simulation';
import { AutomationSimulationBase } from './automation-simulation-base';
import { AwsInvocationSimulationProps } from './aws-api-simulation';
import {AwsService} from "../../domain/aws-service";

interface RunInstanceResult {
  InstanceId: string;
  State: {
    Code: number;
    Name: string;
  };
}

interface DescribeInstanceStatusResult {
  InstanceState: {
    Name: string;
  };
}

/**
 * AutomationStep implemenation for aws:runInstance
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-runinstance.html
 */
export class RunInstanceSimulation extends AutomationSimulationBase {
  private static readonly DefaultNumberOfInstances = new HardCodedNumber(1);
  readonly action: string = 'aws:runInstances';
  private runInstanceStep: RunInstanceStep;
  private props: AwsInvocationSimulationProps;

  constructor(step: RunInstanceStep, props: AwsInvocationSimulationProps) {
    super(step);
    this.runInstanceStep = step;
    this.props = props;
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    console.log(`RunInstance: Creating instances of ${this.runInstanceStep.imageId}`);
    const instanceIds = this.runInstances(inputs);
    console.log(`RunInstance: ${this.runInstanceStep.imageId} instances successfully created`);
    this.waitForInstanceRunning(instanceIds);
    console.log(`RunInstance: ${this.runInstanceStep.imageId} instances successfully running`);
    return {
      InstanceIds: instanceIds,
      InstanceStates: ['running'],
    };
  }

  private runInstances(inputs: Record<string, any>): string[] {
    const apiParamMap: Record<string, IGenericVariable | undefined> = {
      AdditionalInfo: this.runInstanceStep.additionalInfo,
      BlockDeviceMapping: this.runInstanceStep.blockDeviceMappings,
      ClientToken: this.runInstanceStep.clientToken,
      DisableApiTermination: this.runInstanceStep.disableApiTermination,
      EbsOptimized: this.runInstanceStep.ebsOptimized,
      IamInstanceProfile: this.runInstanceStep.iamInstanceProfileArn ?? this.runInstanceStep.iamInstanceProfileName,
      ImageId: this.runInstanceStep.imageId,
      InstanceInitiatedShutdownBehavior: this.runInstanceStep.instanceInitiatedShutdownBehavior,
      InstanceType: this.runInstanceStep.instanceType,
      KernalId: this.runInstanceStep.kernelId,
      KeyName: this.runInstanceStep.keyName,
      MaxCount: this.runInstanceStep.maxInstanceCount ?? RunInstanceSimulation.DefaultNumberOfInstances,
      MinCount: this.runInstanceStep.minInstanceCount ?? RunInstanceSimulation.DefaultNumberOfInstances,
      Monitoring: this.runInstanceStep.monitoring,
      NetworkInterfaces: this.runInstanceStep.networkInterfaces,
      Placement: this.runInstanceStep.placement,
      PrivateIpAddress: this.runInstanceStep.privateIpAddress,
      RamdiskId: this.runInstanceStep.ramdiskId,
      SecurityGroups: this.runInstanceStep.securityGroups,
      SecurityGroupIds: this.runInstanceStep.securityGroupIds,
      SubnetId: this.runInstanceStep.subnetId,
      TagSpecifications: this.runInstanceStep.tagSpecifications,
      UserData: this.runInstanceStep.userData,
    };
    const apiParams = pruneAndTransformRecord(apiParamMap, x => x.resolve(inputs));

    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'runInstances', {
      service: AwsService.EC2,
      pascalCaseApi: 'RunInstances',
      apiParams,
      outputs: [{
        outputType: DataTypeEnum.MAP_LIST,
        name: 'Instances',
        selector: '$.Instances',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Run instances failed for ${this.runInstanceStep.imageId}`);
    }
    return result.outputs?.['runInstances.Instances'].map((instance: RunInstanceResult) => instance.InstanceId) ?? [];
  }

  private waitForInstanceRunning(instanceIds: string[]): void {
    waitForAndAssertInstanceState({
      waitForState: ['running', 'shutting-down', 'terminated', 'stopping', 'stopped'],
      assertState: 'running',
      instanceIds: instanceIds,
    }, this.props);
    waitForAndAssertInstanceStatus({
      waitForStatus: ['ok', 'impaired', 'insufficient-data', 'not-applicable'],
      assertStatus: 'ok',
      instanceIds: instanceIds,
    }, this.props);

    const apiParams = {
      InstanceIds: instanceIds,
      IncludeAllInstances: true,
    };
    const stepParams = {
      service: AwsService.EC2,
      pascalCaseApi: 'DescribeInstanceStatus',
      apiParams,
    };
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'getInstanceStates', {
      ...stepParams,
      outputs: [{
        outputType: DataTypeEnum.MAP_LIST,
        name: 'InstanceStatuses',
        selector: '$.InstanceStatuses',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Get instance status failed for ${this.runInstanceStep.imageId} instances`);
    }
    return result.outputs?.['getInstanceStates.InstanceStatuses'].map((instance: DescribeInstanceStatusResult) => instance.InstanceState.Name) ?? [];
  }

}
