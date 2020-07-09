#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { TestActStack } from "../lib/test-act-stack";

const account = process.env.AWS_ACCOUNT_ID!;

const app = new cdk.App();
new TestActStack(app, "TestActStack", { env: { account } });
