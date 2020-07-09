import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import * as TestAct from "../lib/test-act-stack";

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new TestAct.TestActStack(app, "MyTestStack");
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {
          Bucket83908E77: {
            Type: "AWS::S3::Bucket",
            UpdateReplacePolicy: "Retain",
            DeletionPolicy: "Retain",
          },
        },
      },
      MatchStyle.EXACT
    )
  );
});
