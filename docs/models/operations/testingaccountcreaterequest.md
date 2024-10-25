# TestingAccountCreateRequest

## Example Usage

```typescript
import { EmailState, PhoneState } from "@boltpay/bolt-typescript-sdk/models/components";
import { TestingAccountCreateRequest } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: TestingAccountCreateRequest = {
  xPublishableKey: "<value>",
  accountTestCreationData: {
    emailState: EmailState.Unverified,
    phoneState: PhoneState.Verified,
    isMigrated: true,
    hasAddress: true,
    hasCreditCard: true,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `xPublishableKey`                                                                        | *string*                                                                                 | :heavy_check_mark:                                                                       | The publicly shareable identifier used to identify your Bolt merchant division.          |
| `accountTestCreationData`                                                                | [components.AccountTestCreationData](../../models/components/accounttestcreationdata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |