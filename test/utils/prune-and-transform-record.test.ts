import { HardCodedString, StringVariable } from "../../lib";
import { pruneAndTransformRecord } from "../../lib/utils/prune-and-transform-record";
import { assertDeepEqual } from "../test-utils/assert-deep-equal";

describe("pruneAndTransformRecord", () => {
    it("removes undefined values", () => {
        const value = {
            a: undefined,
            b: undefined,
            c: new HardCodedString("real"),
        }

        const actual = pruneAndTransformRecord(value, x => x);

        assertDeepEqual(actual, {
            c: new HardCodedString("real"),
        });
    });

    it("transforms defined values", () => {
        const value = {
            a: new StringVariable("variable"),
            b: new HardCodedString("hard"),
        }

        const actual = pruneAndTransformRecord(value, x => x.print());

        assertDeepEqual(actual, {
            a: "{{variable}}",
            b: "hard",
        });
    });
});