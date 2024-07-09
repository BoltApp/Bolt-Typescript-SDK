/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    CountryCode,
    CountryCode$inboundSchema,
    CountryCode$outboundSchema,
} from "./countrycode.js";
import * as z from "zod";

/**
 * The type of address reference
 */
export enum AddressReferenceExplicitTag {
    Explicit = "explicit",
}

/**
 * A physical address.
 */
export type AddressReferenceExplicit = {
    /**
     * The type of address reference
     */
    dotTag: AddressReferenceExplicitTag;
    /**
     * The address's unique identifier.
     */
    id?: string | undefined;
    /**
     * The first name of the person associated with this address.
     */
    firstName: string;
    /**
     * The last name of the person associated with this address.
     */
    lastName: string;
    /**
     * The company associated with this address.
     */
    company?: string | undefined;
    /**
     * The street address associated with this address.
     */
    streetAddress1: string;
    /**
     * Any additional, optional, street address information associated with this address.
     */
    streetAddress2?: string | undefined;
    /**
     * The locality (e.g. city, town, etc...) associated with this address.
     */
    locality: string;
    /**
     * The postal code associated with this address.
     */
    postalCode: string;
    /**
     * The region or administrative area (e.g. state, province, county, etc...) associated with this address.
     */
    region?: string | undefined;
    /**
     * The country (in its ISO 3166 alpha-2 format) associated with this address.
     */
    countryCode: CountryCode;
    /**
     * The email address associated with this address.
     */
    email?: string | undefined;
    /**
     * The phone number associated with this address.
     */
    phone?: string | undefined;
};

/**
 * A physical address.
 */
export type AddressReferenceExplicitInput = {
    /**
     * The type of address reference
     */
    dotTag: AddressReferenceExplicitTag;
    /**
     * The first name of the person associated with this address.
     */
    firstName: string;
    /**
     * The last name of the person associated with this address.
     */
    lastName: string;
    /**
     * The company associated with this address.
     */
    company?: string | undefined;
    /**
     * The street address associated with this address.
     */
    streetAddress1: string;
    /**
     * Any additional, optional, street address information associated with this address.
     */
    streetAddress2?: string | undefined;
    /**
     * The locality (e.g. city, town, etc...) associated with this address.
     */
    locality: string;
    /**
     * The postal code associated with this address.
     */
    postalCode: string;
    /**
     * The region or administrative area (e.g. state, province, county, etc...) associated with this address.
     */
    region?: string | undefined;
    /**
     * The country (in its ISO 3166 alpha-2 format) associated with this address.
     */
    countryCode: CountryCode;
    /**
     * The email address associated with this address.
     */
    email?: string | undefined;
    /**
     * The phone number associated with this address.
     */
    phone?: string | undefined;
};

/** @internal */
export const AddressReferenceExplicitTag$inboundSchema: z.ZodNativeEnum<
    typeof AddressReferenceExplicitTag
> = z.nativeEnum(AddressReferenceExplicitTag);

/** @internal */
export const AddressReferenceExplicitTag$outboundSchema: z.ZodNativeEnum<
    typeof AddressReferenceExplicitTag
> = AddressReferenceExplicitTag$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressReferenceExplicitTag$ {
    /** @deprecated use `AddressReferenceExplicitTag$inboundSchema` instead. */
    export const inboundSchema = AddressReferenceExplicitTag$inboundSchema;
    /** @deprecated use `AddressReferenceExplicitTag$outboundSchema` instead. */
    export const outboundSchema = AddressReferenceExplicitTag$outboundSchema;
}

/** @internal */
export const AddressReferenceExplicit$inboundSchema: z.ZodType<
    AddressReferenceExplicit,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ".tag": AddressReferenceExplicitTag$inboundSchema,
        id: z.string().optional(),
        first_name: z.string(),
        last_name: z.string(),
        company: z.string().optional(),
        street_address1: z.string(),
        street_address2: z.string().optional(),
        locality: z.string(),
        postal_code: z.string(),
        region: z.string().optional(),
        country_code: CountryCode$inboundSchema,
        email: z.string().optional(),
        phone: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ".tag": "dotTag",
            first_name: "firstName",
            last_name: "lastName",
            street_address1: "streetAddress1",
            street_address2: "streetAddress2",
            postal_code: "postalCode",
            country_code: "countryCode",
        });
    });

/** @internal */
export type AddressReferenceExplicit$Outbound = {
    ".tag": string;
    id?: string | undefined;
    first_name: string;
    last_name: string;
    company?: string | undefined;
    street_address1: string;
    street_address2?: string | undefined;
    locality: string;
    postal_code: string;
    region?: string | undefined;
    country_code: string;
    email?: string | undefined;
    phone?: string | undefined;
};

/** @internal */
export const AddressReferenceExplicit$outboundSchema: z.ZodType<
    AddressReferenceExplicit$Outbound,
    z.ZodTypeDef,
    AddressReferenceExplicit
> = z
    .object({
        dotTag: AddressReferenceExplicitTag$outboundSchema,
        id: z.string().optional(),
        firstName: z.string(),
        lastName: z.string(),
        company: z.string().optional(),
        streetAddress1: z.string(),
        streetAddress2: z.string().optional(),
        locality: z.string(),
        postalCode: z.string(),
        region: z.string().optional(),
        countryCode: CountryCode$outboundSchema,
        email: z.string().optional(),
        phone: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            dotTag: ".tag",
            firstName: "first_name",
            lastName: "last_name",
            streetAddress1: "street_address1",
            streetAddress2: "street_address2",
            postalCode: "postal_code",
            countryCode: "country_code",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressReferenceExplicit$ {
    /** @deprecated use `AddressReferenceExplicit$inboundSchema` instead. */
    export const inboundSchema = AddressReferenceExplicit$inboundSchema;
    /** @deprecated use `AddressReferenceExplicit$outboundSchema` instead. */
    export const outboundSchema = AddressReferenceExplicit$outboundSchema;
    /** @deprecated use `AddressReferenceExplicit$Outbound` instead. */
    export type Outbound = AddressReferenceExplicit$Outbound;
}

/** @internal */
export const AddressReferenceExplicitInput$inboundSchema: z.ZodType<
    AddressReferenceExplicitInput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ".tag": AddressReferenceExplicitTag$inboundSchema,
        first_name: z.string(),
        last_name: z.string(),
        company: z.string().optional(),
        street_address1: z.string(),
        street_address2: z.string().optional(),
        locality: z.string(),
        postal_code: z.string(),
        region: z.string().optional(),
        country_code: CountryCode$inboundSchema,
        email: z.string().optional(),
        phone: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ".tag": "dotTag",
            first_name: "firstName",
            last_name: "lastName",
            street_address1: "streetAddress1",
            street_address2: "streetAddress2",
            postal_code: "postalCode",
            country_code: "countryCode",
        });
    });

/** @internal */
export type AddressReferenceExplicitInput$Outbound = {
    ".tag": string;
    first_name: string;
    last_name: string;
    company?: string | undefined;
    street_address1: string;
    street_address2?: string | undefined;
    locality: string;
    postal_code: string;
    region?: string | undefined;
    country_code: string;
    email?: string | undefined;
    phone?: string | undefined;
};

/** @internal */
export const AddressReferenceExplicitInput$outboundSchema: z.ZodType<
    AddressReferenceExplicitInput$Outbound,
    z.ZodTypeDef,
    AddressReferenceExplicitInput
> = z
    .object({
        dotTag: AddressReferenceExplicitTag$outboundSchema,
        firstName: z.string(),
        lastName: z.string(),
        company: z.string().optional(),
        streetAddress1: z.string(),
        streetAddress2: z.string().optional(),
        locality: z.string(),
        postalCode: z.string(),
        region: z.string().optional(),
        countryCode: CountryCode$outboundSchema,
        email: z.string().optional(),
        phone: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            dotTag: ".tag",
            firstName: "first_name",
            lastName: "last_name",
            streetAddress1: "street_address1",
            streetAddress2: "street_address2",
            postalCode: "postal_code",
            countryCode: "country_code",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressReferenceExplicitInput$ {
    /** @deprecated use `AddressReferenceExplicitInput$inboundSchema` instead. */
    export const inboundSchema = AddressReferenceExplicitInput$inboundSchema;
    /** @deprecated use `AddressReferenceExplicitInput$outboundSchema` instead. */
    export const outboundSchema = AddressReferenceExplicitInput$outboundSchema;
    /** @deprecated use `AddressReferenceExplicitInput$Outbound` instead. */
    export type Outbound = AddressReferenceExplicitInput$Outbound;
}
