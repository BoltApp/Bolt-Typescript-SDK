# TestCreditCard

## Example Usage

```typescript
import { CreditCardNetwork, TestCreditCard } from "@boltpay/bolt-typescript-sdk/models/components";

let value: TestCreditCard = {
  network: CreditCardNetwork.Visa,
  bin: "411111",
  last4: "1004",
  expiration: new Date("2023-10-31:T06:00:00Z"),
  token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `network`                                                                                              | [components.CreditCardNetwork](../../models/components/creditcardnetwork.md)                           | :heavy_check_mark:                                                                                     | The credit card's network.                                                                             | visa                                                                                                   |
| `bin`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | The Bank Identification Number (BIN). This is typically the first 4 to 6 digits of the account number. | 411111                                                                                                 |
| `last4`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The account number's last four digits.                                                                 | 1004                                                                                                   |
| `expiration`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | The token's expiration date. Tokens used past their expiration will be rejected.                       | 2023-10-31:T06:00:00Z                                                                                  |
| `token`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The Bolt token associated with the credit card.                                                        | a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0                                                               |