import { Construct } from 'constructs';
import { IAwsInvoker } from '../../interface/aws-invoker';
import { WaitForAndAssertResource } from './wait-for-and-assert-resource';

/**
 * Properties of WaitForInstanceRunning
 */
export interface WaitForInstanceRunningProps {
  /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
  awsInvoker?: IAwsInvoker;

  /**
     * List of EC2 instance IDs to wait for
     */
  instanceIds: string[];
}

/**
 * Waits for EC2 instance(s) to be no longer pending and asserts that the status is running.
 */
export class WaitForInstanceRunning extends Construct {
  constructor(scope: Construct, id: string, props: WaitForInstanceRunningProps) {
    super(scope, id);

    const stepParams = {
      service: 'EC2',
      pascalCaseApi: 'DescribeInstanceStatus',
      apiParams: {
        InstanceIds: props.instanceIds,
        IncludeAllInstances: true,
      },
      awsInvoker: props.awsInvoker,
      selector: '$.InstanceStatuses..InstanceState.Name',
      waitForValues: ['running', 'shutting-down', 'terminated', 'stopping', 'stopped'],
      desiredValues: ['running'],
    };

    new WaitForAndAssertResource(this, 'waitForInstanceRunning', stepParams);
  }
}
