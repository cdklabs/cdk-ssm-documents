import {App, Stack} from "aws-cdk-lib";

/**
 * Wraps SynthUtils from @aws-cdk/assert because that package is not exported via JSII
 */
export class SynthUtils {

    /**
     * Wraps @aws-cdk/assert SynthUtils.synthesize(stack).
     * Synthesizes the stack provided.
     */
    public static synthesize(stack: Stack) {
        return App.of(stack)?.synth();
    }
}