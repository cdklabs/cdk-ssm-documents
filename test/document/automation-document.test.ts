import * as assert from 'assert';
import { resolve } from 'path';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  AutomationDocument,
  AutomationDocumentProps,
  DataTypeEnum,
  DocumentFormat,
  ExecuteScriptStep,
  Input,
  MockPause,
  PauseStep,
  PythonVersion,
  ResponseCode, ScriptCode,
  ScriptLanguage,
  Simulation,
  StringVariable,
  SynthUtils,
} from '../../lib';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const yaml = require('js-yaml');


describe('AutomationDocument', function() {
  describe('#runSimulation()', function() {
    it('Outputs the status and results of steps', function() {
      const stack: Stack = new Stack();
      const myAutomationDoc = new AutomationDocument(stack, 'MyAutomationDoc', {
        docInputs: [Input.ofTypeString('MyInput', { defaultValue: 'a' })],
        docOutputs: [{ name: 'MyExecuteStep.MyFuncOut', outputType: DataTypeEnum.STRING }],
        documentName: 'MyDoc',
      });

      // First step
      myAutomationDoc.addStep(new PauseStep(stack, 'MyPauseStep', { name: 'MyPauseStep' }));
      // Second step
      myAutomationDoc.addStep(new ExecuteScriptStep(stack, 'MyExecuteStep', {
        language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
        code: ScriptCode.fromFile(resolve('test/test_file.py')),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputPayload: { MyInput: StringVariable.of('MyInput') },
      }));

      // Execute simulation
      const simOutput = Simulation.ofAutomation(myAutomationDoc, { pauseHook: new MockPause() }).simulate({});

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
      const stack = new Stack();
      const doc = new AutomationDocument(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
        docInputs: [Input.ofTypeString('MyInput', { defaultValue: 'a' })],
        docOutputs: [],
      });
      doc.addStep(new PauseStep(stack, 'MyPauseStep', { name: 'MyPauseStep' }));
      doc.addStep(new ExecuteScriptStep(stack, 'MyExecuteStep', {
        language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
        code: ScriptCode.fromFile(resolve('test/test_file.py')),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputPayload: { MyInput: StringVariable.of('MyInput') },
      }));
      const simOutput = Simulation.ofAutomation(doc, { pauseHook: new MockPause() }).simulate({});
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
          new PauseStep(this, 'MyPauseStep', { name: 'MyPauseStep' });
          new ExecuteScriptStep(this, 'MyExecuteStep', {
            language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
            code: ScriptCode.fromFile(resolve('test/test_file.py')),
            outputs: [{
              outputType: DataTypeEnum.STRING,
              name: 'MyFuncOut',
              selector: '$.Payload.MyReturn',
            }],
            inputPayload: { MyInput: StringVariable.of('MyInput') },
          });
        }
      }
      const stack: Stack = new Stack();
      new MyAutomationDoc(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
        docInputs: [Input.ofTypeString('MyInput', { defaultValue: 'a' })],
        docOutputs: [{ name: 'step1.MyFuncOut', outputType: DataTypeEnum.STRING }],
      });
      assert.throws(() => {SynthUtils.synthesize(stack);});
    });
  });
  describe('#printAsJson()', function() {
    it('Prints an SSM Automation doc', function() {
      const stack: Stack = new Stack();
      const myAutomationDoc = new AutomationDocument(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
        assumeRole: StringVariable.of('AutomationRole'),
        docInputs: [
          Input.ofTypeString('MyInput', { defaultValue: 'a' }),
          Input.ofTypeString('AutomationRole'),
        ],
      });
      myAutomationDoc.addStep(new PauseStep(stack, 'MyPauseStep', { name: 'MyPauseStep' }));
      myAutomationDoc.addStep(new ExecuteScriptStep(stack, 'MyExecuteStep', {
        name: 'step1',
        language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
        code: ScriptCode.fromFile(resolve('test/test_file.py')),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputPayload: { MyInput: StringVariable.of('MyInput') },
      }));
      SynthUtils.synthesize(stack);
      const ssmJson = myAutomationDoc.print();

      assertDeepEqual(JSON.parse(ssmJson),
        {
          assumeRole: '{{ AutomationRole }}',
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
            AutomationRole: {
              type: 'String',
            },
            MyInput: {
              default: 'a',
              type: 'String',
            },
          },
          schemaVersion: '0.3',
        });
    });
  });
  describe('#printAsYaml()', function() {
    it('Prints an SSM Automation doc', function() {
      const stack: Stack = new Stack();
      const myAutomationDoc = new AutomationDocument(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
        documentFormat: DocumentFormat.YAML,
        assumeRole: StringVariable.of('AutomationRole'),
        docInputs: [
          Input.ofTypeString('MyInput', { defaultValue: 'a' }),
          Input.ofTypeString('AutomationRole'),
        ],
      });
      myAutomationDoc.addStep(new PauseStep(stack, 'MyPauseStep', { name: 'MyPauseStep' }));
      myAutomationDoc.addStep(new ExecuteScriptStep(stack, 'MyExecuteStep', {
        name: 'step1',
        language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
        code: ScriptCode.fromFile(resolve('test/test_file.py')),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputPayload: { MyInput: StringVariable.of('MyInput') },
      }));
      SynthUtils.synthesize(stack);
      const ssmYaml = myAutomationDoc.print();

      assertDeepEqual(yaml.load(ssmYaml),
        {
          assumeRole: '{{ AutomationRole }}',
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
            AutomationRole: {
              type: 'String',
            },
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
