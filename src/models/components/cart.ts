/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Amount, Amount$ } from "./amount";
import { CartDiscount, CartDiscount$ } from "./cartdiscount";
import { CartItem, CartItem$ } from "./cartitem";
import { CartShipment, CartShipment$ } from "./cartshipment";
import * as z from "zod";

export type Cart = {
    /**
     * This value is used by Bolt as an external reference to a given order. This reference must be unique per successful transaction.
     */
    orderReference: string;
    /**
     * Used optionally to pass additional information like order numbers or other IDs as needed.
     */
    orderDescription?: string | undefined;
    /**
     * A shopper-facing identifier corresponding to the order reference associated with this transaction.
     */
    displayId?: string | undefined;
    shipments?: Array<CartShipment> | undefined;
    discounts?: Array<CartDiscount> | undefined;
    items?: Array<CartItem> | undefined;
    /**
     * A monetary amount, i.e. a base unit amount and a supported currency.
     */
    total: Amount;
    /**
     * A monetary amount, i.e. a base unit amount and a supported currency.
     */
    tax: Amount;
};

/** @internal */
export namespace Cart$ {
    export type Inbound = {
        order_reference: string;
        order_description?: string | undefined;
        display_id?: string | undefined;
        shipments?: Array<CartShipment$.Inbound> | undefined;
        discounts?: Array<CartDiscount$.Inbound> | undefined;
        items?: Array<CartItem$.Inbound> | undefined;
        total: Amount$.Inbound;
        tax: Amount$.Inbound;
    };

    export const inboundSchema: z.ZodType<Cart, z.ZodTypeDef, Inbound> = z
        .object({
            order_reference: z.string(),
            order_description: z.string().optional(),
            display_id: z.string().optional(),
            shipments: z.array(CartShipment$.inboundSchema).optional(),
            discounts: z.array(CartDiscount$.inboundSchema).optional(),
            items: z.array(CartItem$.inboundSchema).optional(),
            total: Amount$.inboundSchema,
            tax: Amount$.inboundSchema,
        })
        .transform((v) => {
            return {
                orderReference: v.order_reference,
                ...(v.order_description === undefined
                    ? null
                    : { orderDescription: v.order_description }),
                ...(v.display_id === undefined ? null : { displayId: v.display_id }),
                ...(v.shipments === undefined ? null : { shipments: v.shipments }),
                ...(v.discounts === undefined ? null : { discounts: v.discounts }),
                ...(v.items === undefined ? null : { items: v.items }),
                total: v.total,
                tax: v.tax,
            };
        });

    export type Outbound = {
        order_reference: string;
        order_description?: string | undefined;
        display_id?: string | undefined;
        shipments?: Array<CartShipment$.Outbound> | undefined;
        discounts?: Array<CartDiscount$.Outbound> | undefined;
        items?: Array<CartItem$.Outbound> | undefined;
        total: Amount$.Outbound;
        tax: Amount$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Cart> = z
        .object({
            orderReference: z.string(),
            orderDescription: z.string().optional(),
            displayId: z.string().optional(),
            shipments: z.array(CartShipment$.outboundSchema).optional(),
            discounts: z.array(CartDiscount$.outboundSchema).optional(),
            items: z.array(CartItem$.outboundSchema).optional(),
            total: Amount$.outboundSchema,
            tax: Amount$.outboundSchema,
        })
        .transform((v) => {
            return {
                order_reference: v.orderReference,
                ...(v.orderDescription === undefined
                    ? null
                    : { order_description: v.orderDescription }),
                ...(v.displayId === undefined ? null : { display_id: v.displayId }),
                ...(v.shipments === undefined ? null : { shipments: v.shipments }),
                ...(v.discounts === undefined ? null : { discounts: v.discounts }),
                ...(v.items === undefined ? null : { items: v.items }),
                total: v.total,
                tax: v.tax,
            };
        });
}
