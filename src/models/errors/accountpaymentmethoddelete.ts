/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorT, ErrorT$ } from "./error";
import { FieldError, FieldError$ } from "./fielderror";
import * as z from "zod";

/**
 * An error has occurred, and further details are contained in the response
 */
export type AccountPaymentMethodDeleteResponseBody = ErrorT | FieldError;

/** @internal */
export namespace AccountPaymentMethodDeleteResponseBody$ {
    export type Inbound = ErrorT$.Inbound | FieldError$.Inbound;

    export type Outbound = ErrorT$.Outbound | FieldError$.Outbound;
    export const inboundSchema: z.ZodType<
        AccountPaymentMethodDeleteResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z.union([ErrorT$.inboundSchema, FieldError$.inboundSchema]);
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AccountPaymentMethodDeleteResponseBody
    > = z.union([ErrorT$.outboundSchema, FieldError$.outboundSchema]);
}
