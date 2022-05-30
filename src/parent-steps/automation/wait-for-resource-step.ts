import { Construct } from 'constructs';
import { AssertAwsResourceStep, AssertAwsResourceStepProps } from './assert-aws-resource-step';

export interface WaitForResourceStepProps extends AssertAwsResourceStepProps {

  /**
     * (Optional) How much time to sleep after not receiving desired response from AWS SDK.
     * This is only used for the run simulation.
     * This is not used by SSM and is therefore not declared in the SSM yaml/json.
     * @default 2000 millis
     */
  readonly sleepIntervalMillis?: number;
}

/**
 * AutomationStep impl for aws:waitForAwsResourceProperty
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-waitForAwsResourceProperty.html
 */
export class WaitForResourceStep extends AssertAwsResourceStep {
  readonly sleepIntervalMillis: number;
  readonly action: string = 'aws:waitForAwsResourceProperty';

  constructor(scope: Construct, id: string, props: WaitForResourceStepProps) {
    super(scope, id, props);
    this.sleepIntervalMillis = props.sleepIntervalMillis ?? 2000;
  }

}
