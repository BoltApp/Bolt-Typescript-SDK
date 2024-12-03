/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountGetRequest = {
  /**
   * The publicly shareable identifier used to identify your Bolt merchant division.
   */
  xPublishableKey: string;
  /**
   * A unique identifier for a shopper's device, generated by Bolt. The value is retrieved with `Bolt.state.merchantClientId` in your frontend context, per-shopper. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics.
   */
  xMerchantClientId?: string | undefined;
};

export type AccountGetResponse = {
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
   * The account details were successfully retrieved
   */
  account?: components.Account | undefined;
};

/** @internal */
export const AccountGetRequest$inboundSchema: z.ZodType<
  AccountGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Publishable-Key": z.string(),
  "X-Merchant-Client-Id": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "X-Publishable-Key": "xPublishableKey",
    "X-Merchant-Client-Id": "xMerchantClientId",
  });
});

/** @internal */
export type AccountGetRequest$Outbound = {
  "X-Publishable-Key": string;
  "X-Merchant-Client-Id"?: string | undefined;
};

/** @internal */
export const AccountGetRequest$outboundSchema: z.ZodType<
  AccountGetRequest$Outbound,
  z.ZodTypeDef,
  AccountGetRequest
> = z.object({
  xPublishableKey: z.string(),
  xMerchantClientId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    xPublishableKey: "X-Publishable-Key",
    xMerchantClientId: "X-Merchant-Client-Id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountGetRequest$ {
  /** @deprecated use `AccountGetRequest$inboundSchema` instead. */
  export const inboundSchema = AccountGetRequest$inboundSchema;
  /** @deprecated use `AccountGetRequest$outboundSchema` instead. */
  export const outboundSchema = AccountGetRequest$outboundSchema;
  /** @deprecated use `AccountGetRequest$Outbound` instead. */
  export type Outbound = AccountGetRequest$Outbound;
}

export function accountGetRequestToJSON(
  accountGetRequest: AccountGetRequest,
): string {
  return JSON.stringify(
    AccountGetRequest$outboundSchema.parse(accountGetRequest),
  );
}

export function accountGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountGetRequest' from JSON`,
  );
}

/** @internal */
export const AccountGetResponse$inboundSchema: z.ZodType<
  AccountGetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  account: components.Account$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AccountGetResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  account?: components.Account$Outbound | undefined;
};

/** @internal */
export const AccountGetResponse$outboundSchema: z.ZodType<
  AccountGetResponse$Outbound,
  z.ZodTypeDef,
  AccountGetResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  account: components.Account$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountGetResponse$ {
  /** @deprecated use `AccountGetResponse$inboundSchema` instead. */
  export const inboundSchema = AccountGetResponse$inboundSchema;
  /** @deprecated use `AccountGetResponse$outboundSchema` instead. */
  export const outboundSchema = AccountGetResponse$outboundSchema;
  /** @deprecated use `AccountGetResponse$Outbound` instead. */
  export type Outbound = AccountGetResponse$Outbound;
}

export function accountGetResponseToJSON(
  accountGetResponse: AccountGetResponse,
): string {
  return JSON.stringify(
    AccountGetResponse$outboundSchema.parse(accountGetResponse),
  );
}

export function accountGetResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountGetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountGetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountGetResponse' from JSON`,
  );
}
