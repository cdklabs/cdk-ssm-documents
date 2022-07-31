import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  HardCodedString,
  MockEnvironment,
  Platform,
  ResponseCode,
  StringFormat,
  StringVariable,
  PsModuleStep,
} from '../../../lib';
import { CommandStepSimulation } from '../../../lib/simulation/command-step-simulation';

//import {DockerEnvironment} from "../../lib/interface/environment"; Uncomment if running against docker container
//Notes for running against a docker image:
//First, figure out and download the powershell module you wish to use
//Convert it to a zip and mount it into a docker container that has powershell on it
//Run the test against the docker image
//exec into the docker container with Docker exec  -it <CONTAINER> /bin/pwsh
//check to see if you can run a command from your module
//the installation location is in the $env:PSModulePath environment variable if you wish to check the installation
//The test is currently set up for the powershell-yaml module (a small module that adds some yaml conversions and manipulation)
//After installing the module the test creates the directory /mnt/test
//It then creates a file output.txt in /mnt then it runs Convertto-Yaml (a powershell-yaml command) and pipes it output into the text file
//Check that /mnt/output.txt exists and has hello: world in it

describe('PsModuleStep', function() {
  describe('#invoke()', function() {
    it('Plays substituted commands against provided env', function() {
      const mockEnv = new MockEnvironment();
      //const mockEnv = DockerEnvironment.fromContainer("<ContainerId>") Comment out the line above and uncomment this if running against docker container
      const step = new PsModuleStep(new Stack(), 'psModule', {
        source: new StringFormat('%s', [new StringVariable('MyVar')]),
        runCommand: [
          new HardCodedString('New-Item -Path /mnt/test -ItemType Directory ; \
        New-Item -Path /mnt/output.txt -ItemType File ; \
        cd /mnt ; \
        Convertto-Yaml @{"hello"="world"} > output.txt'),
        ],
      });
      const myVar = '/mnt/powershell-yaml.zip';
      const res = new CommandStepSimulation(step, { simulationPlatform: Platform.WINDOWS, environment: mockEnv }).invoke({ MyVar: myVar });
      assert.equal(res.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(mockEnv.previousCommands, [
        `pwsh -c \'Expand-Archive -Path ${myVar} -DestinationPath (Join-Path -Path (Get-Item ${myVar}).DirectoryName -ChildPath (Get-Item ${myVar}).BaseName) -Force ; \
        Set-Location -Path (Join-Path -Path (Get-Item ${myVar}).DirectoryName -ChildPath (Get-Item ${myVar}).BaseName) ; \
        Remove-Item -Path package -Recurse -Force ; \
        Remove-Item -Path _rels -Recurse -Force ; \
        Remove-Item -LiteralPath [Content_Types].xml -Force ; \
        Remove-Item -Path (-Join ((Split-Path -Path ${myVar} -LeafBase),\".nuspec\")) -Force ; \
        $paths = ($env:PSModulePath -split ":") ; \
        foreach ($path in $paths) \
        {Copy-Item -Path ((Join-Path -Path (Get-Item ${myVar}).DirectoryName -ChildPath (Get-Item ${myVar}).BaseName)) -Destination $path -Recurse -Force} ; \
        Import-Module (Split-Path -Path ${myVar} -LeafBase) ; New-Item -Path /mnt/test -ItemType Directory ; \
        New-Item -Path /mnt/output.txt -ItemType File ; \
        cd /mnt ; \
        Convertto-Yaml @{\"hello\"=\"world\"} > output.txt\'`,
      ]);
    });
  });
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new PsModuleStep(new Stack(), 'psModule', {
        source: new StringFormat('%s', [new StringVariable('MyVar')]),
        runCommand: [
          new HardCodedString('New-Item -Path /mnt/test -ItemType Directory ; \
                    New-Item -Path /mnt/output.txt -ItemType File; \
                    cd /mnt ; \
                    Convertto-Yaml @{"hello"="world"} > output.txt'),
        ],
      });

      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:psModule',
        inputs: {
          runCommand: [
            'New-Item -Path /mnt/test -ItemType Directory ; \
                    New-Item -Path /mnt/output.txt -ItemType File; \
                    cd /mnt ; \
                    Convertto-Yaml @{"hello"="world"} > output.txt',
          ],
          source: '{{ MyVar }}',
        },
        name: 'psModule',
      });
    });
  });
});
