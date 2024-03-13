/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CreditCardNetwork, CreditCardNetwork$ } from "./creditcardnetwork";
import * as z from "zod";

export type TestCreditCard = {
    /**
     * The credit card's network.
     */
    network: CreditCardNetwork;
    /**
     * The Bank Identification Number (BIN). This is typically the first 4 to 6 digits of the account number.
     */
    bin: string;
    /**
     * The account number's last four digits.
     */
    last4: string;
    /**
     * The token's expiration date. Tokens used past their expiration will be rejected.
     */
    expiration: Date;
    /**
     * The Bolt token associated with the credit card.
     */
    token: string;
};

/** @internal */
export namespace TestCreditCard$ {
    export type Inbound = {
        network: CreditCardNetwork;
        bin: string;
        last4: string;
        expiration: string;
        token: string;
    };

    export const inboundSchema: z.ZodType<TestCreditCard, z.ZodTypeDef, Inbound> = z
        .object({
            network: CreditCardNetwork$,
            bin: z.string(),
            last4: z.string(),
            expiration: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            token: z.string(),
        })
        .transform((v) => {
            return {
                network: v.network,
                bin: v.bin,
                last4: v.last4,
                expiration: v.expiration,
                token: v.token,
            };
        });

    export type Outbound = {
        network: CreditCardNetwork;
        bin: string;
        last4: string;
        expiration: string;
        token: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TestCreditCard> = z
        .object({
            network: CreditCardNetwork$,
            bin: z.string(),
            last4: z.string(),
            expiration: z.date().transform((v) => v.toISOString()),
            token: z.string(),
        })
        .transform((v) => {
            return {
                network: v.network,
                bin: v.bin,
                last4: v.last4,
                expiration: v.expiration,
                token: v.token,
            };
        });
}
