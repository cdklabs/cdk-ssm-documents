// eslint-disable-next-line
const readline = require('readline');
// eslint-disable-next-line
const sp = require('synchronized-promise');

/**
 * This can be used to provide a hook for pausing implementation for PauseStep.
 */
export interface IPauseHook {
  pause(): void;
}

/**
 * This IPauseHook implementation provides a real pause and wait for user input of Enter.
 * This implementation does not work well on all exported JSII languages.
 * Users can provide their own impl using the IPauseHook interface.
 */
export class PauseImpl implements IPauseHook {
  pause(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let asyncFunction = () => {
      return new Promise(resolve =>
        rl.question("'pauseRuntime' flag enabled. Press Enter to continue...\n", (ans: unknown) => {
          rl.close();
          resolve(ans);
        })).then(function() {
        console.log('Proceeding with runtime after pause');
      }, function() {
        console.log('error');
      });
    };

    return sp(asyncFunction)();
  }

}

export class MockPause implements IPauseHook {

  timesInvoked: number = 0;

  pause(): void {
    console.log('Mocked implementation! Not performing real pause');
    this.timesInvoked++;
  }

}
