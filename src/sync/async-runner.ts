/**
 * Interface for providing asynchronous execution which can be used by the
 * SynchronousPromise class to execute synchronously.
 * @see SynchronousPromise
 */
export interface AsyncRunner {
  runAsync(args: any[]): Promise<any>;
}