# CartItem

## Example Usage

```typescript
import { CartItem, Currency } from "@boltpay/bolt-typescript-sdk/models/components";

let value: CartItem = {
  name: "Bolt Swag Bag",
  reference: "item_100",
  description: "Large tote with Bolt logo.",
  totalAmount: {
    currency: Currency.Usd,
    units: 900,
  },
  unitPrice: 1000,
  quantity: 1,
  imageUrl: "https://www.example.com/products/123456/images/1.png",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | The name of a given item.                                                             | Bolt Swag Bag                                                                         |
| `reference`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | This value is used by Bolt as an external reference to a given item.                  | item_100                                                                              |
| `description`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | A human-readable description of this cart item.                                       | Large tote with Bolt logo.                                                            |
| `totalAmount`                                                                         | [components.Amount](../../models/components/amount.md)                                | :heavy_check_mark:                                                                    | A monetary amount, i.e. a base unit amount and a supported currency.                  |                                                                                       |
| `unitPrice`                                                                           | *number*                                                                              | :heavy_check_mark:                                                                    | The item's unit price, i.e. the cost of a single item exclusive of tax and discounts. | 1000                                                                                  |
| `quantity`                                                                            | *number*                                                                              | :heavy_check_mark:                                                                    | The number of units that comprise this cart item.                                     | 1                                                                                     |
| `imageUrl`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | Used to provide a link to the image associated with the item.                         | https://www.example.com/products/123456/images/1.png                                  |