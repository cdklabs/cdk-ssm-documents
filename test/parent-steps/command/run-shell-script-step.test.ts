import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  HardCodedString,
  MockEnvironment,
  Platform,
  Precondition,
  ResponseCode,
  StringFormat,
  StringVariable,
} from '../../../lib';
import { RunShellScriptStep } from '../../../lib/parent-steps/command/run-shell-script-step';
import { CommandStepSimulation } from '../../../lib/simulation/command-step-simulation';


describe('RunShellScriptStep', function() {
  describe('#invoke()', function() {
    it('Plays substituted commands against provided env', function() {
      const mockEnv = new MockEnvironment();
      const step = new RunShellScriptStep(new Stack(), 'MyShellScript', {
        runCommand: [
          new HardCodedString('mkdir asdf'),
          new StringFormat('some %s string', [new StringVariable('MyVar')]),
        ],
      });

      const res = new CommandStepSimulation(step, { environment: mockEnv, simulationPlatform: Platform.LINUX }).invoke({ MyVar: 'amazing' });
      assert.equal(res.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(mockEnv.previousCommands, [
        "bash -c 'mkdir asdf'",
        "bash -c 'some amazing string'",
      ]);
    });
  });
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new RunShellScriptStep(new Stack(), 'MyShellScript', {
        runCommand: [
          new HardCodedString('mkdir asdf'),
          new StringFormat('some %s string', [new StringVariable('MyVar')]),
        ],
      });

      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:runShellScript',
        inputs: {
          runCommand: [
            'mkdir asdf',
            'some {{MyVar}} string',
          ],
        },
        name: 'MyShellScript',
      });
    });
  });
  it('Precondition match', function() {
    const mockEnv = new MockEnvironment();
    const step = new RunShellScriptStep(new Stack(), 'MyShellScript', {
      runCommand: [
        new HardCodedString('mkdir asdf'),
        new StringFormat('some %s string', [new StringVariable('MyVar')]),
      ],
      precondition: Precondition.newPlatformPrecondition(Platform.LINUX),
    });

    const res = new CommandStepSimulation(step, { environment: mockEnv, simulationPlatform: Platform.LINUX }).invoke({ MyVar: 'amazing', platformType: 'Linux' });
    assert.equal(res.responseCode, ResponseCode.SUCCESS);
    assert.deepEqual(mockEnv.previousCommands, [
      "bash -c 'mkdir asdf'",
      "bash -c 'some amazing string'",
    ]);
  });
  it('Precondition mismatch', function() {
    const mockEnv = new MockEnvironment();
    const step = new RunShellScriptStep(new Stack(), 'MyShellScript', {
      runCommand: [
        new HardCodedString('mkdir asdf'),
        new StringFormat('some %s string', [new StringVariable('MyVar')]),
      ],
      precondition: Precondition.newPlatformPrecondition(Platform.LINUX),
    });

    const res = new CommandStepSimulation(step, { environment: mockEnv, simulationPlatform: Platform.MAC_OS }).invoke({ MyVar: 'amazing', platformType: 'Windows' });
    assert.equal(res.responseCode, ResponseCode.SUCCESS);
    assert.deepEqual(mockEnv.previousCommands, []);
  });
});
