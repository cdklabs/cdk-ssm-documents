const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Amazon Web Services',
  cdkVersion: '2.0.0',
  tsconfig: {
    compilerOptions: {
      isolatedModules: true,
    },
  },
  defaultReleaseBranch: 'main',
  name: '@cdklabs/cdk-ssm-documents',
  repositoryUrl: 'https://github.com/cdklabs/cdk-ssm-documents.git',
  bundledDeps: [
    'synchronized-promise',
    'aws-sdk',
    'jsonpath',
    'python-shell',
    'js-yaml',
    'immutable',
  ],
  peerDeps: ['constructs', 'aws-cdk-lib'],
  gitignore: ['.DS_Store'],
  depsUpgrade: false,
  devDeps: ['mocha', 'ts-node'],
  jestOptions: {
    jestConfig: {
      maxWorkers: 4,
    },
  },

  // for now, until we sort some stuff out
  release: false,

  publishToNuget: {
    dotNetNamespace: 'Cdklabs.CdkSsmDocuments',
    packageId: 'Cdklabs.CdkSsmDocuments',
  },
  publishToMaven: {
    javaPackage: 'io.github.cdklabs.cdkssmdocuments',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
    mavenArtifactId: 'cdk-ssm-document',
    mavenGroupId: 'io.github.cdklabs',
  },
  publishToPypi: {
    distName: 'cdklabs.cdk-ssm-documents',
    module: 'cdklabs.cdk-ssm-documents',
  },
});

project.testTask.reset('mocha -r ts-node/register "test/**/*test.ts"', { name: 'mocha' });
project.synth();
