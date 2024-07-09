/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GuestPaymentsUpdateSecurity = {
    apiKey: string;
};

export type GuestPaymentsUpdateRequest = {
    /**
     * The ID of the guest payment to update
     */
    id: string;
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    xPublishableKey: string;
    paymentUpdateRequest: components.PaymentUpdateRequest;
};

export type GuestPaymentsUpdateResponse = {
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
export const GuestPaymentsUpdateSecurity$inboundSchema: z.ZodType<
    GuestPaymentsUpdateSecurity,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "api-key": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "api-key": "apiKey",
        });
    });

/** @internal */
export type GuestPaymentsUpdateSecurity$Outbound = {
    "api-key": string;
};

/** @internal */
export const GuestPaymentsUpdateSecurity$outboundSchema: z.ZodType<
    GuestPaymentsUpdateSecurity$Outbound,
    z.ZodTypeDef,
    GuestPaymentsUpdateSecurity
> = z
    .object({
        apiKey: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            apiKey: "api-key",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GuestPaymentsUpdateSecurity$ {
    /** @deprecated use `GuestPaymentsUpdateSecurity$inboundSchema` instead. */
    export const inboundSchema = GuestPaymentsUpdateSecurity$inboundSchema;
    /** @deprecated use `GuestPaymentsUpdateSecurity$outboundSchema` instead. */
    export const outboundSchema = GuestPaymentsUpdateSecurity$outboundSchema;
    /** @deprecated use `GuestPaymentsUpdateSecurity$Outbound` instead. */
    export type Outbound = GuestPaymentsUpdateSecurity$Outbound;
}

/** @internal */
export const GuestPaymentsUpdateRequest$inboundSchema: z.ZodType<
    GuestPaymentsUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "X-Publishable-Key": z.string(),
        "payment-update-request": components.PaymentUpdateRequest$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "X-Publishable-Key": "xPublishableKey",
            "payment-update-request": "paymentUpdateRequest",
        });
    });

/** @internal */
export type GuestPaymentsUpdateRequest$Outbound = {
    id: string;
    "X-Publishable-Key": string;
    "payment-update-request": components.PaymentUpdateRequest$Outbound;
};

/** @internal */
export const GuestPaymentsUpdateRequest$outboundSchema: z.ZodType<
    GuestPaymentsUpdateRequest$Outbound,
    z.ZodTypeDef,
    GuestPaymentsUpdateRequest
> = z
    .object({
        id: z.string(),
        xPublishableKey: z.string(),
        paymentUpdateRequest: components.PaymentUpdateRequest$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xPublishableKey: "X-Publishable-Key",
            paymentUpdateRequest: "payment-update-request",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GuestPaymentsUpdateRequest$ {
    /** @deprecated use `GuestPaymentsUpdateRequest$inboundSchema` instead. */
    export const inboundSchema = GuestPaymentsUpdateRequest$inboundSchema;
    /** @deprecated use `GuestPaymentsUpdateRequest$outboundSchema` instead. */
    export const outboundSchema = GuestPaymentsUpdateRequest$outboundSchema;
    /** @deprecated use `GuestPaymentsUpdateRequest$Outbound` instead. */
    export type Outbound = GuestPaymentsUpdateRequest$Outbound;
}

/** @internal */
export const GuestPaymentsUpdateResponse$inboundSchema: z.ZodType<
    GuestPaymentsUpdateResponse,
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
export type GuestPaymentsUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "payment-response"?: components.PaymentResponse$Outbound | undefined;
};

/** @internal */
export const GuestPaymentsUpdateResponse$outboundSchema: z.ZodType<
    GuestPaymentsUpdateResponse$Outbound,
    z.ZodTypeDef,
    GuestPaymentsUpdateResponse
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
export namespace GuestPaymentsUpdateResponse$ {
    /** @deprecated use `GuestPaymentsUpdateResponse$inboundSchema` instead. */
    export const inboundSchema = GuestPaymentsUpdateResponse$inboundSchema;
    /** @deprecated use `GuestPaymentsUpdateResponse$outboundSchema` instead. */
    export const outboundSchema = GuestPaymentsUpdateResponse$outboundSchema;
    /** @deprecated use `GuestPaymentsUpdateResponse$Outbound` instead. */
    export type Outbound = GuestPaymentsUpdateResponse$Outbound;
}
