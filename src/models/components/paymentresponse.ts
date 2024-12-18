/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaymentResponseFinalized,
  PaymentResponseFinalized$inboundSchema,
  PaymentResponseFinalized$Outbound,
  PaymentResponseFinalized$outboundSchema,
  PaymentResponseFinalizedTag,
} from "./paymentresponsefinalized.js";
import {
  PaymentResponsePending,
  PaymentResponsePending$inboundSchema,
  PaymentResponsePending$Outbound,
  PaymentResponsePending$outboundSchema,
  PaymentResponsePendingTag,
} from "./paymentresponsepending.js";

export type PaymentResponse =
  | (PaymentResponseFinalized & {
    dotTag: PaymentResponseFinalizedTag.Finalized;
  })
  | (PaymentResponsePending & { dotTag: PaymentResponsePendingTag.Pending });

/** @internal */
export const PaymentResponse$inboundSchema: z.ZodType<
  PaymentResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  PaymentResponseFinalized$inboundSchema.and(
    z.object({ ".tag": z.literal(PaymentResponseFinalizedTag.Finalized) })
      .transform((v) => ({ dotTag: v[".tag"] })),
  ),
  PaymentResponsePending$inboundSchema.and(
    z.object({ ".tag": z.literal(PaymentResponsePendingTag.Pending) })
      .transform((v) => ({ dotTag: v[".tag"] })),
  ),
]);

/** @internal */
export type PaymentResponse$Outbound =
  | (PaymentResponseFinalized$Outbound & {
    ".tag": PaymentResponseFinalizedTag.Finalized;
  })
  | (PaymentResponsePending$Outbound & {
    ".tag": PaymentResponsePendingTag.Pending;
  });

/** @internal */
export const PaymentResponse$outboundSchema: z.ZodType<
  PaymentResponse$Outbound,
  z.ZodTypeDef,
  PaymentResponse
> = z.union([
  PaymentResponseFinalized$outboundSchema.and(
    z.object({ dotTag: z.literal(PaymentResponseFinalizedTag.Finalized) })
      .transform((v) => ({ ".tag": v.dotTag })),
  ),
  PaymentResponsePending$outboundSchema.and(
    z.object({ dotTag: z.literal(PaymentResponsePendingTag.Pending) })
      .transform((v) => ({ ".tag": v.dotTag })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentResponse$ {
  /** @deprecated use `PaymentResponse$inboundSchema` instead. */
  export const inboundSchema = PaymentResponse$inboundSchema;
  /** @deprecated use `PaymentResponse$outboundSchema` instead. */
  export const outboundSchema = PaymentResponse$outboundSchema;
  /** @deprecated use `PaymentResponse$Outbound` instead. */
  export type Outbound = PaymentResponse$Outbound;
}

export function paymentResponseToJSON(
  paymentResponse: PaymentResponse,
): string {
  return JSON.stringify(PaymentResponse$outboundSchema.parse(paymentResponse));
}

export function paymentResponseFromJSON(
  jsonString: string,
): SafeParseResult<PaymentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentResponse' from JSON`,
  );
}
