var assert = require('assert');
import {MockAwsInvoker, ResponseCode} from '../../../lib';
import { WaitForResourceStep } from '../../../lib';
import { Stack } from 'aws-cdk-lib';

describe('WaitForResourceStep', function() {
    describe('#invoke()', function() {
        it('Responds immediately when found', function() {
            const mockInvoker = new MockAwsInvoker();
            mockInvoker.nextReturn({Owner: {DisplayName: "MyDisplayName"}});
            const step = new WaitForResourceStep(new Stack(), "id", {
                selector: "$.Owner.DisplayName",
                desiredValues: ['MyDisplayName', 'blabla'],
                service: "S3",
                name: "S3List",
                pascalCaseApi: "listBuckets",
                apiParams: {},
                awsInvoker: mockInvoker,
                sleepIntervalMillis: 5000,
                timeoutSeconds:10})

            const res = step.invoke({});
            assert.equal(res.responseCode, ResponseCode.SUCCESS);
            assert.equal(mockInvoker.previousInvocations.length, 1)
        });
        it('Waits for desired response from AWS', function() {
            const mockInvoker = new MockAwsInvoker();
            mockInvoker
                .nextReturn({Owner: {NO_DISPLAY_NAME: "MyDisplayName"}})
                .nextReturn({Owner: {DisplayName: "MyDisplayName"}});
            const step = new WaitForResourceStep(new Stack(), "id", {
                selector: "$.Owner.DisplayName",
                desiredValues: ['MyDisplayName', 'blabla'],
                service: "S3",
                name: "S3List",
                pascalCaseApi: "listBuckets",
                apiParams: {},
                awsInvoker: mockInvoker,
                sleepIntervalMillis: 1,
                timeoutSeconds:1000})

            const res = step.invoke({});
            assert.equal(res.responseCode, ResponseCode.SUCCESS);
            assert.equal(mockInvoker.previousInvocations.length, 2)
        });
        it('Gives up invocation if no response found before timeout', function() {
            const mockInvoker = new MockAwsInvoker();
            mockInvoker
                .nextReturn({Owner: {NO_DISPLAY_NAME: "MyDisplayName"}})
                .nextReturn({Owner: {DisplayName: "MyDisplayName"}});
            const step = new WaitForResourceStep(new Stack(), "id", {
                selector: "$.Owner.DisplayName",
                desiredValues: ['foobar', 'blabla'],
                service: "S3",
                name: "S3List",
                pascalCaseApi: "listBuckets",
                apiParams: {},
                awsInvoker: mockInvoker,
                sleepIntervalMillis: 20,
                timeoutSeconds:0.1})

            const res = step.invoke({});
            assert.equal(res.responseCode, ResponseCode.FAILED);
            assert.ok(mockInvoker.previousInvocations.length > 0)
        });
    });
    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const mockInvoker = new MockAwsInvoker();
            const step = new WaitForResourceStep(new Stack(), "id", {
                selector: "$.Owner.DisplayName",
                desiredValues: ['MyDisplayName', 'blabla'],
                service: "S3",
                name: "S3List",
                pascalCaseApi: "listBuckets",
                apiParams: {},
                awsInvoker: mockInvoker,
                sleepIntervalMillis: 5000,
                timeoutSeconds:10})
            assert.deepEqual(step.toSsmEntry(), {
                action: 'aws:waitForAwsResourceProperty',
                inputs: {
                  Api: 'listBuckets',
                  DesiredValues: [
                    'MyDisplayName',
                    'blabla'
                  ],
                  PropertySelector: '$.Owner.DisplayName',
                  Service: 'S3'
                },
                maxAttempts: 10,
                name: 'S3List'
            });
        });
    });
});
