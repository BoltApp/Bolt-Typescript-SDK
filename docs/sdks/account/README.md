# Account
(*account*)

## Overview

Account endpoints allow you to view and manage shoppers' accounts. For example,
you can add or remove addresses and payment information.


### Available Operations

* [getDetails](#getdetails) - Retrieve account details
* [addAddress](#addaddress) - Add an address
* [updateAddress](#updateaddress) - Edit an existing address
* [deleteAddress](#deleteaddress) - Delete an existing address
* [detect](#detect) - Determine the existence of a Bolt account
* [addPaymentMethod](#addpaymentmethod) - Add a payment method to a shopper's Bolt account Wallet.
* [deletePaymentMethod](#deletepaymentmethod) - Delete an existing payment method

## getDetails

Retrieve a shopper's account details, such as addresses and payment information

### Example Usage

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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xPublishableKey`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The publicly viewable identifier used to identify a merchant division.                                                                                                         |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AccountGetResponse](../../models/operations/accountgetresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## addAddress

Add an address to the shopper's account

### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { CountryCode } from "@boltpay/bolt-typescript-sdk/models/components";

async function run() {
  const sdk = new BoltTypescriptSDK({
      security: {
        oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
      },
    });

  const xPublishableKey = "string";
  const addressListing = {
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
    isDefault: true,
  };
  const res = await sdk.account.addAddress(xPublishableKey, addressListing);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xPublishableKey`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The publicly viewable identifier used to identify a merchant division.                                                                                                         |
| `addressListing`                                                                                                                                                               | [components.AddressListingInput](../../models/components/addresslistinginput.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AccountAddressCreateResponse](../../models/operations/accountaddresscreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateAddress

Edit an existing address on the shopper's account. This does not edit addresses
that are already associated with other resources, such as transactions or
shipments.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { CountryCode } from "@boltpay/bolt-typescript-sdk/models/components";

async function run() {
  const sdk = new BoltTypescriptSDK({
      security: {
        oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
      },
    });

  const id = "D4g3h5tBuVYK9";
  const xPublishableKey = "string";
  const addressListing = {
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
    isDefault: true,
  };
  const res = await sdk.account.updateAddress(id, xPublishableKey, addressListing);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the address to edit                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `xPublishableKey`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The publicly viewable identifier used to identify a merchant division.                                                                                                         |                                                                                                                                                                                |
| `addressListing`                                                                                                                                                               | [components.AddressListingInput](../../models/components/addresslistinginput.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.AccountAddressEditResponse](../../models/operations/accountaddresseditresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteAddress

Delete an existing address. Deleting an address does not invalidate transactions or
shipments that are associated with it.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

async function run() {
  const sdk = new BoltTypescriptSDK({
      security: {
        oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
      },
    });

  const id = "D4g3h5tBuVYK9";
  const xPublishableKey = "string";
  const res = await sdk.account.deleteAddress(id, xPublishableKey);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the address to delete                                                                                                                                                | [object Object]                                                                                                                                                                |
| `xPublishableKey`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The publicly viewable identifier used to identify a merchant division.                                                                                                         |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.AccountAddressDeleteResponse](../../models/operations/accountaddressdeleteresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## detect

Determine whether or not an identifier is associated with an existing Bolt account.

### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { IdentifierType } from "@boltpay/bolt-typescript-sdk/models/components";

async function run() {
  const sdk = new BoltTypescriptSDK({
      security: {
        oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
      },
    });

  const identifier = {
    identifierType: IdentifierType.Email,
    identifierValue: "alice@example.com",
  };
  const xPublishableKey = "string";
  const res = await sdk.account.detect(identifier, xPublishableKey);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identifier`                                                                                                                                                                   | [components.Identifier](../../models/components/identifier.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | A type and value combination that defines the identifier used to detect<br/>the existence of an account.<br/>                                                                  |
| `xPublishableKey`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The publicly viewable identifier used to identify a merchant division.                                                                                                         |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AccountExistsResponse](../../models/operations/accountexistsresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## addPaymentMethod

Add a payment method to a shopper's Bolt account Wallet. For security purposes, this request must come from
your backend because authentication requires the use of your private key.<br />
**Note**: Before using this API, the credit card details must be tokenized using Bolt's JavaScript library function,
which is documented in [Install the Bolt Tokenizer](https://help.bolt.com/developers/references/bolt-tokenizer).


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

async function run() {
  const sdk = new BoltTypescriptSDK({
      security: {
        oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
      },
    });

  const xPublishableKey = "string";
  const requestBody = "string";
  const res = await sdk.account.addPaymentMethod(xPublishableKey, requestBody);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xPublishableKey`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The publicly viewable identifier used to identify a merchant division.                                                                                                         |
| `requestBody`                                                                                                                                                                  | *any*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AccountAddPaymentMethodResponse](../../models/operations/accountaddpaymentmethodresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentMethod

Delete an existing payment method. Deleting a payment method does not invalidate transactions or
orders that are associated with it.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

async function run() {
  const sdk = new BoltTypescriptSDK({
      security: {
        oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
      },
    });

  const id = "D4g3h5tBuVYK9";
  const xPublishableKey = "string";
  const res = await sdk.account.deletePaymentMethod(id, xPublishableKey);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the payment method to delete                                                                                                                                         | [object Object]                                                                                                                                                                |
| `xPublishableKey`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The publicly viewable identifier used to identify a merchant division.                                                                                                         |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.AccountPaymentMethodDeleteResponse](../../models/operations/accountpaymentmethoddeleteresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |
