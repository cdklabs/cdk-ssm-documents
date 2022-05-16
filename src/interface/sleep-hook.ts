import { SynchronousPromise } from '../sync/synchronous-promise';

/**
 * This can be used to provide a hook for sleeping for SleepStep (and other places where sleep is required).
 */
export interface ISleepHook {
  sleep(timeMillis: number): void;
}

/**
 * Performs a real sleep.
 */
export class SleepImpl implements ISleepHook {

  /**
     * Synchronously sleeps for duration specified in millis.
     */
  sleep(timeMillis: number): void {
    console.log(`Performing a real sleep of ${timeMillis} ms. Be sure to not commit code that performs a real sleep!`);
    new SynchronousPromise().wait(
      '../../lib/sync/async-sleep',
      'AsyncSleep',
      [timeMillis]);
  }
}

/**
 * Mock ISleeper implementation. Simply logs that it is sleeping and returns immediately.
 */
export class MockSleep implements ISleepHook {

  readonly sleepMilliInvocations: number[] = [];

  sleep(timeMillis: number): void {
    this.sleepMilliInvocations.push(timeMillis);
    console.log(`Mocked implementation! Not performing real sleep of ${timeMillis}`);
  }
}