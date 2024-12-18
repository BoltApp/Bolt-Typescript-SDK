/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export enum PaymentMethodPaypalTag {
  Paypal = "paypal",
}

export type PaymentMethodPaypalOutput = {
  dotTag: PaymentMethodPaypalTag;
};

export type PaymentMethodPaypal = {
  dotTag: PaymentMethodPaypalTag;
  /**
   * Redirect URL for successful PayPal transaction.
   */
  successUrl: string;
  /**
   * Redirect URL for canceled PayPal transaction.
   */
  cancelUrl: string;
};

/** @internal */
export const PaymentMethodPaypalTag$inboundSchema: z.ZodNativeEnum<
  typeof PaymentMethodPaypalTag
> = z.nativeEnum(PaymentMethodPaypalTag);

/** @internal */
export const PaymentMethodPaypalTag$outboundSchema: z.ZodNativeEnum<
  typeof PaymentMethodPaypalTag
> = PaymentMethodPaypalTag$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethodPaypalTag$ {
  /** @deprecated use `PaymentMethodPaypalTag$inboundSchema` instead. */
  export const inboundSchema = PaymentMethodPaypalTag$inboundSchema;
  /** @deprecated use `PaymentMethodPaypalTag$outboundSchema` instead. */
  export const outboundSchema = PaymentMethodPaypalTag$outboundSchema;
}

/** @internal */
export const PaymentMethodPaypalOutput$inboundSchema: z.ZodType<
  PaymentMethodPaypalOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  ".tag": PaymentMethodPaypalTag$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    ".tag": "dotTag",
  });
});

/** @internal */
export type PaymentMethodPaypalOutput$Outbound = {
  ".tag": string;
};

/** @internal */
export const PaymentMethodPaypalOutput$outboundSchema: z.ZodType<
  PaymentMethodPaypalOutput$Outbound,
  z.ZodTypeDef,
  PaymentMethodPaypalOutput
> = z.object({
  dotTag: PaymentMethodPaypalTag$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    dotTag: ".tag",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethodPaypalOutput$ {
  /** @deprecated use `PaymentMethodPaypalOutput$inboundSchema` instead. */
  export const inboundSchema = PaymentMethodPaypalOutput$inboundSchema;
  /** @deprecated use `PaymentMethodPaypalOutput$outboundSchema` instead. */
  export const outboundSchema = PaymentMethodPaypalOutput$outboundSchema;
  /** @deprecated use `PaymentMethodPaypalOutput$Outbound` instead. */
  export type Outbound = PaymentMethodPaypalOutput$Outbound;
}

export function paymentMethodPaypalOutputToJSON(
  paymentMethodPaypalOutput: PaymentMethodPaypalOutput,
): string {
  return JSON.stringify(
    PaymentMethodPaypalOutput$outboundSchema.parse(paymentMethodPaypalOutput),
  );
}

export function paymentMethodPaypalOutputFromJSON(
  jsonString: string,
): SafeParseResult<PaymentMethodPaypalOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentMethodPaypalOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentMethodPaypalOutput' from JSON`,
  );
}

/** @internal */
export const PaymentMethodPaypal$inboundSchema: z.ZodType<
  PaymentMethodPaypal,
  z.ZodTypeDef,
  unknown
> = z.object({
  ".tag": PaymentMethodPaypalTag$inboundSchema,
  success_url: z.string(),
  cancel_url: z.string(),
}).transform((v) => {
  return remap$(v, {
    ".tag": "dotTag",
    "success_url": "successUrl",
    "cancel_url": "cancelUrl",
  });
});

/** @internal */
export type PaymentMethodPaypal$Outbound = {
  ".tag": string;
  success_url: string;
  cancel_url: string;
};

/** @internal */
export const PaymentMethodPaypal$outboundSchema: z.ZodType<
  PaymentMethodPaypal$Outbound,
  z.ZodTypeDef,
  PaymentMethodPaypal
> = z.object({
  dotTag: PaymentMethodPaypalTag$outboundSchema,
  successUrl: z.string(),
  cancelUrl: z.string(),
}).transform((v) => {
  return remap$(v, {
    dotTag: ".tag",
    successUrl: "success_url",
    cancelUrl: "cancel_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethodPaypal$ {
  /** @deprecated use `PaymentMethodPaypal$inboundSchema` instead. */
  export const inboundSchema = PaymentMethodPaypal$inboundSchema;
  /** @deprecated use `PaymentMethodPaypal$outboundSchema` instead. */
  export const outboundSchema = PaymentMethodPaypal$outboundSchema;
  /** @deprecated use `PaymentMethodPaypal$Outbound` instead. */
  export type Outbound = PaymentMethodPaypal$Outbound;
}

export function paymentMethodPaypalToJSON(
  paymentMethodPaypal: PaymentMethodPaypal,
): string {
  return JSON.stringify(
    PaymentMethodPaypal$outboundSchema.parse(paymentMethodPaypal),
  );
}

export function paymentMethodPaypalFromJSON(
  jsonString: string,
): SafeParseResult<PaymentMethodPaypal, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentMethodPaypal$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentMethodPaypal' from JSON`,
  );
}
