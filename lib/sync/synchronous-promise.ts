import { Worker, receiveMessageOnPort, MessageChannel } from "worker_threads";

/**
 * Blocks the main thread to wait for Promise to complete.
 * Granted this is an anti-pattern in TypeScript, but if you dare to block the main thread this will do it.
 * This is usefull in JSII export languages can use this library directly wihtout having to deal with callbacks.
 */
export class SynchronousPromise {

    /**
     * You must prepare a file with a class that implements AsyncRunner.
     * AsyncRunner returns a Promise which this class will wait on to complete.
     * Note: The inputs and outputs from this method must be serializable.
     * @param classFile The file which will be "require"ed.
     * @param className The name of the class which implements AsyncRunner.
     * @param funcArgs The args to pass to the AsyncRunner implementation
     * @param timeout The amount of time in seconds after which this function will stop waiting and return.
     * @returns The result of the Promise upon completion.
     */
    wait(classFile: string, className: string, funcArgs: any[], timeout: number = 10000) {
        const fullClassFile = require.resolve(classFile);
        console.log("Found full class file: " + fullClassFile);
        const args = [...funcArgs, className, fullClassFile];
        const worker = new Worker(require.resolve("./worker.js"));
        const signal = new Int32Array(new SharedArrayBuffer(4));
        signal[0] = 0;
        try {
            const subChannel = new MessageChannel();
            worker.postMessage({ signal, port: subChannel.port1, args }, [
                subChannel.port1
            ]);
            // Sleep until the other thread sets signal[0] to 1
            Atomics.wait(signal, 0, 0, timeout);
            // Read the message (result) from the worker synchronously
            return receiveMessageOnPort(subChannel.port2)?.message.result;
        } finally {
            worker.unref();
        }
    }

}
