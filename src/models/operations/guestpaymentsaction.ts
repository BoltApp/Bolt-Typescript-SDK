/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GuestPaymentsActionSecurity = {
  apiKey: string;
};

export type GuestPaymentsActionRequest = {
  /**
   * The ID of the guest payment to operate on
   */
  id: string;
  /**
   * The publicly shareable identifier used to identify your Bolt merchant division.
   */
  xPublishableKey: string;
  /**
   * A unique identifier for a shopper's device, generated by Bolt. The value is retrieved with `Bolt.state.merchantClientId` in your frontend context, per-shopper. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics.
   */
  xMerchantClientId?: string | undefined;
  paymentActionRequest: components.PaymentActionRequest;
};

export type GuestPaymentsActionResponse = {
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
   * The action was successfully applied to the pending guest payment
   */
  paymentResponse?: components.PaymentResponse | undefined;
};

/** @internal */
export const GuestPaymentsActionSecurity$inboundSchema: z.ZodType<
  GuestPaymentsActionSecurity,
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
export type GuestPaymentsActionSecurity$Outbound = {
  "api-key": string;
};

/** @internal */
export const GuestPaymentsActionSecurity$outboundSchema: z.ZodType<
  GuestPaymentsActionSecurity$Outbound,
  z.ZodTypeDef,
  GuestPaymentsActionSecurity
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
export namespace GuestPaymentsActionSecurity$ {
  /** @deprecated use `GuestPaymentsActionSecurity$inboundSchema` instead. */
  export const inboundSchema = GuestPaymentsActionSecurity$inboundSchema;
  /** @deprecated use `GuestPaymentsActionSecurity$outboundSchema` instead. */
  export const outboundSchema = GuestPaymentsActionSecurity$outboundSchema;
  /** @deprecated use `GuestPaymentsActionSecurity$Outbound` instead. */
  export type Outbound = GuestPaymentsActionSecurity$Outbound;
}

export function guestPaymentsActionSecurityToJSON(
  guestPaymentsActionSecurity: GuestPaymentsActionSecurity,
): string {
  return JSON.stringify(
    GuestPaymentsActionSecurity$outboundSchema.parse(
      guestPaymentsActionSecurity,
    ),
  );
}

export function guestPaymentsActionSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GuestPaymentsActionSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GuestPaymentsActionSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GuestPaymentsActionSecurity' from JSON`,
  );
}

/** @internal */
export const GuestPaymentsActionRequest$inboundSchema: z.ZodType<
  GuestPaymentsActionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  "X-Publishable-Key": z.string(),
  "X-Merchant-Client-Id": z.string().optional(),
  "payment-action-request": components.PaymentActionRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "X-Publishable-Key": "xPublishableKey",
    "X-Merchant-Client-Id": "xMerchantClientId",
    "payment-action-request": "paymentActionRequest",
  });
});

/** @internal */
export type GuestPaymentsActionRequest$Outbound = {
  id: string;
  "X-Publishable-Key": string;
  "X-Merchant-Client-Id"?: string | undefined;
  "payment-action-request": components.PaymentActionRequest$Outbound;
};

/** @internal */
export const GuestPaymentsActionRequest$outboundSchema: z.ZodType<
  GuestPaymentsActionRequest$Outbound,
  z.ZodTypeDef,
  GuestPaymentsActionRequest
> = z.object({
  id: z.string(),
  xPublishableKey: z.string(),
  xMerchantClientId: z.string().optional(),
  paymentActionRequest: components.PaymentActionRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xPublishableKey: "X-Publishable-Key",
    xMerchantClientId: "X-Merchant-Client-Id",
    paymentActionRequest: "payment-action-request",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GuestPaymentsActionRequest$ {
  /** @deprecated use `GuestPaymentsActionRequest$inboundSchema` instead. */
  export const inboundSchema = GuestPaymentsActionRequest$inboundSchema;
  /** @deprecated use `GuestPaymentsActionRequest$outboundSchema` instead. */
  export const outboundSchema = GuestPaymentsActionRequest$outboundSchema;
  /** @deprecated use `GuestPaymentsActionRequest$Outbound` instead. */
  export type Outbound = GuestPaymentsActionRequest$Outbound;
}

export function guestPaymentsActionRequestToJSON(
  guestPaymentsActionRequest: GuestPaymentsActionRequest,
): string {
  return JSON.stringify(
    GuestPaymentsActionRequest$outboundSchema.parse(guestPaymentsActionRequest),
  );
}

export function guestPaymentsActionRequestFromJSON(
  jsonString: string,
): SafeParseResult<GuestPaymentsActionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GuestPaymentsActionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GuestPaymentsActionRequest' from JSON`,
  );
}

/** @internal */
export const GuestPaymentsActionResponse$inboundSchema: z.ZodType<
  GuestPaymentsActionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "payment-response": components.PaymentResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "payment-response": "paymentResponse",
  });
});

/** @internal */
export type GuestPaymentsActionResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "payment-response"?: components.PaymentResponse$Outbound | undefined;
};

/** @internal */
export const GuestPaymentsActionResponse$outboundSchema: z.ZodType<
  GuestPaymentsActionResponse$Outbound,
  z.ZodTypeDef,
  GuestPaymentsActionResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  paymentResponse: components.PaymentResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    paymentResponse: "payment-response",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GuestPaymentsActionResponse$ {
  /** @deprecated use `GuestPaymentsActionResponse$inboundSchema` instead. */
  export const inboundSchema = GuestPaymentsActionResponse$inboundSchema;
  /** @deprecated use `GuestPaymentsActionResponse$outboundSchema` instead. */
  export const outboundSchema = GuestPaymentsActionResponse$outboundSchema;
  /** @deprecated use `GuestPaymentsActionResponse$Outbound` instead. */
  export type Outbound = GuestPaymentsActionResponse$Outbound;
}

export function guestPaymentsActionResponseToJSON(
  guestPaymentsActionResponse: GuestPaymentsActionResponse,
): string {
  return JSON.stringify(
    GuestPaymentsActionResponse$outboundSchema.parse(
      guestPaymentsActionResponse,
    ),
  );
}

export function guestPaymentsActionResponseFromJSON(
  jsonString: string,
): SafeParseResult<GuestPaymentsActionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GuestPaymentsActionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GuestPaymentsActionResponse' from JSON`,
  );
}
