import { Construct } from 'constructs';
import {
  AutomationStep,
  DataTypeEnum,
  ExecuteScriptStep,
  PythonVersion,
  ScriptCode,
  ScriptLanguage,
  StringVariable,
} from '../..';
import { AutomationDocument, AutomationDocumentProps } from '../../document/automation-document';

export class TimedDocument extends AutomationDocument {

  constructor(stage: Construct, id: string, props: AutomationDocumentProps) {
    super(stage, id, props);
  }

  public collectedSteps(): AutomationStep[] {
    const middleSteps = super.collectedSteps();
    // If this is called a second time during synthesis then the newly created objects are inserted into the tree.
    // So first ensure that these aren't already added
    if (middleSteps.find(s => s.name == 'RecordStartTime')) {
      return middleSteps;
    }
    const recordStartTime = new ExecuteScriptStep(this, 'RecordStartTime', {
      code: ScriptCode.inline('from datetime import datetime, timezone\n\n' +
                'def script_handler(params: dict, context):\n' +
                '    return datetime.now(timezone.utc).isoformat()\n\n'),
      language: ScriptLanguage.python(PythonVersion.VERSION_3_11, 'script_handler'),
      outputs: [{ outputType: DataTypeEnum.STRING, name: 'StartTime', selector: '$.Payload' }],
      inputPayload: {},
    });
    const outputRecoveryTime = new ExecuteScriptStep(this, 'OutputRecoveryTime', {
      code: ScriptCode.inline('from datetime import datetime, timezone\n' +
                'from dateutil import parser\n\n' +
                'def script_handler(params: dict, context):\n' +
                '    return (datetime.now(timezone.utc) - parser.parse(params[\'startTime\'])).seconds\n\n'),
      language: ScriptLanguage.python(PythonVersion.VERSION_3_11, 'script_handler'),
      outputs: [{ outputType: DataTypeEnum.INTEGER, name: 'RecoveryTime', selector: '$.Payload' }],
      inputPayload: { startTime: StringVariable.of('RecordStartTime.StartTime') },
    });
    this.builder.steps.unshift(recordStartTime);
    this.builder.steps.push(outputRecoveryTime);
    return this.builder.steps;
  }

}
