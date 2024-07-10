/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type PaymentsUpdateRequest = {
    /**
     * The ID of the payment to update
     */
    id: string;
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    xPublishableKey: string;
    /**
     * A unique identifier for a shopper's device, generated by Bolt. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics.
     */
    xMerchantClientId: string;
    paymentUpdateRequest: components.PaymentUpdateRequest;
};

export type PaymentsUpdateResponse = {
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
     * The pending payment was successfully updated
     */
    paymentResponse?: components.PaymentResponse | undefined;
};

/** @internal */
export const PaymentsUpdateRequest$inboundSchema: z.ZodType<
    PaymentsUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "X-Publishable-Key": z.string(),
        "X-Merchant-Client-Id": z.string(),
        "payment-update-request": components.PaymentUpdateRequest$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "X-Publishable-Key": "xPublishableKey",
            "X-Merchant-Client-Id": "xMerchantClientId",
            "payment-update-request": "paymentUpdateRequest",
        });
    });

/** @internal */
export type PaymentsUpdateRequest$Outbound = {
    id: string;
    "X-Publishable-Key": string;
    "X-Merchant-Client-Id": string;
    "payment-update-request": components.PaymentUpdateRequest$Outbound;
};

/** @internal */
export const PaymentsUpdateRequest$outboundSchema: z.ZodType<
    PaymentsUpdateRequest$Outbound,
    z.ZodTypeDef,
    PaymentsUpdateRequest
> = z
    .object({
        id: z.string(),
        xPublishableKey: z.string(),
        xMerchantClientId: z.string(),
        paymentUpdateRequest: components.PaymentUpdateRequest$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xPublishableKey: "X-Publishable-Key",
            xMerchantClientId: "X-Merchant-Client-Id",
            paymentUpdateRequest: "payment-update-request",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsUpdateRequest$ {
    /** @deprecated use `PaymentsUpdateRequest$inboundSchema` instead. */
    export const inboundSchema = PaymentsUpdateRequest$inboundSchema;
    /** @deprecated use `PaymentsUpdateRequest$outboundSchema` instead. */
    export const outboundSchema = PaymentsUpdateRequest$outboundSchema;
    /** @deprecated use `PaymentsUpdateRequest$Outbound` instead. */
    export type Outbound = PaymentsUpdateRequest$Outbound;
}

/** @internal */
export const PaymentsUpdateResponse$inboundSchema: z.ZodType<
    PaymentsUpdateResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        "payment-response": components.PaymentResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            "payment-response": "paymentResponse",
        });
    });

/** @internal */
export type PaymentsUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "payment-response"?: components.PaymentResponse$Outbound | undefined;
};

/** @internal */
export const PaymentsUpdateResponse$outboundSchema: z.ZodType<
    PaymentsUpdateResponse$Outbound,
    z.ZodTypeDef,
    PaymentsUpdateResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        paymentResponse: components.PaymentResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            paymentResponse: "payment-response",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsUpdateResponse$ {
    /** @deprecated use `PaymentsUpdateResponse$inboundSchema` instead. */
    export const inboundSchema = PaymentsUpdateResponse$inboundSchema;
    /** @deprecated use `PaymentsUpdateResponse$outboundSchema` instead. */
    export const outboundSchema = PaymentsUpdateResponse$outboundSchema;
    /** @deprecated use `PaymentsUpdateResponse$Outbound` instead. */
    export type Outbound = PaymentsUpdateResponse$Outbound;
}
