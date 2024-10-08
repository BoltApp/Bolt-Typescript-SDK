/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AccountTestPhoneData = {
    /**
     * A random, fictitious, unassigned phone number.
     */
    phone: string;
};

/** @internal */
export const AccountTestPhoneData$inboundSchema: z.ZodType<
    AccountTestPhoneData,
    z.ZodTypeDef,
    unknown
> = z.object({
    phone: z.string(),
});

/** @internal */
export type AccountTestPhoneData$Outbound = {
    phone: string;
};

/** @internal */
export const AccountTestPhoneData$outboundSchema: z.ZodType<
    AccountTestPhoneData$Outbound,
    z.ZodTypeDef,
    AccountTestPhoneData
> = z.object({
    phone: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountTestPhoneData$ {
    /** @deprecated use `AccountTestPhoneData$inboundSchema` instead. */
    export const inboundSchema = AccountTestPhoneData$inboundSchema;
    /** @deprecated use `AccountTestPhoneData$outboundSchema` instead. */
    export const outboundSchema = AccountTestPhoneData$outboundSchema;
    /** @deprecated use `AccountTestPhoneData$Outbound` instead. */
    export type Outbound = AccountTestPhoneData$Outbound;
}
