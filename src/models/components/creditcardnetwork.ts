/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The credit card's network.
 */
export enum CreditCardNetwork {
    Visa = "visa",
    Mastercard = "mastercard",
    Amex = "amex",
    Discover = "discover",
    Jcb = "jcb",
    Unionpay = "unionpay",
    Alliancedata = "alliancedata",
    Citiplcc = "citiplcc",
}

/** @internal */
export namespace CreditCardNetwork$ {
    export const inboundSchema = z.nativeEnum(CreditCardNetwork);
    export const outboundSchema = inboundSchema;
}
