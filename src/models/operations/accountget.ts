/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type AccountGetRequest = {
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    xPublishableKey: string;
};

export type AccountGetResponse = {
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
     * The account details were successfully retrieved
     */
    account?: components.Account | undefined;
};

/** @internal */
export namespace AccountGetRequest$ {
    export type Inbound = {
        "X-Publishable-Key": string;
    };

    export const inboundSchema: z.ZodType<AccountGetRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "X-Publishable-Key": z.string(),
        })
        .transform((v) => {
            return {
                xPublishableKey: v["X-Publishable-Key"],
            };
        });

    export type Outbound = {
        "X-Publishable-Key": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountGetRequest> = z
        .object({
            xPublishableKey: z.string(),
        })
        .transform((v) => {
            return {
                "X-Publishable-Key": v.xPublishableKey,
            };
        });
}

/** @internal */
export namespace AccountGetResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        account?: components.Account$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AccountGetResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            account: components.Account$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.account === undefined ? null : { account: v.account }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        account?: components.Account$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountGetResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            account: components.Account$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.account === undefined ? null : { account: v.account }),
            };
        });
}
