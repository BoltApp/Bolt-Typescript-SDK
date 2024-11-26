/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of OAuth 2.0 grant being utilized.
 */
export enum GrantType {
  AuthorizationCode = "authorization_code",
}

export enum Scope {
  BoltAccountManage = "bolt.account.manage",
  BoltAccountView = "bolt.account.view",
  Openid = "openid",
}

export type AuthorizationCodeRequest = {
  /**
   * The type of OAuth 2.0 grant being utilized.
   */
  grantType: GrantType;
  /**
   * Fetched value using OTP value from the Authorization Modal.
   */
  code: string;
  /**
   * The OAuth client ID, which corresponds to the merchant publishable key, which can be retrieved in your Merchant Dashboard.
   */
  clientId: string;
  /**
   * The OAuth client secret, which corresponds the merchant API key, which can be retrieved in your Merchant Dashboard.
   */
  clientSecret: string;
  /**
   * The requested scopes. If the request is successful, the OAuth client will be able to perform operations requiring these scopes.
   */
  scope: Array<Scope>;
  /**
   * A randomly generated string sent along with an authorization code. This must be included if provided. It is used to prevent cross-site request forgery (CSRF) attacks.
   */
  state?: string | undefined;
};

/** @internal */
export const GrantType$inboundSchema: z.ZodNativeEnum<typeof GrantType> = z
  .nativeEnum(GrantType);

/** @internal */
export const GrantType$outboundSchema: z.ZodNativeEnum<typeof GrantType> =
  GrantType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GrantType$ {
  /** @deprecated use `GrantType$inboundSchema` instead. */
  export const inboundSchema = GrantType$inboundSchema;
  /** @deprecated use `GrantType$outboundSchema` instead. */
  export const outboundSchema = GrantType$outboundSchema;
}

/** @internal */
export const Scope$inboundSchema: z.ZodNativeEnum<typeof Scope> = z.nativeEnum(
  Scope,
);

/** @internal */
export const Scope$outboundSchema: z.ZodNativeEnum<typeof Scope> =
  Scope$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scope$ {
  /** @deprecated use `Scope$inboundSchema` instead. */
  export const inboundSchema = Scope$inboundSchema;
  /** @deprecated use `Scope$outboundSchema` instead. */
  export const outboundSchema = Scope$outboundSchema;
}

/** @internal */
export const AuthorizationCodeRequest$inboundSchema: z.ZodType<
  AuthorizationCodeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  grant_type: GrantType$inboundSchema,
  code: z.string(),
  client_id: z.string(),
  client_secret: z.string(),
  scope: z.array(Scope$inboundSchema),
  state: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "grant_type": "grantType",
    "client_id": "clientId",
    "client_secret": "clientSecret",
  });
});

/** @internal */
export type AuthorizationCodeRequest$Outbound = {
  grant_type: string;
  code: string;
  client_id: string;
  client_secret: string;
  scope: Array<string>;
  state?: string | undefined;
};

/** @internal */
export const AuthorizationCodeRequest$outboundSchema: z.ZodType<
  AuthorizationCodeRequest$Outbound,
  z.ZodTypeDef,
  AuthorizationCodeRequest
> = z.object({
  grantType: GrantType$outboundSchema,
  code: z.string(),
  clientId: z.string(),
  clientSecret: z.string(),
  scope: z.array(Scope$outboundSchema),
  state: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    grantType: "grant_type",
    clientId: "client_id",
    clientSecret: "client_secret",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthorizationCodeRequest$ {
  /** @deprecated use `AuthorizationCodeRequest$inboundSchema` instead. */
  export const inboundSchema = AuthorizationCodeRequest$inboundSchema;
  /** @deprecated use `AuthorizationCodeRequest$outboundSchema` instead. */
  export const outboundSchema = AuthorizationCodeRequest$outboundSchema;
  /** @deprecated use `AuthorizationCodeRequest$Outbound` instead. */
  export type Outbound = AuthorizationCodeRequest$Outbound;
}

export function authorizationCodeRequestToJSON(
  authorizationCodeRequest: AuthorizationCodeRequest,
): string {
  return JSON.stringify(
    AuthorizationCodeRequest$outboundSchema.parse(authorizationCodeRequest),
  );
}

export function authorizationCodeRequestFromJSON(
  jsonString: string,
): SafeParseResult<AuthorizationCodeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AuthorizationCodeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AuthorizationCodeRequest' from JSON`,
  );
}
