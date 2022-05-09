import { Construct, Stack } from "@aws-cdk/core";
import { AwsApiStep, IAwsInvoker, ReflectiveAwsInvoker, ResponseCode } from "../..";
import { DataTypeEnum } from "../../domain/data-type";
import { Output } from "../../domain/output";
import { IBooleanVariable } from "../../interface/variables/boolean-variable";
import { IStringMapVariable } from "../../interface/variables/string-map-variable";
import { IStringVariable } from "../../interface/variables/string-variable";
import { IGenericVariable } from "../../interface/variables/variable";
import { pruneAndTransformRecord } from "../../utils/prune-and-transform-record";
import { AutomationStep, AutomationStepProps } from "../automation-step";
import { waitForAndAssertImageAvailable } from "./sub-steps/wait-for-and-assert";

/**
 * Properties for CreateImageStep
 */
export interface CreateImageStepProps extends AutomationStepProps {
    /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
    readonly awsInvoker?: IAwsInvoker;

    /**
     * The ID of the instance.
     */
    readonly instanceId: IStringVariable;

    /**
     * The name for the image.
     */
    readonly imageName: IStringVariable;

    /**
     * (Optional) A description of the image.
     */
    readonly imageDescription?: IStringVariable;

    /**
     * (Optional) By default, Amazon Elastic Compute Cloud (Amazon EC2) attempts to shut down and reboot the instance before creating the image. If the No Reboot option is set to true, Amazon EC2 doesn't shut down the instance before creating the image. When this option is used, file system integrity on the created image can't be guaranteed.
     * If you don't want the instance to run after you create an AMI from it, first use the aws:changeInstanceState – Change or assert instance state action to stop the instance, and then use this aws:createImage action with the NoReboot option set to true.
     */
    readonly noReboot?: IBooleanVariable;

    /**
     * (Optional) The block devices for the instance.
     */
    readonly blockDeviceMappings?: IStringMapVariable;
}

/**
 * AutomationStep implemenation for aws:createImage 
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-create.html
 */
 export class CreateImageStep extends AutomationStep {
    readonly action: string = 'aws:createImage';
    readonly awsInvoker: IAwsInvoker;
    readonly instanceId: IStringVariable;
    readonly imageName: IStringVariable;
    readonly imageDescription?: IStringVariable;
    readonly noReboot?: IBooleanVariable;
    readonly blockDeviceMappings?: IStringMapVariable;

    constructor(scope: Construct, id: string, props: CreateImageStepProps) {
        super(scope, id, props);
        this.awsInvoker = props.awsInvoker ?? new ReflectiveAwsInvoker();
        this.instanceId = props.instanceId;
        this.imageName = props.imageName;
        this.imageDescription = props.imageDescription;
        this.noReboot = props.noReboot;
        this.blockDeviceMappings = props.blockDeviceMappings;
    }

    public listOutputs(): Output[] {
        return [{
            outputType: DataTypeEnum.STRING,
            name: "ImageId",
            selector: "$.ImageId",
        }, {
            outputType: DataTypeEnum.STRING,
            name: "ImageState",
            selector: "$.ImageState",
        }];
    }

    public listInputs(): string[] {
        const inputs = [
            this.instanceId,
            this.imageName,
            this.imageDescription,
            this.noReboot,
            this.blockDeviceMappings,
        ];

        return inputs.flatMap(i => i?.requiredInputs() ?? []);
    }

    public executeStep(inputs: Record<string, any>): Record<string, any> {
        console.log(`CreateImage: Creating image of ${this.instanceId}`);
        const imageId = this.createImage(inputs);
        console.log(`CreateImage: Waiting for ${imageId} to be available`);
        const state = this.waitForImageAvailable(imageId);
        console.log(`CreateImage: Image ${imageId} is available`);

        return {
            ImageId: imageId,
            ImageState: state,
        }
    }

    private createImage(inputs: Record<string, any>): string {
        const apiParamMap: Record<string, IGenericVariable | undefined> = {
            InstanceId: this.instanceId,
            Name: this.imageName,
            Description: this.imageDescription,
            NoReboot: this.noReboot,
            BlockDeviceMappings: this.blockDeviceMappings,
        }
        const apiParams = pruneAndTransformRecord(apiParamMap, x => x.resolve(inputs));

        const result = new AwsApiStep(new Stack(), "createImage", {
            service: "EC2",
            pascalCaseApi: "CreateImage",
            apiParams,
            outputs: [{
                outputType: DataTypeEnum.STRING,
                name: "ImageId",
                selector: "$.ImageId"
            }],
            awsInvoker: this.awsInvoker
        }).invoke({});
        if (result.responseCode !== ResponseCode.SUCCESS) {
            throw new Error(`Create image failed for ${apiParams.InstanceId}: ${result.stackTrace}`);
        }
        return result.outputs?.["createImage.ImageId"];
    }

    private waitForImageAvailable(imageId: string): string {
        waitForAndAssertImageAvailable({
            imageId: imageId,
            awsInvoker: this.awsInvoker,
        });
        return "available";
    }

    public toSsmEntry(): Record<string, any> {
        const entryMap: Record<string, IGenericVariable | undefined> = {
            InstanceId: this.instanceId,
            ImageName: this.imageName,
            ImageDescription: this.imageDescription,
            NoReboot: this.noReboot,
            BlockDeviceMappings: this.blockDeviceMappings,
        };
        const entries = pruneAndTransformRecord(entryMap, x => x.print());
        return super.prepareSsmEntry(entries);
    }
}