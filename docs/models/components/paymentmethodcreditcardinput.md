# PaymentMethodCreditCardInput

## Example Usage

```typescript
import { AddressReferenceIdTag, CreditCardNetwork, DotTag, PaymentMethodCreditCardInput } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentMethodCreditCardInput = {
  dotTag: DotTag.CreditCard,
  billingAddress: {
    dotTag: AddressReferenceIdTag.Id,
    id: "D4g3h5tBuVYK9",
  },
  network: CreditCardNetwork.Visa,
  bin: "411111",
  last4: "1004",
  expiration: "2029-03",
  token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `dotTag`                                                                                               | [components.DotTag](../../models/components/dottag.md)                                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    | credit_card                                                                                            |
| `billingAddress`                                                                                       | *components.AddressReferenceInput*                                                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `network`                                                                                              | [components.CreditCardNetwork](../../models/components/creditcardnetwork.md)                           | :heavy_check_mark:                                                                                     | The credit card's network.                                                                             | visa                                                                                                   |
| `bin`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | The Bank Identification Number (BIN). This is typically the first 4 to 6 digits of the account number. | 411111                                                                                                 |
| `last4`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The account number's last four digits.                                                                 | 1004                                                                                                   |
| `expiration`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | The expiration date, in YYYY-MM format.                                                                | 2029-03                                                                                                |
| `token`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The Bolt token associated with the credit card.                                                        | a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0                                                               |