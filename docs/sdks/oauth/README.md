# OAuth
(*oAuth*)

## Overview

Use this endpoint to retrieve an OAuth token. Use the token to allow your ecommerce server to make calls to the Account
endpoint and create a one-click checkout experience for shoppers.


<https://help.bolt.com/products/accounts/direct-api/oauth-guide/>
### Available Operations

* [getToken](#gettoken) - Get OAuth token

## getToken

Retrieve a new or refresh an existing OAuth token.

### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import {  } from "@boltpay/bolt-typescript-sdk/models";
import { GrantType } from "@boltpay/bolt-typescript-sdk/models/components";

async function run() {
  const sdk = new BoltTypescriptSDK({
    security: {
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.oAuth.getToken({
    code: "7GSjMRSHs6Ak7C_zvVW6P2IhZOHxMK7HZKW1fMX85ms",
    clientId: "8fd9diIy59sj.IraJdeIgmdsO.fd233434fg2c616cgo932aa6e1e4fc627a9385045gr395222a127gi93c595rg4",
    clientSecret: "23ee7ec7301779eaff451d7c6f6cba322499e3c0ec752f800c72a8f99217e3a8",
    grantType: GrantType.AuthorizationCode,
    scope: [
      Scope.BoltAccountManage,
    ],
    state: "xyzABC123",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.GetAccessTokenRequest](../../models/components/getaccesstokenrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.OauthGetTokenResponse](../../models/operations/oauthgettokenresponse.md)>**
### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.OauthGetTokenResponseBody | 4XX                              | application/json                 |
| errors.SDKError                  | 4xx-5xx                          | */*                              |
