/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * An error has occurred, and further details are contained in the response
 */
export type PaymentsUpdateResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * An error has occurred, and further details are contained in the response
 */
export class PaymentsUpdateResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: PaymentsUpdateResponseBodyData;

    constructor(err: PaymentsUpdateResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "PaymentsUpdateResponseBody";
    }
}

/** @internal */
export namespace PaymentsUpdateResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<PaymentsUpdateResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new PaymentsUpdateResponseBody({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });
    export type Outbound = {
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentsUpdateResponseBody> = z
        .instanceof(PaymentsUpdateResponseBody)
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
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                    };
                })
        );
}
