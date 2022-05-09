var assert = require('assert');
import { CopyImageStep, HardCodedBoolean, HardCodedString, MockAwsInvoker, ResponseCode } from '../../../lib';
import { Stack } from '@aws-cdk/core';

describe('CopyImageStep', () => {
    describe('#invoke()', () => {
        it('Copy image EC2 api is invoked', () => {
            const sourceImageId = "source";
            const sourceRegion = "region";
            const imageName = "image";
            const awsInvoker = new MockAwsInvoker();
            awsInvoker.whenThen({
                awsApi: 'copyImage',
                awsParams: {
                    SourceImageId: sourceImageId,
                    SourceRegion: sourceRegion,
                    Name: imageName,
                },
                service: 'EC2'
            }, {
                ImageId: "image ID"
            });
            awsInvoker.whenThen({
                awsApi: 'describeImages',
                awsParams: {
                    ImageIds: ["image ID"],
                },
                service: 'EC2'
            }, {
                Images: [{
                    State: "available"
                }]
            });

            const step = new CopyImageStep(new Stack(), "id2", {
                awsInvoker: awsInvoker,
                sourceImageId: new HardCodedString(sourceImageId),
                sourceRegion: new HardCodedString(sourceRegion),
                imageName: new HardCodedString(imageName),
            });

            const result = step.invoke({});

            assert.equal(result.responseCode, ResponseCode.SUCCESS);
            assert.deepEqual(result.outputs, {
                "id2.ImageId": "image ID",
                "id2.ImageState": "available",
            });
        });

        it('Copy image EC2 api is invoked with all values', function() {
            const stepParams = {
                sourceImageId: new HardCodedString("image id"),
                sourceRegion: new HardCodedString("region"),
                imageName: new HardCodedString("image name"),
                imageDescription: new HardCodedString("image desc"),
                encrypted: new HardCodedBoolean(true),
                kmsKeyId: new HardCodedString("key"),
                clientToken: new HardCodedString("token"),
            };
            const awsParams = {
                SourceImageId: stepParams.sourceImageId.resolve({}),
                SourceRegion: stepParams.sourceRegion.resolve({}),
                Name: stepParams.imageName.resolve({}),
                Description: stepParams.imageDescription.resolve({}),
                Encrypted: stepParams.encrypted.resolve({}),
                KmsKeyId: stepParams.kmsKeyId.resolve({}),
                ClientToken: stepParams.clientToken.resolve({}),
            };
            const awsInvoker = new MockAwsInvoker();
            awsInvoker.whenThen({
                awsApi: 'copyImage',
                awsParams,
                service: 'EC2'
            }, {
                ImageId: "image ID"
            });
            awsInvoker.whenThen({
                awsApi: 'describeImages',
                awsParams: {
                    ImageIds: ["image ID"],
                },
                service: 'EC2'
            }, {
                Images: [{
                    State: "available"
                }]
            });
            const step = new CopyImageStep(new Stack(), "id2", {
                awsInvoker: awsInvoker,
                ...stepParams
            });

            const result = step.invoke({});

            assert.equal(result.responseCode, ResponseCode.SUCCESS);
            assert.deepEqual(awsInvoker.previousInvocations[0], {
                awsApi: 'copyImage',
                awsParams,
                service: 'EC2'
            });
        });
    });

    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const stepParams = {
                sourceImageId: new HardCodedString("image id"),
                sourceRegion: new HardCodedString("region"),
                imageName: new HardCodedString("image name"),
                imageDescription: new HardCodedString("image desc"),
                encrypted: new HardCodedBoolean(true),
                kmsKeyId: new HardCodedString("key"),
                clientToken: new HardCodedString("token"),
            };
            const awsInvoker = new MockAwsInvoker();
            const step = new CopyImageStep(new Stack(), "id2", {
                awsInvoker: awsInvoker,
                ...stepParams
            });

            const result = step.toSsmEntry();

            assert.deepEqual(result, {
                action: 'aws:copyImage',
                inputs: {
                    SourceImageId: "image id",
                    SourceRegion: "region",
                    ImageName: "image name",
                    ImageDescription: "image desc",
                    Encrypted: true,
                    KmsKeyId: "key",
                    ClientToken: "token",
                },
                name: 'id2',
                outputs: [{
                    Type: "String",
                    Name: "ImageId",
                    Selector: "$.ImageId",
                }, {
                    Type: "String",
                    Name: "ImageState",
                    Selector: "$.ImageState",
                }]
            });
        });
    });
});
