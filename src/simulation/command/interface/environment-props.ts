import { IEnvironment } from '../../../interface/environment';

export interface EnvironmentProps {

  /**
   * (Optional) Specify here the environment in which to execute the scripts.
   * Use the DockerEnvironment to execute the commands inside the docker.
   * You can alternatively use the LoggingEnvironment which simply logs the commands
   * or MockEnvironment which saves them for validation.
   * @default LoggingEnvironment
   */
  readonly environment: IEnvironment;
}
