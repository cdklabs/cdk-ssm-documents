import {RunShellScriptStep} from "../../../lib/parent-steps/command/run-shell-script-step";

var assert = require('assert');
import {
    HardCodedString,
    MockEnvironment,
    Platform,
    Precondition,
    ResponseCode,
    StringFormat,
    StringVariable
} from '../../../lib';
import { Stack } from 'aws-cdk-lib';

describe('RunShellScriptStep', function() {
    describe('#invoke()', function() {
        it('Plays substituted commands against provided env', function() {
            const mockEnv = new MockEnvironment()
            const step = new RunShellScriptStep(new Stack(), "MyShellScript", {
                environment: mockEnv,
                runCommand: [
                    new HardCodedString("mkdir asdf"),
                    new StringFormat("some %s string", [new StringVariable("MyVar")])
                ]
            });

            const res = step.invoke({MyVar: "amazing"});
            assert.equal(res.responseCode, ResponseCode.SUCCESS);
            assert.deepEqual(mockEnv.previousCommands, [
                "bash -c 'mkdir asdf'",
                "bash -c 'some amazing string'"
            ])
        });
        it('Precondition match', function() {
            const mockEnv = new MockEnvironment()
            const step = new RunShellScriptStep(new Stack(), "MyShellScript", {
                environment: mockEnv,
                runCommand: [
                    new HardCodedString("mkdir asdf"),
                    new StringFormat("some %s string", [new StringVariable("MyVar")])
                ],
                precondition: Precondition.newPlatformPrecondition(Platform.LINUX)
            });

            const res = step.invoke({MyVar: "amazing", platformType: "Linux"});
            assert.equal(res.responseCode, ResponseCode.SUCCESS);
            assert.deepEqual(mockEnv.previousCommands, [
                "bash -c 'mkdir asdf'",
                "bash -c 'some amazing string'"
            ])
        });
        it('Precondition mismatch', function() {
            const mockEnv = new MockEnvironment()
            const step = new RunShellScriptStep(new Stack(), "MyShellScript", {
                environment: mockEnv,
                runCommand: [
                    new HardCodedString("mkdir asdf"),
                    new StringFormat("some %s string", [new StringVariable("MyVar")])
                ],
                precondition: Precondition.newPlatformPrecondition(Platform.LINUX)
            });

            const res = step.invoke({MyVar: "amazing", platformType: "Windows"});
            assert.equal(res.responseCode, ResponseCode.SUCCESS);
            assert.deepEqual(mockEnv.previousCommands, [])
        });
    });
    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const mockEnv = new MockEnvironment()
            const step = new RunShellScriptStep(new Stack(), "MyShellScript", {
                environment: mockEnv,
                runCommand: [
                    new HardCodedString("mkdir asdf"),
                    new StringFormat("some %s string", [new StringVariable("MyVar")])
                ]
            });

            assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
                action: 'aws:runShellScript',
                inputs: {
                    runCommand: [
                        'mkdir asdf',
                        'some {{MyVar}} string'
                    ]
                },
                name: 'MyShellScript'
            });
        });
        it('With Precondition', function() {
            const mockEnv = new MockEnvironment()
            const step = new RunShellScriptStep(new Stack(), "MyShellScript", {
                environment: mockEnv,
                runCommand: [
                    new HardCodedString("mkdir asdf"),
                    new StringFormat("some %s string", [new StringVariable("MyVar")])
                ],
                precondition: Precondition.newPlatformPrecondition(Platform.LINUX)
            });

            assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
                action: 'aws:runShellScript',
                inputs: {
                    runCommand: [
                        'mkdir asdf',
                        'some {{MyVar}} string'
                    ]
                },
                name: 'MyShellScript',
                precondition: {
                    "StringEquals": [
                        "platformType",
                        "Linux"
                    ]
                }
            });
        });
    });
});
