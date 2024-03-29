/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum PaymentMethodKlarnaAccountTag {
    KlarnaAccount = "klarna_account",
}

export type PaymentMethodKlarnaAccountOutput = {
    dotTag: PaymentMethodKlarnaAccountTag;
};

export type PaymentMethodKlarnaAccount = {
    dotTag: PaymentMethodKlarnaAccountTag;
    /**
     * Return URL to return to after payment completion in Klarna.
     */
    returnUrl: string;
};

/** @internal */
export const PaymentMethodKlarnaAccountTag$ = z.nativeEnum(PaymentMethodKlarnaAccountTag);

/** @internal */
export namespace PaymentMethodKlarnaAccountOutput$ {
    export type Inbound = {
        ".tag": PaymentMethodKlarnaAccountTag;
    };

    export const inboundSchema: z.ZodType<PaymentMethodKlarnaAccountOutput, z.ZodTypeDef, Inbound> =
        z
            .object({
                ".tag": PaymentMethodKlarnaAccountTag$,
            })
            .transform((v) => {
                return {
                    dotTag: v[".tag"],
                };
            });

    export type Outbound = {
        ".tag": PaymentMethodKlarnaAccountTag;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PaymentMethodKlarnaAccountOutput
    > = z
        .object({
            dotTag: PaymentMethodKlarnaAccountTag$,
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
            };
        });
}

/** @internal */
export namespace PaymentMethodKlarnaAccount$ {
    export type Inbound = {
        ".tag": PaymentMethodKlarnaAccountTag;
        return_url: string;
    };

    export const inboundSchema: z.ZodType<PaymentMethodKlarnaAccount, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": PaymentMethodKlarnaAccountTag$,
            return_url: z.string(),
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                returnUrl: v.return_url,
            };
        });

    export type Outbound = {
        ".tag": PaymentMethodKlarnaAccountTag;
        return_url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodKlarnaAccount> = z
        .object({
            dotTag: PaymentMethodKlarnaAccountTag$,
            returnUrl: z.string(),
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                return_url: v.returnUrl,
            };
        });
}
