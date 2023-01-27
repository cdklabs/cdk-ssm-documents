from aws_cdk import (
    Stack,
    aws_sqs as _sqs,
    aws_sns as _sns,
    aws_sns_subscriptions as _sns_subscriptions,
)
from constructs import Construct
# add cdklabs.cdk-ssm-documents to requirements.txt file then run `pip install -r requirements.txt`
from cdklabs.cdk_ssm_documents import (
    AutomationDocument,
    AwsApiStep,
    Input,
    Output,
    DataTypeEnum,
    ExecuteScriptStep,
    ScriptCode,
    StringVariable,
    ScriptLanguage,
    PythonVersion,
    AwsService
)
class SsmCustomDocStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        queue = _sqs.Queue(
            scope=self,
            id="MyQueue"
        )
        topic = _sns.Topic(
            scope=self,
            id="SNSTopicForSSMAutomation"
        )

        topic.add_subscription(
            _sns_subscriptions.SqsSubscription(
                queue=queue,
                raw_message_delivery=True
            )
        )
        automation_doc = AutomationDocument(
            self,
            id="MyDoc",
            doc_inputs=[
                Input.of_type_string(
                    name='Someone',
                    allowed_pattern='[a-zA-Z]+'
                ),
                Input.of_type_string(
                    name='SnsTopic'
                )
            ]
        )

        greeting = ExecuteScriptStep(
            stage=self,
            id='PrependWithGreeting',
            language=ScriptLanguage.python(
                version=PythonVersion.VERSION_3_8,
                handler_name='my_func'
            ),
            code=ScriptCode.inline(
                'def my_func(args, context):\n' +
                '   return {"Greeting": "Hello " + args["someone"]}\n' +
                '\n'),
            input_payload={
                "someone": StringVariable.of('Someone')
            },
            outputs=[
                Output(
                    output_type=DataTypeEnum.STRING,
                    name='Greeting',
                    selector='$.Payload.Greeting'
                )
            ]
        )
        automation_doc.add_step(component=greeting)
        automation_doc.add_step(
            component=AwsApiStep(
                self,
                id="PublishToSns",
                outputs=[],
                service=AwsService.SNS,
                pascal_case_api='Publish',
                api_params={
                    "TargetArn": StringVariable(reference="SnsTopic"),
                    "Message": greeting.variables().get('Greeting') 
                }
            )
        )