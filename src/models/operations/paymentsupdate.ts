/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class PaymentsUpdateRequest extends SpeakeasyBase {
    /**
     * The ID of the payment to update
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Publishable-Key" })
    xPublishableKey: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    paymentUpdateRequest: components.PaymentUpdateRequest;
}

export class PaymentsUpdateResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * The pending payment was successfully updated
     */
    @SpeakeasyMetadata()
    paymentResponse?: any;
}