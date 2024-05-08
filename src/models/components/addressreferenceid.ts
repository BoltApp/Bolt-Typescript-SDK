/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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
export const AddressReferenceIdTag$: z.ZodNativeEnum<typeof AddressReferenceIdTag> =
    z.nativeEnum(AddressReferenceIdTag);

/** @internal */
export namespace AddressReferenceId$ {
    export type Inbound = {
        ".tag": AddressReferenceIdTag;
        id: string;
    };

    export const inboundSchema: z.ZodType<AddressReferenceId, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": AddressReferenceIdTag$,
            id: z.string(),
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                id: v.id,
            };
        });

    export type Outbound = {
        ".tag": AddressReferenceIdTag;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddressReferenceId> = z
        .object({
            dotTag: AddressReferenceIdTag$,
            id: z.string(),
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                id: v.id,
            };
        });
}
