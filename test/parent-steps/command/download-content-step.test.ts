import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  DocumentSource,
  GitContent,
  GitHubContent,
  HardCodedString, HttpContent, S3Content, SecureVariable, SSMDocumentContent, StringVariable,
} from '../../../lib';
import { DownloadContentStep, HardCodedBoolean } from '../../../src';

describe('DownloadContent', function() {
  describe('#toSsmEntry()', function() {
    it('Builds GitHub as per SSM Document', function() {
      const step = new DownloadContentStep(new Stack(), 'MyDownload', {
        downloadableContent: new GitHubContent({
          owner: HardCodedString.of('myOwner'),
          repository: HardCodedString.of('repo'),
          path: HardCodedString.of('path'),
          tokenInfo: SecureVariable.ofSecureToken('somethingSecure'),
        }),
        destinationPath: HardCodedString.of('destPath'),
      });
      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:downloadContent',
        inputs: {
          sourceInfo: {
            owner: 'myOwner',
            path: 'path',
            repository: 'repo',
            tokenInfo: '{{ssm-secure:somethingSecure}}',
          },
          sourceType: 'GitHub',
          destinationPath: 'destPath',
        },
        name: 'MyDownload',
      });
    });
    it('Builds Git as per SSM Document', function() {
      const step = new DownloadContentStep(new Stack(), 'MyDownload', {
        downloadableContent: new GitContent({
          repository: HardCodedString.of('repo'),
          skipHostKeyChecking: HardCodedBoolean.TRUE,
          privateSshKey: SecureVariable.ofSecureToken('secure'),
        }),
        destinationPath: HardCodedString.of('destPath'),
      });
      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:downloadContent',
        inputs: {
          destinationPath: 'destPath',
          sourceInfo: {
            privateSSHKey: '{{ssm-secure:secure}}',
            repository: 'repo',
            skipHostKeyChecking: true,
          },
          sourceType: 'Git',
        },
        name: 'MyDownload',
      });
    });
    it('Builds S3 as per SSM Document', function() {
      const step = new DownloadContentStep(new Stack(), 'MyDownload', {
        downloadableContent: new S3Content({
          path: StringVariable.of('myRef'),
        }),
        destinationPath: HardCodedString.of('destPath'),
      });
      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:downloadContent',
        inputs: {
          destinationPath: 'destPath',
          sourceInfo: {
            path: '{{myRef}}',
          },
          sourceType: 'S3',
        },
        name: 'MyDownload',
      });
    });
    it('Builds SSM as per SSM Document', function() {
      const step = new DownloadContentStep(new Stack(), 'MyDownload', {
        downloadableContent: new SSMDocumentContent({
          documentSource: DocumentSource.fromName(StringVariable.of('name'), StringVariable.of('version')),
        }),
        destinationPath: HardCodedString.of('destPath'),
      });
      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:downloadContent',
        inputs: {
          destinationPath: 'destPath',
          sourceInfo: {
            Name: '{{name}}:{{version}}',
          },
          sourceType: 'SSMDocument',
        },
        name: 'MyDownload',
      });
    });
    it('Builds HTTP as per SSM Document', function() {
      const step = new DownloadContentStep(new Stack(), 'MyDownload', {
        downloadableContent: new HttpContent({
          url: HardCodedString.of('myUrl'),
        }),
        destinationPath: HardCodedString.of('destPath'),
      });
      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:downloadContent',
        inputs: {
          destinationPath: 'destPath',
          sourceInfo: {
            url: 'myUrl',
          },
          sourceType: 'HTTP',
        },
        name: 'MyDownload',
      });
    });
  });
});
