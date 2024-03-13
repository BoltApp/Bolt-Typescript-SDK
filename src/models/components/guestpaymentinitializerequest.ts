/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Cart, Cart$ } from "./cart";
import { PaymentMethodInput, PaymentMethodInput$ } from "./paymentmethodinput";
import { ProfileCreationData, ProfileCreationData$ } from "./profilecreationdata";
import * as z from "zod";

export type GuestPaymentInitializeRequest = {
    profile: ProfileCreationData;
    cart: Cart;
    paymentMethod: PaymentMethodInput;
};

/** @internal */
export namespace GuestPaymentInitializeRequest$ {
    export type Inbound = {
        profile: ProfileCreationData$.Inbound;
        cart: Cart$.Inbound;
        payment_method: PaymentMethodInput$.Inbound;
    };

    export const inboundSchema: z.ZodType<GuestPaymentInitializeRequest, z.ZodTypeDef, Inbound> = z
        .object({
            profile: ProfileCreationData$.inboundSchema,
            cart: Cart$.inboundSchema,
            payment_method: PaymentMethodInput$.inboundSchema,
        })
        .transform((v) => {
            return {
                profile: v.profile,
                cart: v.cart,
                paymentMethod: v.payment_method,
            };
        });

    export type Outbound = {
        profile: ProfileCreationData$.Outbound;
        cart: Cart$.Outbound;
        payment_method: PaymentMethodInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GuestPaymentInitializeRequest> =
        z
            .object({
                profile: ProfileCreationData$.outboundSchema,
                cart: Cart$.outboundSchema,
                paymentMethod: PaymentMethodInput$.outboundSchema,
            })
            .transform((v) => {
                return {
                    profile: v.profile,
                    cart: v.cart,
                    payment_method: v.paymentMethod,
                };
            });
}
