/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum PaymentMethodPaypalTag {
    Paypal = "paypal",
}

export type PaymentMethodPaypalOutput = {
    dotTag: PaymentMethodPaypalTag;
};

export type PaymentMethodPaypal = {
    dotTag: PaymentMethodPaypalTag;
    /**
     * Redirect URL for successful PayPal transaction.
     */
    successUrl: string;
    /**
     * Redirect URL for canceled PayPal transaction.
     */
    cancelUrl: string;
};

/** @internal */
export const PaymentMethodPaypalTag$ = z.nativeEnum(PaymentMethodPaypalTag);

/** @internal */
export namespace PaymentMethodPaypalOutput$ {
    export type Inbound = {
        ".tag": PaymentMethodPaypalTag;
    };

    export const inboundSchema: z.ZodType<PaymentMethodPaypalOutput, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": PaymentMethodPaypalTag$,
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
            };
        });

    export type Outbound = {
        ".tag": PaymentMethodPaypalTag;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodPaypalOutput> = z
        .object({
            dotTag: PaymentMethodPaypalTag$,
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
            };
        });
}

/** @internal */
export namespace PaymentMethodPaypal$ {
    export type Inbound = {
        ".tag": PaymentMethodPaypalTag;
        success_url: string;
        cancel_url: string;
    };

    export const inboundSchema: z.ZodType<PaymentMethodPaypal, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": PaymentMethodPaypalTag$,
            success_url: z.string(),
            cancel_url: z.string(),
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                successUrl: v.success_url,
                cancelUrl: v.cancel_url,
            };
        });

    export type Outbound = {
        ".tag": PaymentMethodPaypalTag;
        success_url: string;
        cancel_url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodPaypal> = z
        .object({
            dotTag: PaymentMethodPaypalTag$,
            successUrl: z.string(),
            cancelUrl: z.string(),
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                success_url: v.successUrl,
                cancel_url: v.cancelUrl,
            };
        });
}
