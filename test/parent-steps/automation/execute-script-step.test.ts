import { strict as assert } from 'assert';
import { resolve } from 'path';
import { Stack } from 'aws-cdk-lib';
import {
  AutomationStepSimulation,
  DataTypeEnum,
  ExecuteScriptStep,
  PythonVersion,
  ResponseCode, ScriptCode,
  ScriptLanguage,
  StringVariable,
} from '../../../lib';

describe('ExecuteScriptStep', function() {
  describe('#invoke()', function() {
    it('Invokes and gets python response', function() {
      const scriptStep = new ExecuteScriptStep(new Stack(), 'id', {
        name: 'step1',
        language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
        code: ScriptCode.fromFile(resolve('test/test_file.py')),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputPayload: { MyInput: StringVariable.of('MyInput') },
      });
      const response = new AutomationStepSimulation(scriptStep, {}).invoke({ MyInput: 'a' });
      if (response.responseCode != ResponseCode.SUCCESS) {
        assert.fail(response.stackTrace);
      }
      assert.equal(response.outputs && response.outputs['step1.MyFuncOut'], 'a-suffix');
    });
    it('Invokes and gets python response', function() {
      const scriptStep = new ExecuteScriptStep(new Stack(), 'id', {
        name: 'step1',
        language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
        code: ScriptCode.inline('def my_func(args, context):\n' +
                    '    return {"MyReturn": args["SomeInput"] + "-suffix"}\n' +
                    '\n' +
                    'def bad_func(args, context):\n' +
                    '    return {"MyReturn": args["INPUT_DOES_NOT_EXIST"] + "-suffix"}\n' +
                    '\n'),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputPayload: { SomeInput: StringVariable.of('MyInput') },
      });

      const response = new AutomationStepSimulation(scriptStep, {}).invoke({ MyInput: 'a' });
      if (response.responseCode != ResponseCode.SUCCESS) {
        assert.fail(response.stackTrace);
      }
      assert.equal(response.outputs && response.outputs['step1.MyFuncOut'], 'a-suffix');
    });
    it('Output selectors must start with $.Payload.', function() {
      assert.throws(() => new ExecuteScriptStep(new Stack(), 'id', {
        name: 'step1',
        language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
        code: ScriptCode.fromFile(resolve('test/test_file.py')),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.MyReturn',
        }],
        inputPayload: { MyInput: StringVariable.of('MyInput') },
      }));
    });
    it('Throws if output selector not found in result', function() {
      const scriptStep = new ExecuteScriptStep(new Stack(), 'id', {
        name: 'step1',
        language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
        code: ScriptCode.fromFile(resolve('test/test_file.py')),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.DOES_NOT_EXIST',
        }],
        inputPayload: { MyInput: StringVariable.of('MyInput') },
      });

      assert.equal(new AutomationStepSimulation(scriptStep, {}).invoke({ MyInput: 'a' }).responseCode, ResponseCode.FAILED);
    });
    it('Fails if input required not provided', function() {
      const scriptStep = new ExecuteScriptStep(new Stack(), 'id', {
        name: 'step1',
        language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
        code: ScriptCode.fromFile(resolve('test/test_file.py')),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputPayload: { MyInput: StringVariable.of('MyInput') },
      });

      assert.throws(() => new AutomationStepSimulation(scriptStep, {}).invoke({ NO_INPUT_HERE: 'a' }).responseCode);
    });
    it('Fails if python has bug', function() {
      const scriptStep = new ExecuteScriptStep(new Stack(), 'id', {
        name: 'step1',
        language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'bad_func'),
        code: ScriptCode.fromFile(resolve('test/test_file.py')),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputPayload: { MyInput: StringVariable.of('MyInput') },
      });

      const scriptStepResult = new AutomationStepSimulation(scriptStep, {}).invoke({ MyInput: 'a' });
      assert.equal(scriptStepResult.responseCode, ResponseCode.FAILED);
      assert.ok(scriptStepResult.stackTrace &&
                scriptStepResult.stackTrace.includes('Traceback') &&
                scriptStepResult.stackTrace.includes("KeyError: 'INPUT_DOES_NOT_EXIST'"));
    });
  });
  describe('#buildSsm()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new ExecuteScriptStep(new Stack(), 'id', {
        name: 'step1',
        language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
        code: ScriptCode.fromFile(resolve('test/test_file.py')),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputPayload: { MyInput: StringVariable.of('MyInput') },
      });

      assertDeepEqual(step.toSsmEntry(), {
        action: 'aws:executeScript',
        inputs: {
          Handler: 'my_func',
          InputPayload: {
            MyInput: '{{ MyInput }}',
          },
          Runtime: 'python3.6',
          Script: 'def my_func(args, context):\n' +
                    '    return {"MyReturn": args["MyInput"] + "-suffix"}\n' +
                    '\n' +
                    'def bad_func(args, context):\n' +
                    '    return {"MyReturn": args["INPUT_DOES_NOT_EXIST"] + "-suffix"}\n',
        },
        name: 'step1',
        outputs: [
          {
            Name: 'MyFuncOut',
            Selector: '$.Payload.MyReturn',
            Type: 'String',
          },
        ],
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
