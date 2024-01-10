# Bolt-Typescript-SDK

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/BoltApp/Bolt-Typescript-SDK.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/BoltApp/Bolt-Typescript-SDK/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README
<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @boltpay/bolt-typescript-sdk
```

### Yarn

```bash
yarn add @boltpay/bolt-typescript-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

async function run() {
    const sdk = new BoltTypescriptSDK({
        security: {
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const xPublishableKey = "string";

    const res = await sdk.account.getDetails(xPublishableKey);

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [account](docs/sdks/account/README.md)

* [getDetails](docs/sdks/account/README.md#getdetails) - Retrieve account details
* [addAddress](docs/sdks/account/README.md#addaddress) - Add an address
* [updateAddress](docs/sdks/account/README.md#updateaddress) - Edit an existing address
* [deleteAddress](docs/sdks/account/README.md#deleteaddress) - Delete an existing address
* [addPaymentMethod](docs/sdks/account/README.md#addpaymentmethod) - Add a payment method to a shopper's Bolt account Wallet.
* [deletePaymentMethod](docs/sdks/account/README.md#deletepaymentmethod) - Delete an existing payment method


### [payments.guest](docs/sdks/guest/README.md)

* [initialize](docs/sdks/guest/README.md#initialize) - Initialize a Bolt payment for guest shoppers
* [update](docs/sdks/guest/README.md#update) - Update an existing guest payment
* [performAction](docs/sdks/guest/README.md#performaction) - Perform an irreversible action (e.g. finalize) on a pending guest payment

### [payments.loggedIn](docs/sdks/loggedin/README.md)

* [initialize](docs/sdks/loggedin/README.md#initialize) - Initialize a Bolt payment for logged in shoppers
* [update](docs/sdks/loggedin/README.md#update) - Update an existing payment
* [performAction](docs/sdks/loggedin/README.md#performaction) - Perform an irreversible action (e.g. finalize) on a pending payment

### [oAuth](docs/sdks/oauth/README.md)

* [getToken](docs/sdks/oauth/README.md#gettoken) - Get OAuth token

### [testing](docs/sdks/testing/README.md)

* [createAccount](docs/sdks/testing/README.md#createaccount) - Create a test account
* [getCreditCard](docs/sdks/testing/README.md#getcreditcard) - Retrieve a test credit card, including its token
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import * as errors from "@boltpay/bolt-typescript-sdk/models/errors";

async function run() {
    const sdk = new BoltTypescriptSDK({
        security: {
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const xPublishableKey = "string";

    const res = await sdk.account.getDetails(xPublishableKey).catch((err) => {
        throw err;
    });

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://{environment}.bolt.com/v3` | `environment` (default is `api-sandbox`) |



#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `environment: models.ServerEnvironment`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { HTTPClient } from "@boltpay/bolt-typescript-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new BoltTypescriptSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `oauth`      | oauth2       | OAuth2 token |
| `apiKey`     | apiKey       | API key      |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

async function run() {
    const sdk = new BoltTypescriptSDK({
        security: {
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const xPublishableKey = "string";

    const res = await sdk.account.getDetails(xPublishableKey);

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { Currency } from "@boltpay/bolt-typescript-sdk/models/components";
import { GuestPaymentsInitializeSecurity } from "@boltpay/bolt-typescript-sdk/models/operations";

async function run() {
    const sdk = new BoltTypescriptSDK();

    const xPublishableKey = "string";
    const guestPaymentInitializeRequest = {
        profile: {
            createAccount: true,
            firstName: "Alice",
            lastName: "Baker",
            email: "alice@example.com",
            phone: "+14155550199",
        },
        cart: {
            orderReference: "order_100",
            orderDescription: "Order #1234567890",
            displayId: "215614191",
            shipments: [
                {
                    address: "string",
                    cost: {
                        currency: Currency.Usd,
                        units: 900,
                    },
                    carrier: "FedEx",
                },
            ],
            discounts: [
                {
                    amount: {
                        currency: Currency.Usd,
                        units: 900,
                    },
                    code: "SUMMER10DISCOUNT",
                    detailsUrl: "https://www.example.com/SUMMER-SALE",
                },
            ],
            items: [
                {
                    name: "Bolt Swag Bag",
                    reference: "item_100",
                    description: "Large tote with Bolt logo.",
                    totalAmount: {
                        currency: Currency.Usd,
                        units: 900,
                    },
                    unitPrice: 1000,
                    quantity: 1,
                    imageUrl: "https://www.example.com/products/123456/images/1.png",
                },
            ],
            total: {
                currency: Currency.Usd,
                units: 900,
            },
            tax: {
                currency: Currency.Usd,
                units: 900,
            },
        },
        paymentMethod: "string",
    };
    const operationSecurity: GuestPaymentsInitializeSecurity = "<YOUR_API_KEY_HERE>";

    const res = await sdk.payments.guest.initialize(
        operationSecurity,
        xPublishableKey,
        guestPaymentInitializeRequest
    );

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
