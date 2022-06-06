import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';

import { HardCodedString, HardCodedStringList } from '../../../lib';
import { DomainJoinStep } from '../../../src';

describe('DomainJoinStep', function() {
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new DomainJoinStep(new Stack(), 'DomainJoin', {
        dnsIpAddresses: new HardCodedStringList(['ipAddress']),
        directoryName: new HardCodedString('directoryName'),
        directoryId: new HardCodedString('directoryId'),
      });

      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:domainJoin',
        inputs: {
          dnsIpAddresses: ['ipAddress'],
          directoryName: 'directoryName',
          directoryId: 'directoryId',
        },
        name: 'DomainJoin',
      });
    });
  });
});
