/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaymentMethodAffirmOutput,
  PaymentMethodAffirmOutput$inboundSchema,
  PaymentMethodAffirmOutput$Outbound,
  PaymentMethodAffirmOutput$outboundSchema,
  PaymentMethodAffirmTag,
} from "./paymentmethodaffirmoutput.js";
import {
  PaymentMethodAfterpayOutput,
  PaymentMethodAfterpayOutput$inboundSchema,
  PaymentMethodAfterpayOutput$Outbound,
  PaymentMethodAfterpayOutput$outboundSchema,
  PaymentMethodAfterpayTag,
} from "./paymentmethodafterpayoutput.js";
import {
  DotTag,
  PaymentMethodCreditCard,
  PaymentMethodCreditCard$inboundSchema,
  PaymentMethodCreditCard$Outbound,
  PaymentMethodCreditCard$outboundSchema,
} from "./paymentmethodcreditcard.js";
import {
  PaymentMethodKlarnaAccountOutput,
  PaymentMethodKlarnaAccountOutput$inboundSchema,
  PaymentMethodKlarnaAccountOutput$Outbound,
  PaymentMethodKlarnaAccountOutput$outboundSchema,
  PaymentMethodKlarnaAccountTag,
} from "./paymentmethodklarnaaccountoutput.js";
import {
  PaymentMethodKlarnaOutput,
  PaymentMethodKlarnaOutput$inboundSchema,
  PaymentMethodKlarnaOutput$Outbound,
  PaymentMethodKlarnaOutput$outboundSchema,
  PaymentMethodKlarnaTag,
} from "./paymentmethodklarnaoutput.js";
import {
  PaymentMethodKlarnaPaynowOutput,
  PaymentMethodKlarnaPaynowOutput$inboundSchema,
  PaymentMethodKlarnaPaynowOutput$Outbound,
  PaymentMethodKlarnaPaynowOutput$outboundSchema,
  PaymentMethodKlarnaPaynowTag,
} from "./paymentmethodklarnapaynowoutput.js";
import {
  PaymentMethodPaypalOutput,
  PaymentMethodPaypalOutput$inboundSchema,
  PaymentMethodPaypalOutput$Outbound,
  PaymentMethodPaypalOutput$outboundSchema,
  PaymentMethodPaypalTag,
} from "./paymentmethodpaypaloutput.js";

export type PaymentMethod =
  | (PaymentMethodPaypalOutput & { dotTag: PaymentMethodPaypalTag.Paypal })
  | (PaymentMethodAffirmOutput & { dotTag: PaymentMethodAffirmTag.Affirm })
  | (PaymentMethodAfterpayOutput & {
    dotTag: PaymentMethodAfterpayTag.Afterpay;
  })
  | (PaymentMethodKlarnaOutput & { dotTag: PaymentMethodKlarnaTag.Klarna })
  | (PaymentMethodKlarnaAccountOutput & {
    dotTag: PaymentMethodKlarnaAccountTag.KlarnaAccount;
  })
  | (PaymentMethodKlarnaPaynowOutput & {
    dotTag: PaymentMethodKlarnaPaynowTag.KlarnaPaynow;
  })
  | (PaymentMethodCreditCard & { dotTag: DotTag.CreditCard });

/** @internal */
export const PaymentMethod$inboundSchema: z.ZodType<
  PaymentMethod,
  z.ZodTypeDef,
  unknown
> = z.union([
  PaymentMethodPaypalOutput$inboundSchema.and(
    z.object({ ".tag": z.literal(PaymentMethodPaypalTag.Paypal) }).transform((
      v,
    ) => ({ dotTag: v[".tag"] })),
  ),
  PaymentMethodAffirmOutput$inboundSchema.and(
    z.object({ ".tag": z.literal(PaymentMethodAffirmTag.Affirm) }).transform((
      v,
    ) => ({ dotTag: v[".tag"] })),
  ),
  PaymentMethodAfterpayOutput$inboundSchema.and(
    z.object({ ".tag": z.literal(PaymentMethodAfterpayTag.Afterpay) })
      .transform((v) => ({ dotTag: v[".tag"] })),
  ),
  PaymentMethodKlarnaOutput$inboundSchema.and(
    z.object({ ".tag": z.literal(PaymentMethodKlarnaTag.Klarna) }).transform((
      v,
    ) => ({ dotTag: v[".tag"] })),
  ),
  PaymentMethodKlarnaAccountOutput$inboundSchema.and(
    z.object({ ".tag": z.literal(PaymentMethodKlarnaAccountTag.KlarnaAccount) })
      .transform((v) => ({ dotTag: v[".tag"] })),
  ),
  PaymentMethodKlarnaPaynowOutput$inboundSchema.and(
    z.object({ ".tag": z.literal(PaymentMethodKlarnaPaynowTag.KlarnaPaynow) })
      .transform((v) => ({ dotTag: v[".tag"] })),
  ),
  PaymentMethodCreditCard$inboundSchema.and(
    z.object({ ".tag": z.literal(DotTag.CreditCard) }).transform((v) => ({
      dotTag: v[".tag"],
    })),
  ),
]);

/** @internal */
export type PaymentMethod$Outbound =
  | (PaymentMethodPaypalOutput$Outbound & {
    ".tag": PaymentMethodPaypalTag.Paypal;
  })
  | (PaymentMethodAffirmOutput$Outbound & {
    ".tag": PaymentMethodAffirmTag.Affirm;
  })
  | (PaymentMethodAfterpayOutput$Outbound & {
    ".tag": PaymentMethodAfterpayTag.Afterpay;
  })
  | (PaymentMethodKlarnaOutput$Outbound & {
    ".tag": PaymentMethodKlarnaTag.Klarna;
  })
  | (PaymentMethodKlarnaAccountOutput$Outbound & {
    ".tag": PaymentMethodKlarnaAccountTag.KlarnaAccount;
  })
  | (PaymentMethodKlarnaPaynowOutput$Outbound & {
    ".tag": PaymentMethodKlarnaPaynowTag.KlarnaPaynow;
  })
  | (PaymentMethodCreditCard$Outbound & { ".tag": DotTag.CreditCard });

/** @internal */
export const PaymentMethod$outboundSchema: z.ZodType<
  PaymentMethod$Outbound,
  z.ZodTypeDef,
  PaymentMethod
> = z.union([
  PaymentMethodPaypalOutput$outboundSchema.and(
    z.object({ dotTag: z.literal(PaymentMethodPaypalTag.Paypal) }).transform((
      v,
    ) => ({ ".tag": v.dotTag })),
  ),
  PaymentMethodAffirmOutput$outboundSchema.and(
    z.object({ dotTag: z.literal(PaymentMethodAffirmTag.Affirm) }).transform((
      v,
    ) => ({ ".tag": v.dotTag })),
  ),
  PaymentMethodAfterpayOutput$outboundSchema.and(
    z.object({ dotTag: z.literal(PaymentMethodAfterpayTag.Afterpay) })
      .transform((v) => ({ ".tag": v.dotTag })),
  ),
  PaymentMethodKlarnaOutput$outboundSchema.and(
    z.object({ dotTag: z.literal(PaymentMethodKlarnaTag.Klarna) }).transform((
      v,
    ) => ({ ".tag": v.dotTag })),
  ),
  PaymentMethodKlarnaAccountOutput$outboundSchema.and(
    z.object({ dotTag: z.literal(PaymentMethodKlarnaAccountTag.KlarnaAccount) })
      .transform((v) => ({ ".tag": v.dotTag })),
  ),
  PaymentMethodKlarnaPaynowOutput$outboundSchema.and(
    z.object({ dotTag: z.literal(PaymentMethodKlarnaPaynowTag.KlarnaPaynow) })
      .transform((v) => ({ ".tag": v.dotTag })),
  ),
  PaymentMethodCreditCard$outboundSchema.and(
    z.object({ dotTag: z.literal(DotTag.CreditCard) }).transform((v) => ({
      ".tag": v.dotTag,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethod$ {
  /** @deprecated use `PaymentMethod$inboundSchema` instead. */
  export const inboundSchema = PaymentMethod$inboundSchema;
  /** @deprecated use `PaymentMethod$outboundSchema` instead. */
  export const outboundSchema = PaymentMethod$outboundSchema;
  /** @deprecated use `PaymentMethod$Outbound` instead. */
  export type Outbound = PaymentMethod$Outbound;
}

export function paymentMethodToJSON(paymentMethod: PaymentMethod): string {
  return JSON.stringify(PaymentMethod$outboundSchema.parse(paymentMethod));
}

export function paymentMethodFromJSON(
  jsonString: string,
): SafeParseResult<PaymentMethod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentMethod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentMethod' from JSON`,
  );
}
