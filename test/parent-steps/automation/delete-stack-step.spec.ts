import {StringVariable, MockAwsInvoker, ResponseCode} from '../../../lib';
import { Stack } from '@aws-cdk/core';
import {DeleteStackStep} from "../../../lib/parent-steps/automation/delete-stack-step";

var assert = require('assert');

describe('DeleteStackStep', function() {
    describe('#invoke()', function() {
        it('Invoke AWS with replacement params', function() {
            const mockInvoker = new MockAwsInvoker();
            mockInvoker.whenThen({
                service: "CloudFormation",
                awsApi: "describeStacks",
                awsParams: {
                    StackName: "MyStack"
                }
            }, {
                Stacks: [{ StackId: 'MyStackId', StackStatus: 'CREATE_COMPLETE'}]
            });
            mockInvoker.whenThen({
                service: "CloudFormation",
                awsApi: "describeStacks",
                awsParams: {
                    StackName: "MyStackId"
                }
            }, {
                Stacks: [{ StackId: 'MyStackId', StackStatus: 'DELETE_COMPLETE'}]
            });

            const step = new DeleteStackStep(new Stack(), "id", {
                name: "DeleteStack",
                awsInvoker: mockInvoker,
                stackNameVariable: new StringVariable("MyStackVar")
            });

            const response = step.invoke({"MyStackVar": "MyStack", 'automation:EXECUTION_ID': "executionId"});
            if (response.responseCode != ResponseCode.SUCCESS) {
                assert.fail(response.stackTrace);
            }
            assert.deepEqual(mockInvoker.previousInvocations[0], {
                awsApi: 'describeStacks',
                awsParams: {
                    StackName: 'MyStack'
                },
                service: 'CloudFormation'
            });
            assert.deepEqual(mockInvoker.previousInvocations[1], {
                awsApi: 'deleteStack',
                awsParams: {
                    ClientRequestToken: 'MyStackexecutionId',
                    StackName: 'MyStackId'
                },
                service: 'CloudFormation'
            });
            assert.deepEqual(mockInvoker.previousInvocations[2], {
                awsApi: 'describeStacks',
                awsParams: {
                    StackName: 'MyStackId'
                },
                service: 'CloudFormation'
            });
        });
    });
    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const mockInvoker = new MockAwsInvoker();
            const step = new DeleteStackStep(new Stack(), "id", {
                name: "MyDeleteStack",
                awsInvoker: mockInvoker,
                stackNameVariable: new StringVariable("MyStackVar")
            });
            assert.deepEqual(step.toSsmEntry(), {
                action: 'aws:deleteStack',
                inputs: {
                    ClientRequestToken: '{{MyStackVar}}{{automation:EXECUTION_ID}}',
                    StackName: '{{MyStackVar}}'
                },
                name: 'MyDeleteStack'
            });
        });
    });
});
