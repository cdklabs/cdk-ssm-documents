import { CdklabsConstructLibrary, JsiiLanguage } from "cdklabs-projen-project-types";

const project = new CdklabsConstructLibrary({
  author: 'Amazon Web Services',
  authorAddress: 'https://aws.amazon.com',
  cdkVersion: '2.189.1',
  cdkVersionPinning: false,
  tsconfig: {
    compilerOptions: {
      isolatedModules: true,
    },
  },
  defaultReleaseBranch: 'main',
  private: false,
  name: '@cdklabs/cdk-ssm-documents',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/cdklabs/cdk-ssm-documents.git',
  bundledDeps: [
    'synchronized-promise',
    '@aws-sdk/client-cloudformation',
    '@aws-sdk/client-cloudwatch',
    '@aws-sdk/client-ec2',
    '@aws-sdk/client-iam',
    '@aws-sdk/client-lambda',
    '@aws-sdk/client-s3',
    '@aws-sdk/client-sns',
    '@aws-sdk/client-sqs',
    '@aws-sdk/client-ssm',
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
  rosettaOptions:{
    strict: false,
  },
  release: true,

  publishToNuget: {
    dotNetNamespace: 'Cdklabs.CdkSsmDocuments',
    packageId: 'Cdklabs.CdkSsmDocuments',
  },
  publishToMaven: {
    javaPackage: 'io.github.cdklabs.cdkssmdocuments',
    mavenServerId: 'central-ossrh',
    mavenArtifactId: 'cdk-ssm-documents',
    mavenGroupId: 'io.github.cdklabs',
  },
  publishToPypi: {
    distName: 'cdklabs.cdk-ssm-documents',
    module: 'cdklabs.cdk_ssm_documents',
  },
  jsiiTargetLanguages: [JsiiLanguage.PYTHON, JsiiLanguage.JAVA, JsiiLanguage.DOTNET]
});

project.testTask.reset('mocha -r ts-node/register "test/**/*test.ts"', { name: 'mocha' });

const packageJs = project.tasks.tryFind('package:js');
if (packageJs) {
  packageJs.prependExec('find node_modules/deasync -type f -links +1 | while read f; do cp "$f" "$f.tmp" && mv "$f.tmp" "$f"; done || true');
}

project.synth();
