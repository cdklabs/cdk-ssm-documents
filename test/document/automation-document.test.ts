import * as assert from 'assert';
import { resolve } from 'path';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { SynthUtils, AutomationDocument, AutomationDocumentProps, DataTypeEnum, ExecuteScriptStep, MockPause, PauseStep, ResponseCode, ScriptLanguage } from '../../lib';

describe('AutomationDocument', function() {
  describe('#runSimulation()', function() {
    it('Outputs the status and results of steps', function() {

      // Declare Automation Document
      class MyAutomationDoc extends AutomationDocument {
        constructor(scope: Construct, id: string, props: AutomationDocumentProps) {
          super(scope, id, {
            ...props,
            ...{
              docInputs: [{ name: 'MyInput', defaultValue: 'a', inputType: DataTypeEnum.STRING }],
              docOutputs: [{ name: 'MyExecuteStep.MyFuncOut', outputType: DataTypeEnum.STRING }],
            },
          });

          // First step
          new PauseStep(this, 'MyPauseStep', { name: 'MyPauseStep', pauseHook: new MockPause() });
          // Second step
          new ExecuteScriptStep(this, 'MyExecuteStep', {
            handlerName: 'my_func',
            language: ScriptLanguage.PYTHON,
            fullPathToCode: resolve('test/test_file.py'),
            outputs: [{
              outputType: DataTypeEnum.STRING,
              name: 'MyFuncOut',
              selector: '$.Payload.MyReturn',
            }],
            inputs: ['MyInput'],
          });
        }
      }

      // Synthesize it
      const stack: Stack = new Stack();
      const myAutomationDoc = new MyAutomationDoc(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
      });
      SynthUtils.synthesize(stack);

      // Execute simulation
      const simOutput = myAutomationDoc.runSimulation({});

      // Validate output
      assert.deepEqual(simOutput, {
        responseCode: ResponseCode.SUCCESS,
        executedSteps: [
          'MyPauseStep',
          'MyExecuteStep',
        ],
        outputs: {
          'MyExecuteStep.MyFuncOut': 'a-suffix',
        },
        documentOutputs: ['a-suffix'],
      });
    });
    it('Document outputs only includes those outputs specified as document outputs', function() {
      class MyAutomationDoc extends AutomationDocument {
        constructor(scope: Construct, id: string, props: AutomationDocumentProps) {
          super(scope, id, props);
          new PauseStep(this, 'MyPauseStep', { name: 'MyPauseStep', pauseHook: new MockPause() });
          new ExecuteScriptStep(this, 'MyExecuteStep', {
            handlerName: 'my_func',
            language: ScriptLanguage.PYTHON,
            fullPathToCode: resolve('test/test_file.py'),
            outputs: [{
              outputType: DataTypeEnum.STRING,
              name: 'MyFuncOut',
              selector: '$.Payload.MyReturn',
            }],
            inputs: ['MyInput'],
          });
        }
      }
      const stack: Stack = new Stack();
      const myAutomationDoc = new MyAutomationDoc(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
        docInputs: [{ name: 'MyInput', defaultValue: 'a', inputType: DataTypeEnum.STRING }],
        docOutputs: [],
      });
      SynthUtils.synthesize(stack);
      const simOutput = myAutomationDoc.runSimulation({});
      assert.deepEqual(simOutput, {
        responseCode: ResponseCode.SUCCESS,
        outputs: { 'MyExecuteStep.MyFuncOut': 'a-suffix' },
        executedSteps: ['MyPauseStep', 'MyExecuteStep'],
        documentOutputs: [],
      });
    });
    it('Document outputs throws if the output is not found in any steps', function() {
      class MyAutomationDoc extends AutomationDocument {
        constructor(scope: Construct, id: string, props: AutomationDocumentProps) {
          super(scope, id, props);
          new PauseStep(this, 'MyPauseStep', { name: 'MyPauseStep', pauseHook: new MockPause() });
          new ExecuteScriptStep(this, 'MyExecuteStep', {
            handlerName: 'my_func',
            language: ScriptLanguage.PYTHON,
            fullPathToCode: resolve('test/test_file.py'),
            outputs: [{
              outputType: DataTypeEnum.STRING,
              name: 'MyFuncOut',
              selector: '$.Payload.MyReturn',
            }],
            inputs: ['MyInput'],
          });
        }
      }
      const stack: Stack = new Stack();
      new MyAutomationDoc(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
        docInputs: [{ name: 'MyInput', defaultValue: 'a', inputType: DataTypeEnum.STRING }],
        docOutputs: [{ name: 'step1.MyFuncOut', outputType: DataTypeEnum.STRING }],
      });
      assert.throws(() => {SynthUtils.synthesize(stack);});
    });
  });
  describe('#printAsJson()', function() {
    it('Prints an SSM Automation doc', function() {
      class MyAutomationDoc extends AutomationDocument {
        constructor(scope: Construct, id: string, props: AutomationDocumentProps) {
          super(scope, id, props);
          new PauseStep(this, 'MyPauseStep', { name: 'MyPauseStep', pauseHook: new MockPause() });
          new ExecuteScriptStep(this, 'MyExecuteStep', {
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
          });
        }
      }
      const stack: Stack = new Stack();
      const myAutomationDoc = new MyAutomationDoc(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
        docInputs: [{ name: 'MyInput', defaultValue: 'a', inputType: DataTypeEnum.STRING }],
      });
      SynthUtils.synthesize(stack);
      const ssmJson = myAutomationDoc.print();

      assertDeepEqual(JSON.parse(ssmJson),
        {
          description: 'MyDoc',
          mainSteps: [
            {
              action: 'aws:pause',
              inputs: {},
              name: 'MyPauseStep',
            },
            {
              action: 'aws:executeScript',
              inputs: {
                Handler: 'my_func',
                InputPayload: {
                  MyInput: '{{ MyInput }}',
                },
                Runtime: 'python3.6',
                Script: 'def my_func(args, context):\n    return {"MyReturn": args["MyInput"] + "-suffix"}\n\ndef bad_func(args, context):\n    return {"MyReturn": args["INPUT_DOES_NOT_EXIST"] + "-suffix"}\n',
              },
              name: 'step1',
              outputs: [
                {
                  Name: 'MyFuncOut',
                  Selector: '$.Payload.MyReturn',
                  Type: 'String',
                },
              ],
            },
          ],
          parameters: {
            MyInput: {
              default: 'a',
              type: 'String',
            },
          },
          schemaVersion: '0.3',
        });
    });
  });

  const sanitize = (record: Record<string, any>): Record<string, any> => {
    return JSON.parse(JSON.stringify(record).replace(/\\r\\n/g, '\\n'));
  };
  const assertDeepEqual = (actual: Record<string, any>, expected: Record<string, any>): void => {
    assert.deepEqual(sanitize(actual), sanitize(expected));
  };
});
