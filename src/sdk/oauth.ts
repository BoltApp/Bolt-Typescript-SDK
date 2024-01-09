/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class OAuth extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Get OAuth token
     *
     * @remarks
     * Retrieve a new or refresh an existing OAuth token.
     */
    async getToken(
        input: components.GetAccessTokenRequest,
        options?: RequestOptions
    ): Promise<operations.OauthGetTokenResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/x-www-form-urlencoded");
        headers$.set("Accept", "application/json");

        const payload$ = components.GetAccessTokenRequest$.outboundSchema.parse(input);
        const body$ = Object.entries(payload$ || {})
            .map(([k, v]) => {
                return enc$.encodeBodyForm(k, v, { charEncoding: "percent" });
            })
            .join("&");

        const path$ = this.templateURLComponent("/oauth/token")();

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.OauthGetTokenResponse$.inboundSchema.parse({
                ...responseFields$,
                "get-access-token-response": responseBody,
            });
            return result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.OauthGetTokenResponse$.inboundSchema.parse(responseFields$);
    }
}
