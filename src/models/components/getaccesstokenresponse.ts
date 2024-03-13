/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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
export namespace GetAccessTokenResponse$ {
    export type Inbound = {
        id_token?: string | undefined;
        access_token?: string | undefined;
        expires_in?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_scope?: string | undefined;
        scope?: string | undefined;
        token_type?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetAccessTokenResponse, z.ZodTypeDef, Inbound> = z
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
            return {
                ...(v.id_token === undefined ? null : { idToken: v.id_token }),
                ...(v.access_token === undefined ? null : { accessToken: v.access_token }),
                ...(v.expires_in === undefined ? null : { expiresIn: v.expires_in }),
                ...(v.refresh_token === undefined ? null : { refreshToken: v.refresh_token }),
                ...(v.refresh_token_scope === undefined
                    ? null
                    : { refreshTokenScope: v.refresh_token_scope }),
                ...(v.scope === undefined ? null : { scope: v.scope }),
                ...(v.token_type === undefined ? null : { tokenType: v.token_type }),
            };
        });

    export type Outbound = {
        id_token?: string | undefined;
        access_token?: string | undefined;
        expires_in?: number | undefined;
        refresh_token?: string | undefined;
        refresh_token_scope?: string | undefined;
        scope?: string | undefined;
        token_type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAccessTokenResponse> = z
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
            return {
                ...(v.idToken === undefined ? null : { id_token: v.idToken }),
                ...(v.accessToken === undefined ? null : { access_token: v.accessToken }),
                ...(v.expiresIn === undefined ? null : { expires_in: v.expiresIn }),
                ...(v.refreshToken === undefined ? null : { refresh_token: v.refreshToken }),
                ...(v.refreshTokenScope === undefined
                    ? null
                    : { refresh_token_scope: v.refreshTokenScope }),
                ...(v.scope === undefined ? null : { scope: v.scope }),
                ...(v.tokenType === undefined ? null : { token_type: v.tokenType }),
            };
        });
}
