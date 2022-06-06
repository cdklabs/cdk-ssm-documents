import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  ConfigurePackageStep,
  HardCodedString,
  HardCodedStringMap,
  HardCodedAction,
  HardCodedInstallationType,
  HardCodedPackageName,
} from '../../../lib';

describe('ConfigurePackageStep', function() {
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new ConfigurePackageStep(new Stack(), 'ConfigurePackage', {
        packageAction: HardCodedAction.INSTALL,
        installationType: HardCodedInstallationType.IN_PLACE_UPDATE,
        packageName: HardCodedPackageName.AMAZON_CLOUD_WATCH_AGENT,
        additionalArguments: new HardCodedStringMap({ b: 1 }),
        version: new HardCodedString('version'),
      });

      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:configurePackage',
        inputs: {
          name: 'AmazonCloudWatchAgent',
          action: 'Install',
          installationType: 'In-place update',
          additionalArguments: { b: 1 },
          version: 'version',
        },
        name: 'ConfigurePackage',
      });
    });
  });
});
