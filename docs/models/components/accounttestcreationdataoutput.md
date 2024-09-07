# AccountTestCreationDataOutput

## Example Usage

```typescript
import { AccountTestCreationDataOutput, EmailState, PhoneState } from "@boltpay/bolt-typescript-sdk/models/components";

let value: AccountTestCreationDataOutput = {
    email: "alice@example.com",
    emailState: EmailState.Unverified,
    phone: "+14155550199",
    phoneState: PhoneState.Verified,
    otpCode: "123456",
    oauthCode: "7GSjMRSHs6Ak7C_zvVW6P2IhZOHxMK7HZKW1fMX85ms",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `email`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | alice@example.com                                              |
| `emailState`                                                   | [components.EmailState](../../models/components/emailstate.md) | :heavy_check_mark:                                             | N/A                                                            | unverified                                                     |
| `phone`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | +14155550199                                                   |
| `phoneState`                                                   | [components.PhoneState](../../models/components/phonestate.md) | :heavy_check_mark:                                             | N/A                                                            | verified                                                       |
| `otpCode`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | 123456                                                         |
| `oauthCode`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | 7GSjMRSHs6Ak7C_zvVW6P2IhZOHxMK7HZKW1fMX85ms                    |