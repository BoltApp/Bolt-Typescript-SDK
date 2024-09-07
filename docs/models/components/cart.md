# Cart

## Example Usage

```typescript
import { AddressReferenceExplicitTag, Cart, CountryCode, Currency } from "@boltpay/bolt-typescript-sdk/models/components";

let value: Cart = {
    orderReference: "order_100",
    orderDescription: "Order #1234567890",
    displayId: "215614191",
    shipments: [
        {
            address: {
                dotTag: AddressReferenceExplicitTag.Explicit,
                firstName: "Alice",
                lastName: "Baker",
                company: "ACME Corporation",
                streetAddress1: "535 Mission St, Ste 1401",
                streetAddress2: "c/o Shipping Department",
                locality: "San Francisco",
                postalCode: "94105",
                region: "CA",
                countryCode: CountryCode.Us,
                email: "alice@example.com",
                phone: "+14155550199",
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
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `orderReference`                                                                                                                | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | This value is used by Bolt as an external reference to a given order. This reference must be unique per successful transaction. | order_100                                                                                                                       |
| `orderDescription`                                                                                                              | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used optionally to pass additional information like order numbers or other IDs as needed.                                       | Order #1234567890                                                                                                               |
| `displayId`                                                                                                                     | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | A shopper-facing identifier corresponding to the order reference associated with this transaction.                              | 215614191                                                                                                                       |
| `shipments`                                                                                                                     | [components.CartShipment](../../models/components/cartshipment.md)[]                                                            | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `discounts`                                                                                                                     | [components.CartDiscount](../../models/components/cartdiscount.md)[]                                                            | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `items`                                                                                                                         | [components.CartItem](../../models/components/cartitem.md)[]                                                                    | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `total`                                                                                                                         | [components.Amount](../../models/components/amount.md)                                                                          | :heavy_check_mark:                                                                                                              | A monetary amount, i.e. a base unit amount and a supported currency.                                                            |                                                                                                                                 |
| `tax`                                                                                                                           | [components.Amount](../../models/components/amount.md)                                                                          | :heavy_check_mark:                                                                                                              | A monetary amount, i.e. a base unit amount and a supported currency.                                                            |                                                                                                                                 |