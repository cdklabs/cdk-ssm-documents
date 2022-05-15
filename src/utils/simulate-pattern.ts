import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SynthUtils } from '../construct/synth-utils';
import { AutomationDocument } from '../document/automation-document';
import { DocumentResult } from '../domain/document-result';

export function simulatePattern<TPattern extends Construct>(patternFactory: (scope: Construct) => TPattern, inputs: Record<string, any>):
DocumentResult {
  class PatternDocument extends AutomationDocument {
    constructor(scope: Construct) {
      super(scope, 'constructDocument', {});
      patternFactory(this);
    }
  }

  const stack = new Stack();
  const document = new PatternDocument(stack);
  SynthUtils.synthesize(stack);
  return document.runSimulation(inputs);
}