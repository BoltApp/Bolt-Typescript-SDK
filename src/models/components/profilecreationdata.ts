/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * An account's identifying information.
 */
export type ProfileCreationData = {
  /**
   * Whether or not an account should be created.
   */
  createAccount: boolean;
  /**
   * The given name of the person associated with this profile.
   */
  firstName: string;
  /**
   * The last name of the person associated with this profile.
   */
  lastName: string;
  /**
   * The email address asscoiated with this profile.
   */
  email: string;
  /**
   * The phone number associated with this profile.
   */
  phone?: string | undefined;
};

/** @internal */
export const ProfileCreationData$inboundSchema: z.ZodType<
  ProfileCreationData,
  z.ZodTypeDef,
  unknown
> = z.object({
  create_account: z.boolean(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "create_account": "createAccount",
    "first_name": "firstName",
    "last_name": "lastName",
  });
});

/** @internal */
export type ProfileCreationData$Outbound = {
  create_account: boolean;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | undefined;
};

/** @internal */
export const ProfileCreationData$outboundSchema: z.ZodType<
  ProfileCreationData$Outbound,
  z.ZodTypeDef,
  ProfileCreationData
> = z.object({
  createAccount: z.boolean(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    createAccount: "create_account",
    firstName: "first_name",
    lastName: "last_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProfileCreationData$ {
  /** @deprecated use `ProfileCreationData$inboundSchema` instead. */
  export const inboundSchema = ProfileCreationData$inboundSchema;
  /** @deprecated use `ProfileCreationData$outboundSchema` instead. */
  export const outboundSchema = ProfileCreationData$outboundSchema;
  /** @deprecated use `ProfileCreationData$Outbound` instead. */
  export type Outbound = ProfileCreationData$Outbound;
}

export function profileCreationDataToJSON(
  profileCreationData: ProfileCreationData,
): string {
  return JSON.stringify(
    ProfileCreationData$outboundSchema.parse(profileCreationData),
  );
}

export function profileCreationDataFromJSON(
  jsonString: string,
): SafeParseResult<ProfileCreationData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProfileCreationData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProfileCreationData' from JSON`,
  );
}
