/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class TestingAccountCreateSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    apiKey: string;
}

export class TestingAccountCreateRequest extends SpeakeasyBase {
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Publishable-Key" })
    xPublishableKey: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    accountTestCreationData: components.AccountTestCreationData;
}

export class TestingAccountCreateResponse extends SpeakeasyBase {
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
     * The account was successfully created
     */
    @SpeakeasyMetadata()
    accountTestCreationData?: components.AccountTestCreationDataOutput;
}
