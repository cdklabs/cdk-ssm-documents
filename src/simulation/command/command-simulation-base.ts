
export abstract class CommandSimulationBase {

  abstract executeStep(inputs: Record<string, any>): void ;

}
