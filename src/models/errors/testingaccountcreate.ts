/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  ErrorT,
  ErrorT$inboundSchema,
  ErrorT$Outbound,
  ErrorT$outboundSchema,
} from "./error.js";
import {
  FieldError,
  FieldError$inboundSchema,
  FieldError$Outbound,
  FieldError$outboundSchema,
} from "./fielderror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * An error has occurred, and further details are contained in the response
 */
export type TestingAccountCreateResponseBody = ErrorT | FieldError;

/** @internal */
export const TestingAccountCreateResponseBody$inboundSchema: z.ZodType<
  TestingAccountCreateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([ErrorT$inboundSchema, FieldError$inboundSchema]);

/** @internal */
export type TestingAccountCreateResponseBody$Outbound =
  | ErrorT$Outbound
  | FieldError$Outbound;

/** @internal */
export const TestingAccountCreateResponseBody$outboundSchema: z.ZodType<
  TestingAccountCreateResponseBody$Outbound,
  z.ZodTypeDef,
  TestingAccountCreateResponseBody
> = z.union([ErrorT$outboundSchema, FieldError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TestingAccountCreateResponseBody$ {
  /** @deprecated use `TestingAccountCreateResponseBody$inboundSchema` instead. */
  export const inboundSchema = TestingAccountCreateResponseBody$inboundSchema;
  /** @deprecated use `TestingAccountCreateResponseBody$outboundSchema` instead. */
  export const outboundSchema = TestingAccountCreateResponseBody$outboundSchema;
  /** @deprecated use `TestingAccountCreateResponseBody$Outbound` instead. */
  export type Outbound = TestingAccountCreateResponseBody$Outbound;
}

export function testingAccountCreateResponseBodyToJSON(
  testingAccountCreateResponseBody: TestingAccountCreateResponseBody,
): string {
  return JSON.stringify(
    TestingAccountCreateResponseBody$outboundSchema.parse(
      testingAccountCreateResponseBody,
    ),
  );
}

export function testingAccountCreateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<TestingAccountCreateResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TestingAccountCreateResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TestingAccountCreateResponseBody' from JSON`,
  );
}
