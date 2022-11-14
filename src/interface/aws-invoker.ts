import { fromJS, Map } from 'immutable';
import { AwsService } from '../domain/aws-service';
import { SynchronousPromise } from '../sync/synchronous-promise';

export interface Invocation {
  /**
   * (Required) AWS service to invoke
   * @example AwsService.EC2
   */
  readonly service: AwsService;

  /**
   * (Required) AWS api to invoke; should be referenced using lowerCamelCase.
   * @example describeInstance
   */
  readonly awsApi: string;

  /**
   * (Required )AWS params
   * @example { 'Filters': [{'Name': 'instance-id', 'Values': ['{{ InstanceId }}'] }] }
   */
  readonly awsParams: { [name: string]: any };
}

/**
 * Aws invoker interface.
 * This can be used to provide a hook for AWS invocation of steps so as to mock AWS behavior for simulation runs.
 */
export interface IAwsInvoker {

  /**
   * Invoke AWS with the provided invocation request.
   * @see Invocation
   * @returns the AWS response object
   */
  invoke(invocation: Invocation): any;

}

/**
 * Implementation of IAwsInvoker that executes the AWS api for real.
 * If using this implementation, be sure that AWS credentials are available to the execution.
 */
export class ReflectiveAwsInvoker implements IAwsInvoker {

  invoke(invocation: Invocation): any {
    const wrappedAwsResponse = new SynchronousPromise().wait(
      '../../lib/sync/aws-async-invoker',
      'AwsAsyncInvoker',
      [invocation.service.javaScriptName, invocation.awsApi, invocation.awsParams]);
    if (wrappedAwsResponse == undefined) {
      throw new Error(`Exception occurred calling AWS API with ${JSON.stringify(invocation)}. Please ensure that your service name is correct.`);
    }
    if (wrappedAwsResponse.status == 'FAILURE') {
      console.error(`Exception occurred calling AWS API with ${JSON.stringify(invocation)}: ${wrappedAwsResponse.Payload}`);
      throw new Error(wrappedAwsResponse.Payload);
    } else {
      return wrappedAwsResponse.Payload;
    }
  }

}

/**
 * Mock implementation of IAwsInvoker.
 * This class can be reused for testing in exported JSII languages.
 */
export class MockAwsInvoker implements IAwsInvoker {

  /**
   * All of the invocations that have been submitted to this invoker until present.
   */
  readonly previousInvocations: Invocation[] = [];
  private readonly mockReturn: any[] = [];
  private lastReturn: any;
  // @ts-ignore
  private mockResponses = new Map({});


  /**
   * Saves the invocation to be retrieved using getInvocations().
   * @returns the next result as set by the setReturn function
   */
  invoke(invocation: Invocation): any {
    const immutableInvocation = {
      service: invocation.service.namespace,
      api: invocation.awsApi,
      params: invocation.awsParams,
    };
    this.previousInvocations.push(invocation);
    if (this.mockResponses.has(fromJS(immutableInvocation))) {
      return this.mockResponses.get(fromJS(immutableInvocation));
    }
    return this.mockReturn.shift() || this.lastReturn;
  }

  /**
   * Set the next return value. This function can be chained to return subsequent return values.
   * Values are read in order they were inserted.
   * The last value is used as a default if there are no other values retrieved.
   * In that way this function behaves the same way as Mockito .thenReturn(val).
   */
  nextReturn(awsResult: any): MockAwsInvoker {
    this.mockReturn.push(awsResult);
    this.lastReturn = awsResult;
    return this;
  }

  /**
   * Allows developers to mock out responses from the AwsInvoker depending on the input that it receives.
   * @param when defines the invocation to match and return the then
   * @param then is the value that should be returned if the above when Invocation is matched
   */
  whenThen(when: Invocation, then: {[name: string]: any}) {
    const immutableWhen = {
      service: when.service.namespace,
      api: when.awsApi,
      params: when.awsParams,
    };
    this.mockResponses = this.mockResponses.set(fromJS(immutableWhen), then);
    console.log(this.mockResponses);
  }

}
