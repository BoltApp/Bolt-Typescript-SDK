/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The type of address reference
 */
export enum AddressReferenceIdTag {
    Id = "id",
}

export type AddressReferenceId = {
    /**
     * The type of address reference
     */
    dotTag: AddressReferenceIdTag;
    /**
     * The address's ID
     */
    id: string;
};

/** @internal */
export const AddressReferenceIdTag$inboundSchema: z.ZodNativeEnum<typeof AddressReferenceIdTag> =
    z.nativeEnum(AddressReferenceIdTag);

/** @internal */
export const AddressReferenceIdTag$outboundSchema: z.ZodNativeEnum<typeof AddressReferenceIdTag> =
    AddressReferenceIdTag$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressReferenceIdTag$ {
    /** @deprecated use `AddressReferenceIdTag$inboundSchema` instead. */
    export const inboundSchema = AddressReferenceIdTag$inboundSchema;
    /** @deprecated use `AddressReferenceIdTag$outboundSchema` instead. */
    export const outboundSchema = AddressReferenceIdTag$outboundSchema;
}

/** @internal */
export const AddressReferenceId$inboundSchema: z.ZodType<
    AddressReferenceId,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ".tag": AddressReferenceIdTag$inboundSchema,
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            ".tag": "dotTag",
        });
    });

/** @internal */
export type AddressReferenceId$Outbound = {
    ".tag": string;
    id: string;
};

/** @internal */
export const AddressReferenceId$outboundSchema: z.ZodType<
    AddressReferenceId$Outbound,
    z.ZodTypeDef,
    AddressReferenceId
> = z
    .object({
        dotTag: AddressReferenceIdTag$outboundSchema,
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            dotTag: ".tag",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressReferenceId$ {
    /** @deprecated use `AddressReferenceId$inboundSchema` instead. */
    export const inboundSchema = AddressReferenceId$inboundSchema;
    /** @deprecated use `AddressReferenceId$outboundSchema` instead. */
    export const outboundSchema = AddressReferenceId$outboundSchema;
    /** @deprecated use `AddressReferenceId$Outbound` instead. */
    export type Outbound = AddressReferenceId$Outbound;
}
