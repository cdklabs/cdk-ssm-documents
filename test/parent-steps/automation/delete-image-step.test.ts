var assert = require('assert');
import { Stack } from 'aws-cdk-lib';
import { HardCodedString, MockAwsInvoker, MockSleep, ResponseCode } from '../../../lib';
import { DeleteImageStep } from '../../../lib/parent-steps/automation/delete-image-step';

describe('DeleteImageStep', () => {
    describe('#invoke()', () => {
        it('Deregister image and delete snapshot EC2 api are invoked', () => {
            const imageId = "image id";
            const awsInvoker = new MockAwsInvoker();
            awsInvoker.whenThen({
                awsApi: 'describeImages',
                awsParams: {
                    ImageIds: [imageId],
                },
                service: 'EC2'
            }, {
                Images: [{
                    BlockDeviceMappings: [{
                        Ebs: {
                            SnapshotId: "snapshot id"
                        }
                    }]
                }]
            });

            const step = new DeleteImageStep(new Stack(), "id2", {
                awsInvoker: awsInvoker,
                sleepHook: new MockSleep(),
                imageId: new HardCodedString(imageId),
            });

            const result = step.invoke({});

            assert.equal(result.responseCode, ResponseCode.SUCCESS);
            assert.deepEqual(awsInvoker.previousInvocations[1], {
                awsApi: "deregisterImage",
                awsParams: {
                    ImageId: imageId,
                },
                service: "EC2",
            });
            assert.deepEqual(awsInvoker.previousInvocations[2], {
                awsApi: "deleteSnapshot",
                awsParams: {
                    SnapshotId: "snapshot id",
                },
                service: "EC2",
            });
        });
    });

    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const stepParams = {
                imageId: new HardCodedString("image id"),
            };
            const awsInvoker = new MockAwsInvoker();
            const step = new DeleteImageStep(new Stack(), "id2", {
                awsInvoker: awsInvoker,
                ...stepParams
            });

            const result = step.toSsmEntry();

            assert.deepEqual(result, {
                action: 'aws:deleteImage',
                inputs: {
                    ImageId: "image id",
                },
                name: 'id2',
            });
        });
    });
});
