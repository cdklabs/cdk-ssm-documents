var assert = require('assert');
import { SynthUtils } from "@aws-cdk/assert";
import { Stack } from "@aws-cdk/core";
import { MockAwsInvoker, MockSleep } from "../../../lib";
import { StringDocument } from "../../../lib/patterns/document/string-document";


describe('StringDocument', function() {
    describe('fromFile()', function() {
        it('Loads existing automation document and simulates it', function() {
            this.timeout(5000);

            // Initialize Mocks
            const sleeper = new MockSleep();
            const awsInvoker = new MockAwsInvoker();
            awsInvoker.whenThen(
                // when invoked with...
                {awsApi: 'listBuckets', awsParams: {}, service: 'S3'},
                // then response with...
                {Owner: {ID: "BUCKET_ID"}})

            // Create document from file
            const stack: Stack = new Stack();
            const myAutomationDoc = StringDocument.fromFile(stack, "MyAutomationDoc", 'test/myAutomation.js', {
                sleepHook: sleeper,
                awsInvoker: awsInvoker
            });
            SynthUtils.synthesize(stack);
            
            // Execute simulation
            const simOutput = myAutomationDoc.runSimulation({});
            
            // Assert simulation result
            assert.deepEqual(awsInvoker.previousInvocations, [
                { awsApi: 'listBuckets', awsParams: {}, service: 'S3' }]);
            assert.deepEqual(sleeper.sleepMilliInvocations, [3000]);
            assert.deepEqual(simOutput.executedSteps, ['MySleep', 'GetBucketId']);
        });
    });
});
