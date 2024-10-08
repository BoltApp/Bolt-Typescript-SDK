/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type TransactionAuthorization = {
    processorReference?: string | undefined;
};

/** @internal */
export const TransactionAuthorization$inboundSchema: z.ZodType<
    TransactionAuthorization,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        processor_reference: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            processor_reference: "processorReference",
        });
    });

/** @internal */
export type TransactionAuthorization$Outbound = {
    processor_reference?: string | undefined;
};

/** @internal */
export const TransactionAuthorization$outboundSchema: z.ZodType<
    TransactionAuthorization$Outbound,
    z.ZodTypeDef,
    TransactionAuthorization
> = z
    .object({
        processorReference: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            processorReference: "processor_reference",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionAuthorization$ {
    /** @deprecated use `TransactionAuthorization$inboundSchema` instead. */
    export const inboundSchema = TransactionAuthorization$inboundSchema;
    /** @deprecated use `TransactionAuthorization$outboundSchema` instead. */
    export const outboundSchema = TransactionAuthorization$outboundSchema;
    /** @deprecated use `TransactionAuthorization$Outbound` instead. */
    export type Outbound = TransactionAuthorization$Outbound;
}
