import assert = require("assert");
import { HardCodedBoolean } from "../../../lib";
import { isBoolean, assertBoolean } from "../../../lib/interface/variables/boolean-variable";

describe("Boolean Variable", () => {
    const validValues = [null, false, true];
    const invalidValues = [1, "string", [], {}];

    describe("isBoolean", () => {
        it("returns true for booleans", () => {
            for (const value of validValues) {
                assert.ok(isBoolean(value));
            }
        });

        it("returns false for non-booleans", () => {
            for (const value of invalidValues) {
                assert.ok(!isBoolean(value));
            }
        });
    });

    describe("assertBoolean", () => {
        it("does nothing for booleans", () => {
            for (const value of validValues) {
                assert.doesNotThrow(() => assertBoolean(value));
            }
        });

        it("throws an exception for non-booleans", () => {
            for (const value of invalidValues) {
                assert.throws(() => assertBoolean(value));
            }
        });
    });

    describe("resolve", () => {
        it("returns the value for booleans", () => {
            for (const value of validValues) {
                const variable = new HardCodedBoolean(value as any);
                
                assert.equal(variable.resolve({}), value);
            }
        });

        it("throws an exception for non-booleans", () => {
            for (const value of invalidValues) {
                assert.throws(() => new HardCodedBoolean(value as any).resolve({}));
            }
        });
    });

    describe("toJSON", () => {
        it("returns the value's JSON format", () => {
            const variable = new HardCodedBoolean(false);

            assert.equal(JSON.stringify(variable), "false");
        });
    });
});