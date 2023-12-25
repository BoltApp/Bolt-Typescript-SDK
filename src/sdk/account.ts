/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Account extends ClientSDK {
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
     * Retrieve account details
     *
     * @remarks
     * Retrieve a shopper's account details, such as addresses and payment information
     */
    async getDetails(
        xPublishableKey: string,
        options?: RequestOptions
    ): Promise<operations.AccountGetResponse> {
        const input$: operations.AccountGetRequest = {
            xPublishableKey: xPublishableKey,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.AccountGetRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/account")();

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
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
            const result = operations.AccountGetResponse$.inboundSchema.parse({
                ...responseFields$,
                account: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorT$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.AccountGetResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Add an address
     *
     * @remarks
     * Add an address to the shopper's account
     */
    async addAddress(
        xPublishableKey: string,
        addressListing: components.AddressListingInput,
        options?: RequestOptions
    ): Promise<operations.AccountAddressCreateResponse> {
        const input$: operations.AccountAddressCreateRequest = {
            xPublishableKey: xPublishableKey,
            addressListing: addressListing,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.AccountAddressCreateRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$["address-listing"], { explode: true });

        const path$ = this.templateURLComponent("/account/addresses")();

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "post",
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
            const result = operations.AccountAddressCreateResponse$.inboundSchema.parse({
                ...responseFields$,
                "address-listing": responseBody,
            });
            return result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.AccountAddressCreateResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Edit an existing address
     *
     * @remarks
     * Edit an existing address on the shopper's account. This does not edit addresses
     * that are already associated with other resources, such as transactions or
     * shipments.
     *
     */
    async updateAddress(
        id: string,
        xPublishableKey: string,
        addressListing: components.AddressListingInput,
        options?: RequestOptions
    ): Promise<operations.AccountAddressEditResponse> {
        const input$: operations.AccountAddressEditRequest = {
            id: id,
            xPublishableKey: xPublishableKey,
            addressListing: addressListing,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.AccountAddressEditRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$["address-listing"], { explode: true });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/account/addresses/{id}")(pathParams$);

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "put",
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
            const result = operations.AccountAddressEditResponse$.inboundSchema.parse({
                ...responseFields$,
                "address-listing": responseBody,
            });
            return result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.AccountAddressEditResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Delete an existing address
     *
     * @remarks
     * Delete an existing address. Deleting an address does not invalidate transactions or
     * shipments that are associated with it.
     *
     */
    async deleteAddress(
        id: string,
        xPublishableKey: string,
        options?: RequestOptions
    ): Promise<operations.AccountAddressDeleteResponse> {
        const input$: operations.AccountAddressDeleteRequest = {
            id: id,
            xPublishableKey: xPublishableKey,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.AccountAddressDeleteRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/account/addresses/{id}")(pathParams$);

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "delete",
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

        if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorT$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchStatusCode(response, [200, "default"])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.AccountAddressDeleteResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Determine the existence of a Bolt account
     *
     * @remarks
     * Determine whether or not an identifier is associated with an existing Bolt account.
     */
    async detect(
        identifier: components.Identifier,
        xPublishableKey: string,
        options?: RequestOptions
    ): Promise<operations.AccountExistsResponse> {
        const input$: operations.AccountExistsRequest = {
            identifier: identifier,
            xPublishableKey: xPublishableKey,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.AccountExistsRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/account/exists")();

        const query$ = [
            enc$.encodeForm("identifier", payload$.identifier, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorT$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchStatusCode(response, [200, "default"])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.AccountExistsResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Add a payment method to a shopper's Bolt account Wallet.
     *
     * @remarks
     * Add a payment method to a shopper's Bolt account Wallet. For security purposes, this request must come from
     * your backend because authentication requires the use of your private key.<br />
     * **Note**: Before using this API, the credit card details must be tokenized using Bolt's JavaScript library function,
     * which is documented in [Install the Bolt Tokenizer](https://help.bolt.com/developers/references/bolt-tokenizer).
     *
     */
    async addPaymentMethod(
        xPublishableKey: string,
        requestBody: any,
        options?: RequestOptions
    ): Promise<operations.AccountAddPaymentMethodResponse> {
        const input$: operations.AccountAddPaymentMethodRequest = {
            xPublishableKey: xPublishableKey,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.AccountAddPaymentMethodRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const path$ = this.templateURLComponent("/account/payment-methods")();

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "post",
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
            const result = operations.AccountAddPaymentMethodResponse$.inboundSchema.parse({
                ...responseFields$,
                "payment-method": responseBody,
            });
            return result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.AccountAddPaymentMethodResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Delete an existing payment method
     *
     * @remarks
     * Delete an existing payment method. Deleting a payment method does not invalidate transactions or
     * orders that are associated with it.
     *
     */
    async deletePaymentMethod(
        id: string,
        xPublishableKey: string,
        options?: RequestOptions
    ): Promise<operations.AccountPaymentMethodDeleteResponse> {
        const input$: operations.AccountPaymentMethodDeleteRequest = {
            id: id,
            xPublishableKey: xPublishableKey,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.AccountPaymentMethodDeleteRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/account/payment-methods/{id}")(pathParams$);

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "delete",
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

        if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorT$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchStatusCode(response, [200, "default"])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.AccountPaymentMethodDeleteResponse$.inboundSchema.parse(responseFields$);
    }
}
