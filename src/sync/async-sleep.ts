import { AsyncRunner } from "./async-runner";

/**
 * Performs an async sleep.
 * This is used with SynchronousPromise to wait for the sleep to complete Synchronously.
 */
export class AsyncSleep implements AsyncRunner {

    /**
     * Expects a list with a single value indicating the total time to sleep in millis.
     */
    runAsync(args: any[]): Promise<any> {
        return new Promise(function(resolve) {
            setTimeout(resolve, args[0]);
        });
    }

}
