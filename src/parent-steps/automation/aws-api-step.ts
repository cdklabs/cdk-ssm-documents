import { Construct } from 'constructs';
import { DictFormat } from '../..';
import { Output } from '../../domain/output';
import { AutomationStep, AutomationStepProps } from '../automation-step';

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
     * You may include variables which will be substitued for inputs during step execution as such {{ INPUT }}
     * @example { 'VolumeIds': ['{{ EbsDescribeInstance.VolumeId }}'] }
     */
  readonly apiParams: { [name: string]: any };

  /**
     * (Optional) The api as represented the AWS JavaScript API. This is usually lowerCamelCase.
     * This is used in the simulation run to execute the AWS API against the JavaScript SDK.
     * @example describeInstances
     * @default - will use the camelCaseApi param and substitute the first character for lowercase by default.
     */
  readonly javaScriptApi?: string;
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
  readonly action: string = 'aws:executeAwsApi';

  constructor(scope: Construct, id: string, props: AwsApiStepProps) {
    super(scope, id, props);
    this.service = props.service;
    this.pascalCaseApi = props.pascalCaseApi;
    this.apiParams = new DictFormat(props.apiParams);
    this.outputs = props.outputs;
    this.javaScriptApi = props.javaScriptApi ??
            (this.pascalCaseApi.charAt(0).toLowerCase() + this.pascalCaseApi.slice(1));
  }

  /**
     * @returns Outputs as specified in params
     */
  public listOutputs(): Output[] {
    return this.outputs;
  }

  /**
     * Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{ INPUT }}").
     * @returns list of required inputs.
     */
  public listInputs(): string[] {
    return this.apiParams.requiredInputs();
  }

  public toSsmEntry(): { [name: string]: any } {
    return super.prepareSsmEntry({
      ...{
        Service: this.service,
        Api: this.pascalCaseApi,
      },
      ...this.apiParams.format,
    });
  }

}
