import { Stack } from "@aws-cdk/core";
import { SynthUtils as AssertSynthUtils } from "@aws-cdk/assert";

/**
 * Wraps SynthUtils from @aws-cdk/assert because that package is not exported via JSII
 */
export class SynthUtils {

    /**
     * Wraps @aws-cdk/assert SynthUtils.toCloudFormation(stack).
     * @returns the CloudFormation generated for this stack as a string
     */
    public static toCloudFormation(stack: Stack): { [name: string]: any; } {
        return AssertSynthUtils.toCloudFormation(stack);
    }

    /**
     * Wraps @aws-cdk/assert SynthUtils.synthesize(stack).
     * Synthesizes the stack provided.
     */
    public static synthesize(stack: Stack) {
        return AssertSynthUtils.synthesize(stack);
    }
}