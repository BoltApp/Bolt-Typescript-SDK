/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * The type of identifier
 */
export enum IdentifierType {
    Email = "email",
    EmailSha256 = "email_sha256",
}

export type Identifier = {
    /**
     * The type of identifier
     */
    identifierType: IdentifierType;
    /**
     * The value of the identifier. The value must be valid for the specified `identifier_type`
     */
    identifierValue: string;
};

/** @internal */
export const IdentifierType$ = z.nativeEnum(IdentifierType);

/** @internal */
export namespace Identifier$ {
    export type Inbound = {
        identifier_type: IdentifierType;
        identifier_value: string;
    };

    export const inboundSchema: z.ZodType<Identifier, z.ZodTypeDef, Inbound> = z
        .object({
            identifier_type: IdentifierType$,
            identifier_value: z.string(),
        })
        .transform((v) => {
            return {
                identifierType: v.identifier_type,
                identifierValue: v.identifier_value,
            };
        });

    export type Outbound = {
        identifier_type: IdentifierType;
        identifier_value: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Identifier> = z
        .object({
            identifierType: IdentifierType$,
            identifierValue: z.string(),
        })
        .transform((v) => {
            return {
                identifier_type: v.identifierType,
                identifier_value: v.identifierValue,
            };
        });
}
