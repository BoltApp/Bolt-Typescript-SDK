/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The type of error returned
 */
export enum DotTag {
    Unauthorized = "unauthorized",
    Forbidden = "forbidden",
    UnprocessableRequest = "unprocessable_request",
    NotFound = "not_found",
}

export type ErrorTData = {
    /**
     * The type of error returned
     */
    dotTag: DotTag;
    /**
     * A human-readable error message, which might include information specific to
     *
     * @remarks
     * the request that was made.
     *
     */
    message: string;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse1?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse2?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse3?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse4?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse5?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse6?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse7?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse8?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse9?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse10?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse11?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse12?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse13?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse14?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse15?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse16?: Response | undefined;
};

export class ErrorT extends Error {
    /**
     * The type of error returned
     */
    dotTag: DotTag;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse1?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse2?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse3?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse4?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse5?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse6?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse7?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse8?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse9?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse10?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse11?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse12?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse13?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse14?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse15?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse16?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: ErrorTData;

    constructor(err: ErrorTData) {
        super("");
        this.data$ = err;

        this.dotTag = err.dotTag;
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }
        if (err.rawResponse1 != null) {
            this.rawResponse1 = err.rawResponse1;
        }
        if (err.rawResponse2 != null) {
            this.rawResponse2 = err.rawResponse2;
        }
        if (err.rawResponse3 != null) {
            this.rawResponse3 = err.rawResponse3;
        }
        if (err.rawResponse4 != null) {
            this.rawResponse4 = err.rawResponse4;
        }
        if (err.rawResponse5 != null) {
            this.rawResponse5 = err.rawResponse5;
        }
        if (err.rawResponse6 != null) {
            this.rawResponse6 = err.rawResponse6;
        }
        if (err.rawResponse7 != null) {
            this.rawResponse7 = err.rawResponse7;
        }
        if (err.rawResponse8 != null) {
            this.rawResponse8 = err.rawResponse8;
        }
        if (err.rawResponse9 != null) {
            this.rawResponse9 = err.rawResponse9;
        }
        if (err.rawResponse10 != null) {
            this.rawResponse10 = err.rawResponse10;
        }
        if (err.rawResponse11 != null) {
            this.rawResponse11 = err.rawResponse11;
        }
        if (err.rawResponse12 != null) {
            this.rawResponse12 = err.rawResponse12;
        }
        if (err.rawResponse13 != null) {
            this.rawResponse13 = err.rawResponse13;
        }
        if (err.rawResponse14 != null) {
            this.rawResponse14 = err.rawResponse14;
        }
        if (err.rawResponse15 != null) {
            this.rawResponse15 = err.rawResponse15;
        }
        if (err.rawResponse16 != null) {
            this.rawResponse16 = err.rawResponse16;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "ErrorT";
    }
}

/** @internal */
export namespace DotTag$ {
    export const inboundSchema = z.nativeEnum(DotTag);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ErrorT$ {
    export const inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
        .object({
            ".tag": DotTag$.inboundSchema,
            message: z.string(),
            RawResponse: z.instanceof(Response).optional(),
            RawResponse1: z.instanceof(Response).optional(),
            RawResponse2: z.instanceof(Response).optional(),
            RawResponse3: z.instanceof(Response).optional(),
            RawResponse4: z.instanceof(Response).optional(),
            RawResponse5: z.instanceof(Response).optional(),
            RawResponse6: z.instanceof(Response).optional(),
            RawResponse7: z.instanceof(Response).optional(),
            RawResponse8: z.instanceof(Response).optional(),
            RawResponse9: z.instanceof(Response).optional(),
            RawResponse10: z.instanceof(Response).optional(),
            RawResponse11: z.instanceof(Response).optional(),
            RawResponse12: z.instanceof(Response).optional(),
            RawResponse13: z.instanceof(Response).optional(),
            RawResponse14: z.instanceof(Response).optional(),
            RawResponse15: z.instanceof(Response).optional(),
            RawResponse16: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new ErrorT({
                dotTag: v[".tag"],
                message: v.message,
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.RawResponse1 === undefined ? null : { rawResponse1: v.RawResponse1 }),
                ...(v.RawResponse2 === undefined ? null : { rawResponse2: v.RawResponse2 }),
                ...(v.RawResponse3 === undefined ? null : { rawResponse3: v.RawResponse3 }),
                ...(v.RawResponse4 === undefined ? null : { rawResponse4: v.RawResponse4 }),
                ...(v.RawResponse5 === undefined ? null : { rawResponse5: v.RawResponse5 }),
                ...(v.RawResponse6 === undefined ? null : { rawResponse6: v.RawResponse6 }),
                ...(v.RawResponse7 === undefined ? null : { rawResponse7: v.RawResponse7 }),
                ...(v.RawResponse8 === undefined ? null : { rawResponse8: v.RawResponse8 }),
                ...(v.RawResponse9 === undefined ? null : { rawResponse9: v.RawResponse9 }),
                ...(v.RawResponse10 === undefined ? null : { rawResponse10: v.RawResponse10 }),
                ...(v.RawResponse11 === undefined ? null : { rawResponse11: v.RawResponse11 }),
                ...(v.RawResponse12 === undefined ? null : { rawResponse12: v.RawResponse12 }),
                ...(v.RawResponse13 === undefined ? null : { rawResponse13: v.RawResponse13 }),
                ...(v.RawResponse14 === undefined ? null : { rawResponse14: v.RawResponse14 }),
                ...(v.RawResponse15 === undefined ? null : { rawResponse15: v.RawResponse15 }),
                ...(v.RawResponse16 === undefined ? null : { rawResponse16: v.RawResponse16 }),
            });
        });

    export type Outbound = {
        ".tag": string;
        message: string;
        RawResponse?: never | undefined;
        RawResponse1?: never | undefined;
        RawResponse2?: never | undefined;
        RawResponse3?: never | undefined;
        RawResponse4?: never | undefined;
        RawResponse5?: never | undefined;
        RawResponse6?: never | undefined;
        RawResponse7?: never | undefined;
        RawResponse8?: never | undefined;
        RawResponse9?: never | undefined;
        RawResponse10?: never | undefined;
        RawResponse11?: never | undefined;
        RawResponse12?: never | undefined;
        RawResponse13?: never | undefined;
        RawResponse14?: never | undefined;
        RawResponse15?: never | undefined;
        RawResponse16?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorT> = z
        .instanceof(ErrorT)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    dotTag: DotTag$.outboundSchema,
                    message: z.string(),
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse1: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse2: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse3: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse4: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse5: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse6: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse7: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse8: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse9: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse10: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse11: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse12: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse13: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse14: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse15: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                    rawResponse16: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                })
                .transform((v) => {
                    return {
                        ".tag": v.dotTag,
                        message: v.message,
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                        ...(v.rawResponse1 === undefined ? null : { RawResponse1: v.rawResponse1 }),
                        ...(v.rawResponse2 === undefined ? null : { RawResponse2: v.rawResponse2 }),
                        ...(v.rawResponse3 === undefined ? null : { RawResponse3: v.rawResponse3 }),
                        ...(v.rawResponse4 === undefined ? null : { RawResponse4: v.rawResponse4 }),
                        ...(v.rawResponse5 === undefined ? null : { RawResponse5: v.rawResponse5 }),
                        ...(v.rawResponse6 === undefined ? null : { RawResponse6: v.rawResponse6 }),
                        ...(v.rawResponse7 === undefined ? null : { RawResponse7: v.rawResponse7 }),
                        ...(v.rawResponse8 === undefined ? null : { RawResponse8: v.rawResponse8 }),
                        ...(v.rawResponse9 === undefined ? null : { RawResponse9: v.rawResponse9 }),
                        ...(v.rawResponse10 === undefined
                            ? null
                            : { RawResponse10: v.rawResponse10 }),
                        ...(v.rawResponse11 === undefined
                            ? null
                            : { RawResponse11: v.rawResponse11 }),
                        ...(v.rawResponse12 === undefined
                            ? null
                            : { RawResponse12: v.rawResponse12 }),
                        ...(v.rawResponse13 === undefined
                            ? null
                            : { RawResponse13: v.rawResponse13 }),
                        ...(v.rawResponse14 === undefined
                            ? null
                            : { RawResponse14: v.rawResponse14 }),
                        ...(v.rawResponse15 === undefined
                            ? null
                            : { RawResponse15: v.rawResponse15 }),
                        ...(v.rawResponse16 === undefined
                            ? null
                            : { RawResponse16: v.rawResponse16 }),
                    };
                })
        );
}