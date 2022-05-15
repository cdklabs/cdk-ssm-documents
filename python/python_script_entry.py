#!/usr/bin/python

# The code below allows a single entry for all python executions and returns the value of the python invocation.
# This code expects 3 input parameters:
# 1. The path of the python script.
# 2. The function name to execute in the above script.
# 3. The arguments to deliver to the above function.

import sys
import json
import importlib.util
import traceback

try:
    path_to_script = sys.argv[1]
    function_name = sys.argv[2]
    # Input is serialized whenn sent to this script. Load the json before sending it to handler.
    args = json.loads(sys.argv[3])
    
    # Load the module reflectively from the path provided (1st arguments)
    spec = importlib.util.spec_from_file_location("not.used", path_to_script)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    
    # Invoke the reflectively loaded module with the function and arguments specified (2nd/3rd arguments)
    function_output = getattr(module, function_name)(args, {})
    # Print the result so that the JavaScript code can pick up the response from the STDOUT.
    output_with_status = {"status": "SUCCESS", "Payload": function_output}
    print(json.dumps(output_with_status))
except:
    traceback_with_status = {"status": "FAILURE", "Payload": traceback.format_exc()}
    print(json.dumps(traceback_with_status))

