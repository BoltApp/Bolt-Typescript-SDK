/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AddressReferenceInput, AddressReferenceInput$ } from "./addressreferenceinput";
import { Amount, Amount$ } from "./amount";
import * as z from "zod";

export type CartShipment = {
    address?: AddressReferenceInput | undefined;
    /**
     * A monetary amount, i.e. a base unit amount and a supported currency.
     */
    cost?: Amount | undefined;
    /**
     * The name of the carrier selected.
     */
    carrier?: string | undefined;
};

/** @internal */
export namespace CartShipment$ {
    export type Inbound = {
        address?: AddressReferenceInput$.Inbound | undefined;
        cost?: Amount$.Inbound | undefined;
        carrier?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CartShipment, z.ZodTypeDef, Inbound> = z
        .object({
            address: AddressReferenceInput$.inboundSchema.optional(),
            cost: Amount$.inboundSchema.optional(),
            carrier: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.cost === undefined ? null : { cost: v.cost }),
                ...(v.carrier === undefined ? null : { carrier: v.carrier }),
            };
        });

    export type Outbound = {
        address?: AddressReferenceInput$.Outbound | undefined;
        cost?: Amount$.Outbound | undefined;
        carrier?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CartShipment> = z
        .object({
            address: AddressReferenceInput$.outboundSchema.optional(),
            cost: Amount$.outboundSchema.optional(),
            carrier: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.cost === undefined ? null : { cost: v.cost }),
                ...(v.carrier === undefined ? null : { carrier: v.carrier }),
            };
        });
}
