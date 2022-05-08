var assert = require('assert');
import { MockSleep, SleepStep } from '../../../lib';
import { Stack } from '@aws-cdk/core';

describe('PauseStep', function() {
    describe('#invoke()', function() {
        it('Sleep for designated time', function() {
            const mockSleep = new MockSleep();
            const step = new SleepStep(new Stack(), "id", {name: "asdf", sleepHook: mockSleep, sleepSeconds: 10});
            step.invoke({});
            assert.equal(mockSleep.sleepMilliInvocations.length, 1);
            assert.equal(mockSleep.sleepMilliInvocations[0], 10_000);
        });
    });
    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const mockSleep = new MockSleep();
            const step = new SleepStep(new Stack(), "id", {name: "asdf", sleepHook: mockSleep, sleepSeconds: 10});
            assert.deepEqual(step.toSsmEntry(), {
                action: 'aws:sleep',
                inputs: {
                  Duration: 'PT10S'
                },
                name: 'asdf'
            });
        });
    });
});
