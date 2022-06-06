import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { ConfigurePackageStep, HardCodedString, HardCodedStringMap } from '../../../lib';
import { Action, HardCodedAction } from '../../../lib/domain/enum/install-action';
import { HardCodedInstallationType, InstallationType } from '../../../lib/domain/enum/installation-type';
import { HardCodedPackageName, PackageName } from '../../../lib/domain/enum/package-name';


describe('ConfigurePackageStep', function() {
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new ConfigurePackageStep(new Stack(), 'ConfigurePackage', {
        packageAction: new HardCodedAction(Action.INSTALL),
        installationType: new HardCodedInstallationType(InstallationType.IN_PLACE_UPDATE),
        packageName: new HardCodedPackageName(PackageName.AWS_CLOUD_WATCH_AGENT),
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
