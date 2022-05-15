import { Stack } from "aws-cdk-lib";
import { ExecuteStateMachineStep, ExecuteStateMachineStepProps, HardCodedString, MockAwsInvoker, ResponseCode } from "../../../lib";
import assert = require("assert");

describe("ExecuteStateMachineStep", () => {
    describe('#invoke()', () => {
        it("Start execution StepFunctions API is invoked", () => {
            const stateMachineArn = "arn";
            const name = "name";
            const input = "{\"a\": 1}";
            const mockInvoker = new MockAwsInvoker();
            mockInvoker.whenThen({
                service: "StepFunctions",
                awsApi: "startExecution",
                awsParams: {
                    stateMachineArn: stateMachineArn,
                    name: name,
                    input: input,
                }
            }, {
                executionArn: "exeArn",
            });
            mockInvoker.whenThen({
                service: "StepFunctions",
                awsApi: "describeExecution",
                awsParams: {
                    executionArn: "exeArn"
                }
            }, {
                status: "SUCCEEDED",
            });
            const step = new ExecuteStateMachineStep(new Stack(), "execute", {
                executionName: new HardCodedString(name),
                stateMachineArn: new HardCodedString(stateMachineArn),
                input: new HardCodedString(input),
                awsInvoker: mockInvoker,
            });

            const result = step.invoke({});

            assert.equal(result.responseCode, ResponseCode.SUCCESS);
            assert.deepEqual(mockInvoker.previousInvocations[0], {
                service: "StepFunctions",
                awsApi: "startExecution",
                awsParams: {
                    stateMachineArn: stateMachineArn,
                    name: name,
                    input: input,
                }
            });
        });
    });

    describe("#toSsmEntry()", () => {
        it("Builds entry as per SSM Document", () => {
            const stepProps: ExecuteStateMachineStepProps = {
                stateMachineArn: new HardCodedString("arn"),
                executionName: new HardCodedString("name"),
                input: new HardCodedString("{}"),
            };
            const step = new ExecuteStateMachineStep(new Stack(), "execute", stepProps);

            const ssmEntry = step.toSsmEntry();

            assert.deepEqual(ssmEntry, {
                action: 'aws:executeStateMachine',
                inputs: {
                    stateMachineArn: "arn",
                    name: "name",
                    input: "{}",
                },
                name: 'execute',
            });
        });
    });
});