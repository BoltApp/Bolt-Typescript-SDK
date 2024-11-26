/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TestingCreditCardGetSecurity = {
  apiKey: string;
};

/**
 * The expected authorization result when using the generated token for a payment.
 */
export enum Type {
  Approve = "approve",
  Decline = "decline",
}

export type TestingCreditCardGetRequestBody = {
  /**
   * The expected authorization result when using the generated token for a payment.
   */
  type: Type;
};

export type TestingCreditCardGetResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * Successfully generated test credit card details
   */
  testCreditCard?: components.TestCreditCard | undefined;
};

/** @internal */
export const TestingCreditCardGetSecurity$inboundSchema: z.ZodType<
  TestingCreditCardGetSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  "api-key": z.string(),
}).transform((v) => {
  return remap$(v, {
    "api-key": "apiKey",
  });
});

/** @internal */
export type TestingCreditCardGetSecurity$Outbound = {
  "api-key": string;
};

/** @internal */
export const TestingCreditCardGetSecurity$outboundSchema: z.ZodType<
  TestingCreditCardGetSecurity$Outbound,
  z.ZodTypeDef,
  TestingCreditCardGetSecurity
> = z.object({
  apiKey: z.string(),
}).transform((v) => {
  return remap$(v, {
    apiKey: "api-key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TestingCreditCardGetSecurity$ {
  /** @deprecated use `TestingCreditCardGetSecurity$inboundSchema` instead. */
  export const inboundSchema = TestingCreditCardGetSecurity$inboundSchema;
  /** @deprecated use `TestingCreditCardGetSecurity$outboundSchema` instead. */
  export const outboundSchema = TestingCreditCardGetSecurity$outboundSchema;
  /** @deprecated use `TestingCreditCardGetSecurity$Outbound` instead. */
  export type Outbound = TestingCreditCardGetSecurity$Outbound;
}

export function testingCreditCardGetSecurityToJSON(
  testingCreditCardGetSecurity: TestingCreditCardGetSecurity,
): string {
  return JSON.stringify(
    TestingCreditCardGetSecurity$outboundSchema.parse(
      testingCreditCardGetSecurity,
    ),
  );
}

export function testingCreditCardGetSecurityFromJSON(
  jsonString: string,
): SafeParseResult<TestingCreditCardGetSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TestingCreditCardGetSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TestingCreditCardGetSecurity' from JSON`,
  );
}

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const TestingCreditCardGetRequestBody$inboundSchema: z.ZodType<
  TestingCreditCardGetRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: Type$inboundSchema,
});

/** @internal */
export type TestingCreditCardGetRequestBody$Outbound = {
  type: string;
};

/** @internal */
export const TestingCreditCardGetRequestBody$outboundSchema: z.ZodType<
  TestingCreditCardGetRequestBody$Outbound,
  z.ZodTypeDef,
  TestingCreditCardGetRequestBody
> = z.object({
  type: Type$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TestingCreditCardGetRequestBody$ {
  /** @deprecated use `TestingCreditCardGetRequestBody$inboundSchema` instead. */
  export const inboundSchema = TestingCreditCardGetRequestBody$inboundSchema;
  /** @deprecated use `TestingCreditCardGetRequestBody$outboundSchema` instead. */
  export const outboundSchema = TestingCreditCardGetRequestBody$outboundSchema;
  /** @deprecated use `TestingCreditCardGetRequestBody$Outbound` instead. */
  export type Outbound = TestingCreditCardGetRequestBody$Outbound;
}

export function testingCreditCardGetRequestBodyToJSON(
  testingCreditCardGetRequestBody: TestingCreditCardGetRequestBody,
): string {
  return JSON.stringify(
    TestingCreditCardGetRequestBody$outboundSchema.parse(
      testingCreditCardGetRequestBody,
    ),
  );
}

export function testingCreditCardGetRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<TestingCreditCardGetRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TestingCreditCardGetRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TestingCreditCardGetRequestBody' from JSON`,
  );
}

/** @internal */
export const TestingCreditCardGetResponse$inboundSchema: z.ZodType<
  TestingCreditCardGetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "test-credit-card": components.TestCreditCard$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "test-credit-card": "testCreditCard",
  });
});

/** @internal */
export type TestingCreditCardGetResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "test-credit-card"?: components.TestCreditCard$Outbound | undefined;
};

/** @internal */
export const TestingCreditCardGetResponse$outboundSchema: z.ZodType<
  TestingCreditCardGetResponse$Outbound,
  z.ZodTypeDef,
  TestingCreditCardGetResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  testCreditCard: components.TestCreditCard$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    testCreditCard: "test-credit-card",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TestingCreditCardGetResponse$ {
  /** @deprecated use `TestingCreditCardGetResponse$inboundSchema` instead. */
  export const inboundSchema = TestingCreditCardGetResponse$inboundSchema;
  /** @deprecated use `TestingCreditCardGetResponse$outboundSchema` instead. */
  export const outboundSchema = TestingCreditCardGetResponse$outboundSchema;
  /** @deprecated use `TestingCreditCardGetResponse$Outbound` instead. */
  export type Outbound = TestingCreditCardGetResponse$Outbound;
}

export function testingCreditCardGetResponseToJSON(
  testingCreditCardGetResponse: TestingCreditCardGetResponse,
): string {
  return JSON.stringify(
    TestingCreditCardGetResponse$outboundSchema.parse(
      testingCreditCardGetResponse,
    ),
  );
}

export function testingCreditCardGetResponseFromJSON(
  jsonString: string,
): SafeParseResult<TestingCreditCardGetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TestingCreditCardGetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TestingCreditCardGetResponse' from JSON`,
  );
}
