/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The payment operation cannot complete
 */
export type PaymentsInitializeResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * The payment operation cannot complete
 */
export class PaymentsInitializeResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: PaymentsInitializeResponseBodyData;

    constructor(err: PaymentsInitializeResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "PaymentsInitializeResponseBody";
    }
}

/** @internal */
export namespace PaymentsInitializeResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<PaymentsInitializeResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new PaymentsInitializeResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentsInitializeResponseBody> =
        z
            .instanceof(PaymentsInitializeResponseBody)
            .transform((v) => v.data$)
            .pipe(
                z
                    .object({
                        rawResponse: z
                            .instanceof(Response)
                            .transform(() => {
                                throw new Error("Response cannot be serialized");
                            })
                            .optional(),
                    })
                    .transform((v) => {
                        return {
                            ...(v.rawResponse === undefined
                                ? null
                                : { RawResponse: v.rawResponse }),
                        };
                    })
            );
}
