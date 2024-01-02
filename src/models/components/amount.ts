/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

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
export const Currency$ = z.nativeEnum(Currency);

/** @internal */
export namespace Amount$ {
    export type Inbound = {
        currency: Currency;
        units: number;
    };

    export const inboundSchema: z.ZodType<Amount, z.ZodTypeDef, Inbound> = z
        .object({
            currency: Currency$,
            units: z.number().int(),
        })
        .transform((v) => {
            return {
                currency: v.currency,
                units: v.units,
            };
        });

    export type Outbound = {
        currency: Currency;
        units: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Amount> = z
        .object({
            currency: Currency$,
            units: z.number().int(),
        })
        .transform((v) => {
            return {
                currency: v.currency,
                units: v.units,
            };
        });
}
