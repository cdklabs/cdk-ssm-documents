import assert = require("assert");
import { HardCodedStringMap } from "../../../lib";
import { isStringMap, assertStringMap } from "../../../lib/interface/variables/string-map-variable";

describe("StringMap Variable", () => {
    const validValues = [null, {}, {a: 1}, {1: 2}];
    const invalidValues = [false, 1, "string", []];

    describe("isStringMap", () => {
        it("returns true for string maps", () => {
            for (const value of validValues) {
                assert.ok(isStringMap(value));
            }
        });

        it("returns false for non-string maps", () => {
            for (const value of invalidValues) {
                assert.ok(!isStringMap(value));
            }
        });
    });

    describe("assertStringMap", () => {
        it("does nothing for string maps", () => {
            for (const value of validValues) {
                assert.doesNotThrow(() => assertStringMap(value));
            }
        });

        it("throws an exception for non-string maps", () => {
            for (const value of invalidValues) {
                assert.throws(() => assertStringMap(value));
            }
        });
    });

    describe("resolve", () => {
        it("returns the value for string maps", () => {
            for (const value of validValues) {
                const variable = new HardCodedStringMap(value as any);
                
                assert.equal(variable.resolve({}), value);
            }
        });

        it("throws an exception for non-string maps", () => {
            for (const value of invalidValues) {
                assert.throws(() => new HardCodedStringMap(value as any).resolve({}));
            }
        });
    });

    describe("toJSON", () => {
        it("returns the value's JSON format", () => {
            const variable = new HardCodedStringMap({a: 1});

            assert.equal(JSON.stringify(variable), "{\"a\":1}");
        });
    });
});