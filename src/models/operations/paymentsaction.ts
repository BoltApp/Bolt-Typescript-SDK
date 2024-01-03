/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type PaymentsActionRequest = {
    /**
     * The ID of the payment to operate on
     */
    id: string;
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    xPublishableKey: string;
    paymentActionRequest: components.PaymentActionRequest;
};

export type PaymentsActionResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * The action was successfully applied to the pending payment
     */
    paymentResponse?: any | undefined;
};

/** @internal */
export namespace PaymentsActionRequest$ {
    export type Inbound = {
        id: string;
        "X-Publishable-Key": string;
        "payment-action-request": components.PaymentActionRequest$.Inbound;
    };

    export const inboundSchema: z.ZodType<PaymentsActionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            "X-Publishable-Key": z.string(),
            "payment-action-request": components.PaymentActionRequest$.inboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                xPublishableKey: v["X-Publishable-Key"],
                paymentActionRequest: v["payment-action-request"],
            };
        });

    export type Outbound = {
        id: string;
        "X-Publishable-Key": string;
        "payment-action-request": components.PaymentActionRequest$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentsActionRequest> = z
        .object({
            id: z.string(),
            xPublishableKey: z.string(),
            paymentActionRequest: components.PaymentActionRequest$.outboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                "X-Publishable-Key": v.xPublishableKey,
                "payment-action-request": v.paymentActionRequest,
            };
        });
}

/** @internal */
export namespace PaymentsActionResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        "payment-response"?: any | undefined;
    };

    export const inboundSchema: z.ZodType<PaymentsActionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            "payment-response": z.any().optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v["payment-response"] === undefined
                    ? null
                    : { paymentResponse: v["payment-response"] }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        "payment-response"?: any | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentsActionResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            paymentResponse: z.any().optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.paymentResponse === undefined
                    ? null
                    : { "payment-response": v.paymentResponse }),
            };
        });
}
