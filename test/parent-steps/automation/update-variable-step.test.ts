import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  AutomationStepSimulation,
  HardCodedString, ResponseCode,
  UpdateVariableStep,
} from '../../../lib';

describe('UpdateVariableStep', function() {
  describe('#invoke()', function() {
    it('Update variable successfully', function() {
      const step = new UpdateVariableStep(new Stack(), 'id', {
        name: 'updateVarStepName',
        variableName: 'variable:VarName',
        variableValue: HardCodedString.of('HelloWorld'),
      });
      const inputs = { 'variable:VarName': 'varValue' };
      new AutomationStepSimulation(step, { }).invoke(inputs);
      assert.equal(inputs['variable:VarName'], 'HelloWorld');
    });
    it('Update variable with wrong name prefix', function() {
      assert.throws(() => new UpdateVariableStep(new Stack(), 'id', {
        name: 'updateVarStepName',
        variableName: 'VarName',
        variableValue: HardCodedString.of('HelloWorld'),
      }));
    });
    it('Update variable not defined in the document', function() {
      const step = new UpdateVariableStep(new Stack(), 'id', {
        name: 'updateVarStepName',
        variableName: 'variable:hello',
        variableValue: HardCodedString.of('HelloWorld'),
      });
      assert.equal(new AutomationStepSimulation(step, { }).invoke({}).responseCode, ResponseCode.FAILED);
    });
  });

  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new UpdateVariableStep(new Stack(), 'id', {
        name: 'updateVarStepName',
        variableName: 'variableName',
        variableValue: HardCodedString.of('HelloWorld'),
      });
      assert.deepEqual(step.toSsmEntry(), {
        action: 'aws:updateVariable',
        name: 'updateVarStepName',
        inputs: {
          name: 'variableName',
          value: 'HelloWorld',
        },
      });
    });
  });
});
