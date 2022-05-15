const execSync = require('child_process').execSync;
var os = require('os')

/**
 * IEnvironment is an abstraction for EC2 instances.
 * The implementations of this interface provides customers with
 * alternatives to test their commands rather than a real instance.
 */
export interface IEnvironment {
    run(command: string): string
}

/**
 * Provides a Docker client against which customers can execute their commands.
 * This utility will not download docker images, rather will create containers from images provided.
 * You can use this rather than running your run commands against a real EC2 machine.
 */
export class DockerEnvironment implements IEnvironment {

    readonly containerId: string;

    private constructor(containerId: string) {
        this.containerId = containerId;
    }

    /**
     * Use an existing container against which to run commands using the run function.
     */
    public static fromContainer(containerId: string): DockerEnvironment {
        return new DockerEnvironment(containerId);
    }

    /**
     * Create a container from the provided image.
     * The container created will be used by this instance to run commands using the run function.
     */
    public static fromImage(image: string): DockerEnvironment {
        return new DockerEnvironment(DockerEnvironment.execute(`docker run -di ${image}`));
    }

    /**
     * Runs commands against the docker specified during construction.
     * This function runs synchronously.
     * @returns the response from the docker as a string.
     */
    run(command: string): string {
        return DockerEnvironment.execute(`docker exec -i ${this.containerId} ${command}`);
    }

    /**
     * Force removes the container associated with this instance.
     */
    removeContainer(): void {
        execSync(`docker rm -f ${this.containerId}`);
    }

    private static execute(command: string): string {
        return DockerEnvironment.removeTrailingNewLine(execSync(command).toString());
    }

    private static removeTrailingNewLine(line: string) {
        return line.endsWith(os.EOL) ? line.slice(0, -1) : line;
    }

}

/**
 * Environment that simply saves commands into a previousCommands variable.
 * This is useful if you want to unit test the commands that would be sent to a real environment.
 */
export class MockEnvironment implements IEnvironment {

    previousCommands: string[] = [];
    run(command: string): string {
        this.previousCommands.push(command);
        return "";
    }
}

/**
 * Environment that simply logs the commands that it receives and displays them on the console.
 */
export class LoggingEnvironment implements IEnvironment {
    run(command: string): string {
        console.log(command);
        return "";
    }
}