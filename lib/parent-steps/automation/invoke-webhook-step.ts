import { Construct } from "@aws-cdk/core";
import { IStringVariable } from "../..";
import { DataTypeEnum } from "../../domain/data-type";
import { Output } from "../../domain/output";
import { pruneAndTransformRecord } from "../../utils/prune-and-transform-record";
import { AutomationStep, AutomationStepProps } from "../automation-step";

/**
 * Response from IWebhook.Invoke
 */
export interface InvokeWebhookResult {
    /**
     * The text received from the webhook provider response.
     */
    readonly response: string;

    /**
     * The HTTP status code received from the webhook provider response.
     */
    readonly responseCode: number;
}

/**
 * The properties for IWebhook.Invoke
 */
export interface InvokeWebhookProps {
    /**
     * The name of the Automation integration. For example, exampleIntegration. The integration you specify must already exist.
     */
    readonly integrationName: string;

    /**
     * (Optional) The payload you want to send when your webhook integration is invoked.
     */
    readonly body?: string;
}

/**
 * Hook for simulating aws:invokeWebhook
 */
export interface IWebhook {
    /**
     * Invoke the web hook
     */
    invoke(props: InvokeWebhookProps): InvokeWebhookResult;
}

class WebhookImpl implements IWebhook {
    private static readonly NoContentResponseCode = 204;

    invoke(_props: InvokeWebhookProps): InvokeWebhookResult {
        console.log("InvokeWebhook: Cannot be simulated. Returning No-Content.");

        return {
            response: "",
            responseCode: WebhookImpl.NoContentResponseCode,
        };
    }
}

/**
 * Properties for InvokeWebhookStep
 */
export interface InvokeWebhookStepProps extends AutomationStepProps {
    /**
     * (Optional) Hook for simulating aws:invokeWebhook
     * @default - Returns 204 with an empty response
     */
    readonly webhook?: IWebhook;

    /**
     * The name of the Automation integration. For example, exampleIntegration. The integration you specify must already exist.
     */
    readonly integrationName: IStringVariable;

    /**
     * (Optional) The payload you want to send when your webhook integration is invoked.
     */
    readonly body?: IStringVariable;
}

/**
 * AutomationStep implementation for [aws:invokeWebhook](https://docs.aws.amazon.com/systems-manager/latest/userguide/invoke-webhook.html)
 */
export class InvokeWebhookStep extends AutomationStep {
    readonly action = "aws:invokeWebhook";
    readonly webhook: IWebhook;
    readonly integrationName: IStringVariable;
    readonly body?: IStringVariable;

    constructor(scope: Construct, id: string, props: InvokeWebhookStepProps) {
        super(scope, id, props);
        this.webhook = props.webhook ?? new WebhookImpl();
        this.integrationName = props.integrationName;
        this.body = props.body;
    }

    public listOutputs(): Output[] {
        return [{
            outputType: DataTypeEnum.STRING,
            selector: "$.Response",
            name: "Response",
        },{
            outputType: DataTypeEnum.INTEGER,
            selector: "$.ResponseCode",
            name: "ResponseCode",
        }];
    }

    public listInputs(): string[] {
        const inputs = [
            this.integrationName,
            this.body,
        ];

        return inputs.flatMap(i => i?.requiredInputs() ?? []);
    }

    public executeStep(inputs: Record<string, any>): Record<string, any> {
        const integrationName = this.integrationName.resolveToString(inputs);
        const body = this.body?.resolveToString(inputs);

        const result = this.webhook.invoke({
            integrationName: integrationName,
            body: body,
        });

        return {
            Response: result.response,
            ResponseCode: result.responseCode,
        };
    }

    public toSsmEntry(): Record<string, any> {
        return super.prepareSsmEntry(pruneAndTransformRecord({
            IntegrationName: this.integrationName,
            Body: this.body,
        }, x => x.print()));
    }
}