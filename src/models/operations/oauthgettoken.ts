/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type OauthGetTokenResponse = {
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
     * Access token is successfully fetched
     */
    getAccessTokenResponse?: components.GetAccessTokenResponse | undefined;
};

/** @internal */
export namespace OauthGetTokenResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        "get-access-token-response"?: components.GetAccessTokenResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<OauthGetTokenResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            "get-access-token-response":
                components.GetAccessTokenResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v["get-access-token-response"] === undefined
                    ? null
                    : { getAccessTokenResponse: v["get-access-token-response"] }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        "get-access-token-response"?: components.GetAccessTokenResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OauthGetTokenResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getAccessTokenResponse: components.GetAccessTokenResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getAccessTokenResponse === undefined
                    ? null
                    : { "get-access-token-response": v.getAccessTokenResponse }),
            };
        });
}
