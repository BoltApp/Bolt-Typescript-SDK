/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The type of error returned
 */
export enum ErrorTag {
    Unauthorized = "unauthorized",
    Forbidden = "forbidden",
    UnprocessableRequest = "unprocessable_request",
    NotFound = "not_found",
}

export type ErrorT = {
    /**
     * The type of error returned
     */
    dotTag: ErrorTag;
    /**
     * A human-readable error message, which might include information specific to
     *
     * @remarks
     * the request that was made.
     *
     */
    message: string;
};

/** @internal */
export const ErrorTag$ = z.nativeEnum(ErrorTag);

/** @internal */
export namespace ErrorT$ {
    export type Inbound = {
        ".tag": ErrorTag;
        message: string;
    };

    export const inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": ErrorTag$,
            message: z.string(),
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                message: v.message,
            };
        });

    export type Outbound = {
        ".tag": ErrorTag;
        message: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorT> = z
        .object({
            dotTag: ErrorTag$,
            message: z.string(),
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                message: v.message,
            };
        });
}
