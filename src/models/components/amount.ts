/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A supported currency.
 */
export enum Currency {
    Aud = "AUD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Usd = "USD",
}

/**
 * A monetary amount, i.e. a base unit amount and a supported currency.
 */
export type Amount = {
    /**
     * A supported currency.
     */
    currency: Currency;
    /**
     * A monetary amount, represented in its base units (e.g. USD/EUR cents).
     */
    units: number;
};

/** @internal */
export namespace Currency$ {
    export const inboundSchema: z.ZodNativeEnum<typeof Currency> = z.nativeEnum(Currency);
    export const outboundSchema: z.ZodNativeEnum<typeof Currency> = inboundSchema;
}

/** @internal */
export namespace Amount$ {
    export const inboundSchema: z.ZodType<Amount, z.ZodTypeDef, unknown> = z.object({
        currency: Currency$.inboundSchema,
        units: z.number().int(),
    });

    export type Outbound = {
        currency: string;
        units: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Amount> = z.object({
        currency: Currency$.outboundSchema,
        units: z.number().int(),
    });
}
