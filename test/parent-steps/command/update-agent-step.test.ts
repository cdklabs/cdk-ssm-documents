import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
    HardCodedString,
    HardCodedBoolean,
} from '../../../src';
import { UpdateAgentStep } from '../../../src/parent-steps/command/update-agent-step';


describe('UpdateAgentStep', function() {
    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const step = new UpdateAgentStep(new Stack(), 'UpdateAgent', {
                agentName : new HardCodedString("agent"),
                allowDowngrade : new HardCodedBoolean(false),
                source: new HardCodedString("/path/to/agent"),
                targetVersion: new HardCodedString("version"),
            });

            assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
                action: 'aws:updateAgent',
                inputs: {
                    agentName  : "agent",
                    allowDowngrade : false,
                    source : "/path/to/agent",
                    targetVersion : "version"
                },
                name: 'UpdateAgent'
            });
        });
    });
});
