import {RunShellScriptStep} from "../../lib/parent-steps/command/run-shell-script-step";

let assert = require('assert');
import { SynthUtils } from "@aws-cdk/assert";
import { Construct, Stack } from "@aws-cdk/core";
import {
    CommandDocument, DataTypeEnum, ResponseCode, StringFormat, StringVariable
} from "../../lib";

describe('CommandDocument', function() {
    describe('#runSimulation()', function() {
        it('Outputs the status and results of steps', function() {

            // Declare Command Document
            class MyCommandDoc extends CommandDocument {
                constructor(scope: Construct, id: string) {
                    super(scope, id, {
                            docInputs: [{name: "MyInput", defaultValue: "a", inputType: DataTypeEnum.STRING}]
                    });

                    // First step
                    new RunShellScriptStep(this, "MyShellScript1", {
                        name: "Shell1",
                        runCommand: [new StringFormat("echo %s", [new StringVariable("MyInput")])]
                    });

                    // First step
                    new RunShellScriptStep(this, "MyShellScript2", {
                        name: "Shell2",
                        runCommand: [new StringFormat("echo again %s", [new StringVariable("MyInput")])]
                    });
                }
            }

            // Synthesize it
            const stack: Stack = new Stack();
            const myCommandDoc = new MyCommandDoc(stack, "MyCommandDoc");
            SynthUtils.synthesize(stack);

            // Execute simulation
            const simOutput = myCommandDoc.runSimulation({});

            // Validate output
            assert.deepEqual(simOutput, {
                responseCode: ResponseCode.SUCCESS,
                executedSteps: [
                    "Shell1",
                    "Shell2"
                ],
                documentOutputs: []
            });
        });
        it('Document outputs only includes those outputs specified as document outputs', function() {
            // Declare Command Document
            class MyCommandDoc extends CommandDocument {
                constructor(scope: Construct, id: string) {
                    super(scope, id, {
                        docInputs: [{name: "MyInput", defaultValue: "a", inputType: DataTypeEnum.STRING}]
                    });

                    // First step
                    new RunShellScriptStep(this, "MyShellScript1", {
                        name: "Shell1",
                        runCommand: [new StringFormat("echo %s", [new StringVariable("MyInput")])]
                    });

                    // First step
                    new RunShellScriptStep(this, "MyShellScript2", {
                        name: "Shell2",
                        runCommand: [new StringFormat("echo again %s", [new StringVariable("MyInput")])]
                    });
                }
            }

            const stack: Stack = new Stack();
            const myCommandDoc = new MyCommandDoc(stack, "MyCommandDoc");
            SynthUtils.synthesize(stack);
            const ssmJson = myCommandDoc.print();
            assert.deepEqual(JSON.parse(ssmJson),
                {
                    description: 'MyCommandDoc',
                    mainSteps: [
                        {
                            action: 'aws:runShellScript',
                            inputs: {
                                runCommand: [
                                    'echo {{MyInput}}'
                                ]
                            },
                            name: 'Shell1'
                        },
                        {
                            action: 'aws:runShellScript',
                            inputs: {
                                runCommand: [
                                    'echo again {{MyInput}}'
                                ]
                            },
                            name: 'Shell2'
                        }
                    ],
                    parameters: {
                        MyInput: {
                            default: 'a',
                            type: 'String'
                        }
                    },
                    schemaVersion: '2.2'
                });
        });
    });
});
