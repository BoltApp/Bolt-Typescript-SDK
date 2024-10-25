# Order

## Example Usage

```typescript
import { AddressReferenceIdTag, Currency, Order } from "@boltpay/bolt-typescript-sdk/models/components";

let value: Order = {
  profile: {
    firstName: "Alice",
    lastName: "Baker",
    email: "alice@example.com",
    phone: "+14155550199",
  },
  cart: {
    orderReference: "order_100",
    orderDescription: "Order #1234567890",
    displayId: "215614191",
    shipments: [
      {
        address: {
          dotTag: AddressReferenceIdTag.Id,
          id: "D4g3h5tBuVYK9",
        },
        cost: {
          currency: Currency.Usd,
          units: 900,
        },
        carrier: "FedEx",
      },
    ],
    discounts: [
      {
        amount: {
          currency: Currency.Usd,
          units: 900,
        },
        code: "SUMMER10DISCOUNT",
        detailsUrl: "https://www.example.com/SUMMER-SALE",
      },
    ],
    items: [
      {
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
      },
    ],
    total: {
      currency: Currency.Usd,
      units: 900,
    },
    tax: {
      currency: Currency.Usd,
      units: 900,
    },
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `profile`                                                | [components.Profile](../../models/components/profile.md) | :heavy_check_mark:                                       | An account's identifying information.                    |
| `cart`                                                   | [components.Cart](../../models/components/cart.md)       | :heavy_check_mark:                                       | N/A                                                      |