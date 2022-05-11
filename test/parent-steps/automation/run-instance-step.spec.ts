var assert = require('assert');
import { HardCodedBoolean, HardCodedMapList, HardCodedNumber, HardCodedString, HardCodedStringList, HardCodedStringMap, MockAwsInvoker, NumberVariable, ResponseCode, RunInstanceStep, StringVariable } from '../../../lib';
import { Stack } from 'aws-cdk-lib';

describe('RunInstanceStep', function() {
    describe('#invoke()', function() {
        it('RunInstances api is invoked', function() {
            const imageId = 'image id';
            const awsInvoker = new MockAwsInvoker();
            awsInvoker.whenThen({
                awsApi: 'runInstances',
                awsParams: {
                    ImageId: imageId,
                    MinCount: 1,
                    MaxCount: 1,
                },
                service: 'EC2'
            }, {
                "Instances": [{
                    "InstanceId": "id123",
                    "State": {
                        "Code": 0,
                        "Name": "pending"
                    }
                }]
            });
            awsInvoker.whenThen({
                awsApi: "describeInstanceStatus",
                awsParams: {
                    InstanceIds: ["id123"],
                    IncludeAllInstances: true,
                },
                service: "EC2",
            }, {
                InstanceStatuses: [
                    {
                        InstanceStatus: {
                            Status: "ok",
                        },
                        InstanceState: {
                            Name: "running",
                        }
                    }
                ]
            });
            const step = new RunInstanceStep(new Stack(), "id2", {
                awsInvoker: awsInvoker,
                imageId: new HardCodedString(imageId),
            });

            const result = step.invoke({});

            assert.equal(result.responseCode, ResponseCode.SUCCESS);
            assert.deepEqual(awsInvoker.previousInvocations[0], {
                awsApi: 'runInstances',
                awsParams: {
                    ImageId: imageId,
                    MinCount: 1,
                    MaxCount: 1,
                },
                service: 'EC2'
            });
        });

        it('RunInstances api is invoked with all values', function() {
            const stepParams = {
                imageId: new HardCodedString('image id'),
                instanceType: new HardCodedString("string"),
                minInstanceCount: new HardCodedNumber(1),
                maxInstanceCount: new HardCodedNumber(1),
                additionalInfo: new HardCodedString("string"),
                blockDeviceMappings: new HardCodedMapList([{ "a": 1 }]),
                clientToken: new HardCodedString("string"),
                disableApiTermination: new HardCodedBoolean(true),
                ebsOptimized: new HardCodedBoolean(true),
                iamInstanceProfileArn: new HardCodedString("string"),
                iamInstanceProfileName: new HardCodedString("string"),
                instanceInitiatedShutdownBehavior: new HardCodedString("string"),
                kernelId: new HardCodedString("string"),
                keyName: new HardCodedString("string"),
                monitoring: new HardCodedBoolean(true),
                networkInterfaces: new HardCodedMapList([{ "a": 1 }]),
                placement: new HardCodedStringMap({ "a": 1 }),
                privateIpAddress: new HardCodedString("string"),
                ramdiskId: new HardCodedString("string"),
                securityGroupIds: new HardCodedStringList(["string"]),
                securityGroups: new HardCodedStringList(["string"]),
                subnetId: new HardCodedString("string"),
                tagSpecifications: new HardCodedMapList([{ "a": 1 }]),
                userData: new HardCodedString("string"),
            };
            const awsParams = {
                AdditionalInfo: stepParams.additionalInfo.resolve({}),
                BlockDeviceMapping: stepParams.blockDeviceMappings.resolve({}),
                ClientToken: stepParams.clientToken.resolve({}),
                DisableApiTermination: stepParams.disableApiTermination.resolve({}),
                EbsOptimized: stepParams.ebsOptimized.resolve({}),
                IamInstanceProfile: stepParams.iamInstanceProfileArn.resolve({}),
                ImageId: stepParams.imageId.resolve({}),
                InstanceInitiatedShutdownBehavior: stepParams.instanceInitiatedShutdownBehavior.resolve({}),
                InstanceType: stepParams.instanceType.resolve({}),
                KernalId: stepParams.kernelId.resolve({}),
                KeyName: stepParams.keyName.resolve({}),
                MaxCount: stepParams.maxInstanceCount.resolve({}),
                MinCount: stepParams.minInstanceCount.resolve({}),
                Monitoring: stepParams.monitoring.resolve({}),
                NetworkInterfaces: stepParams.networkInterfaces.resolve({}),
                Placement: stepParams.placement.resolve({}),
                PrivateIpAddress: stepParams.privateIpAddress.resolve({}),
                RamdiskId: stepParams.ramdiskId.resolve({}),
                SecurityGroups: stepParams.securityGroups.resolve({}),
                SecurityGroupIds: stepParams.securityGroupIds.resolve({}),
                SubnetId: stepParams.subnetId.resolve({}),
                TagSpecifications: stepParams.tagSpecifications.resolve({}),
                UserData: stepParams.userData.resolve({}),
            };
            const awsInvoker = new MockAwsInvoker();
            awsInvoker.whenThen({
                awsApi: 'runInstances',
                awsParams,
                service: 'EC2'
            }, {
                "Instances": [{
                    "InstanceId": "id123",
                    "State": {
                        "Code": 0,
                        "Name": "pending"
                    }
                }]
            });
            awsInvoker.whenThen({
                awsApi: "describeInstanceStatus",
                awsParams: {
                    InstanceIds: ["id123"],
                    IncludeAllInstances: true,
                },
                service: "EC2",
            }, {
                InstanceStatuses: [
                    {
                        InstanceStatus: {
                            Status: "ok",
                        },
                        InstanceState: {
                            Name: "running",
                        }
                    }
                ]
            });
            const step = new RunInstanceStep(new Stack(), "id2", {
                awsInvoker: awsInvoker,
                ...stepParams
            });

            const result = step.invoke({});

            assert.equal(result.responseCode, ResponseCode.SUCCESS);
            assert.deepEqual(awsInvoker.previousInvocations[0], {
                awsApi: 'runInstances',
                awsParams,
                service: 'EC2'
            });
        });
    });

    describe('#toSsmEntry()', function() {
        it('Builds entry as per SSM Document', function() {
            const stepParams = {
                imageId: new HardCodedString('image id'),
                instanceType: new StringVariable("string"),
                minInstanceCount: new NumberVariable("variable"),
                maxInstanceCount: new HardCodedNumber(1),
                additionalInfo: new HardCodedString("string"),
                blockDeviceMappings: new HardCodedMapList([{ "a": 1 }]),
                clientToken: new HardCodedString("string"),
                disableApiTermination: new HardCodedBoolean(true),
                ebsOptimized: new HardCodedBoolean(true),
                iamInstanceProfileArn: new HardCodedString("string"),
                iamInstanceProfileName: new HardCodedString("string"),
                instanceInitiatedShutdownBehavior: new HardCodedString("string"),
                kernelId: new HardCodedString("string"),
                keyName: new HardCodedString("string"),
                monitoring: new HardCodedBoolean(true),
                networkInterfaces: new HardCodedMapList([{ "a": 1 }]),
                placement: new HardCodedStringMap({ "a": 1 }),
                privateIpAddress: new HardCodedString("string"),
                ramdiskId: new HardCodedString("string"),
                securityGroupIds: new HardCodedStringList(["string"]),
                securityGroups: new HardCodedStringList(["string"]),
                subnetId: new HardCodedString("string"),
                tagSpecifications: new HardCodedMapList([{ "a": 1 }]),
                userData: new HardCodedString("string"),
            };
            const awsInvoker = new MockAwsInvoker();
            const step = new RunInstanceStep(new Stack(), "id2", {
                awsInvoker: awsInvoker,
                ...stepParams
            });

            const result = step.toSsmEntry();

            assert.deepEqual(result, {
                action: 'aws:runInstances',
                inputs: {
                    ImageId: 'image id',
                    InstanceType: "{{string}}",
                    MinInstanceCount: "{{variable}}",
                    MaxInstanceCount: 1,
                    AdditionalInfo: "string",
                    BlockDeviceMappings: [{ "a": 1 }],
                    ClientToken: "string",
                    DisableApiTermination: true,
                    EbsOptimized: true,
                    IamInstanceProfileArn: "string",
                    IamInstanceProfileName: "string",
                    InstanceInitiatedShutdownBehavior: "string",
                    KernelId: "string",
                    KeyName: "string",
                    Monitoring: true,
                    NetworkInterfaces: [{ "a": 1 }],
                    Placement: { "a": 1 },
                    PrivateIpAddress: "string",
                    RamdiskId: "string",
                    SecurityGroupIds: ["string"],
                    SecurityGroups: ["string"],
                    SubnetId: "string",
                    TagSpecifications: [{ "a": 1 }],
                    UserData: "string",
                },
                name: 'id2',
                outputs: [
                    {
                        Name: "InstanceIds",
                        Selector: "$.InstanceIds",
                        Type: "StringList",
                    },
                    {
                        Name: "InstanceStates",
                        Selector: "$.InstanceStates",
                        Type: "StringList",
                    }
                ]
            });
        });
    });
});
