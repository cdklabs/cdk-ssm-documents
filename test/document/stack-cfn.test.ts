import { Stack } from "aws-cdk-lib";
import {
    AutomationDocument,
    AutomationDocumentProps,
    DataTypeEnum,
    ExecuteScriptStep,
    MockPause,
    PauseStep,
    ScriptLanguage
} from "../../lib";
import { Construct } from "constructs";
import { Template } from "aws-cdk-lib/assertions";

const resolve = require('path').resolve;

describe('AutomationDocument', function () {
    describe('toCloudFormation()', function () {
        it('Prints a deployable CloudFormation', function () {
            class MyAutomationDoc extends AutomationDocument {
                constructor(scope: Construct, id: string, props: AutomationDocumentProps) {
                    super(scope, id, props);
                    new PauseStep(this, "MyPauseStep", {name: "MyPauseStep", pauseHook: new MockPause()});
                    new ExecuteScriptStep(this, "MyExecuteStep", {
                        name: "step1",
                        handlerName: "my_func",
                        language: ScriptLanguage.PYTHON,
                        fullPathToCode: resolve("test/test_file.py"),
                        outputs: [{
                            outputType: DataTypeEnum.STRING,
                            name: "MyFuncOut",
                            selector: "$.Payload.MyReturn"
                        }],
                        inputs: ["MyInput"]
                    })
                }
            }

            const stack: Stack = new Stack();
            new MyAutomationDoc(stack, "MyAutomationDoc", {
                documentName: "MyDoc",
                docInputs: [{name: "MyInput", defaultValue: "a", inputType: DataTypeEnum.STRING}]
            });
            Template.fromStack(stack).templateMatches({
                "Resources": {
                    "MyAutomationDocMyAutomationDocCfnDoc6CF92755": {
                        "Type": "AWS::SSM::Document",
                        "Properties": {
                            "Content": {
                                "description": "MyDoc",
                                "schemaVersion": "0.3",
                                "parameters": {
                                    "MyInput": {
                                        "type": "String",
                                        "default": "a"
                                    }
                                },
                                "mainSteps": [
                                    {
                                        "name": "MyPauseStep",
                                        "action": "aws:pause",
                                        "inputs": {}
                                    },
                                    {
                                        "name": "step1",
                                        "action": "aws:executeScript",
                                        "inputs": {
                                            "Runtime": "python3.6",
                                            "Handler": "my_func",
                                            "Script": "def my_func(args, context):\n    return {\"MyReturn\": args[\"MyInput\"] + \"-suffix\"}\n\ndef bad_func(args, context):\n    return {\"MyReturn\": args[\"INPUT_DOES_NOT_EXIST\"] + \"-suffix\"}\n",
                                            "InputPayload": {
                                                "MyInput": "{{ MyInput }}"
                                            }
                                        },
                                        "outputs": [
                                            {
                                                "Name": "MyFuncOut",
                                                "Selector": "$.Payload.MyReturn",
                                                "Type": "String"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "DocumentFormat": "JSON",
                            "DocumentType": "Automation",
                            "Tags": [
                                {
                                    "Key": "CdkGenerated",
                                    "Value": "true"
                                }
                            ]
                        }
                    }
                }
            });
        });
    });
});
