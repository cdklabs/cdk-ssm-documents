import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
    HardCodedString,
    HardCodedStringMap
} from '../../../src';
import { ConfigurePackageStep } from '../../../src/parent-steps/command/configure-package-step';


describe('ConfigurePackageStep', function() {
    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const step = new ConfigurePackageStep(new Stack(), 'ConfigurePackage', {
                packageName : new HardCodedString("package"),
                packageAction : new HardCodedString("Install"),
                installationType: new HardCodedString("In-place update"),
                additionalArguments: new HardCodedStringMap({ b: 1 }),
                version: new HardCodedString("version"),
            });

            assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
                action: 'aws:configurePackage',
                inputs: {
                    name  : "package",
                    action : `Install`,
                    installationType : "In-place update",
                    additionalArguments: {b:1},
                    version : "version"
                },
                name: 'ConfigurePackage'
            });
        });
    });
});
