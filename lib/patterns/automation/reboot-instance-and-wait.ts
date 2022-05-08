import { Construct } from "@aws-cdk/core";
import { IStringVariable } from "../../interface/variables/string-variable";
import { AwsApiStep } from "../../parent-steps/automation/aws-api-step";
import { WaitForResourceStep } from "../../parent-steps/automation/wait-for-resource-step";

export class RebootInstanceAndWait extends Construct {
    constructor(scope: Construct, id: string, instanceId: IStringVariable) {
        super(scope, id);
        new AwsApiStep(this, "RebootInstances", {
            service: "ec2",
            pascalCaseApi: "RebootInstances",
            apiParams: {'InstanceIds': [instanceId]},
            outputs: []
        });
        new WaitForResourceStep(this, "DescribeInstances", {
            service: "ec2",
            pascalCaseApi: "DescribeInstances",
            apiParams: {'InstanceIds': [instanceId]},
            selector: "$.Reservations[0].Instances[0].State.Name",
            desiredValues: ['running']
        });
    }
}
