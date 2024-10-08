/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AccountAddressEditRequest = {
    /**
     * The ID of the address to edit
     */
    id: string;
    /**
     * The publicly shareable identifier used to identify your Bolt merchant division.
     */
    xPublishableKey: string;
    /**
     * A unique identifier for a shopper's device, generated by Bolt. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics.
     */
    xMerchantClientId: string;
    addressListing: components.AddressListingInput;
};

export type AccountAddressEditResponse = {
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
     * The address was successfully edited
     */
    addressListing?: components.AddressListing | undefined;
};

/** @internal */
export const AccountAddressEditRequest$inboundSchema: z.ZodType<
    AccountAddressEditRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "X-Publishable-Key": z.string(),
        "X-Merchant-Client-Id": z.string(),
        "address-listing": components.AddressListingInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "X-Publishable-Key": "xPublishableKey",
            "X-Merchant-Client-Id": "xMerchantClientId",
            "address-listing": "addressListing",
        });
    });

/** @internal */
export type AccountAddressEditRequest$Outbound = {
    id: string;
    "X-Publishable-Key": string;
    "X-Merchant-Client-Id": string;
    "address-listing": components.AddressListingInput$Outbound;
};

/** @internal */
export const AccountAddressEditRequest$outboundSchema: z.ZodType<
    AccountAddressEditRequest$Outbound,
    z.ZodTypeDef,
    AccountAddressEditRequest
> = z
    .object({
        id: z.string(),
        xPublishableKey: z.string(),
        xMerchantClientId: z.string(),
        addressListing: components.AddressListingInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xPublishableKey: "X-Publishable-Key",
            xMerchantClientId: "X-Merchant-Client-Id",
            addressListing: "address-listing",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddressEditRequest$ {
    /** @deprecated use `AccountAddressEditRequest$inboundSchema` instead. */
    export const inboundSchema = AccountAddressEditRequest$inboundSchema;
    /** @deprecated use `AccountAddressEditRequest$outboundSchema` instead. */
    export const outboundSchema = AccountAddressEditRequest$outboundSchema;
    /** @deprecated use `AccountAddressEditRequest$Outbound` instead. */
    export type Outbound = AccountAddressEditRequest$Outbound;
}

/** @internal */
export const AccountAddressEditResponse$inboundSchema: z.ZodType<
    AccountAddressEditResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        "address-listing": components.AddressListing$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            "address-listing": "addressListing",
        });
    });

/** @internal */
export type AccountAddressEditResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "address-listing"?: components.AddressListing$Outbound | undefined;
};

/** @internal */
export const AccountAddressEditResponse$outboundSchema: z.ZodType<
    AccountAddressEditResponse$Outbound,
    z.ZodTypeDef,
    AccountAddressEditResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        addressListing: components.AddressListing$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            addressListing: "address-listing",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddressEditResponse$ {
    /** @deprecated use `AccountAddressEditResponse$inboundSchema` instead. */
    export const inboundSchema = AccountAddressEditResponse$inboundSchema;
    /** @deprecated use `AccountAddressEditResponse$outboundSchema` instead. */
    export const outboundSchema = AccountAddressEditResponse$outboundSchema;
    /** @deprecated use `AccountAddressEditResponse$Outbound` instead. */
    export type Outbound = AccountAddressEditResponse$Outbound;
}
