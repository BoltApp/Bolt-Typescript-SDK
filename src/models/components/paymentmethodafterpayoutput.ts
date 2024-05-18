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
export namespace PaymentMethodAfterpayTag$ {
    export const inboundSchema = z.nativeEnum(PaymentMethodAfterpayTag);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace PaymentMethodAfterpayOutput$ {
    export const inboundSchema: z.ZodType<PaymentMethodAfterpayOutput, z.ZodTypeDef, unknown> = z
        .object({
            ".tag": PaymentMethodAfterpayTag$.inboundSchema,
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
            };
        });

    export type Outbound = {
        ".tag": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodAfterpayOutput> = z
        .object({
            dotTag: PaymentMethodAfterpayTag$.outboundSchema,
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
            };
        });
}

/** @internal */
export namespace PaymentMethodAfterpay$ {
    export const inboundSchema: z.ZodType<PaymentMethodAfterpay, z.ZodTypeDef, unknown> = z
        .object({
            ".tag": PaymentMethodAfterpayTag$.inboundSchema,
            return_url: z.string(),
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                returnUrl: v.return_url,
            };
        });

    export type Outbound = {
        ".tag": string;
        return_url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodAfterpay> = z
        .object({
            dotTag: PaymentMethodAfterpayTag$.outboundSchema,
            returnUrl: z.string(),
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                return_url: v.returnUrl,
            };
        });
}
