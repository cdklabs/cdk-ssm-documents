import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { AutomationStepSimulation, HardCodedMapList, HardCodedString, HardCodedStringMap, ResponseCode, StringVariable } from '../../../lib';
import { ExecuteAutomationStep } from '../../../lib/parent-steps/automation/execute-automation-step';
import { ExecuteAutomationOutputs, ExecuteAutomationProps, IExecuteAutomationHook } from '../../../lib/interface/execute-automation-hook';

describe('ExecuteAutomationStep', function() {
  describe('#invoke()', () => {
    it("Calls the hook's execute", () => {
      const mockHook: IExecuteAutomationHook = {
        execute(props: ExecuteAutomationProps): ExecuteAutomationOutputs {
          assert.deepEqual(props, {
            documentName: 'name',
            documentVersion: '21.1',
            maxConcurrency: '5',
            maxErrors: '5',
            runtimeParameters: { a: 1 },
            tags: [{b: 1}],
            targetLocations: [{c: 1}],
            targetMaps: [{d: 1}],
            targetParameterName: 'name2',
            targets: [{e: 1}],
          });

          return {
            status: 'status',
            output: {a: ['{"d": 1}']},
            executionId: 'id',
          };
        },
      };
      const step = new ExecuteAutomationStep(new Stack(), 'execute', {
        documentName: HardCodedString.of('name'),
        documentVersion: HardCodedString.of('21.1'),
        maxConcurrency: HardCodedString.of('5'),
        maxErrors: HardCodedString.of('5'),
        runtimeParameters: HardCodedStringMap.of({ a: 1 }),
        tags: HardCodedMapList.of([{b: 1}]),
        targetLocations: HardCodedMapList.of([{c: 1}]),
        targetMaps: HardCodedMapList.of([{d: 1}]),
        targetParameterName: HardCodedString.of('name2'),
        targets: HardCodedMapList.of([{e: 1}]),
      });

      const result = new AutomationStepSimulation(step, { executeAutomationHook: mockHook }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(result.outputs, {
        'execute.ExecutionId': 'id',
        'execute.Output': {a: ['{"d": 1}']},
        'execute.Status': 'status',
      });
    });
  });

  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new ExecuteAutomationStep(new Stack(), 'id', {
        name: 'MyExecuteAutomation',
        documentName: StringVariable.of('docRef'),
      });
      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:executeAutomation',
        inputs: {
          DocumentName: '{{docRef}}',
        },
        name: 'MyExecuteAutomation',
      });
    });
  });
});
