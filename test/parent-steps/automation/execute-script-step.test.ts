import { strict as assert } from 'assert';
import { resolve } from 'path';
import { Stack } from 'aws-cdk-lib';
import { DataTypeEnum, ExecuteScriptStep, ResponseCode, ScriptLanguage } from '../../../lib';

describe('ExecuteScriptStep', function() {
  describe('#invoke()', function() {
    it('Invokes and gets python response', function() {
      const scriptStep = new ExecuteScriptStep(new Stack(), 'id', {
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
      const response = scriptStep.invoke({ MyInput: 'a' });
      if (response.responseCode != ResponseCode.SUCCESS) {
        assert.fail(response.stackTrace);
      }
      assert.equal(response.outputs && response.outputs['step1.MyFuncOut'], 'a-suffix');
    });
    it('Invokes and gets python response', function() {
      const scriptStep = new ExecuteScriptStep(new Stack(), 'id', {
        name: 'step1',
        handlerName: 'my_func',
        language: ScriptLanguage.PYTHON,
        inlineCode: 'def my_func(args, context):\n' +
                    '    return {"MyReturn": args["MyInput"] + "-suffix"}\n' +
                    '\n' +
                    'def bad_func(args, context):\n' +
                    '    return {"MyReturn": args["INPUT_DOES_NOT_EXIST"] + "-suffix"}\n' +
                    '\n',
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputs: ['MyInput'],
      });

      const response = scriptStep.invoke({ MyInput: 'a' });
      if (response.responseCode != ResponseCode.SUCCESS) {
        assert.fail(response.stackTrace);
      }
      assert.equal(response.outputs && response.outputs['step1.MyFuncOut'], 'a-suffix');
    });
    it('Must supply either inlineCode or fullPathToCode but not both', function() {
      assert.throws(() => {
        new ExecuteScriptStep(new Stack(), 'id', {
          name: 'step1',
          handlerName: 'my_func',
          language: ScriptLanguage.PYTHON,
          fullPathToCode: resolve('test/test_file.py'),
          inlineCode: 'def my_func(args, context):\n' +
                    '    return {"MyReturn": args["MyInput"] + "-suffix"}\n' +
                    '\n' +
                    'def bad_func(args, context):\n' +
                    '    return {"MyReturn": args["INPUT_DOES_NOT_EXIST"] + "-suffix"}\n' +
                    '\n',
          outputs: [{
            outputType: DataTypeEnum.STRING,
            name: 'MyFuncOut',
            selector: '$.Payload.MyReturn',
          }],
          inputs: ['MyInput'],
        });
      });
    });
    it('Must supply either inlineCode or fullPathToCode but not both', function() {
      assert.throws(() => {
        new ExecuteScriptStep(new Stack(), 'id', {
          name: 'step1',
          handlerName: 'my_func',
          language: ScriptLanguage.PYTHON,
          outputs: [{
            outputType: DataTypeEnum.STRING,
            name: 'MyFuncOut',
            selector: '$.Payload.MyReturn',
          }],
          inputs: ['MyInput'],
        });
      });
    });
    it('Output selectors must start with $.Payload.', function() {
      assert.throws(() => new ExecuteScriptStep(new Stack(), 'id', {
        name: 'step1',
        handlerName: 'my_func',
        language: ScriptLanguage.PYTHON,
        fullPathToCode: resolve('test/test_file.py'),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.MyReturn',
        }],
        inputs: ['MyInput'],
      }));
    });
    it('Throws if output selector not found in result', function() {
      const scriptStep = new ExecuteScriptStep(new Stack(), 'id', {
        name: 'step1',
        handlerName: 'my_func',
        language: ScriptLanguage.PYTHON,
        fullPathToCode: resolve('test/test_file.py'),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.DOES_NOT_EXIST',
        }],
        inputs: ['MyInput'],
      });

      assert.equal(scriptStep.invoke({ MyInput: 'a' }).responseCode, ResponseCode.FAILED);
    });
    it('Fails if input required not provided', function() {
      const scriptStep = new ExecuteScriptStep(new Stack(), 'id', {
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

      assert.equal(scriptStep.invoke({ NO_INPUT_HERE: 'a' }).responseCode, ResponseCode.FAILED);
    });
    it('Fails if python has bug', function() {
      const scriptStep = new ExecuteScriptStep(new Stack(), 'id', {
        name: 'step1',
        handlerName: 'bad_func',
        language: ScriptLanguage.PYTHON,
        fullPathToCode: resolve('test/test_file.py'),
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'MyFuncOut',
          selector: '$.Payload.MyReturn',
        }],
        inputs: ['MyInput'],
      });

      const scriptStepResult = scriptStep.invoke({ MyInput: 'a' });
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
