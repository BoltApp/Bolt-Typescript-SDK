/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The type of error returned
 */
export enum SchemasTag {
    InvalidInputParameter = "invalid_input_parameter",
}

/**
 * An error that pertains to validation of a specific field in the request.
 */
export type FieldErrorData = {
    /**
     * The type of error returned
     */
    dotTag: SchemasTag;
    /**
     * A human-readable error message, which might include information specific to
     *
     * @remarks
     * the request that was made.
     *
     */
    message: string;
    /**
     * The field (in its hierarchical form) that is failing validation.
     */
    field: string;
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

/**
 * An error that pertains to validation of a specific field in the request.
 */
export class FieldError extends Error {
    /**
     * The type of error returned
     */
    dotTag: SchemasTag;
    /**
     * The field (in its hierarchical form) that is failing validation.
     */
    field: string;
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
    data$: FieldErrorData;

    constructor(err: FieldErrorData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.dotTag = err.dotTag;
        this.field = err.field;
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

        this.name = "FieldError";
    }
}

/** @internal */
export const SchemasTag$inboundSchema: z.ZodNativeEnum<typeof SchemasTag> =
    z.nativeEnum(SchemasTag);

/** @internal */
export const SchemasTag$outboundSchema: z.ZodNativeEnum<typeof SchemasTag> =
    SchemasTag$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasTag$ {
    /** @deprecated use `SchemasTag$inboundSchema` instead. */
    export const inboundSchema = SchemasTag$inboundSchema;
    /** @deprecated use `SchemasTag$outboundSchema` instead. */
    export const outboundSchema = SchemasTag$outboundSchema;
}

/** @internal */
export const FieldError$inboundSchema: z.ZodType<FieldError, z.ZodTypeDef, unknown> = z
    .object({
        ".tag": SchemasTag$inboundSchema,
        message: z.string(),
        field: z.string(),
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
        const remapped = remap$(v, {
            ".tag": "dotTag",
            RawResponse: "rawResponse",
            RawResponse1: "rawResponse1",
            RawResponse2: "rawResponse2",
            RawResponse3: "rawResponse3",
            RawResponse4: "rawResponse4",
            RawResponse5: "rawResponse5",
            RawResponse6: "rawResponse6",
            RawResponse7: "rawResponse7",
            RawResponse8: "rawResponse8",
            RawResponse9: "rawResponse9",
            RawResponse10: "rawResponse10",
            RawResponse11: "rawResponse11",
            RawResponse12: "rawResponse12",
            RawResponse13: "rawResponse13",
            RawResponse14: "rawResponse14",
            RawResponse15: "rawResponse15",
            RawResponse16: "rawResponse16",
        });

        return new FieldError(remapped);
    });

/** @internal */
export type FieldError$Outbound = {
    ".tag": string;
    message: string;
    field: string;
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

/** @internal */
export const FieldError$outboundSchema: z.ZodType<FieldError$Outbound, z.ZodTypeDef, FieldError> = z
    .instanceof(FieldError)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                dotTag: SchemasTag$outboundSchema,
                message: z.string(),
                field: z.string(),
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
                return remap$(v, {
                    dotTag: ".tag",
                    rawResponse: "RawResponse",
                    rawResponse1: "RawResponse1",
                    rawResponse2: "RawResponse2",
                    rawResponse3: "RawResponse3",
                    rawResponse4: "RawResponse4",
                    rawResponse5: "RawResponse5",
                    rawResponse6: "RawResponse6",
                    rawResponse7: "RawResponse7",
                    rawResponse8: "RawResponse8",
                    rawResponse9: "RawResponse9",
                    rawResponse10: "RawResponse10",
                    rawResponse11: "RawResponse11",
                    rawResponse12: "RawResponse12",
                    rawResponse13: "RawResponse13",
                    rawResponse14: "RawResponse14",
                    rawResponse15: "RawResponse15",
                    rawResponse16: "RawResponse16",
                });
            })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldError$ {
    /** @deprecated use `FieldError$inboundSchema` instead. */
    export const inboundSchema = FieldError$inboundSchema;
    /** @deprecated use `FieldError$outboundSchema` instead. */
    export const outboundSchema = FieldError$outboundSchema;
    /** @deprecated use `FieldError$Outbound` instead. */
    export type Outbound = FieldError$Outbound;
}
