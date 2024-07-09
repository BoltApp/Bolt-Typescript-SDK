/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Transaction,
    Transaction$inboundSchema,
    Transaction$Outbound,
    Transaction$outboundSchema,
} from "./transaction.js";
import * as z from "zod";

export type OrderResponse = {
    id: string;
    transaction: Transaction;
};

/** @internal */
export const OrderResponse$inboundSchema: z.ZodType<OrderResponse, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
        transaction: Transaction$inboundSchema,
    });

/** @internal */
export type OrderResponse$Outbound = {
    id: string;
    transaction: Transaction$Outbound;
};

/** @internal */
export const OrderResponse$outboundSchema: z.ZodType<
    OrderResponse$Outbound,
    z.ZodTypeDef,
    OrderResponse
> = z.object({
    id: z.string(),
    transaction: Transaction$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderResponse$ {
    /** @deprecated use `OrderResponse$inboundSchema` instead. */
    export const inboundSchema = OrderResponse$inboundSchema;
    /** @deprecated use `OrderResponse$outboundSchema` instead. */
    export const outboundSchema = OrderResponse$outboundSchema;
    /** @deprecated use `OrderResponse$Outbound` instead. */
    export type Outbound = OrderResponse$Outbound;
}
