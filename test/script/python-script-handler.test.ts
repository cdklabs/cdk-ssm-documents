var assert = require('assert');
import { PythonScriptHandler } from '../../lib/script/python-script-handler';

describe('PythonScriptHandler', function() {
    describe('#run()', function() {
        it('Invokes python and returns python result', function() {
            const pyHandler = new PythonScriptHandler();
            const response = pyHandler.run("test/test_file.py", "my_func", {MyInput: "a"});
            assert.deepEqual(response, {
                Payload: {
                    MyReturn: 'a-suffix'
                },
                status: 'SUCCESS'
            })
        });
    });
});
