# CartDiscount

## Example Usage

```typescript
import { CartDiscount, Currency } from "@boltpay/bolt-typescript-sdk/models/components";

let value: CartDiscount = {
    amount: {
        currency: Currency.Usd,
        units: 900,
    },
    code: "SUMMER10DISCOUNT",
    detailsUrl: "https://www.example.com/SUMMER-SALE",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                                     | [components.Amount](../../models/components/amount.md)                                                       | :heavy_check_mark:                                                                                           | A monetary amount, i.e. a base unit amount and a supported currency.                                         |                                                                                                              |
| `code`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Discount code.                                                                                               | SUMMER10DISCOUNT                                                                                             |
| `detailsUrl`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Used to provide a link to additional details, such as a landing page, associated with the discount offering. | https://www.example.com/SUMMER-SALE                                                                          |