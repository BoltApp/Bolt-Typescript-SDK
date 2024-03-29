/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum PaymentMethodKlarnaTag {
    Klarna = "klarna",
}

export type PaymentMethodKlarnaOutput = {
    dotTag: PaymentMethodKlarnaTag;
};

export type PaymentMethodKlarna = {
    dotTag: PaymentMethodKlarnaTag;
    /**
     * Return URL to return to after payment completion in Klarna.
     */
    returnUrl: string;
};

/** @internal */
export const PaymentMethodKlarnaTag$ = z.nativeEnum(PaymentMethodKlarnaTag);

/** @internal */
export namespace PaymentMethodKlarnaOutput$ {
    export type Inbound = {
        ".tag": PaymentMethodKlarnaTag;
    };

    export const inboundSchema: z.ZodType<PaymentMethodKlarnaOutput, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": PaymentMethodKlarnaTag$,
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
            };
        });

    export type Outbound = {
        ".tag": PaymentMethodKlarnaTag;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodKlarnaOutput> = z
        .object({
            dotTag: PaymentMethodKlarnaTag$,
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
            };
        });
}

/** @internal */
export namespace PaymentMethodKlarna$ {
    export type Inbound = {
        ".tag": PaymentMethodKlarnaTag;
        return_url: string;
    };

    export const inboundSchema: z.ZodType<PaymentMethodKlarna, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": PaymentMethodKlarnaTag$,
            return_url: z.string(),
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                returnUrl: v.return_url,
            };
        });

    export type Outbound = {
        ".tag": PaymentMethodKlarnaTag;
        return_url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodKlarna> = z
        .object({
            dotTag: PaymentMethodKlarnaTag$,
            returnUrl: z.string(),
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                return_url: v.returnUrl,
            };
        });
}
