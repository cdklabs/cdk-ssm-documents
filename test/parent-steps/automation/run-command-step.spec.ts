import { Stack } from "@aws-cdk/core";
import assert = require("assert");
import { DocumentHashType, HardCodedDocumentHashType, HardCodedNumber, HardCodedString, HardCodedStringList, HardCodedStringMap, IRunCommandHook, ResponseCode, RunCommandOutputs, RunCommandProps, RunCommandStep } from "../../../lib";

describe("RunCommandStep", () => {
    describe("#invoke()", () => {
        it("Calls the hook's execute", () => {
            const mockHook: IRunCommandHook = {
                execute(props: RunCommandProps): RunCommandOutputs {
                    assert.deepEqual(props, {
                        documentName: "name",
                        targets: ["instance"],
                        parameters: {a: 1},
                        cloudWatchOutputConfig: {b: 1},
                        comment: "comment",
                        documentHash: "hash",
                        documentHashType: DocumentHashType.SHA256,
                        notificationConfig: {c: 1},
                        outputS3BucketName: "name",
                        outputS3KeyPrefix: "prefix",
                        serviceRoleArn: "arn",
                        timeoutSeconds: 5,
                        maxConcurrency: 5,
                        maxErrors: 5,
                    });

                    return {
                        status: "status",
                        responseCode: 200,
                        output: "{\"d\": 1}",
                        commandId: "id",
                    }
                }
            };
            const step = new RunCommandStep(new Stack(), "runCommand", {
                runCommandHook: mockHook,
                documentName: new HardCodedString("name"),
                targets: new HardCodedStringList(["instance"]),
                parameters: new HardCodedStringMap({a: 1}),
                cloudWatchOutputConfig: new HardCodedStringMap({b: 1}),
                comment: new HardCodedString("comment"),
                documentHash: new HardCodedString("hash"),
                documentHashType: new HardCodedDocumentHashType(DocumentHashType.SHA256),
                notificationConfig: new HardCodedStringMap({c: 1}),
                outputS3BucketName: new HardCodedString("name"),
                outputS3KeyPrefix: new HardCodedString("prefix"),
                serviceRoleArn: new HardCodedString("arn"),
                commandTimeoutSeconds: new HardCodedNumber(5),
                maxConcurrency: new HardCodedNumber(5),
                maxErrors: new HardCodedNumber(5),
            });

            const result = step.invoke({});

            assert.equal(result.responseCode, ResponseCode.SUCCESS);
            assert.deepEqual(result.outputs, {
                "runCommand.CommandId": "id",
                "runCommand.ResponseCode": 200,
                "runCommand.Output": "{\"d\": 1}",
                "runCommand.Status": "status",
            });
        });
    });

    describe("#toSsmEntry()", () => {
        it("Builds entry as per SSM Document", () => {
            const step = new RunCommandStep(new Stack(), "runCommand", {
                documentName: new HardCodedString("name"),
                targets: new HardCodedStringList(["instance"]),
                parameters: new HardCodedStringMap({a: 1}),
                cloudWatchOutputConfig: new HardCodedStringMap({b: 1}),
                comment: new HardCodedString("comment"),
                documentHash: new HardCodedString("hash"),
                documentHashType: new HardCodedDocumentHashType(DocumentHashType.SHA256),
                notificationConfig: new HardCodedStringMap({c: 1}),
                outputS3BucketName: new HardCodedString("name"),
                outputS3KeyPrefix: new HardCodedString("prefix"),
                serviceRoleArn: new HardCodedString("arn"),
                commandTimeoutSeconds: new HardCodedNumber(5),
                maxConcurrency: new HardCodedNumber(5),
                maxErrors: new HardCodedNumber(5),
            });

            const ssmEntry = step.toSsmEntry();

            assert.deepEqual(ssmEntry, {
                action: 'aws:runCommand',
                inputs: {
                    DocumentName: "name",
                    InstanceIds: ["instance"],
                    Parameters: {a: 1},
                    CloudWatchOutputConfig: {b: 1},
                    Comment: "comment",
                    DocumentHash: "hash",
                    DocumentHashType: "Sha256",
                    NotificationConfig: {c: 1},
                    OutputS3BucketName: "name",
                    OutputS3KeyPrefix: "prefix",
                    ServiceRoleArn: "arn",
                    TimeoutSeconds: 5,
                    MaxConcurrency: 5,
                    MaxErrors: 5,
                },
                name: 'runCommand',
                outputs: [
                    {
                        Name: "CommandId",
                        Selector: "$.CommandId",
                        Type: "String",
                    },
                    {
                        Name: "Status",
                        Selector: "$.Status",
                        Type: "String",
                    },
                    {
                        Name: "ResponseCode",
                        Selector: "$.ResponseCode",
                        Type: "Integer",
                    },
                    {
                        Name: "Output",
                        Selector: "$.Output",
                        Type: "String",
                    }
                ]
            });
        });
    });
});