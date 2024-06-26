/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Transaction, Transaction$ } from "./transaction.js";
import * as z from "zod";

export type OrderResponse = {
    id: string;
    transaction: Transaction;
};

/** @internal */
export namespace OrderResponse$ {
    export const inboundSchema: z.ZodType<OrderResponse, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        transaction: Transaction$.inboundSchema,
    });

    export type Outbound = {
        id: string;
        transaction: Transaction$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrderResponse> = z.object({
        id: z.string(),
        transaction: Transaction$.outboundSchema,
    });
}
