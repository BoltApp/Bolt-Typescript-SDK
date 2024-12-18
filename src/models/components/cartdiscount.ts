/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Amount,
  Amount$inboundSchema,
  Amount$Outbound,
  Amount$outboundSchema,
} from "./amount.js";

export type CartDiscount = {
  /**
   * A monetary amount, i.e. a base unit amount and a supported currency.
   */
  amount: Amount;
  /**
   * Discount code.
   */
  code?: string | undefined;
  /**
   * Used to provide a link to additional details, such as a landing page, associated with the discount offering.
   */
  detailsUrl?: string | undefined;
};

/** @internal */
export const CartDiscount$inboundSchema: z.ZodType<
  CartDiscount,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: Amount$inboundSchema,
  code: z.string().optional(),
  details_url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "details_url": "detailsUrl",
  });
});

/** @internal */
export type CartDiscount$Outbound = {
  amount: Amount$Outbound;
  code?: string | undefined;
  details_url?: string | undefined;
};

/** @internal */
export const CartDiscount$outboundSchema: z.ZodType<
  CartDiscount$Outbound,
  z.ZodTypeDef,
  CartDiscount
> = z.object({
  amount: Amount$outboundSchema,
  code: z.string().optional(),
  detailsUrl: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    detailsUrl: "details_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CartDiscount$ {
  /** @deprecated use `CartDiscount$inboundSchema` instead. */
  export const inboundSchema = CartDiscount$inboundSchema;
  /** @deprecated use `CartDiscount$outboundSchema` instead. */
  export const outboundSchema = CartDiscount$outboundSchema;
  /** @deprecated use `CartDiscount$Outbound` instead. */
  export type Outbound = CartDiscount$Outbound;
}

export function cartDiscountToJSON(cartDiscount: CartDiscount): string {
  return JSON.stringify(CartDiscount$outboundSchema.parse(cartDiscount));
}

export function cartDiscountFromJSON(
  jsonString: string,
): SafeParseResult<CartDiscount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CartDiscount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CartDiscount' from JSON`,
  );
}
