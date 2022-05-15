import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { MockAwsInvoker, MockSleep, StringDocument, SynthUtils } from '../../../lib';


describe('StringDocument', function() {
  describe('fromFile()', function() {
    it('Loads existing automation document and simulates it', function() {
      // Initialize Mocks
      const sleeper = new MockSleep();
      const awsInvoker = new MockAwsInvoker();
      awsInvoker.whenThen(
        // when invoked with...
        { awsApi: 'listBuckets', awsParams: {}, service: 'S3' },
        // then response with...
        { Owner: { ID: 'BUCKET_ID' } });

      // Create document from file
      const stack: Stack = new Stack();
      const myAutomationDoc = StringDocument.fromFile(stack, 'MyAutomationDoc', 'test/myAutomation.js', {
        sleepHook: sleeper,
        awsInvoker: awsInvoker,
      });
      SynthUtils.synthesize(stack);

      // Execute simulation
      const simOutput = myAutomationDoc.runSimulation({});

      // Assert simulation result
      assert.deepEqual(awsInvoker.previousInvocations, [
        { awsApi: 'listBuckets', awsParams: {}, service: 'S3' },
      ]);
      assert.deepEqual(sleeper.sleepMilliInvocations, [3000]);
      assert.deepEqual(simOutput.executedSteps, ['MySleep', 'GetBucketId']);
    });
  });
});
