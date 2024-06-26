/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AccountAddressCreateRequest = {
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    xPublishableKey: string;
    addressListing: components.AddressListingInput;
};

export type AccountAddressCreateResponse = {
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
     * The address was successfully added
     */
    addressListing?: components.AddressListing | undefined;
};

/** @internal */
export namespace AccountAddressCreateRequest$ {
    export const inboundSchema: z.ZodType<AccountAddressCreateRequest, z.ZodTypeDef, unknown> = z
        .object({
            "X-Publishable-Key": z.string(),
            "address-listing": components.AddressListingInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "X-Publishable-Key": "xPublishableKey",
                "address-listing": "addressListing",
            });
        });

    export type Outbound = {
        "X-Publishable-Key": string;
        "address-listing": components.AddressListingInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountAddressCreateRequest> = z
        .object({
            xPublishableKey: z.string(),
            addressListing: components.AddressListingInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xPublishableKey: "X-Publishable-Key",
                addressListing: "address-listing",
            });
        });
}

/** @internal */
export namespace AccountAddressCreateResponse$ {
    export const inboundSchema: z.ZodType<AccountAddressCreateResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            "address-listing": components.AddressListing$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
                "address-listing": "addressListing",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        "address-listing"?: components.AddressListing$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountAddressCreateResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            addressListing: components.AddressListing$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                addressListing: "address-listing",
            });
        });
}
