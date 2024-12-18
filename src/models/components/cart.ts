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
import {
  CartDiscount,
  CartDiscount$inboundSchema,
  CartDiscount$Outbound,
  CartDiscount$outboundSchema,
} from "./cartdiscount.js";
import {
  CartItem,
  CartItem$inboundSchema,
  CartItem$Outbound,
  CartItem$outboundSchema,
} from "./cartitem.js";
import {
  CartShipment,
  CartShipment$inboundSchema,
  CartShipment$Outbound,
  CartShipment$outboundSchema,
} from "./cartshipment.js";

export type Cart = {
  /**
   * This value is used by Bolt as an external reference to a given order. This reference must be unique per successful transaction.
   */
  orderReference: string;
  /**
   * Used optionally to pass additional information like order numbers or other IDs as needed.
   */
  orderDescription?: string | undefined;
  /**
   * A shopper-facing identifier corresponding to the order reference associated with this transaction.
   */
  displayId?: string | undefined;
  shipments?: Array<CartShipment> | undefined;
  discounts?: Array<CartDiscount> | undefined;
  items?: Array<CartItem> | undefined;
  /**
   * A monetary amount, i.e. a base unit amount and a supported currency.
   */
  total: Amount;
  /**
   * A monetary amount, i.e. a base unit amount and a supported currency.
   */
  tax: Amount;
};

/** @internal */
export const Cart$inboundSchema: z.ZodType<Cart, z.ZodTypeDef, unknown> = z
  .object({
    order_reference: z.string(),
    order_description: z.string().optional(),
    display_id: z.string().optional(),
    shipments: z.array(CartShipment$inboundSchema).optional(),
    discounts: z.array(CartDiscount$inboundSchema).optional(),
    items: z.array(CartItem$inboundSchema).optional(),
    total: Amount$inboundSchema,
    tax: Amount$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "order_reference": "orderReference",
      "order_description": "orderDescription",
      "display_id": "displayId",
    });
  });

/** @internal */
export type Cart$Outbound = {
  order_reference: string;
  order_description?: string | undefined;
  display_id?: string | undefined;
  shipments?: Array<CartShipment$Outbound> | undefined;
  discounts?: Array<CartDiscount$Outbound> | undefined;
  items?: Array<CartItem$Outbound> | undefined;
  total: Amount$Outbound;
  tax: Amount$Outbound;
};

/** @internal */
export const Cart$outboundSchema: z.ZodType<Cart$Outbound, z.ZodTypeDef, Cart> =
  z.object({
    orderReference: z.string(),
    orderDescription: z.string().optional(),
    displayId: z.string().optional(),
    shipments: z.array(CartShipment$outboundSchema).optional(),
    discounts: z.array(CartDiscount$outboundSchema).optional(),
    items: z.array(CartItem$outboundSchema).optional(),
    total: Amount$outboundSchema,
    tax: Amount$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      orderReference: "order_reference",
      orderDescription: "order_description",
      displayId: "display_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Cart$ {
  /** @deprecated use `Cart$inboundSchema` instead. */
  export const inboundSchema = Cart$inboundSchema;
  /** @deprecated use `Cart$outboundSchema` instead. */
  export const outboundSchema = Cart$outboundSchema;
  /** @deprecated use `Cart$Outbound` instead. */
  export type Outbound = Cart$Outbound;
}

export function cartToJSON(cart: Cart): string {
  return JSON.stringify(Cart$outboundSchema.parse(cart));
}

export function cartFromJSON(
  jsonString: string,
): SafeParseResult<Cart, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Cart$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Cart' from JSON`,
  );
}
