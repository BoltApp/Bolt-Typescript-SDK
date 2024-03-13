/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    PaymentResponseFinalized,
    PaymentResponseFinalized$,
    PaymentResponseFinalizedTag,
} from "./paymentresponsefinalized";
import {
    PaymentResponsePending,
    PaymentResponsePending$,
    PaymentResponsePendingTag,
} from "./paymentresponsepending";
import * as z from "zod";

export type PaymentResponse =
    | (PaymentResponseFinalized & { dotTag: PaymentResponseFinalizedTag.Finalized })
    | (PaymentResponsePending & { dotTag: PaymentResponsePendingTag.Pending });

/** @internal */
export namespace PaymentResponse$ {
    export type Inbound =
        | (PaymentResponseFinalized$.Inbound & { ".tag": PaymentResponseFinalizedTag.Finalized })
        | (PaymentResponsePending$.Inbound & { ".tag": PaymentResponsePendingTag.Pending });

    export type Outbound =
        | (PaymentResponseFinalized$.Outbound & { ".tag": PaymentResponseFinalizedTag.Finalized })
        | (PaymentResponsePending$.Outbound & { ".tag": PaymentResponsePendingTag.Pending });
    export const inboundSchema: z.ZodType<PaymentResponse, z.ZodTypeDef, Inbound> = z.union([
        PaymentResponseFinalized$.inboundSchema.and(
            z
                .object({ ".tag": z.literal(PaymentResponseFinalizedTag.Finalized) })
                .transform((v) => ({ dotTag: v[".tag"] }))
        ),
        PaymentResponsePending$.inboundSchema.and(
            z
                .object({ ".tag": z.literal(PaymentResponsePendingTag.Pending) })
                .transform((v) => ({ dotTag: v[".tag"] }))
        ),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentResponse> = z.union([
        PaymentResponseFinalized$.outboundSchema.and(
            z
                .object({ dotTag: z.literal(PaymentResponseFinalizedTag.Finalized) })
                .transform((v) => ({ ".tag": v.dotTag }))
        ),
        PaymentResponsePending$.outboundSchema.and(
            z
                .object({ dotTag: z.literal(PaymentResponsePendingTag.Pending) })
                .transform((v) => ({ ".tag": v.dotTag }))
        ),
    ]);
}
