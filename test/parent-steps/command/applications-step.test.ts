import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { StringVariable, HardCodedInstallUninstallRepair, ApplicationsStep } from '../../../lib';

describe('ApplicationsStep', function() {
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new ApplicationsStep(new Stack(), 'Applications', {
        action: HardCodedInstallUninstallRepair.REPAIR,
        source: StringVariable.of('source'),
        parameters: StringVariable.of('param'),
      });

      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:applications',
        inputs: {
          action: 'Repair',
          source: '{{source}}',
          parameters: '{{param}}',
        },
        name: 'Applications',
      });
    });
  });
});
