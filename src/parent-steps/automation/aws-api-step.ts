import {AutomationStep, AutomationStepProps} from "../automation-step";
import {Output} from "../../domain/output";
import {IAwsInvoker, ReflectiveAwsInvoker} from "../../interface/aws-invoker";
import {Construct} from 'constructs';
import { DictFormat } from "../..";

export interface AwsInvocationProps extends AutomationStepProps {
    /**
     * (Required) The AWS service to be invoked.
     * @example ec2
     */
    readonly service: string;

    /**
     * (Required) The AWS api represented in PascalCase.
     * This value is used as-is in the SSM yaml/json.
     * This is used as the default for javaScriptApi (see that param).
     * @example DescribeInstances
     */
    readonly pascalCaseApi: string;

    /**
     * (Required) API Params to submit with the request to the api.
     * You may include variables which will be substitued for inputs during step execution as such {{INPUT}}
     * @example { 'VolumeIds': ['{{ EbsDescribeInstance.VolumeId }}'] }
     */
    readonly apiParams: { [name: string]: any; };

    /**
     * (Optional) The api as represented the AWS JavaScript API. This is usually lowerCamelCase.
     * This is used in the simulation run to execute the AWS API against the JavaScript SDK.
     * @example describeInstances
     * @default - will use the camelCaseApi param and substitute the first character for lowercase by default.
     */
    readonly javaScriptApi?: string;

    /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
    readonly awsInvoker?: IAwsInvoker;
}

/**
 * Properties for AwsInvocation
 */
export interface AwsApiStepProps extends AwsInvocationProps {

    /**
     * (Required) specify the outputs to extract from the JavaScript JSON response.
     */
    readonly outputs: Output[];
}

/**
 * AutomationStep implementation of aws:executeAwsApi
 */
export class AwsApiStep extends AutomationStep {

    readonly service: string;
    readonly pascalCaseApi: string;
    readonly apiParams: DictFormat;
    readonly outputs: Output[];
    readonly javaScriptApi: string;
    readonly awsInvoker: IAwsInvoker;
    readonly action: string = "aws:executeAwsApi";

    constructor(scope: Construct, id: string, props: AwsApiStepProps) {
        super(scope, id, props);
        this.service = props.service;
        this.pascalCaseApi = props.pascalCaseApi;
        this.apiParams = new DictFormat(props.apiParams);
        this.outputs = props.outputs;
        this.javaScriptApi = props.javaScriptApi ??
            (this.pascalCaseApi.charAt(0).toLowerCase() + this.pascalCaseApi.slice(1));
        this.awsInvoker = props.awsInvoker ?? new ReflectiveAwsInvoker();
    }

    /**
     * @returns Outputs as specified in params
     */
    public listOutputs(): Output[] {
        return this.outputs;
    }

    /**
     * Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}").
     * @returns list of required inputs.
     */
    public listInputs(): string[] {
        return this.apiParams.requiredInputs();
    }

    /**
     * Invokes the specified service (param) with the specified api (param) with the specified apiParams (param).
     * This call will be invoked synchronously.
     * The input variables in apiParams (param) specified using "{{INPUT}}" syntax will be replaced with the inputs.
     * @returns the AWS api response. The Output selection will take place outside of this function.
     */
    public executeStep(inputs: { [name: string]: any; }): { [name: string]: any; } {
        return this.awsInvoker.invoke({
            service: this.service,
            awsApi: this.javaScriptApi,
            awsParams: this.apiParams.resolveToDict(inputs)
        });
    }

    public toSsmEntry(): { [name: string]: any; } {
        return super.prepareSsmEntry({
            ...{'Service': this.service,
                'Api': this.pascalCaseApi},
            ...this.apiParams.format});
    }

}
