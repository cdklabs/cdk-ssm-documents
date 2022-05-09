import { Construct, Stack } from "@aws-cdk/core";
import { AwsApiStep, IAwsInvoker, ISleepHook, ReflectiveAwsInvoker, ResponseCode } from "../..";
import { DataTypeEnum } from "../../domain/data-type";
import { Output } from "../../domain/output";
import { IStringVariable } from "../../interface/variables/string-variable";
import { AutomationStep, AutomationStepProps } from "../automation-step";
import { SleepStep } from "./sleep-step";

/**
 * Properties for DeleteImageStep
 */
export interface DeleteImageStepProps extends AutomationStepProps {
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
     * The ID of the image to be deleted.
     */
    readonly imageId: IStringVariable;
}

interface DescribeImageResult {
    BlockDeviceMappings: [{
        Ebs: {
            SnapshotId: string;
        }
    }]
}

/**
 * AutomationStep implementation for aws:deleteImage 
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-delete.html
 */
 export class DeleteImageStep extends AutomationStep {
    readonly action: string = 'aws:deleteImage';
    readonly awsInvoker: IAwsInvoker;
    readonly sleepHook?: ISleepHook;
    readonly imageId: IStringVariable;

    constructor(scope: Construct, id: string, props: DeleteImageStepProps) {
        super(scope, id, props);
        this.awsInvoker = props.awsInvoker ?? new ReflectiveAwsInvoker();
        this.sleepHook = props.sleepHook;
        this.imageId = props.imageId;
    }

    /**
     * This step has no outputs.
     */
    public listOutputs(): Output[] {
        return [];
    }

    public listInputs(): string[] {
        const inputs = [
            this.imageId,
        ];

        return inputs.flatMap(i => i?.requiredInputs() ?? []);
    }

    public executeStep(inputs: Record<string, any>): Record<string, any> {
        const imageId = this.imageId.resolveToString(inputs);
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
        const result = new AwsApiStep(new Stack(), "describeImage", {
            service: "EC2",
            pascalCaseApi: "DescribeImages",
            apiParams : {
                ImageIds: [imageId],
            },
            awsInvoker: this.awsInvoker,
            outputs: [{
                outputType: DataTypeEnum.STRING_MAP,
                selector: "$.Images[0]",
                name: "Image"
            }],
        }).invoke({});
        if (result.responseCode !== ResponseCode.SUCCESS) {
            throw new Error(`Describe image failed for ${imageId}: ${result.stackTrace}`);
        }
        const image: DescribeImageResult | null = result.outputs?.["describeImage.Image"];
        return image?.BlockDeviceMappings.map(mapping => mapping.Ebs.SnapshotId) ?? [];
    }

    private deregisterImage(imageId: string): void {
        const result = new AwsApiStep(new Stack(), "deregisterImage", {
            service: "EC2",
            pascalCaseApi: "DeregisterImage",
            apiParams: {
                ImageId: imageId,
            },
            outputs: [],
            awsInvoker: this.awsInvoker
        }).invoke({});
        if (result.responseCode !== ResponseCode.SUCCESS) {
            throw new Error(`Deregister image failed for ${imageId}: ${result.stackTrace}`);
        }
    }

    private deleteSnapshotsOfImage(snapshotIds: string[]): void {
        for (const snapshotId of snapshotIds) {
            if (snapshotId === null || snapshotId === undefined) { continue; }
            try {
                this.deleteSnapshot(snapshotId);
            }
            catch (e) {
                if ((e as Error).message.indexOf("InvalidSnapshot.InUse") < 0) { throw e; }
                console.log("InvalidSnapshot.InUse case found. Attempt to retry after 2 seconds.");
                new SleepStep(new Stack(), "sleep", {
                    sleepSeconds: 2,
                    sleepHook: this.sleepHook,
                }).invoke({});
                this.deleteSnapshot(snapshotId);
            }
        }
    }

    private deleteSnapshot(snapshotId: string): void {
        const result = new AwsApiStep(new Stack(), "deleteSnapshot", {
            service: "EC2",
            pascalCaseApi: "DeleteSnapshot",
            apiParams: {
                SnapshotId: snapshotId,
            },
            outputs: [],
            awsInvoker: this.awsInvoker
        }).invoke({});
        if (result.responseCode !== ResponseCode.SUCCESS) {
            throw new Error(`Delete snapshot failed for ${snapshotId}: ${result.stackTrace}`);
        }
    }

    public toSsmEntry(): Record<string, any> {
        return super.prepareSsmEntry({
            ImageId: this.imageId.print(),
        });
    }
}