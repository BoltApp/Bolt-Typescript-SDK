# Bolt-Typescript-SDK

<div align="left">
    <a href="https://github.com/BoltApp/Bolt-Typescript-SDK.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/BoltApp/Bolt-Typescript-SDK/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
</div>

<!-- Start Summary [summary] -->
## Summary

Bolt API Reference: A comprehensive Bolt API reference for interacting with Accounts, Payments, Orders and more.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @boltpay/bolt-typescript-sdk
```

### PNPM

```bash
pnpm add @boltpay/bolt-typescript-sdk
```

### Bun

```bash
bun add @boltpay/bolt-typescript-sdk
```

### Yarn

```bash
yarn add @boltpay/bolt-typescript-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

const boltTypescriptSDK = new BoltTypescriptSDK({
    security: {
        oauth: "<YOUR_OAUTH_HERE>",
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await boltTypescriptSDK.account.getDetails("<value>", "<value>");

    // Handle the result
    console.log(result);
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
* [addPaymentMethod](docs/sdks/account/README.md#addpaymentmethod) - Add a payment method
* [deletePaymentMethod](docs/sdks/account/README.md#deletepaymentmethod) - Delete an existing payment method


### [payments.loggedIn](docs/sdks/loggedin/README.md)

* [initialize](docs/sdks/loggedin/README.md#initialize) - Initialize a Bolt payment for logged in shoppers
* [performAction](docs/sdks/loggedin/README.md#performaction) - Finalize a pending payment

### [payments.guest](docs/sdks/guest/README.md)

* [initialize](docs/sdks/guest/README.md#initialize) - Initialize a Bolt payment for guest shoppers
* [performAction](docs/sdks/guest/README.md#performaction) - Finalize a pending guest payment

### [orders](docs/sdks/orders/README.md)

* [ordersCreate](docs/sdks/orders/README.md#orderscreate) - Create an order that was prepared outside the Bolt ecosystem.

### [oAuth](docs/sdks/oauth/README.md)

* [getToken](docs/sdks/oauth/README.md#gettoken) - Get OAuth token

### [testing](docs/sdks/testing/README.md)

* [createAccount](docs/sdks/testing/README.md#createaccount) - Create a test account
* [testingAccountPhoneGet](docs/sdks/testing/README.md#testingaccountphoneget) - Get a random phone number
* [getCreditCard](docs/sdks/testing/README.md#getcreditcard) - Retrieve a tokenized test credit card
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorT     | 4XX               | application/json  |
| errors.FieldError | 4XX               | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { ErrorT, FieldError, SDKValidationError } from "@boltpay/bolt-typescript-sdk/models/errors";

const boltTypescriptSDK = new BoltTypescriptSDK({
    security: {
        oauth: "<YOUR_OAUTH_HERE>",
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    let result;
    try {
        result = await boltTypescriptSDK.account.getDetails("<value>", "<value>");

        // Handle the result
        console.log(result);
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof ErrorT: {
                // Handle err.data$: ErrorTData
                return;
            }
            case err instanceof FieldError: {
                // Handle err.data$: FieldErrorData
                return;
            }
            default: {
                throw err;
            }
        }
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://{environment}.bolt.com/v3` | `environment` (default is `api-sandbox`) |

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

const boltTypescriptSDK = new BoltTypescriptSDK({
    serverIdx: 0,
    security: {
        oauth: "<YOUR_OAUTH_HERE>",
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await boltTypescriptSDK.account.getDetails("<value>", "<value>");

    // Handle the result
    console.log(result);
}

run();

```

#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `environment: models.ServerEnvironment`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

const boltTypescriptSDK = new BoltTypescriptSDK({
    serverURL: "https://{environment}.bolt.com/v3",
    security: {
        oauth: "<YOUR_OAUTH_HERE>",
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await boltTypescriptSDK.account.getDetails("<value>", "<value>");

    // Handle the result
    console.log(result);
}

run();

```
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
    signal: request.signal || AbortSignal.timeout(5000)
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

const boltTypescriptSDK = new BoltTypescriptSDK({
    security: {
        oauth: "<YOUR_OAUTH_HERE>",
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await boltTypescriptSDK.account.getDetails("<value>", "<value>");

    // Handle the result
    console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import {
    AddressReferenceExplicitTag,
    CountryCode,
    CreditCardNetwork,
    Currency,
    DotTag,
} from "@boltpay/bolt-typescript-sdk/models/components";

const boltTypescriptSDK = new BoltTypescriptSDK();

async function run() {
    const result = await boltTypescriptSDK.payments.guest.initialize(
        {
            apiKey: "<YOUR_API_KEY_HERE>",
        },
        "<value>",
        "<value>",
        {
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
                        address: {
                            dotTag: AddressReferenceExplicitTag.Explicit,
                            firstName: "Alice",
                            lastName: "Baker",
                            company: "ACME Corporation",
                            streetAddress1: "535 Mission St, Ste 1401",
                            streetAddress2: "c/o Shipping Department",
                            locality: "San Francisco",
                            postalCode: "94105",
                            region: "CA",
                            countryCode: CountryCode.Us,
                            email: "alice@example.com",
                            phone: "+14155550199",
                        },
                        cost: {
                            currency: Currency.Usd,
                            units: 10000,
                        },
                        carrier: "FedEx",
                    },
                ],
                discounts: [
                    {
                        amount: {
                            currency: Currency.Usd,
                            units: 10000,
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
                            units: 9000,
                        },
                        unitPrice: 1000,
                        quantity: 9,
                        imageUrl: "https://www.example.com/products/123456/images/1.png",
                    },
                ],
                total: {
                    currency: Currency.Usd,
                    units: 9000,
                },
                tax: {
                    currency: Currency.Usd,
                    units: 100,
                },
            },
            paymentMethod: {
                dotTag: DotTag.CreditCard,
                billingAddress: {
                    dotTag: AddressReferenceExplicitTag.Explicit,
                    firstName: "Alice",
                    lastName: "Baker",
                    company: "ACME Corporation",
                    streetAddress1: "535 Mission St, Ste 1401",
                    streetAddress2: "c/o Shipping Department",
                    locality: "San Francisco",
                    postalCode: "94105",
                    region: "CA",
                    countryCode: CountryCode.Us,
                    email: "alice@example.com",
                    phone: "+14155550199",
                },
                network: CreditCardNetwork.Visa,
                bin: "411111",
                last4: "1004",
                expiration: "2025-03",
                token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
            },
        }
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [accountAddAddress](docs/sdks/account/README.md#addaddress)
- [accountAddPaymentMethod](docs/sdks/account/README.md#addpaymentmethod)
- [accountDeleteAddress](docs/sdks/account/README.md#deleteaddress)
- [accountDeletePaymentMethod](docs/sdks/account/README.md#deletepaymentmethod)
- [accountGetDetails](docs/sdks/account/README.md#getdetails)
- [accountUpdateAddress](docs/sdks/account/README.md#updateaddress)
- [oAuthGetToken](docs/sdks/oauth/README.md#gettoken)
- [ordersOrdersCreate](docs/sdks/orders/README.md#orderscreate)
- [paymentsGuestInitialize](docs/sdks/guest/README.md#initialize)
- [paymentsGuestPerformAction](docs/sdks/guest/README.md#performaction)
- [paymentsLoggedInInitialize](docs/sdks/loggedin/README.md#initialize)
- [paymentsLoggedInPerformAction](docs/sdks/loggedin/README.md#performaction)
- [testingCreateAccount](docs/sdks/testing/README.md#createaccount)
- [testingGetCreditCard](docs/sdks/testing/README.md#getcreditcard)
- [testingTestingAccountPhoneGet](docs/sdks/testing/README.md#testingaccountphoneget)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

const boltTypescriptSDK = new BoltTypescriptSDK({
    security: {
        oauth: "<YOUR_OAUTH_HERE>",
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await boltTypescriptSDK.account.getDetails("<value>", "<value>", {
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

const boltTypescriptSDK = new BoltTypescriptSDK({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    security: {
        oauth: "<YOUR_OAUTH_HERE>",
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await boltTypescriptSDK.account.getDetails("<value>", "<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

const sdk = new BoltTypescriptSDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
</div>
