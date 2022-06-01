import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
    HardCodedString,
} from '../../../src';
import { SoftwareInventoryStep } from '../../../src/parent-steps/command/software-inventory-step';


describe('SoftwareInventoryStep', function() {
    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const step = new SoftwareInventoryStep(new Stack(), 'SoftwareInventoryTest', {
                applications : new HardCodedString("applications"),
                awsComponents : new HardCodedString("awsComponents"),
                files: new HardCodedString("files"),
                networkConfig: new HardCodedString("networkConfig"),
                windowsUpdates: new HardCodedString("windowsUpdates"),
                instanceDetailedInformation: new HardCodedString("instanceDetailedInformation"),
                services: new HardCodedString("services"),
                windowsRegistry: new HardCodedString("windowsRegistry"),
                windowsRoles: new HardCodedString("windowsRoles"),
                customInventory: new HardCodedString("customInventory")
            });

            assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
                action: 'aws:softwareInventory',
                inputs: {
                    applications  : "applications",
                    awsComponents : "awsComponents",
                    files : "files",
                    networkConfig : "networkConfig",
                    windowsUpdates : "windowsUpdates",
                    instanceDetailedInformation : "instanceDetailedInformation",
                    services : "services",
                    windowsRegistry : "windowsRegistry",
                    windowsRoles : "windowsRoles",
                    customInventory : "customInventory"
                },
                name: 'SoftwareInventoryTest'
            });
        });
    });
});
