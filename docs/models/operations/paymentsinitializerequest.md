# PaymentsInitializeRequest

## Example Usage

```typescript
import { AddressReferenceExplicitTag, CountryCode, Currency, PaymentMethodKlarnaTag } from "@boltpay/bolt-typescript-sdk/models/components";
import { PaymentsInitializeRequest } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: PaymentsInitializeRequest = {
    xPublishableKey: "<value>",
    xMerchantClientId: "<value>",
    paymentInitializeRequest: {
        cart: {
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
        },
        paymentMethod: {
            dotTag: PaymentMethodKlarnaTag.Klarna,
            returnUrl: "www.example.com/handle_klarna_success",
        },
    },
};
```

## Fields

| Field                                                                                                                                                                                                               | Type                                                                                                                                                                                                                | Required                                                                                                                                                                                                            | Description                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xPublishableKey`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The publicly shareable identifier used to identify your Bolt merchant division.                                                                                                                                     |
| `xMerchantClientId`                                                                                                                                                                                                 | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | A unique identifier for a shopper's device, generated by Bolt. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics. |
| `paymentInitializeRequest`                                                                                                                                                                                          | [components.PaymentInitializeRequest](../../models/components/paymentinitializerequest.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                 |