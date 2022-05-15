import { Construct } from 'constructs';
import { IAwsInvoker } from '../../interface/aws-invoker';
import { AssertAwsResourceStep, AssertAwsResourceStepProps } from '../../parent-steps/automation/assert-aws-resource-step';
import { WaitForResourceStep } from '../../parent-steps/automation/wait-for-resource-step';

/**
 * Properties of WaitForAndAssertResource
 */
export interface WaitForAndAssertResourceProps extends AssertAwsResourceStepProps {
  /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
  awsInvoker?: IAwsInvoker;

  /**
     * (Required) Value extracted from AWS response must be one of these values before asserting the desired value.
     */
  waitForValues: string[];
}

/**
 * Waits for resource value and asserts that the value is one of the desired values.
 */
export class WaitForAndAssertResource extends Construct {
  constructor(scope: Construct, id: string, props: WaitForAndAssertResourceProps) {
    super(scope, id);

    const stepParams = {
      service: props.service,
      pascalCaseApi: props.pascalCaseApi,
      apiParams: props.apiParams,
      awsInvoker: props.awsInvoker,
      selector: props.selector,
    };

    new WaitForResourceStep(this, 'waitForValues', {
      ...stepParams,
      desiredValues: props.waitForValues,
    });
    new AssertAwsResourceStep(this, 'assertDesired', {
      ...stepParams,
      desiredValues: props.desiredValues,
    });
  }
}
