/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CountryCode, CountryCode$ } from "./countrycode";
import * as z from "zod";

/**
 * An address saved on an account, i.e. a physical address plus any additional account-specific metadata.
 */
export type AddressListingInput = {
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
export namespace AddressListingInput$ {
    export const inboundSchema: z.ZodType<AddressListingInput, z.ZodTypeDef, unknown> = z
        .object({
            first_name: z.string(),
            last_name: z.string(),
            company: z.string().optional(),
            street_address1: z.string(),
            street_address2: z.string().optional(),
            locality: z.string(),
            postal_code: z.string(),
            region: z.string().optional(),
            country_code: CountryCode$.inboundSchema,
            email: z.string().optional(),
            phone: z.string().optional(),
        })
        .transform((v) => {
            return {
                firstName: v.first_name,
                lastName: v.last_name,
                ...(v.company === undefined ? null : { company: v.company }),
                streetAddress1: v.street_address1,
                ...(v.street_address2 === undefined ? null : { streetAddress2: v.street_address2 }),
                locality: v.locality,
                postalCode: v.postal_code,
                ...(v.region === undefined ? null : { region: v.region }),
                countryCode: v.country_code,
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
            };
        });

    export type Outbound = {
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddressListingInput> = z
        .object({
            firstName: z.string(),
            lastName: z.string(),
            company: z.string().optional(),
            streetAddress1: z.string(),
            streetAddress2: z.string().optional(),
            locality: z.string(),
            postalCode: z.string(),
            region: z.string().optional(),
            countryCode: CountryCode$.outboundSchema,
            email: z.string().optional(),
            phone: z.string().optional(),
        })
        .transform((v) => {
            return {
                first_name: v.firstName,
                last_name: v.lastName,
                ...(v.company === undefined ? null : { company: v.company }),
                street_address1: v.streetAddress1,
                ...(v.streetAddress2 === undefined ? null : { street_address2: v.streetAddress2 }),
                locality: v.locality,
                postal_code: v.postalCode,
                ...(v.region === undefined ? null : { region: v.region }),
                country_code: v.countryCode,
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
            };
        });
}
