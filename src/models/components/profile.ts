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
export type Profile = {
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
export const Profile$inboundSchema: z.ZodType<Profile, z.ZodTypeDef, unknown> =
  z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    phone: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "first_name": "firstName",
      "last_name": "lastName",
    });
  });

/** @internal */
export type Profile$Outbound = {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | undefined;
};

/** @internal */
export const Profile$outboundSchema: z.ZodType<
  Profile$Outbound,
  z.ZodTypeDef,
  Profile
> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Profile$ {
  /** @deprecated use `Profile$inboundSchema` instead. */
  export const inboundSchema = Profile$inboundSchema;
  /** @deprecated use `Profile$outboundSchema` instead. */
  export const outboundSchema = Profile$outboundSchema;
  /** @deprecated use `Profile$Outbound` instead. */
  export type Outbound = Profile$Outbound;
}

export function profileToJSON(profile: Profile): string {
  return JSON.stringify(Profile$outboundSchema.parse(profile));
}

export function profileFromJSON(
  jsonString: string,
): SafeParseResult<Profile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Profile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Profile' from JSON`,
  );
}
