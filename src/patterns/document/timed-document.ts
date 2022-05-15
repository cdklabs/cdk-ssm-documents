import { AutomationDocument, AutomationDocumentProps } from "../../document/automation-document"
import { Construct } from "constructs";
import { AutomationStep, DataTypeEnum, ExecuteScriptStep, ScriptLanguage } from "../..";

export class TimedDocument extends AutomationDocument {

    constructor(stage: Construct, id: string, props: AutomationDocumentProps) {
        super(stage, id, props);
    }

    protected collectedSteps(): AutomationStep[] {
        const middleSteps = super.collectedSteps();
        // If this is called a second time during synthesis then the newly created objects are inserted into the tree.
        // So first ensure that these aren't already added
        if (middleSteps.find(s => s.name == "RecordStartTime")) {
            return middleSteps;
        }
        const recordStartTime = new ExecuteScriptStep(this, "RecordStartTime", {
            inlineCode:
                `from datetime import datetime, timezone\n\n` +
                `def script_handler(params: dict, context):\n` +
                `    return datetime.now(timezone.utc).isoformat()\n\n`,
            language: ScriptLanguage.PYTHON,
            outputs: [{outputType: DataTypeEnum.STRING, name: "StartTime", selector: "$.Payload"}],
            inputs: []});
        const outputRecoveryTime = new ExecuteScriptStep(this, "OutputRecoveryTime", {
            inlineCode:
                `from datetime import datetime, timezone\n` +
                `from dateutil import parser\n\n` +
                `def script_handler(params: dict, context):\n` +
                `    return (datetime.now(timezone.utc) - parser.parse(params['RecordStartTime.StartTime'])).seconds\n\n`,
            language: ScriptLanguage.PYTHON,
            outputs: [{outputType: DataTypeEnum.INTEGER, name: "RecoveryTime", selector: "$.Payload"}],
            inputs: ['RecordStartTime.StartTime']});
        middleSteps[0].node.addDependency(recordStartTime);
        this.stepCollector.automationSteps.unshift(recordStartTime);
        outputRecoveryTime.node.addDependency(middleSteps[middleSteps.length-1]);
        this.stepCollector.automationSteps.push(outputRecoveryTime);
        return this.stepCollector.automationSteps;
    }

}
