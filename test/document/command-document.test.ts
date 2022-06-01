import * as assert from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  RunShellScriptStep, CommandDocument, DataTypeEnum, ResponseCode, StringFormat, StringVariable, Platform,
} from '../../lib';
import { Simulation } from '../../lib/simulation/simulation';

describe('CommandDocument', function() {
  describe('#runSimulation()', function() {
    it('Outputs the status and results of steps', function() {
      const stack: Stack = new Stack();
      const myCommandDoc = new CommandDocument(stack, 'MyCommandDoc', { docInputs: [{ name: 'MyInput', defaultValue: 'a', inputType: DataTypeEnum.STRING }] });

      // First step
      myCommandDoc.addStep(new RunShellScriptStep(stack, 'MyShellScript1', {
        name: 'Shell1',
        runCommand: [new StringFormat('echo %s', [new StringVariable('MyInput')])],
      }));

      // Seconds step
      myCommandDoc.addStep( new RunShellScriptStep(stack, 'MyShellScript2', {
        name: 'Shell2',
        runCommand: [new StringFormat('echo again %s', [new StringVariable('MyInput')])],
      }));

      // Execute simulation
      const simOutput = Simulation.ofCommand(myCommandDoc, { simulationPlatform: Platform.LINUX }).simulate({});

      // Validate output
      assert.deepEqual(simOutput, {
        responseCode: ResponseCode.SUCCESS,
        executedSteps: [
          'Shell1',
          'Shell2',
        ],
        documentOutputs: [],
      });
    });
    it('Document outputs only includes those outputs specified as document outputs', function() {
      const stack: Stack = new Stack();
      const myCommandDoc = new CommandDocument(stack, 'MyCommandDoc',
        { docInputs: [{ name: 'MyInput', defaultValue: 'a', inputType: DataTypeEnum.STRING }] });
      // First step
      myCommandDoc.addStep(new RunShellScriptStep(stack, 'MyShellScript1', {
        name: 'Shell1',
        runCommand: [new StringFormat('echo %s', [new StringVariable('MyInput')])],
      }));

      // First step
      myCommandDoc.addStep(new RunShellScriptStep(stack, 'MyShellScript2', {
        name: 'Shell2',
        runCommand: [new StringFormat('echo again %s', [new StringVariable('MyInput')])],
      }));
      const ssmJson = myCommandDoc.print();
      assert.deepEqual(JSON.parse(ssmJson),
        {
          description: 'MyCommandDoc',
          mainSteps: [
            {
              action: 'aws:runShellScript',
              inputs: {
                runCommand: [
                  'echo {{MyInput}}',
                ],
              },
              name: 'Shell1',
            },
            {
              action: 'aws:runShellScript',
              inputs: {
                runCommand: [
                  'echo again {{MyInput}}',
                ],
              },
              name: 'Shell2',
            },
          ],
          parameters: {
            MyInput: {
              default: 'a',
              type: 'String',
            },
          },
          schemaVersion: '2.2',
        });
    });
  });
});
