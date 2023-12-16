# Testing
(*testing*)

## Overview

Endpoints that allow you to generate and retrieve test data to verify certain
flows in non-production environments.


### Available Operations

* [createAccount](#createaccount) - Create a test account
* [getCreditCard](#getcreditcard) - Retrieve a test credit card, including its token

## createAccount

Create a Bolt shopper account for testing purposes.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { EmailState, PhoneState } from "@boltpay/bolt-typescript-sdk/models/components";
import { TestingAccountCreateSecurity } from "@boltpay/bolt-typescript-sdk/models/operations";

async function run() {
  const sdk = new BoltTypescriptSDK();

  const xPublishableKey = "string";
  const accountTestCreationData = {
    emailState: EmailState.Unverified,
    phoneState: PhoneState.Verified,
    isMigrated: true,
    hasAddress: true,
    hasCreditCard: true,
  };
  const operationSecurity: TestingAccountCreateSecurity = "<YOUR_API_KEY_HERE>";
  const res = await sdk.testing.createAccount(operationSecurity, xPublishableKey, accountTestCreationData);

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
| `security`                                                                                                                                                                     | [operations.TestingAccountCreateSecurity](../../models/operations/testingaccountcreatesecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `xPublishableKey`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The publicly viewable identifier used to identify a merchant division.                                                                                                         |
| `accountTestCreationData`                                                                                                                                                      | [components.AccountTestCreationData](../../models/components/accounttestcreationdata.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.TestingAccountCreateResponse](../../models/operations/testingaccountcreateresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## getCreditCard

Retrieve test credit card information. This includes its token, which is
generated against the `4111 1111 1111 1004` test card.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { TestingCreditCardGetSecurity } from "@boltpay/bolt-typescript-sdk/models/operations";

async function run() {
  const sdk = new BoltTypescriptSDK();

  
  const operationSecurity: TestingCreditCardGetSecurity = "<YOUR_API_KEY_HERE>";
  const res = await sdk.testing.getCreditCard(operationSecurity);

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
| `security`                                                                                                                                                                     | [operations.TestingCreditCardGetSecurity](../../models/operations/testingcreditcardgetsecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.TestingCreditCardGetResponse](../../models/operations/testingcreditcardgetresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |
