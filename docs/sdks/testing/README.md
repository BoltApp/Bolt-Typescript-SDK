# Testing
(*testing*)

## Overview

Endpoints that allow you to generate and retrieve test data to verify certain
flows in non-production environments.


### Available Operations

* [createAccount](#createaccount) - Create a test account
* [testingAccountPhoneGet](#testingaccountphoneget) - Get a random phone number
* [getCreditCard](#getcreditcard) - Retrieve a test credit card, including its token

## createAccount

Create a Bolt shopper account for testing purposes.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { EmailState, PhoneState } from "@boltpay/bolt-typescript-sdk/models/components";

const boltTypescriptSDK = new BoltTypescriptSDK();

async function run() {
  const result = await boltTypescriptSDK.testing.createAccount("<YOUR_API_KEY_HERE>", "<value>", {
    emailState: EmailState.Unverified,
    phoneState: PhoneState.Verified,
    isMigrated: true,
    hasAddress: true,
    hasCreditCard: true,
  });

  // Handle the result
  console.log(result)
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

**Promise\<[operations.TestingAccountCreateResponse](../../models/operations/testingaccountcreateresponse.md)\>**
### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.TestingAccountCreateResponseBody | 4XX                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |

## testingAccountPhoneGet

Get a random, fictitious phone number that is not assigned to any existing account.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

const boltTypescriptSDK = new BoltTypescriptSDK();

async function run() {
  const result = await boltTypescriptSDK.testing.testingAccountPhoneGet("<YOUR_API_KEY_HERE>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.TestingAccountPhoneGetSecurity](../../models/operations/testingaccountphonegetsecurity.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `xPublishableKey`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The publicly viewable identifier used to identify a merchant division.                                                                                                         |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.TestingAccountPhoneGetResponse](../../models/operations/testingaccountphonegetresponse.md)\>**
### Errors

| Error Object                              | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.TestingAccountPhoneGetResponseBody | 4XX                                       | application/json                          |
| errors.SDKError                           | 4xx-5xx                                   | */*                                       |

## getCreditCard

Retrieve test credit card information. This includes its token, which can be used to process payments.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { Type } from "@boltpay/bolt-typescript-sdk/models/operations";

const boltTypescriptSDK = new BoltTypescriptSDK();

async function run() {
  const result = await boltTypescriptSDK.testing.getCreditCard({
    type: Type.Approve,
  }, "<YOUR_API_KEY_HERE>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TestingCreditCardGetRequestBody](../../models/operations/testingcreditcardgetrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.TestingCreditCardGetSecurity](../../models/operations/testingcreditcardgetsecurity.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.TestingCreditCardGetResponse](../../models/operations/testingcreditcardgetresponse.md)\>**
### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.TestingCreditCardGetResponseBody | 4XX                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |
