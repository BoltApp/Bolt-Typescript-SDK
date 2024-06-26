/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Cart, Cart$ } from "./cart.js";
import * as z from "zod";

export type PaymentUpdateRequest = {
    cart?: Cart | undefined;
};

/** @internal */
export namespace PaymentUpdateRequest$ {
    export const inboundSchema: z.ZodType<PaymentUpdateRequest, z.ZodTypeDef, unknown> = z.object({
        cart: Cart$.inboundSchema.optional(),
    });

    export type Outbound = {
        cart?: Cart$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentUpdateRequest> = z.object(
        {
            cart: Cart$.outboundSchema.optional(),
        }
    );
}
