/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum PaymentMethodAffirmTag {
    Affirm = "affirm",
}

export type PaymentMethodAffirmOutput = {
    dotTag: PaymentMethodAffirmTag;
};

export type PaymentMethodAffirm = {
    dotTag: PaymentMethodAffirmTag;
    /**
     * Return URL to return to after payment completion in Affirm.
     */
    returnUrl: string;
};

/** @internal */
export const PaymentMethodAffirmTag$ = z.nativeEnum(PaymentMethodAffirmTag);

/** @internal */
export namespace PaymentMethodAffirmOutput$ {
    export type Inbound = {
        ".tag": PaymentMethodAffirmTag;
    };

    export const inboundSchema: z.ZodType<PaymentMethodAffirmOutput, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": PaymentMethodAffirmTag$,
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
            };
        });

    export type Outbound = {
        ".tag": PaymentMethodAffirmTag;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodAffirmOutput> = z
        .object({
            dotTag: PaymentMethodAffirmTag$,
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
            };
        });
}

/** @internal */
export namespace PaymentMethodAffirm$ {
    export type Inbound = {
        ".tag": PaymentMethodAffirmTag;
        return_url: string;
    };

    export const inboundSchema: z.ZodType<PaymentMethodAffirm, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": PaymentMethodAffirmTag$,
            return_url: z.string(),
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                returnUrl: v.return_url,
            };
        });

    export type Outbound = {
        ".tag": PaymentMethodAffirmTag;
        return_url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodAffirm> = z
        .object({
            dotTag: PaymentMethodAffirmTag$,
            returnUrl: z.string(),
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                return_url: v.returnUrl,
            };
        });
}