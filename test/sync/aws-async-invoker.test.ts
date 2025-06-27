import { AwsAsyncInvoker } from '../../src/sync/aws-async-invoker'

async function testAwsAsyncInvoker() {
  const invoker = new AwsAsyncInvoker();
  console.log("Starting AWS Async Invoker Tests");

  const tests = [
    { service: 's3', action: 'listBuckets', params: {} },
    { service: 'ec2', action: 'describeInstances', params: {} },
    { service: 'lambda', action: 'listFunctions', params: {} },
    { service: 'cloudformation', action: 'listStacks', params: {} },
    { service: 'cloudwatch', action: 'listMetrics', params: {} },
    { service: 'iam', action: 'listUsers', params: {} },
    { service: 'sns', action: 'listTopics', params: {} },
    { service: 'sqs', action: 'listQueues', params: {} },
    { service: 'ssm', action: 'describeParameters', params: {} }
  ];

  for (const test of tests) {
    console.log(`\nTesting ${test.service.toUpperCase()} ${test.action}:`);
    try {
      const result = await invoker.runAsync([test.service, test.action, test.params]);
      console.log(result);
    } catch (error) {
      console.error(`Error testing ${test.service} ${test.action}:`, error);
    }
  }
}

testAwsAsyncInvoker().catch(console.error);
