import { SynchronousPromise } from '../sync/synchronous-promise';

/**
 * Perform Python script evaluation.
 * Function returns the value received from the python invocation synchronously nested inside "Payload".
 * This class will not work if python is not available in the environment that this code is running in.
 */
export class PythonScriptHandler {

  /**
     * Runs the python function specified by the input argument.
     * The python result will be nested inside a "Payload" object as is done by SSM.
     * Another json entry is appended to the root object called "status".
     * If the value of the json "status" key is "FAILURE", this function throws the result of Payload.
     * @param path to the python code
     * @param handler function to execute in the python code
     * @param params function parameters to send to handler
     * @returns python function response
     * @example {Payload: {"MyOutput": "MyValue"}, "Status": "SUCCESS"}
     */
  run(path: string, handler: string, params: { [name: string]: any }): { [name: string]: any } {
    const pyResult = new SynchronousPromise().wait('cdk-ssm-document/lib/sync/python-async-runner', 'PythonAsyncRunner', [path, handler, params]);
    // results from python function is wrapped in object containing status and Payload
    if (pyResult.status == 'FAILURE') {
      console.error(`Exception occurred calling python function ${path}.${handler}\n${pyResult.Payload}`);
      throw new Error(pyResult.Payload);
    }
    return pyResult;
  }
}
