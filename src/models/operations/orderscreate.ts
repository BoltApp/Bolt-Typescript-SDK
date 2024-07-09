/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type OrdersCreateSecurity = {
    apiKey: string;
};

export type OrdersCreateRequest = {
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    xPublishableKey: string;
    order: components.Order;
};

export type OrdersCreateResponse = {
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
     * The order was successfuly created
     */
    orderResponse?: components.OrderResponse | undefined;
};

/** @internal */
export const OrdersCreateSecurity$inboundSchema: z.ZodType<
    OrdersCreateSecurity,
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
export type OrdersCreateSecurity$Outbound = {
    "api-key": string;
};

/** @internal */
export const OrdersCreateSecurity$outboundSchema: z.ZodType<
    OrdersCreateSecurity$Outbound,
    z.ZodTypeDef,
    OrdersCreateSecurity
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
export namespace OrdersCreateSecurity$ {
    /** @deprecated use `OrdersCreateSecurity$inboundSchema` instead. */
    export const inboundSchema = OrdersCreateSecurity$inboundSchema;
    /** @deprecated use `OrdersCreateSecurity$outboundSchema` instead. */
    export const outboundSchema = OrdersCreateSecurity$outboundSchema;
    /** @deprecated use `OrdersCreateSecurity$Outbound` instead. */
    export type Outbound = OrdersCreateSecurity$Outbound;
}

/** @internal */
export const OrdersCreateRequest$inboundSchema: z.ZodType<
    OrdersCreateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "X-Publishable-Key": z.string(),
        order: components.Order$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "X-Publishable-Key": "xPublishableKey",
        });
    });

/** @internal */
export type OrdersCreateRequest$Outbound = {
    "X-Publishable-Key": string;
    order: components.Order$Outbound;
};

/** @internal */
export const OrdersCreateRequest$outboundSchema: z.ZodType<
    OrdersCreateRequest$Outbound,
    z.ZodTypeDef,
    OrdersCreateRequest
> = z
    .object({
        xPublishableKey: z.string(),
        order: components.Order$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xPublishableKey: "X-Publishable-Key",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdersCreateRequest$ {
    /** @deprecated use `OrdersCreateRequest$inboundSchema` instead. */
    export const inboundSchema = OrdersCreateRequest$inboundSchema;
    /** @deprecated use `OrdersCreateRequest$outboundSchema` instead. */
    export const outboundSchema = OrdersCreateRequest$outboundSchema;
    /** @deprecated use `OrdersCreateRequest$Outbound` instead. */
    export type Outbound = OrdersCreateRequest$Outbound;
}

/** @internal */
export const OrdersCreateResponse$inboundSchema: z.ZodType<
    OrdersCreateResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        "order-response": components.OrderResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            "order-response": "orderResponse",
        });
    });

/** @internal */
export type OrdersCreateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "order-response"?: components.OrderResponse$Outbound | undefined;
};

/** @internal */
export const OrdersCreateResponse$outboundSchema: z.ZodType<
    OrdersCreateResponse$Outbound,
    z.ZodTypeDef,
    OrdersCreateResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        orderResponse: components.OrderResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            orderResponse: "order-response",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdersCreateResponse$ {
    /** @deprecated use `OrdersCreateResponse$inboundSchema` instead. */
    export const inboundSchema = OrdersCreateResponse$inboundSchema;
    /** @deprecated use `OrdersCreateResponse$outboundSchema` instead. */
    export const outboundSchema = OrdersCreateResponse$outboundSchema;
    /** @deprecated use `OrdersCreateResponse$Outbound` instead. */
    export type Outbound = OrdersCreateResponse$Outbound;
}
