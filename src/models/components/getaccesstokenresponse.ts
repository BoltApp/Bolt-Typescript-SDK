/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetAccessTokenResponse = {
    /**
     * A JWT token issued when the request includes the scope open_id.
     */
    idToken?: string | undefined;
    /**
     * An access token you can use to make requests on behalf of a Bolt Account.
     */
    accessToken?: string | undefined;
    /**
     * The access token's expiration, in seconds.
     */
    expiresIn?: number | undefined;
    /**
     * A refresh token you can use to issue a brand new access token without obtaining a new authorization code.
     */
    refreshToken?: string | undefined;
    /**
     * The scope granted to the refresh token. Currently, refreshed token will only grant view permissions.
     */
    refreshTokenScope?: string | undefined;
    /**
     * The scope granted to access token, depending on the scope granted to the authorization code as well as the scope parameter.
     *
     * @remarks
     * Options include `bolt.account.manage`, `bolt.account.view`, `openid`. Multiple values can be returned as space-separated strings.
     *
     */
    scope?: string | undefined;
    /**
     * The token_type will always be bearer.
     */
    tokenType?: string | undefined;
};

/** @internal */
export const GetAccessTokenResponse$inboundSchema: z.ZodType<
    GetAccessTokenResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id_token: z.string().optional(),
        access_token: z.string().optional(),
        expires_in: z.number().int().optional(),
        refresh_token: z.string().optional(),
        refresh_token_scope: z.string().optional(),
        scope: z.string().optional(),
        token_type: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            id_token: "idToken",
            access_token: "accessToken",
            expires_in: "expiresIn",
            refresh_token: "refreshToken",
            refresh_token_scope: "refreshTokenScope",
            token_type: "tokenType",
        });
    });

/** @internal */
export type GetAccessTokenResponse$Outbound = {
    id_token?: string | undefined;
    access_token?: string | undefined;
    expires_in?: number | undefined;
    refresh_token?: string | undefined;
    refresh_token_scope?: string | undefined;
    scope?: string | undefined;
    token_type?: string | undefined;
};

/** @internal */
export const GetAccessTokenResponse$outboundSchema: z.ZodType<
    GetAccessTokenResponse$Outbound,
    z.ZodTypeDef,
    GetAccessTokenResponse
> = z
    .object({
        idToken: z.string().optional(),
        accessToken: z.string().optional(),
        expiresIn: z.number().int().optional(),
        refreshToken: z.string().optional(),
        refreshTokenScope: z.string().optional(),
        scope: z.string().optional(),
        tokenType: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            idToken: "id_token",
            accessToken: "access_token",
            expiresIn: "expires_in",
            refreshToken: "refresh_token",
            refreshTokenScope: "refresh_token_scope",
            tokenType: "token_type",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccessTokenResponse$ {
    /** @deprecated use `GetAccessTokenResponse$inboundSchema` instead. */
    export const inboundSchema = GetAccessTokenResponse$inboundSchema;
    /** @deprecated use `GetAccessTokenResponse$outboundSchema` instead. */
    export const outboundSchema = GetAccessTokenResponse$outboundSchema;
    /** @deprecated use `GetAccessTokenResponse$Outbound` instead. */
    export type Outbound = GetAccessTokenResponse$Outbound;
}
