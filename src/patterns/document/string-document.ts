import * as fs from 'fs';
import { Construct } from 'constructs';
import { DataType, DocumentFormat, Input, SimulationProps, StringStep } from '../..';
import { AutomationDocument, AutomationDocumentProps } from '../../document/automation-document';
// eslint-disable-next-line
const yaml = require('js-yaml');

/**
 * This AutomationDocument supports declaring your document from an existing document (JSON/YAML String/File).
 * Importing an existing file allows for benefitting from the simulated execution.
 * The simulated execution will run locally in the same fashion that SSM Execution would run the document.
 * You can supply mocks to the simulator and validate the calls and the flow of the document without running via SSM execution.
 */
export class StringDocument extends AutomationDocument {

  /**
     * Create an AutomationDocument from an existing AutomationDocument yaml or json file.
     * Note: This function will deduce whether the file is written in yaml or json based on whether it has a .yaml or .yml extention.
     * You can use the returned AutomationDocument to run simulations as you would other documents created using this library.
     */
  public static fromFile(stack: Construct, id: string, documentFilePath: string, simulationProps: SimulationProps) {
    const contents = fs.readFileSync(documentFilePath, 'utf8');
    if (documentFilePath.endsWith('yaml') || documentFilePath.endsWith('yml')) {
      return StringDocument.fromYaml(stack, id, contents, simulationProps);
    } else {
      return StringDocument.fromJson(stack, id, contents, simulationProps);
    }
  }

  /**
     * Create an AutomationDocument from an existing yaml string.
     * You can use the returned AutomationDocument to run simulations as you would other documents created using this library.
     */
  public static fromYaml(stack: Construct, id: string, documentYaml: string, simulationProps: SimulationProps) {
    return new StringDocument(stack, id, { ...yaml.load(documentYaml), documentFormat: DocumentFormat.YAML }, simulationProps);
  }

  /**
     * Create an AutomationDocument from an existing json string.
     * You can use the returned AutomationDocument to run simulations as you would other documents created using this library.
     */
  public static fromJson(stack: Construct, id: string, documentJson: string, simulationProps: SimulationProps) {
    return new StringDocument(stack, id, { ...JSON.parse(documentJson), documentFormat: DocumentFormat.JSON }, simulationProps);
  }

  // This must be static because it is called prior to the super call in the constructor
  private static toDocProps(id: string, params: {[name: string]: any}): AutomationDocumentProps {
    return {
      documentName: id,
      docInputs: this.toDocInputs(params.parameters),
      ...params,
    };
  }

  private static toDocInputs(parameters: {[name: string]: any}): Input[] {
    return Object.entries(parameters).map(entry => this.toDocInput(entry[0], entry[1]));
  }

  private static toDocInput(inputName: string, inputData: {[name: string]: string}): Input {
    return {
      name: inputName,
      inputType: DataType.fromDataType(inputData.type).dataTypeEnum,
      defaultValue: inputData.default,
      ...inputData,
    };
  }

  private constructor(stack: Construct, id: string, params: {[name: string]: any}, simulationProps: SimulationProps) {
    const docProps = StringDocument.toDocProps(id, params);
    super(stack, id, docProps);
    const steps: {[name: string]: any}[] = params.mainSteps;
    steps.forEach(step => {
      StringStep.fromObject(this, step, simulationProps);
    });
  }

}
