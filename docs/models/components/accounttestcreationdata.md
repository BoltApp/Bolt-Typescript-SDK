# AccountTestCreationData

## Example Usage

```typescript
import { AccountTestCreationData, EmailState, PhoneState } from "@boltpay/bolt-typescript-sdk/models/components";

let value: AccountTestCreationData = {
  emailState: EmailState.Unverified,
  phoneState: PhoneState.Verified,
  isMigrated: true,
  hasAddress: true,
  hasCreditCard: true,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `emailState`                                                   | [components.EmailState](../../models/components/emailstate.md) | :heavy_check_mark:                                             | N/A                                                            | unverified                                                     |
| `phoneState`                                                   | [components.PhoneState](../../models/components/phonestate.md) | :heavy_check_mark:                                             | N/A                                                            | verified                                                       |
| `isMigrated`                                                   | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            | true                                                           |
| `hasAddress`                                                   | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            | true                                                           |
| `hasCreditCard`                                                | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            | true                                                           |