import assert = require("assert");

const sanitize = (record: Record<string, any>): Record<string, any> => {
    return JSON.parse(JSON.stringify(record).replace(/\\r\\n/g, "\\n"));
}

export const assertDeepEqual = (actual: Record<string, any>, expected: Record<string, any>): void => {
    assert.deepEqual(sanitize(actual), sanitize(expected));
}