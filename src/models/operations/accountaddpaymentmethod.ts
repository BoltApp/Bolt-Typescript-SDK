/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountAddPaymentMethodRequest = {
  /**
   * The publicly shareable identifier used to identify your Bolt merchant division.
   */
  xPublishableKey: string;
  /**
   * A unique identifier for a shopper's device, generated by Bolt. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics.
   */
  xMerchantClientId: string;
  paymentMethod: components.PaymentMethodInput;
};

export type AccountAddPaymentMethodResponse = {
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
   * The payment method was successfully added
   */
  paymentMethod?: components.PaymentMethod | undefined;
};

/** @internal */
export const AccountAddPaymentMethodRequest$inboundSchema: z.ZodType<
  AccountAddPaymentMethodRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Publishable-Key": z.string(),
  "X-Merchant-Client-Id": z.string(),
  "payment-method": components.PaymentMethodInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "X-Publishable-Key": "xPublishableKey",
    "X-Merchant-Client-Id": "xMerchantClientId",
    "payment-method": "paymentMethod",
  });
});

/** @internal */
export type AccountAddPaymentMethodRequest$Outbound = {
  "X-Publishable-Key": string;
  "X-Merchant-Client-Id": string;
  "payment-method": components.PaymentMethodInput$Outbound;
};

/** @internal */
export const AccountAddPaymentMethodRequest$outboundSchema: z.ZodType<
  AccountAddPaymentMethodRequest$Outbound,
  z.ZodTypeDef,
  AccountAddPaymentMethodRequest
> = z.object({
  xPublishableKey: z.string(),
  xMerchantClientId: z.string(),
  paymentMethod: components.PaymentMethodInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xPublishableKey: "X-Publishable-Key",
    xMerchantClientId: "X-Merchant-Client-Id",
    paymentMethod: "payment-method",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddPaymentMethodRequest$ {
  /** @deprecated use `AccountAddPaymentMethodRequest$inboundSchema` instead. */
  export const inboundSchema = AccountAddPaymentMethodRequest$inboundSchema;
  /** @deprecated use `AccountAddPaymentMethodRequest$outboundSchema` instead. */
  export const outboundSchema = AccountAddPaymentMethodRequest$outboundSchema;
  /** @deprecated use `AccountAddPaymentMethodRequest$Outbound` instead. */
  export type Outbound = AccountAddPaymentMethodRequest$Outbound;
}

export function accountAddPaymentMethodRequestToJSON(
  accountAddPaymentMethodRequest: AccountAddPaymentMethodRequest,
): string {
  return JSON.stringify(
    AccountAddPaymentMethodRequest$outboundSchema.parse(
      accountAddPaymentMethodRequest,
    ),
  );
}

export function accountAddPaymentMethodRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountAddPaymentMethodRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountAddPaymentMethodRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountAddPaymentMethodRequest' from JSON`,
  );
}

/** @internal */
export const AccountAddPaymentMethodResponse$inboundSchema: z.ZodType<
  AccountAddPaymentMethodResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "payment-method": components.PaymentMethod$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "payment-method": "paymentMethod",
  });
});

/** @internal */
export type AccountAddPaymentMethodResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "payment-method"?: components.PaymentMethod$Outbound | undefined;
};

/** @internal */
export const AccountAddPaymentMethodResponse$outboundSchema: z.ZodType<
  AccountAddPaymentMethodResponse$Outbound,
  z.ZodTypeDef,
  AccountAddPaymentMethodResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  paymentMethod: components.PaymentMethod$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    paymentMethod: "payment-method",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddPaymentMethodResponse$ {
  /** @deprecated use `AccountAddPaymentMethodResponse$inboundSchema` instead. */
  export const inboundSchema = AccountAddPaymentMethodResponse$inboundSchema;
  /** @deprecated use `AccountAddPaymentMethodResponse$outboundSchema` instead. */
  export const outboundSchema = AccountAddPaymentMethodResponse$outboundSchema;
  /** @deprecated use `AccountAddPaymentMethodResponse$Outbound` instead. */
  export type Outbound = AccountAddPaymentMethodResponse$Outbound;
}

export function accountAddPaymentMethodResponseToJSON(
  accountAddPaymentMethodResponse: AccountAddPaymentMethodResponse,
): string {
  return JSON.stringify(
    AccountAddPaymentMethodResponse$outboundSchema.parse(
      accountAddPaymentMethodResponse,
    ),
  );
}

export function accountAddPaymentMethodResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountAddPaymentMethodResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountAddPaymentMethodResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountAddPaymentMethodResponse' from JSON`,
  );
}
