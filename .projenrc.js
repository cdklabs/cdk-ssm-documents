const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Amazon Web Services',
  cdkVersion: '2.0.0',
  tsconfig: {
    compilerOptions: {
      isolatedModules: true,
    },
  },
  depsUpgrade: false,
  defaultReleaseBranch: 'main',
  name: 'cdk-ssm-documents',
  repositoryUrl: 'https://github.com/cdklabs/cdk-ssm-documents.git',
  bundledDeps: [
    'synchronized-promise',
    'aws-sdk',
    'jsonpath',
    'python-shell',
    'js-yaml',
    'tmp',
    'ts-node',
    'iso8601-duration',
    'immutable',
  ],
  peerDeps: ['constructs', 'aws-cdk-lib'],
  gitignore: ['.DS_Store'],
  autoApproveProjenUpgrades: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  devDeps: ['mocha'],
  jestOptions: {
    jestConfig: {
      maxWorkers: 4,
    },
  },
  releaseToNpm: true,
  majorVersion: 1,

  //  publishToNuget: {
  //    dotNetNamespace: 'Cdklabs.CdkSsmDocuments',
  //    packageId: 'Cdklabs.CdkSsmDocuments',
  //  },

  publishToMaven: {
    javaPackage: 'io.github.cdklabs.cdkssmdocuments',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
    mavenArtifactId: 'cdk-ssm-document',
    mavenGroupId: 'io.github.cdklabs',
  },
  publishToPypi: {
    distName: 'cdk-ssm-documents',
    module: 'cdk-ssm-documents',
  },
});

project.testTask.reset('mocha -r ts-node/register "test/**/*test.ts"', { name: 'mocha' });

project.synth();
