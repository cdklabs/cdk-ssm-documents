import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  HardCodedString,
  MockEnvironment,
  Platform,
  ResponseCode,
  StringFormat,
  StringVariable,
} from '../../../lib';
import { RunPowerShellScriptStep } from '../../../lib/parent-steps/command/run-powershell-script-step';

//import {DockerEnvironment} from "../../lib/interface/environment";

describe('RunPowerShellScriptStep', function() {
  describe('#invoke()', function() {
    it('Plays substituted commands against provided env', function() {
      const mockEnv = new MockEnvironment();
      const step = new RunPowerShellScriptStep(new Stack(), 'MyShellScript', {
        environment: mockEnv,
        runCommand: [
          new HardCodedString('mkdir asdf'),
          new StringFormat('some %s string', [new StringVariable('MyVar')]),
        ],
        simulationPlatform: Platform.WINDOWS,
      });

      const res = step.invoke({ MyVar: 'amazing' });
      assert.equal(res.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(mockEnv.previousCommands, [
        "pwsh -c 'mkdir asdf'",
        "pwsh -c 'some amazing string'",
      ]);
    });
  });
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const mockEnv = new MockEnvironment();
      const step = new RunPowerShellScriptStep(new Stack(), 'MyShellScript', {
        environment: mockEnv,
        runCommand: [
          new HardCodedString('mkdir asdf'),
          new StringFormat('some %s string', [new StringVariable('MyVar')]),
        ],
        simulationPlatform: Platform.WINDOWS,
      });

      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:runPowerShellScript',
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
});

/* To run against a docker image
 describe('RunPowerShellScriptStep', function() {
    describe('#invoke()', function() {
        it('Plays substituted commands against provided env', function() {
            const mockEnv = DockerEnvironment.fromContainer(<ContainerId>")
            const step = new RunPowerShellScriptStep(new Stack(), "MyShellScript", {
                environment: mockEnv,
                runCommand: [
                    new HardCodedValue("mkdir asdf"),
                    new StringFormat("some %s string", [new StringVariable("MyVar")])
                ]
            });

            const res = step.invoke({MyVar: "amazing"});
            assert.equal(res.responseCode, ResponseCode.SUCCESS);
            // assert.deepEqual(mockEnv., [
            //     "bash -c 'mkdir asdf'",
            //     "bash -c 'some amazing string'"
            // ])
        });
    });
 */
