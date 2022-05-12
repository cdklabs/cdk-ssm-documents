import {DownloadContentStep} from "../../../lib/parent-steps/command/download-content-step";
import * as DC from "../../../lib/interface/download-content"

const assert = require('assert');
import {
    HardCodedString,
    MockEnvironment,
    DockerEnvironment,
    ResponseCode,
    StringFormat,
    StringVariable
} from '../../../lib';
import { Stack } from 'aws-cdk-lib';

describe('DownloadContent', function() {
    describe('#invokeS3()', function() {
        it('Plays substituted commands against provided env', function() {
            //const mockEnv = new MockEnvironment()
            const mockEnv = DockerEnvironment.fromContainer("743cec2b3918e2be61cd7deec0b6d9a76cb54e472ad8d91e33f1d84a9e22cb08");
            let content = BuildDownloadContent(DC.SourceType.S3)
            const step = new DownloadContentStep(new Stack(), "S3Download", {
                environment: mockEnv,
                sourceType: DC.SourceType.S3,
                sourceInfo: content,
                destinationPath: new StringFormat("%s", [new StringVariable("MyVar")])
            });

            const res = step.invoke({MyVar: "/mnt"});
            assert.equal(res.responseCode, ResponseCode.SUCCESS);
        });
    });
    describe('#invokeSSM()', function() {
        it('Plays substituted commands against provided env', function() {
            //const mockEnv = new MockEnvironment()
            const mockEnv = DockerEnvironment.fromContainer("743cec2b3918e2be61cd7deec0b6d9a76cb54e472ad8d91e33f1d84a9e22cb08");
            let content = BuildDownloadContent(DC.SourceType.SSMDOCUMENT)
            const step = new DownloadContentStep(new Stack(), "SSMDownload", {
                environment: mockEnv,
                sourceType: DC.SourceType.SSMDOCUMENT,
                sourceInfo: content,
                destinationPath: new StringFormat("%s", [new StringVariable("MyVar")])
            });

            const res = step.invoke({MyVar: "/mnt"});
            assert.equal(res.responseCode, ResponseCode.SUCCESS);
        });
    });
    describe('#invokeHTTP()', function() {
        it('Plays substituted commands against provided env', function() {
            const mockEnv = DockerEnvironment.fromContainer("743cec2b3918e2be61cd7deec0b6d9a76cb54e472ad8d91e33f1d84a9e22cb08");
            let content = BuildDownloadContent(DC.SourceType.HTTP)
            const step = new DownloadContentStep(new Stack(), "HTTPDownload", {
                environment: mockEnv,
                sourceType: DC.SourceType.HTTP,
                sourceInfo: content,
                destinationPath: new StringFormat("%s", [new StringVariable("MyVar")])
            });

            const res = step.invoke({MyVar: "/mnt"});
            assert.equal(res.responseCode, ResponseCode.SUCCESS);
        });
    });
    describe('#invokeGitHub()', function() {
        it('Plays substituted commands against provided env', function() {
            const mockEnv = DockerEnvironment.fromContainer("743cec2b3918e2be61cd7deec0b6d9a76cb54e472ad8d91e33f1d84a9e22cb08");
            let content = BuildDownloadContent(DC.SourceType.GITHUB)
            const step = new DownloadContentStep(new Stack(), "GitHubDownload", {
                environment: mockEnv,
                sourceType: DC.SourceType.GITHUB,
                sourceInfo: content,
                destinationPath: new StringFormat("%s", [new StringVariable("MyVar")])
            });

            const res = step.invoke({MyVar: "/mnt"});
            assert.equal(res.responseCode, ResponseCode.SUCCESS);
        });
    });
    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const mockEnv = new MockEnvironment()
            let content = BuildDownloadContent(DC.SourceType.S3)
            const step = new DownloadContentStep(new Stack(), "S3Download", {
                environment: mockEnv,
                sourceType: DC.SourceType.S3,
                sourceInfo: content,
                destinationPath: new StringFormat("some %s string", [new StringVariable("MyVar")])

            });
            step.toSsmEntry();

        });
    });
});

 function BuildDownloadContent (sourceType: DC.SourceType):DC.IDownloadableContent {
     switch (sourceType){
         case DC.SourceType.GIT : {
             return BuildGitContent();
         }
         case DC.SourceType.GITHUB :{
             return BuildGitHubContent();
         }
         case DC.SourceType.HTTP : {
             return BuildHTTPContent();
         }
         case DC.SourceType.S3 : {
             return BuildS3Content();
         }
         default : {
             return BuildSSMDocumentContent();
         }
     }
 }

 function BuildGitContent () : DC.IGitContent {
    return new DC.GitContent({
       repository: new HardCodedString("repository")
    });
 }

function BuildGitHubContent () : DC.IGitHubContent {
     return new DC.GitHubContent({
       owner: new HardCodedString("JamesNK"),
       repository: new HardCodedString("NewtonSoft.Json"),
        path: new HardCodedString("Src/Newtonsoft.Json/Bson"),
        tokenInfo: new HardCodedString("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"),
    });
}

function BuildHTTPContent () : DC.IHTTPContent {
     return new DC.HTTPContent({
        url:new HardCodedString("https://unsplash.com/photos/AaEQmoufHLk/download?force=true")
     });

}

function BuildS3Content () : DC.IS3Content {
    return new DC.S3Content({path: new HardCodedString("s3://downloadcontenttest/test/test.txt")});
}

function BuildSSMDocumentContent () : DC.ISSMDocumentContent {
    return new DC.SSMDocumentContent({docInfo: new DC.NameDoc("AWS-ASGEnterStandby","1")});
}


