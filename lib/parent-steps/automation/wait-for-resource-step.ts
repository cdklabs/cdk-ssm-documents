import { NonRetriableException } from "../../domain/non-retriable-exception";
import { ISleepHook, SleepImpl } from "../../interface/sleep-hook";
import { AssertAwsResourceStep, AssertAwsResourceStepProps } from "./assert-aws-resource-step";
import { Construct } from 'constructs';

export interface WaitForResourceStepProps extends AssertAwsResourceStepProps {
    /**
     * (Optional) Hook to inject alternate ISleeper (to mock the sleep between failed invocations).
     * @default - really perform sleep using SleeperImpl class.
     */
    readonly sleeper?: ISleepHook;

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
    readonly sleeper: ISleepHook;
    readonly sleepIntervalMillis: number;
    readonly action: string = 'aws:waitForAwsResourceProperty';

    constructor(scope: Construct, id: string, props: WaitForResourceStepProps) {
        super(scope, id, props);
        this.sleeper = props.sleeper ?? new SleepImpl();
        this.sleepIntervalMillis = props.sleepIntervalMillis ?? 2000;
    }

    /**
     * As is the case in an SSM Automation execution, this will continue to sleep/execute until desired value is found.
     * This function will throw if the timeoutSeconds is exceeded and the desired value is still not received from AWS.
     */
    public executeStep(inputs: { [name: string]: any; }): { [name: string]: any; } {
        var lastError = undefined
        for (var endTime = Date.now() + this.timeoutSeconds * 1000; endTime > Date.now();) {
            try {
                return super.executeStep(inputs);
            } catch (error) {
                if (error instanceof NonRetriableException) {
                    throw error;
                }
                console.log(`Received exception when hitting AWS API ${this.service}.${this.pascalCaseApi}. ` +
                    `Will try again in ${this.sleepIntervalMillis} millis: ${JSON.stringify((error as Error).message)}`);
                lastError = error;
                if (endTime > Date.now()) {
                    this.sleeper.sleep(this.sleepIntervalMillis);
                }
            }
        }
        if (lastError != undefined) {
            throw new Error((lastError as Error).message);
        }
        throw new Error("Execution time exceeded timeout: timeout set to "
            + this.timeoutSeconds + " but did not get desired response in that time.");
    }

}
