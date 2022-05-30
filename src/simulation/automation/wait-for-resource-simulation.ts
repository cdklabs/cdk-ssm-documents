import { NonRetriableException } from '../../domain/non-retriable-exception';
import { IAwsInvoker } from '../../interface/aws-invoker';
import { ISleepHook } from '../../interface/sleep-hook';
import { WaitForResourceStep } from '../../parent-steps/automation/wait-for-resource-step';
import { AssertAwsResourceSimulation } from './assert-aws-resource-simulation';
import { AutomationSimulationBase } from './automation-simulation-base';

export interface WaitForResourceSimulationProps {
  /**
   * (Optional) Hook to inject alternate ISleeper (to mock the sleep between failed invocations).
   * @default - really perform sleep using SleeperImpl class.
   */
  readonly sleepHook: ISleepHook;

  /**
   * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
   * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
   */
  readonly awsInvoker: IAwsInvoker;
}

/**
 * AutomationStep impl for aws:waitForAwsResourceProperty
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-waitForAwsResourceProperty.html
 */
export class WaitForResourceSimulation extends AutomationSimulationBase {

  readonly action: string = 'aws:waitForAwsResourceProperty';
  private waitForResourceStep: WaitForResourceStep;
  private props: WaitForResourceSimulationProps;

  constructor(step: WaitForResourceStep, props: WaitForResourceSimulationProps) {
    super(step);
    this.waitForResourceStep = step;
    this.props = props;

  }

  /**
   * As is the case in an SSM Automation execution, this will continue to sleep/execute until desired value is found.
   * This function will throw if the timeoutSeconds is exceeded and the desired value is still not received from AWS.
   */
  public executeStep(inputs: { [name: string]: any }): { [name: string]: any } {
    var lastError = undefined;
    for (var endTime = Date.now() + this.waitForResourceStep.timeoutSeconds * 1000; endTime > Date.now();) {
      try {
        return new AssertAwsResourceSimulation(this.waitForResourceStep, this.props).executeStep(inputs);
      } catch (error) {
        if (error instanceof NonRetriableException) {
          throw error;
        }
        console.log(`Received exception when hitting AWS API ${this.waitForResourceStep.service}.${this.waitForResourceStep.pascalCaseApi}. ` +
                    `Will try again in ${this.waitForResourceStep.sleepIntervalMillis} millis: ${JSON.stringify((error as Error).message)}`);
        lastError = error;
        if (endTime > Date.now()) {
          this.props.sleepHook.sleep(this.waitForResourceStep.sleepIntervalMillis);
        }
      }
    }
    if (lastError != undefined) {
      throw new Error((lastError as Error).message);
    }
    throw new Error('Execution time exceeded timeout: timeout set to '
            + this.waitForResourceStep.timeoutSeconds + ' but did not get desired response in that time.');
  }

}
