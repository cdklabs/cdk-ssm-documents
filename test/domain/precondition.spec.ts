var assert = require('assert');
import {Platform, Precondition} from "../../lib";

describe('Precondition', function() {
    describe('#evaluate()', function() {
        it('Platforms match', function() {
            const precondition = Precondition.newPlatformPrecondition(Platform.LINUX);
            const actual = precondition.evaluate({platformType: Platform.LINUX.toString()});
            assert.equal(actual, true);
        });
        it('Platforms mismatch', function() {
            const precondition = Precondition.newPlatformPrecondition(Platform.LINUX);
            const actual = precondition.evaluate({platformType: Platform.WINDOWS.toString()});
            assert.equal(actual, false);
        });
        it('platformType not in inputs', function() {
            const precondition = Precondition.newPlatformPrecondition(Platform.LINUX);
            const actual = precondition.evaluate({notPlatformType: Platform.LINUX.toString()});
            assert.equal(actual, false);
        });
    });
    describe('#asSsmEntry()', function() {
        it('PlatformType comparison', function() {
            const precondition = Precondition.newPlatformPrecondition(Platform.LINUX);
            const actual = precondition.asSsmEntry();
            const expected = {
                "StringEquals": [
                    "platformType",
                    "Linux"
                ]
            }
            assert.deepEqual(actual, expected);
        });
    });
});