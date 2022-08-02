import { resolve } from 'path';
import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  AutomationDocument,
  DataTypeEnum,
  ExecuteScriptStep,
  Input,
  PauseStep,
  ScriptLanguage,
  StringVariable
} from '../../lib';


describe('AutomationDocument', function () {
  describe('toCloudFormation()', function () {
    it('Prints a deployable CloudFormation', function () {
      const stack: Stack = new Stack();
      const doc = new AutomationDocument(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
        assumeRole: StringVariable.of('AutomationRole'),
        docInputs: [
          Input.ofTypeString('AutomationRole', { defaultValue: 'some:role' }),
          Input.ofTypeString('MyInput', { defaultValue: 'a' }),
          Input.ofTypeInteger('MyInt', { defaultValue: 1, allowedValues: [0, 1, 2] }),
        ],
        docOutputs: [{
          name: 'step1.MyFuncOut',
          outputType: DataTypeEnum.STRING,
        }],
      });
      doc.addStep(new PauseStep(stack, 'MyPauseStep', { name: 'MyPauseStep' }));
      doc.addStep(new ExecuteScriptStep(stack, 'MyExecuteStep', {
        name: 'step1',
        handlerName: 'my_func',
        language: ScriptLanguage.PYTHON,
        fullPathToCode: resolve('test/test_file.py'),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputs: ['MyInput'],
      }));
      Template.fromStack(stack).templateMatches({
        Resources: {
          MyAutomationDocC39268E9: {
            Type: 'AWS::SSM::Document',
            Properties: {
              Content: {
                description: 'MyDoc',
                schemaVersion: '0.3',
                parameters: {
                  MyInput: {
                    type: 'String',
                    default: 'a',
                  },
                  AutomationRole: {
                    type: 'String',
                    default: 'some:role',
                  },
                  MyInt: {
                    type: 'Integer',
                    default: 1,
                    allowedValues: [0, 1, 2],
                  },
                },
                assumeRole: '{{ AutomationRole }}',
                outputs: ['step1.MyFuncOut'],
                mainSteps: [
                  {
                    name: 'MyPauseStep',
                    action: 'aws:pause',
                    inputs: {},
                  },
                  {
                    name: 'step1',
                    action: 'aws:executeScript',
                    inputs: {
                      Runtime: 'python3.6',
                      Handler: 'my_func',
                      Script: 'def my_func(args, context):\n    return {"MyReturn": args["MyInput"] + "-suffix"}\n\ndef bad_func(args, context):\n    return {"MyReturn": args["INPUT_DOES_NOT_EXIST"] + "-suffix"}\n',
                      InputPayload: {
                        MyInput: '{{ MyInput }}',
                      },
                    },
                    outputs: [
                      {
                        Name: 'MyFuncOut',
                        Selector: '$.Payload.MyReturn',
                        Type: 'String',
                      },
                    ],
                  },
                ],
              },
              DocumentFormat: 'JSON',
              DocumentType: 'Automation',
              Tags: [
                {
                  Key: 'CdkGenerated',
                  Value: 'true',
                },
              ],
            },
          },
        },
      });
    });
  });
});
