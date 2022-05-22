{
  "description": "MyAutomationDocument",
  "schemaVersion": "0.3",
  "parameters": {},
  "mainSteps": [
    {
      "name": "MySleep",
      "action": "aws:sleep",
      "inputs": {
        "Duration": "PT3S"
      },
      "maxAttempts": 3
    },
    {
      "description": "asdf",
      "name": "GetBucketId",
      "action": "aws:executeAwsApi",
      "inputs": {
        "Service": "S3",
        "Api": "listBuckets"
      },
      "outputs": [
        {
          "Name": "ID",
          "Selector": "$.Owner.ID",
          "Type": "String"
        }
      ]
    }
  ]
}
