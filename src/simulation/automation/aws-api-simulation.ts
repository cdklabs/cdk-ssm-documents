import { IAwsInvoker, ReflectiveAwsInvoker } from '../../interface/aws-invoker';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { AutomationSimulationBase } from './automation-simulation-base';

export interface AwsInvocationSimulationProps {

  /**
   * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
   * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
   */
  readonly awsInvoker: IAwsInvoker;
}

/**
 * AutomationStep implementation of aws:executeAwsApi
 */
export class AwsApiSimulation extends AutomationSimulationBase {

  readonly awsInvoker: IAwsInvoker;
  readonly awsApiStep: AwsApiStep;
  readonly action: string = 'aws:executeAwsApi';

  constructor(step: AwsApiStep, props: AwsInvocationSimulationProps) {
    super(step);
    this.awsApiStep = step;
    this.awsInvoker = props.awsInvoker ?? new ReflectiveAwsInvoker();
  }

  /**
     * Invokes the specified service (param) with the specified api (param) with the specified apiParams (param).
     * This call will be invoked synchronously.
     * The input variables in apiParams (param) specified using "{{INPUT}}" syntax will be replaced with the inputs.
     * @returns the AWS api response. The Output selection will take place outside of this function.
     */
  public executeStep(inputs: { [name: string]: any }): { [name: string]: any } {
    return this.awsInvoker.invoke({
      service: this.awsApiStep.service,
      awsApi: this.awsApiStep.javaScriptApi,
      awsParams: this.awsApiStep.apiParams.resolveToDict(inputs),
    });
  }

}
