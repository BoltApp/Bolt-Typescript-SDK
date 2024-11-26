/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Cart,
  Cart$inboundSchema,
  Cart$Outbound,
  Cart$outboundSchema,
} from "./cart.js";
import {
  PaymentMethodExtended,
  PaymentMethodExtended$inboundSchema,
  PaymentMethodExtended$Outbound,
  PaymentMethodExtended$outboundSchema,
} from "./paymentmethodextended.js";

export type PaymentInitializeRequest = {
  cart: Cart;
  paymentMethod: PaymentMethodExtended;
};

/** @internal */
export const PaymentInitializeRequest$inboundSchema: z.ZodType<
  PaymentInitializeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cart: Cart$inboundSchema,
  payment_method: PaymentMethodExtended$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "payment_method": "paymentMethod",
  });
});

/** @internal */
export type PaymentInitializeRequest$Outbound = {
  cart: Cart$Outbound;
  payment_method: PaymentMethodExtended$Outbound;
};

/** @internal */
export const PaymentInitializeRequest$outboundSchema: z.ZodType<
  PaymentInitializeRequest$Outbound,
  z.ZodTypeDef,
  PaymentInitializeRequest
> = z.object({
  cart: Cart$outboundSchema,
  paymentMethod: PaymentMethodExtended$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    paymentMethod: "payment_method",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentInitializeRequest$ {
  /** @deprecated use `PaymentInitializeRequest$inboundSchema` instead. */
  export const inboundSchema = PaymentInitializeRequest$inboundSchema;
  /** @deprecated use `PaymentInitializeRequest$outboundSchema` instead. */
  export const outboundSchema = PaymentInitializeRequest$outboundSchema;
  /** @deprecated use `PaymentInitializeRequest$Outbound` instead. */
  export type Outbound = PaymentInitializeRequest$Outbound;
}

export function paymentInitializeRequestToJSON(
  paymentInitializeRequest: PaymentInitializeRequest,
): string {
  return JSON.stringify(
    PaymentInitializeRequest$outboundSchema.parse(paymentInitializeRequest),
  );
}

export function paymentInitializeRequestFromJSON(
  jsonString: string,
): SafeParseResult<PaymentInitializeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentInitializeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentInitializeRequest' from JSON`,
  );
}
