# OAuth
(*oAuth*)

## Overview

Use the OAuth API to enable your ecommerce server to make API calls on behalf of a Bolt logged-in shopper.
<https://help.bolt.com/products/accounts/direct-api/oauth-guide/>

### Available Operations

* [getToken](#gettoken) - Get OAuth token

## getToken

Retrieve a new or refresh an existing OAuth token.

### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { GrantType, Scope } from "@boltpay/bolt-typescript-sdk/models/components";

const boltTypescriptSDK = new BoltTypescriptSDK();

async function run() {
  const result = await boltTypescriptSDK.oAuth.getToken({
    grantType: GrantType.AuthorizationCode,
    code: "7GSjMRSHs6Ak7C_zvVW6P2IhZOHxMK7HZKW1fMX85ms",
    clientId: "8fd9diIy59sj.IraJdeIgmdsO.fd233434fg2c616cgo932aa6e1e4fc627a9385045gr395222a127gi93c595rg4",
    clientSecret: "23ee7ec7301779eaff451d7c6f6cba322499e3c0ec752f800c72a8f99217e3a8",
    scope: [
      Scope.BoltAccountManage,
      Scope.BoltAccountView,
      Scope.Openid,
    ],
    state: "xyzABC123",
  }, "<value>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BoltTypescriptSDKCore } from "@boltpay/bolt-typescript-sdk/core.js";
import { oAuthGetToken } from "@boltpay/bolt-typescript-sdk/funcs/oAuthGetToken.js";
import { GrantType, Scope } from "@boltpay/bolt-typescript-sdk/models/components";

// Use `BoltTypescriptSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const boltTypescriptSDK = new BoltTypescriptSDKCore();

async function run() {
  const res = await oAuthGetToken(boltTypescriptSDK, {
    grantType: GrantType.AuthorizationCode,
    code: "7GSjMRSHs6Ak7C_zvVW6P2IhZOHxMK7HZKW1fMX85ms",
    clientId: "8fd9diIy59sj.IraJdeIgmdsO.fd233434fg2c616cgo932aa6e1e4fc627a9385045gr395222a127gi93c595rg4",
    clientSecret: "23ee7ec7301779eaff451d7c6f6cba322499e3c0ec752f800c72a8f99217e3a8",
    scope: [
      Scope.BoltAccountManage,
      Scope.BoltAccountView,
      Scope.Openid,
    ],
    state: "xyzABC123",
  }, "<value>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tokenRequest`                                                                                                                                                                                                                                                                                                       | *components.TokenRequest*                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                  |
| `xMerchantClientId`                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                   | A unique identifier for a shopper's device, generated by Bolt. The value is retrieved with `Bolt.state.merchantClientId` in your frontend context, per-shopper. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics. |
| `options`                                                                                                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                       |
| `options.retries`                                                                                                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                     |

### Response

**Promise\<[operations.OauthGetTokenResponse](../../models/operations/oauthgettokenresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.ErrorT     | 4XX               | application/json  |
| errors.FieldError | 4XX               | application/json  |
| errors.SDKError   | 5XX               | \*/\*             |