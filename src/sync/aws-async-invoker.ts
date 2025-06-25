import { AsyncRunner } from './async-runner';
// eslint-disable-next-line @typescript-eslint/no-require-imports

/**
 * Invokes AWS asynchronously.
 * This is used with SynchronousPromise to wait for the AWS call to complete synchronously.
 */
export class AwsAsyncInvoker implements AsyncRunner {

  /**
     * Expects a list containing 3 values:
     * 1. AWS Service (such as ec2)
     * 2. AWS API in lowerCamelCase
     * 3. The parameters to send to the specified API.
     */
  async runAsync(args: any[]): Promise<any> {
    // Reflectively invokes the aws service (args[0]) with the aws api (args[1]) with the aws params (args[2])
    const serviceName = args[0];
    const apiName = args[1];
    const params = args[2];

    try {
      // Dynamically import the appropriate AWS SDK v3 client
      const { default: clientModule } = await this.importClientModule(serviceName);
      
      // Create the client
      const ClientClass = this.getClientClass(clientModule, serviceName);
      const client = new ClientClass();
      
      // Get the command class for the API
      const CommandClass = this.getCommandClass(clientModule, apiName);
      
      // Create the command with the parameters
      const command = new CommandClass(params);
      
      try {
          // Send the command to the client
          const data = await client.send(command);
          return { "status": "SUCCESS", "Payload": data };
      } catch (err) {
          return { "status": "FAILURE", "Payload": err };
      }
    } catch (err) {
        return { "status": "FAILURE", "Payload": err };
    }

  }

  /**
   * Dynamically imports the AWS SDK v3 client module for the specified service.
   */
  private async importClientModule(serviceName: string): Promise<any> {
      // Convert service name to the format used by AWS SDK v3
      const formattedServiceName = this.formatServiceName(serviceName);
      
      try {
          // Import the client module
          return await import(`@aws-sdk/client-${formattedServiceName}`);
      } catch (err) {
          throw new Error(`Failed to import AWS SDK v3 client for service: ${serviceName}. Error: ${err}`);
      }
  }

  /**
   * Gets the client class from the imported module.
   */
  private getClientClass(clientModule: any, serviceName: string): any {
      // Convert service name to PascalCase for the client class name
      const clientClassName = this.toPascalCase(serviceName) + 'Client';
      
      if (!clientModule[clientClassName]) {
          throw new Error(`Client class not found for service: ${serviceName}`);
      }
      
      return clientModule[clientClassName];
  }

  /**
   * Gets the command class for the specified API.
   */
  private getCommandClass(clientModule: any, apiName: string): any {
      // Convert API name to PascalCase and append "Command" for the command class name
      const commandClassName = this.toPascalCase(apiName) + 'Command';
      
      if (!clientModule[commandClassName]) {
          throw new Error(`Command class not found for API: ${apiName}`);
      }
      
      return clientModule[commandClassName];
  }

  /**
   * Formats the service name to match the AWS SDK v3 package naming convention.
   */
  private formatServiceName(serviceName: string): string {
      // Special cases for service names that don't follow the standard pattern
      const specialCases: Record<string, string> = {
          'cloudformation': 'cloudformation',
          'cloudwatch': 'cloudwatch',
          'dynamodb': 'dynamodb',
          'ec2': 'ec2',
          'iam': 'iam',
          'lambda': 'lambda',
          's3': 's3',
          'sns': 'sns',
          'sqs': 'sqs',
          'ssm': 'ssm'
      };
      
      return specialCases[serviceName.toLowerCase()] || serviceName.toLowerCase();
  }

  /**
   * Converts a string to PascalCase.
   */
  private toPascalCase(str: string): string {
      // Handle special cases for AWS service names
      const specialCases: Record<string, string> = {
          'ec2': 'EC2',
          's3': 'S3',
          'sns': 'SNS',
          'sqs': 'SQS',
          'ssm': 'SSM',
          'iam': 'IAM'
      };
      
      if (specialCases[str.toLowerCase()]) {
          return specialCases[str.toLowerCase()];
      }
      
      // Convert to PascalCase
      return str
          .split(/[-_\s]/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('');
  }
}
