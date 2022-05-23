import { AsyncRunner } from './async-runner';
// eslint-disable-next-line
const PythonShell = require('python-shell').PythonShell;

/**
 * Runs the Python execution and returns a promise with the Python result.
 * This is used with SynchronousPromise to wait for the result from the Python execution synchronously.
 */
export class PythonAsyncRunner implements AsyncRunner {

  /**
     * Expect args to be a list with 3 values:
     * 1. The path of the python script.
     * 2. The function name to execute in the above script.
     * 3. The arguments to deliver to the above function.
     */
  runAsync(args: any[]): Promise<any> {
    return new Promise(function (resolve: any, _reject: any) {
      const pythonOut = new Promise(function (resolveIn: any, _rejectIn: any) {
        var options = {
          mode: 'text',
          pythonOptions: ['-u'],
          scriptPath: __dirname + '/../../python/',
          args: [args[0], args[1], JSON.stringify(args[2])],
        };
        // prevent __pycache__ folder from getting generated
        process.env.PYTHONDONTWRITEBYTECODE = '1';
        // See documentation in python_script_entry.py to see how this execution works.
        PythonShell.run('python_script_entry.py', options, function (err: any, results: any) {
          if (err != undefined) {
            console.log('Error calling python: ' + JSON.stringify(err));
            resolveIn(err);
          }
          // Results is an array consisting of messages collected during execution
          // Pop the last one (which is the function repsonse written out by python_script_entry.py)
          const endResult: string = results.pop();
          // The results are wrapped with Payload (as is done in SSM) as well as status (SUCCESS|FAILURE)
          resolveIn(JSON.parse(endResult));
        });
      });
      pythonOut.then(function(data: any) {
        resolve(data);
      }).catch(function(err: any) {
        resolve({ status: 'FAILURE', Payload: err });
      });
    });
  }

}