import { Stack } from "aws-cdk-lib";
import { Construct } from "constructs";
import { DataTypeEnum, IBooleanVariable, IMapListVariable, INumberVariable, IStringListVariable, IStringMapVariable, IStringVariable } from "../..";
import { Output } from "../../domain/output";
import { ResponseCode } from "../../domain/response-code";
import { IAwsInvoker, ReflectiveAwsInvoker } from "../../interface/aws-invoker";
import { HardCodedNumber } from "../../interface/variables/number-variable";
import { IGenericVariable } from "../../interface/variables/variable";
import { AutomationStep, AutomationStepProps } from "../automation-step";
import { AwsApiStep } from "./aws-api-step";
import { waitForAndAssertInstanceState, waitForAndAssertInstanceStatus } from "./sub-steps/wait-for-and-assert";

/**
 * Properties for RunInstanceStep
 */
export interface RunInstanceStepProps extends AutomationStepProps {
    /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
    readonly awsInvoker?: IAwsInvoker;

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
     * (Optional) The tags to apply to the resources during launch. You can only tag instances and volumes at launch. The specified tags are applied to all instances or volumes that are created during launch. To tag an instance after it has been launched, use the aws:createTags – Create tags for AWS resources action.
     */
    readonly tagSpecifications?: IMapListVariable;

    /**
     * (Optional) A script provided as a string literal value. If a literal value is entered, then it must be Base64-encoded.
     */
    readonly userData?: IStringVariable;
}

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
    }
}

/**
 * AutomationStep implemenation for aws:runInstance
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-runinstance.html
 */
export class RunInstanceStep extends AutomationStep {
    private static readonly DefaultNumberOfInstances = new HardCodedNumber(1);

    readonly awsInvoker: IAwsInvoker;
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
        this.awsInvoker = props.awsInvoker ?? new ReflectiveAwsInvoker();
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
            name: "InstanceIds",
            selector: "$.InstanceIds",
        }, {
            outputType: DataTypeEnum.STRING_LIST,
            name: "InstanceStates",
            selector: "$.InstanceStates",
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

    public executeStep(inputs: Record<string, any>): Record<string, any> {
        console.log(`RunInstance: Creating instances of ${this.imageId}`);
        const instanceIds = this.runInstances(inputs);
        console.log(`RunInstance: ${this.imageId} instances successfully created`);
        const instanceStates = this.waitForInstanceRunning(instanceIds);
        console.log(`RunInstance: ${this.imageId} instances successfully running`);
        return {
            InstanceIds: instanceIds,
            InstanceStates: instanceStates,
        }
    }

    private runInstances(inputs: Record<string, any>): string[] {
        const apiParamMap: Record<string, IGenericVariable | undefined> = {
            AdditionalInfo: this.additionalInfo,
            BlockDeviceMapping: this.blockDeviceMappings,
            ClientToken: this.clientToken,
            DisableApiTermination: this.disableApiTermination,
            EbsOptimized: this.ebsOptimized,
            IamInstanceProfile: this.iamInstanceProfileArn ?? this.iamInstanceProfileName,
            ImageId: this.imageId,
            InstanceInitiatedShutdownBehavior: this.instanceInitiatedShutdownBehavior,
            InstanceType: this.instanceType,
            KernalId: this.kernelId,
            KeyName: this.keyName,
            MaxCount: this.maxInstanceCount ?? RunInstanceStep.DefaultNumberOfInstances,
            MinCount: this.minInstanceCount ?? RunInstanceStep.DefaultNumberOfInstances,
            Monitoring: this.monitoring,
            NetworkInterfaces: this.networkInterfaces,
            Placement: this.placement,
            PrivateIpAddress: this.privateIpAddress,
            RamdiskId: this.ramdiskId,
            SecurityGroups: this.securityGroups,
            SecurityGroupIds: this.securityGroupIds,
            SubnetId: this.subnetId,
            TagSpecifications: this.tagSpecifications,
            UserData: this.userData,
        };
        const apiParams = this.pruneAndTransformRecord(apiParamMap, x => x.resolve(inputs));
        
        const result = new AwsApiStep(new Stack(), "runInstances", {
            service: "EC2",
            pascalCaseApi: "RunInstances",
            apiParams,
            outputs: [{
                outputType: DataTypeEnum.MAP_LIST,
                name: "Instances",
                selector: "$.Instances"
            }],
            awsInvoker: this.awsInvoker
        }).invoke({});
        if (result.responseCode !== ResponseCode.SUCCESS) {
            throw new Error(`Run instances failed for ${this.imageId}`);
        }
        return result.outputs?.["runInstances.Instances"].map((instance: RunInstanceResult) => instance.InstanceId) ?? [];
    }

    private waitForInstanceRunning(instanceIds: string[]): void {
        waitForAndAssertInstanceState({
            waitForState: ['running', 'shutting-down', 'terminated', 'stopping', "stopped"],
            assertState: "running",
            instanceIds: instanceIds,
            awsInvoker: this.awsInvoker,
        });
        waitForAndAssertInstanceStatus({
            waitForStatus: ['ok', 'impaired', 'insufficient-data', 'not-applicable'],
            assertStatus: "ok",
            instanceIds: instanceIds,
            awsInvoker: this.awsInvoker,
        })

        const apiParams = {
            InstanceIds: instanceIds,
            IncludeAllInstances: true,
        };
        const stepParams = {
            service: "EC2",
            pascalCaseApi: "DescribeInstanceStatus",
            apiParams,
            awsInvoker: this.awsInvoker,
        };
        const result = new AwsApiStep(new Stack(), "getInstanceStates", {
            ...stepParams,
            outputs: [{
                outputType: DataTypeEnum.MAP_LIST,
                name: "InstanceStatuses",
                selector: "$.InstanceStatuses"
            }],
        }).invoke({});
        if (result.responseCode !== ResponseCode.SUCCESS) {
            throw new Error(`Get instance status failed for ${this.imageId} instances`);
        }
        return result.outputs?.["getInstanceStates.InstanceStatuses"].map((instance: DescribeInstanceStatusResult) => instance.InstanceState.Name) ?? [];
    }

    public toSsmEntry(): { [name: string]: any; } {
        const inputMap: Record<string, any> = {
            "ImageId": this.imageId,
            "InstanceType": this.instanceType,
            "MinInstanceCount": this.minInstanceCount,
            "MaxInstanceCount": this.maxInstanceCount,
            "AdditionalInfo": this.additionalInfo,
            "BlockDeviceMappings": this.blockDeviceMappings,
            "ClientToken": this.clientToken,
            "DisableApiTermination": this.disableApiTermination,
            "EbsOptimized": this.ebsOptimized,
            "IamInstanceProfileArn": this.iamInstanceProfileArn,
            "IamInstanceProfileName": this.iamInstanceProfileName,
            "InstanceInitiatedShutdownBehavior": this.instanceInitiatedShutdownBehavior,
            "KernelId": this.kernelId,
            "KeyName": this.keyName,
            "Monitoring": this.monitoring,
            "NetworkInterfaces": this.networkInterfaces,
            "Placement": this.placement,
            "PrivateIpAddress": this.privateIpAddress,
            "RamdiskId": this.ramdiskId,
            "SecurityGroupIds": this.securityGroupIds,
            "SecurityGroups": this.securityGroups,
            "SubnetId": this.subnetId,
            "TagSpecifications": this.tagSpecifications,
            "UserData": this.userData,
        }

        const inputs = this.pruneAndTransformRecord(inputMap, x => x.print());
        
        return super.prepareSsmEntry(inputs);
    }

    private pruneAndTransformRecord<T>(record: Record<string, IGenericVariable | undefined>, transform: (input: IGenericVariable) => T): Record<string, T> {
        const result: Record<string, T> = {};
        for (const key of Object.keys(record)) {
            const value = record[key];
            if (value === undefined) { continue; }
            result[key] = transform(value);
        }
        return result;
    }
}
