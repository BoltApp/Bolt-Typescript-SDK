/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum PaymentMethodAfterpayTag {
    Afterpay = "afterpay",
}

export type PaymentMethodAfterpayOutput = {
    dotTag: PaymentMethodAfterpayTag;
};

export type PaymentMethodAfterpay = {
    dotTag: PaymentMethodAfterpayTag;
    /**
     * Return URL to return to after payment completion in Afterpay.
     */
    returnUrl: string;
};

/** @internal */
export const PaymentMethodAfterpayTag$ = z.nativeEnum(PaymentMethodAfterpayTag);

/** @internal */
export namespace PaymentMethodAfterpayOutput$ {
    export type Inbound = {
        ".tag": PaymentMethodAfterpayTag;
    };

    export const inboundSchema: z.ZodType<PaymentMethodAfterpayOutput, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": PaymentMethodAfterpayTag$,
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
            };
        });

    export type Outbound = {
        ".tag": PaymentMethodAfterpayTag;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodAfterpayOutput> = z
        .object({
            dotTag: PaymentMethodAfterpayTag$,
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
            };
        });
}

/** @internal */
export namespace PaymentMethodAfterpay$ {
    export type Inbound = {
        ".tag": PaymentMethodAfterpayTag;
        return_url: string;
    };

    export const inboundSchema: z.ZodType<PaymentMethodAfterpay, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": PaymentMethodAfterpayTag$,
            return_url: z.string(),
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                returnUrl: v.return_url,
            };
        });

    export type Outbound = {
        ".tag": PaymentMethodAfterpayTag;
        return_url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodAfterpay> = z
        .object({
            dotTag: PaymentMethodAfterpayTag$,
            returnUrl: z.string(),
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                return_url: v.returnUrl,
            };
        });
}
