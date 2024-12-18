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
 * An error has occurred, and further details are contained in the response
 */
export type AccountPaymentMethodDeleteResponseBody = ErrorT | FieldError;

/** @internal */
export const AccountPaymentMethodDeleteResponseBody$inboundSchema: z.ZodType<
  AccountPaymentMethodDeleteResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([ErrorT$inboundSchema, FieldError$inboundSchema]);

/** @internal */
export type AccountPaymentMethodDeleteResponseBody$Outbound =
  | ErrorT$Outbound
  | FieldError$Outbound;

/** @internal */
export const AccountPaymentMethodDeleteResponseBody$outboundSchema: z.ZodType<
  AccountPaymentMethodDeleteResponseBody$Outbound,
  z.ZodTypeDef,
  AccountPaymentMethodDeleteResponseBody
> = z.union([ErrorT$outboundSchema, FieldError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountPaymentMethodDeleteResponseBody$ {
  /** @deprecated use `AccountPaymentMethodDeleteResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    AccountPaymentMethodDeleteResponseBody$inboundSchema;
  /** @deprecated use `AccountPaymentMethodDeleteResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    AccountPaymentMethodDeleteResponseBody$outboundSchema;
  /** @deprecated use `AccountPaymentMethodDeleteResponseBody$Outbound` instead. */
  export type Outbound = AccountPaymentMethodDeleteResponseBody$Outbound;
}

export function accountPaymentMethodDeleteResponseBodyToJSON(
  accountPaymentMethodDeleteResponseBody:
    AccountPaymentMethodDeleteResponseBody,
): string {
  return JSON.stringify(
    AccountPaymentMethodDeleteResponseBody$outboundSchema.parse(
      accountPaymentMethodDeleteResponseBody,
    ),
  );
}

export function accountPaymentMethodDeleteResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AccountPaymentMethodDeleteResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountPaymentMethodDeleteResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountPaymentMethodDeleteResponseBody' from JSON`,
  );
}
