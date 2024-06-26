/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type AccountAddressDeleteRequest = {
    /**
     * The ID of the address to delete
     */
    id: string;
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    xPublishableKey: string;
};

export type AccountAddressDeleteResponse = {
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
};

/** @internal */
export namespace AccountAddressDeleteRequest$ {
    export const inboundSchema: z.ZodType<AccountAddressDeleteRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            "X-Publishable-Key": z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                "X-Publishable-Key": "xPublishableKey",
            });
        });

    export type Outbound = {
        id: string;
        "X-Publishable-Key": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountAddressDeleteRequest> = z
        .object({
            id: z.string(),
            xPublishableKey: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                xPublishableKey: "X-Publishable-Key",
            });
        });
}

/** @internal */
export namespace AccountAddressDeleteResponse$ {
    export const inboundSchema: z.ZodType<AccountAddressDeleteResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountAddressDeleteResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
