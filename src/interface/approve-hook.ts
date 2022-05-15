// eslint-disable-next-line
const readline = require('readline');
// eslint-disable-next-line
const sp = require('synchronized-promise');

/**
 * This can be used to provide a hook for approval implementation for ApproveStep.
 */
export interface IApproveHook {
  /**
     * Ask for approval
     */
  ask(approver: string): boolean;
}

/**
 * This IApproveHook implementation provides a real ask and waits for user input of Enter.
 * This implementation does not work well on all exported JSII languages.
 * Users can provide their own impl using the IAskHook interface.
 */
export class ApproveImpl implements IApproveHook {
  ask(approver: string): boolean {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let asyncAsk = () => {
      return new Promise<string>(resolve =>
        rl.question(`'approvalRuntime' flag enabled. Approve running step for ${approver}? (Y/n)\n`, (ans: string) => {
          rl.close();
          resolve(ans);
        })).then(function(ans: string) {
        console.log('Proceeding with runtime after approval');
        return ans === 'Y';
      }, function() {
        console.log('error');
      });
    };

    return sp(asyncAsk)();
  }
}

/**
 * Mock implementation of IApproveHook. Does not simulate an approval request.
 */
export class MockApprove implements IApproveHook {
  timesInvoked: number = 0;

  ask(_approver: string): boolean {
    console.log('Mocked implementation! Not performing real approval ask');
    this.timesInvoked++;
    return true;
  }
}
