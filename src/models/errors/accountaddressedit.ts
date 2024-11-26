/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  ErrorT,
  ErrorT$inboundSchema,
  ErrorT$Outbound,
  ErrorT$outboundSchema,
} from "./error.js";
import {
  FieldError,
  FieldError$inboundSchema,
  FieldError$Outbound,
  FieldError$outboundSchema,
} from "./fielderror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * The address is invalid and cannot be added, or some other error has occurred
 */
export type AccountAddressEditResponseBody = ErrorT | FieldError;

/** @internal */
export const AccountAddressEditResponseBody$inboundSchema: z.ZodType<
  AccountAddressEditResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([ErrorT$inboundSchema, FieldError$inboundSchema]);

/** @internal */
export type AccountAddressEditResponseBody$Outbound =
  | ErrorT$Outbound
  | FieldError$Outbound;

/** @internal */
export const AccountAddressEditResponseBody$outboundSchema: z.ZodType<
  AccountAddressEditResponseBody$Outbound,
  z.ZodTypeDef,
  AccountAddressEditResponseBody
> = z.union([ErrorT$outboundSchema, FieldError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddressEditResponseBody$ {
  /** @deprecated use `AccountAddressEditResponseBody$inboundSchema` instead. */
  export const inboundSchema = AccountAddressEditResponseBody$inboundSchema;
  /** @deprecated use `AccountAddressEditResponseBody$outboundSchema` instead. */
  export const outboundSchema = AccountAddressEditResponseBody$outboundSchema;
  /** @deprecated use `AccountAddressEditResponseBody$Outbound` instead. */
  export type Outbound = AccountAddressEditResponseBody$Outbound;
}

export function accountAddressEditResponseBodyToJSON(
  accountAddressEditResponseBody: AccountAddressEditResponseBody,
): string {
  return JSON.stringify(
    AccountAddressEditResponseBody$outboundSchema.parse(
      accountAddressEditResponseBody,
    ),
  );
}

export function accountAddressEditResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AccountAddressEditResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountAddressEditResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountAddressEditResponseBody' from JSON`,
  );
}
