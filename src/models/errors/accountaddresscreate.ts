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
export type AccountAddressCreateResponseBody = ErrorT | FieldError;

/** @internal */
export const AccountAddressCreateResponseBody$inboundSchema: z.ZodType<
  AccountAddressCreateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([ErrorT$inboundSchema, FieldError$inboundSchema]);

/** @internal */
export type AccountAddressCreateResponseBody$Outbound =
  | ErrorT$Outbound
  | FieldError$Outbound;

/** @internal */
export const AccountAddressCreateResponseBody$outboundSchema: z.ZodType<
  AccountAddressCreateResponseBody$Outbound,
  z.ZodTypeDef,
  AccountAddressCreateResponseBody
> = z.union([ErrorT$outboundSchema, FieldError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddressCreateResponseBody$ {
  /** @deprecated use `AccountAddressCreateResponseBody$inboundSchema` instead. */
  export const inboundSchema = AccountAddressCreateResponseBody$inboundSchema;
  /** @deprecated use `AccountAddressCreateResponseBody$outboundSchema` instead. */
  export const outboundSchema = AccountAddressCreateResponseBody$outboundSchema;
  /** @deprecated use `AccountAddressCreateResponseBody$Outbound` instead. */
  export type Outbound = AccountAddressCreateResponseBody$Outbound;
}

export function accountAddressCreateResponseBodyToJSON(
  accountAddressCreateResponseBody: AccountAddressCreateResponseBody,
): string {
  return JSON.stringify(
    AccountAddressCreateResponseBody$outboundSchema.parse(
      accountAddressCreateResponseBody,
    ),
  );
}

export function accountAddressCreateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AccountAddressCreateResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountAddressCreateResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountAddressCreateResponseBody' from JSON`,
  );
}
