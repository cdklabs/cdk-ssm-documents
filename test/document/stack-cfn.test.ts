import { resolve } from 'path';
import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  AutomationDocument,
  DataTypeEnum,
  ExecuteScriptStep,
  PauseStep,
  ScriptLanguage,
} from '../../lib';


describe('AutomationDocument', function () {
  describe('toCloudFormation()', function () {
    it('Prints a deployable CloudFormation', function () {
      const stack: Stack = new Stack();
      const doc = new AutomationDocument(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
        docInputs: [{ name: 'MyInput', defaultValue: 'a', inputType: DataTypeEnum.STRING }],
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
          MyAutomationDocMyAutomationDocCfnDoc6CF92755: {
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
                },
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
