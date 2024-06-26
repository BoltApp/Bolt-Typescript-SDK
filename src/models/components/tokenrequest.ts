/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AuthorizationCodeRequest, AuthorizationCodeRequest$ } from "./authorizationcoderequest.js";
import { RefreshTokenRequest, RefreshTokenRequest$ } from "./refreshtokenrequest.js";
import * as z from "zod";

export type TokenRequest = AuthorizationCodeRequest | RefreshTokenRequest;

/** @internal */
export namespace TokenRequest$ {
    export const inboundSchema: z.ZodType<TokenRequest, z.ZodTypeDef, unknown> = z.union([
        AuthorizationCodeRequest$.inboundSchema,
        RefreshTokenRequest$.inboundSchema,
    ]);

    export type Outbound = AuthorizationCodeRequest$.Outbound | RefreshTokenRequest$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TokenRequest> = z.union([
        AuthorizationCodeRequest$.outboundSchema,
        RefreshTokenRequest$.outboundSchema,
    ]);
}
