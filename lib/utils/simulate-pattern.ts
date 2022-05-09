import { SynthUtils } from "@aws-cdk/assert";
import { Construct, Stack } from "@aws-cdk/core";
import { AutomationDocument } from "../document/automation-document";
import { DocumentResult } from "../domain/document-result";

export function simulatePattern<TPattern extends Construct>(patternFactory: (scope: Construct) => TPattern, inputs: Record<string, any>): DocumentResult {
    class PatternDocument extends AutomationDocument {
        constructor(scope: Construct) {
            super(scope, "constructDocument", {});
            patternFactory(this);
        }
    }

    const stack = new Stack();
    const document = new PatternDocument(stack);
    SynthUtils.synthesize(stack);
    return document.runSimulation(inputs);
}