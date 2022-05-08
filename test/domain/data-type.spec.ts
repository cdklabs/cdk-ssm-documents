var assert = require('assert');
import { DataType, DataTypeEnum } from "../../lib";

describe('DataType', function() {
    describe('#toSsmString()', function() {
        it('Converts BOOLEAN to SSM name', function() {
            const ssmString = new DataType(DataTypeEnum.BOOLEAN).toSsmString();
            assert.equal(ssmString, "Boolean");
        });
        it('Converts INTEGER to SSM name', function() {
            const ssmString = new DataType(DataTypeEnum.INTEGER).toSsmString();
            assert.equal(ssmString, "Integer");
        });
        it('Converts STRING to SSM name', function() {
            const ssmString = new DataType(DataTypeEnum.STRING).toSsmString();
            assert.equal(ssmString, "String");
        });
        it('Converts STRING_LIST to SSM name', function() {
            const ssmString = new DataType(DataTypeEnum.STRING_LIST).toSsmString();
            assert.equal(ssmString, "StringList");
        });
        it('Converts STRING_MAP to SSM name', function() {
            const ssmString = new DataType(DataTypeEnum.STRING_MAP).toSsmString();
            assert.equal(ssmString, "StringMap");
        });
        it('Converts MAP_LIST to SSM name', function() {
            const ssmString = new DataType(DataTypeEnum.MAP_LIST).toSsmString();
            assert.equal(ssmString, "MapList");
        });
    });

    describe('#toSsmString()', function() {
        it('Type of BOOLEAN is boolean', function() {
            assert.ok(new DataType(DataTypeEnum.BOOLEAN).validateType(true));
            assert.ok(!new DataType(DataTypeEnum.BOOLEAN).validateType("foobar"));
        });
        it('Type of INTEGER is number', function() {
            assert.ok(new DataType(DataTypeEnum.INTEGER).validateType(3));
            assert.ok(!new DataType(DataTypeEnum.INTEGER).validateType(true));
        });
        it('Type of STRING is string', function() {
            assert.ok(new DataType(DataTypeEnum.STRING).validateType("foobar"));
            assert.ok(!new DataType(DataTypeEnum.STRING).validateType(true));
        });
        it('Type of STRING_LIST is Array', function() {
            assert.ok(new DataType(DataTypeEnum.STRING_LIST).validateType([]));
            assert.ok(!new DataType(DataTypeEnum.STRING_LIST).validateType(true));
        });
        it('Type of STRING_MAP is object', function() {
            assert.ok(new DataType(DataTypeEnum.STRING_MAP).validateType({}));
            assert.ok(!new DataType(DataTypeEnum.STRING_MAP).validateType([]));
            assert.ok(!new DataType(DataTypeEnum.STRING_MAP).validateType(true));
        });
        it('Type of MAP_LIST is Array', function() {
            assert.ok(new DataType(DataTypeEnum.MAP_LIST).validateType([]));
            assert.ok(!new DataType(DataTypeEnum.MAP_LIST).validateType(true));
        });
    });
});
