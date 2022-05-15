import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
    HardCodedString,
    HardCodedStringMap,
} from '../../../src';
import {LocalCommandStepDocument, SsmCommandStepDocument} from '../../../src/interface/command-step-document'
import { RunDocumentStep } from '../../../src/parent-steps/command/run-document-step';


describe('RunDocumentStep', function() {
    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document for LocalDocument Type', function() {
            let document = new LocalCommandStepDocument(new HardCodedString("/path/to/document"));
            const step = new RunDocumentStep(new Stack(), 'MyDocument', {
                stepDocument: document,
                documentParameters: new HardCodedStringMap({a:"params1"}),
            });

            assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
                action: 'aws:runDocument',
                inputs: {
                    documentType  : "LocalPath",
                    documentPath : "/path/to/document",
                    documentParameters : {a:"params1"}
                },
                name: 'MyDocument'
            });
        });
    });
    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document for SSMDocument Type', function() {
            let document = new SsmCommandStepDocument(new HardCodedString("DocumentName"));
            const step = new RunDocumentStep(new Stack(), 'MyDocument', {
                stepDocument: document,
                documentParameters: new HardCodedStringMap({a:"params1"}),
            });

            assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
                action: 'aws:runDocument',
                inputs: {
                    documentType  : "SSMDocument",
                    documentPath : "DocumentName",
                    documentParameters : {a:"params1"}
                },
                name: 'MyDocument'
            });
        });
    });
});
