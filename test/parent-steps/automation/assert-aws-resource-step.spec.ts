import {AssertAwsResourceStep, MockAwsInvoker, ResponseCode, StringVariable} from '../../../lib';
import { Stack } from '@aws-cdk/core';

var assert = require('assert');

describe('AssertAwsResourceStep', function() {
    describe('#invoke()', function() {
        it('Passes when desired value fount', function() {
            const mockInvoker = new MockAwsInvoker();
            mockInvoker.nextReturn({Owner: {DisplayName: "MyDisplayName"}});
            const step = new AssertAwsResourceStep(new Stack(), "id", {
                name: "MyS3List",
                awsInvoker: mockInvoker,
                service: "S3",
                selector: "$.Owner.DisplayName",
                desiredValues: ["a", "b", "MyDisplayName", "c"],
                pascalCaseApi: "ListBuckets",
                apiParams: {"Filter": [{"SomeFilter": new StringVariable("SomeOutput.OutKey")}]}
            })
            const response = step.invoke({"SomeOutput.OutKey": "FilterVal"});
            if (response.responseCode != ResponseCode.SUCCESS) {
                assert.fail(response.stackTrace);
            }
            assert.equal(response.responseCode, ResponseCode.SUCCESS);
        });
        it('Fails when desired value not found', function() {
            const mockInvoker = new MockAwsInvoker();
            mockInvoker.nextReturn({Owner: {DisplayName: "MyDisplayName"}});
            const step = new AssertAwsResourceStep(new Stack(), "id", {
                name: "MyS3List",
                awsInvoker: mockInvoker,
                service: "S3",
                selector: "$.Owner.DisplayName",
                desiredValues: ["a", "b", "c"],
                pascalCaseApi: "ListBuckets",
                apiParams: {"Filter": [{"SomeFilter": new StringVariable("SomeOutput.OutKey")}]}
            })
            const response = step.invoke({"SomeOutput.OutKey": "FilterVal"});
            assert.equal(response.responseCode, ResponseCode.FAILED);
        });
    });
    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const mockInvoker = new MockAwsInvoker();
            const step = new AssertAwsResourceStep(new Stack(), "id", {
                name: "MyS3List",
                awsInvoker: mockInvoker,
                service: "S3",
                selector: "$.Owner.DisplayName",
                desiredValues: ["a", "b", "c"],
                pascalCaseApi: "ListBuckets",
                apiParams: {"Filter": [{"SomeFilter": new StringVariable("SomeOutput.OutKey")}]}
            });
            assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
                action: 'aws:assertAwsResourceProperty',
                inputs: {
                  Api: 'ListBuckets',
                  DesiredValues: [
                    'a',
                    'b',
                    'c'
                  ],
                  Filter: [
                    {
                      SomeFilter: '{{SomeOutput.OutKey}}'
                    }
                  ],
                  PropertySelector: '$.Owner.DisplayName',
                  Service: 'S3'
                },
                name: 'MyS3List'
            });
        });
    });
});
