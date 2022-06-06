import { strict as assert } from 'assert';
import { HardCodedResourceType, ResourceTypeVariable } from '../../../lib';

describe('IEnumVariable', () => {
  describe('HardCodedEnum', () => {
    describe('constructor', () => {
      it('returns an instance if given an enum', () => {
        const resourceType = HardCodedResourceType.MAINTENANCE_WINDOW;
        assert.ok(resourceType instanceof HardCodedResourceType);
      });
    });

    describe('resolveToEnum', () => {
      it('returns the value as an enum', () => {
        const resourceType = HardCodedResourceType.MAINTENANCE_WINDOW;
        const resolved = resourceType.resolveToString({});

        assert.equal(resolved, 'MaintenanceWindow');
      });
    });
    describe('requiredInputs', () => {
      it('returns an empty list', () => {
        const resourceType = HardCodedResourceType.MAINTENANCE_WINDOW;
        const inputs = resourceType.requiredInputs();

        assert.deepEqual(inputs, []);
      });
    });
  });

  describe('EnumVariable', () => {
    describe('resolve', () => {
      it('returns the resolved value as a string}', () => {
        const resourceTypeVariable = new ResourceTypeVariable('ref');
        const genre = resourceTypeVariable.resolve({ ref: 'MaintenanceWindow' });

        assert.equal(genre, 'MaintenanceWindow');
      });

      it('throws for incorrect casing on enum', () => {
        const resourceTypeVariable = new ResourceTypeVariable('ref');

        assert.throws(() => resourceTypeVariable.resolve({ ref: 'FooBar' }));
      });
    });
  });
});