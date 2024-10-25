# PaymentMethodCreditCard

## Example Usage

```typescript
import { AddressReferenceIdTag, CreditCardNetwork, DotTag, PaymentMethodCreditCard } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentMethodCreditCard = {
  dotTag: DotTag.CreditCard,
  id: "X5h6j8uLpVGK",
  billingAddress: {
    dotTag: AddressReferenceIdTag.Id,
    id: "D4g3h5tBuVYK9",
  },
  network: CreditCardNetwork.Visa,
  last4: "1004",
  expiration: "2029-03",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `dotTag`                                                                     | [components.DotTag](../../models/components/dottag.md)                       | :heavy_check_mark:                                                           | N/A                                                                          | credit_card                                                                  |
| `id`                                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | X5h6j8uLpVGK                                                                 |
| `billingAddress`                                                             | *components.AddressReference*                                                | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `network`                                                                    | [components.CreditCardNetwork](../../models/components/creditcardnetwork.md) | :heavy_check_mark:                                                           | The credit card's network.                                                   | visa                                                                         |
| `last4`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | The account number's last four digits.                                       | 1004                                                                         |
| `expiration`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | The expiration date, in YYYY-MM format.                                      | 2029-03                                                                      |