import { AsyncRunner } from "./async-runner";
const AWS = require("aws-sdk");

/**
 * Invokes AWS asynchronously.
 * This is used with SynchronousPromise to wait for the AWS call to complete synchronously.
 */
export class AwsAsyncInvoker implements AsyncRunner {

    /**
     * Expects a list containing 3 values:
     * 1. AWS Service (such as ec2)
     * 2. AWS API in lowerCamelCase
     * 3. The parameters to send to the specified API.
     */
    runAsync(args: any[]): Promise<any> {
        // Reflectively invokes the aws service (args[0]) with the aws api (args[1]) with the aws params (args[2])
        return new Promise(function (resolve: any, _reject: any) {
            const awsPromise = new AWS[args[0]]()[args[1]](args[2]).promise();
            awsPromise.then(function(data: any) {
                    resolve({"status": "SUCCESS", "Payload": data});
                }).catch(function(err: any) {
                    resolve({"status": "FAILURE", "Payload": err});
                });
        });
    }
}
