/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CartError, CartError$ } from "./carterror";
import { CreditCardError, CreditCardError$ } from "./creditcarderror";
import { ErrorT, ErrorT$ } from "./error";
import { FieldError, FieldError$ } from "./fielderror";
import * as z from "zod";

/**
 * The payment operation cannot complete
 */
export type PaymentsInitializeResponseBody = ErrorT | FieldError | CartError | CreditCardError;

/** @internal */
export namespace PaymentsInitializeResponseBody$ {
    export type Inbound =
        | ErrorT$.Inbound
        | FieldError$.Inbound
        | CartError$.Inbound
        | CreditCardError$.Inbound;

    export type Outbound =
        | ErrorT$.Outbound
        | FieldError$.Outbound
        | CartError$.Outbound
        | CreditCardError$.Outbound;
    export const inboundSchema: z.ZodType<PaymentsInitializeResponseBody, z.ZodTypeDef, Inbound> =
        z.union([
            ErrorT$.inboundSchema,
            FieldError$.inboundSchema,
            CartError$.inboundSchema,
            CreditCardError$.inboundSchema,
        ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentsInitializeResponseBody> =
        z.union([
            ErrorT$.outboundSchema,
            FieldError$.outboundSchema,
            CartError$.outboundSchema,
            CreditCardError$.outboundSchema,
        ]);
}
