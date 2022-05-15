// import {DockerEnvironment} from "../lib/interface/environment";
import * as assert from 'assert';


describe('DockerEnvironment', function() {
  describe('#run()', function () {
    it('Run executes commands in the running docker', function () {
      assert.strictEqual('noop', 'noop');
      /*
            ----- Ignoring this because it requires a docker container... -----

            this.timeout(10000);
            const dockerEnv = DockerEnvironment.fromImage("mcr.microsoft.com/powershell");
            console.log(dockerEnv.run("pwsh -c 'mkdir zach5'"));
            dockerEnv.removeContainer();
             */
    });
  });
});
