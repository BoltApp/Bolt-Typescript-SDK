/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AddressListing,
  AddressListing$inboundSchema,
  AddressListing$Outbound,
  AddressListing$outboundSchema,
} from "./addresslisting.js";
import {
  PaymentMethod,
  PaymentMethod$inboundSchema,
  PaymentMethod$Outbound,
  PaymentMethod$outboundSchema,
} from "./paymentmethod.js";
import {
  Profile,
  Profile$inboundSchema,
  Profile$Outbound,
  Profile$outboundSchema,
} from "./profile.js";

export type Account = {
  /**
   * A list of addresses associated with this account. These can be considered the "shipping addresses". The account's visible addresses are filtered according to the configured shipping destinations in your Bolt merchant dashboard. If no account addresses are available, use the billing address of the selected payment method.
   */
  addresses: Array<AddressListing>;
  /**
   * A list of payment methods associated with this account. The account's visible payment methods are filtered to include only cards that are chargeable.
   */
  paymentMethods: Array<PaymentMethod>;
  /**
   * An account's identifying information.
   */
  profile?: Profile | undefined;
};

/** @internal */
export const Account$inboundSchema: z.ZodType<Account, z.ZodTypeDef, unknown> =
  z.object({
    addresses: z.array(AddressListing$inboundSchema),
    payment_methods: z.array(PaymentMethod$inboundSchema),
    profile: Profile$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "payment_methods": "paymentMethods",
    });
  });

/** @internal */
export type Account$Outbound = {
  addresses: Array<AddressListing$Outbound>;
  payment_methods: Array<PaymentMethod$Outbound>;
  profile?: Profile$Outbound | undefined;
};

/** @internal */
export const Account$outboundSchema: z.ZodType<
  Account$Outbound,
  z.ZodTypeDef,
  Account
> = z.object({
  addresses: z.array(AddressListing$outboundSchema),
  paymentMethods: z.array(PaymentMethod$outboundSchema),
  profile: Profile$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    paymentMethods: "payment_methods",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Account$ {
  /** @deprecated use `Account$inboundSchema` instead. */
  export const inboundSchema = Account$inboundSchema;
  /** @deprecated use `Account$outboundSchema` instead. */
  export const outboundSchema = Account$outboundSchema;
  /** @deprecated use `Account$Outbound` instead. */
  export type Outbound = Account$Outbound;
}

export function accountToJSON(account: Account): string {
  return JSON.stringify(Account$outboundSchema.parse(account));
}

export function accountFromJSON(
  jsonString: string,
): SafeParseResult<Account, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Account$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Account' from JSON`,
  );
}
