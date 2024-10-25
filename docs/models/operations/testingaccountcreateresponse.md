# TestingAccountCreateResponse

## Example Usage

```typescript
import { EmailState, PhoneState } from "@boltpay/bolt-typescript-sdk/models/components";
import { TestingAccountCreateResponse } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: TestingAccountCreateResponse = {
  contentType: "<value>",
  statusCode: 410,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  accountTestCreationData: {
    email: "alice@example.com",
    emailState: EmailState.Unverified,
    phone: "+14155550199",
    phoneState: PhoneState.Verified,
    otpCode: "123456",
    oauthCode: "7GSjMRSHs6Ak7C_zvVW6P2IhZOHxMK7HZKW1fMX85ms",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | HTTP response content type for this operation                                                        |
| `statusCode`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | HTTP response status code for this operation                                                         |
| `rawResponse`                                                                                        | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                | :heavy_check_mark:                                                                                   | Raw HTTP response; suitable for custom response parsing                                              |
| `accountTestCreationData`                                                                            | [components.AccountTestCreationDataOutput](../../models/components/accounttestcreationdataoutput.md) | :heavy_minus_sign:                                                                                   | The account was successfully created                                                                 |