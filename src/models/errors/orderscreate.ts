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
export type OrdersCreateResponseBody = ErrorT | FieldError;

/** @internal */
export const OrdersCreateResponseBody$inboundSchema: z.ZodType<
  OrdersCreateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([ErrorT$inboundSchema, FieldError$inboundSchema]);

/** @internal */
export type OrdersCreateResponseBody$Outbound =
  | ErrorT$Outbound
  | FieldError$Outbound;

/** @internal */
export const OrdersCreateResponseBody$outboundSchema: z.ZodType<
  OrdersCreateResponseBody$Outbound,
  z.ZodTypeDef,
  OrdersCreateResponseBody
> = z.union([ErrorT$outboundSchema, FieldError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdersCreateResponseBody$ {
  /** @deprecated use `OrdersCreateResponseBody$inboundSchema` instead. */
  export const inboundSchema = OrdersCreateResponseBody$inboundSchema;
  /** @deprecated use `OrdersCreateResponseBody$outboundSchema` instead. */
  export const outboundSchema = OrdersCreateResponseBody$outboundSchema;
  /** @deprecated use `OrdersCreateResponseBody$Outbound` instead. */
  export type Outbound = OrdersCreateResponseBody$Outbound;
}

export function ordersCreateResponseBodyToJSON(
  ordersCreateResponseBody: OrdersCreateResponseBody,
): string {
  return JSON.stringify(
    OrdersCreateResponseBody$outboundSchema.parse(ordersCreateResponseBody),
  );
}

export function ordersCreateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<OrdersCreateResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrdersCreateResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrdersCreateResponseBody' from JSON`,
  );
}
