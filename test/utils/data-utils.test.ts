import assert = require("assert");
import { decodeBase64String, stripBeginAndEndQuotes } from "../../lib/utils/data-utils";

describe("Data utils", () => {
    describe("decodeBase64String", () => {
        it("decodes base64 strings", () => {
            const expected = "こんにちは";
            const base64 = Buffer.from(expected, "utf-8").toString("base64");

            const actual = decodeBase64String(base64);

            assert.equal(actual, expected);
        });

        it("returns empty string when given empty string", () => {
            const actual = decodeBase64String("");

            assert.equal(actual, "");
        });

        it("returns null when given null or undefined", () => {
            for (const value of [null, undefined]) {
                const actual = decodeBase64String(value as any);

                assert.equal(actual, null);
            }
        });
    });

    describe("stripBeginAndEndQuotes", () => {
        it("strips begin and end quotes if they exist", () => {
            const cases: Record<string, string> = {"\"basic\"": "basic", "a\"b": "a\"b", "\"apple": "apple", "\"\"\"\"": "\"\"", "": ""};
            for (const value of Object.keys(cases)) {
                const actual = stripBeginAndEndQuotes(value);

                assert.equal(actual, cases[value]);
            }
        });

        it("returns null when given null or undefined", () => {
            for (const value of [null, undefined]) {
                const actual = stripBeginAndEndQuotes(value as any);

                assert.equal(actual, null);
            }
        });
    });
});