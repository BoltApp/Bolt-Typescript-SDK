# CartShipment

## Example Usage

```typescript
import { AddressReferenceExplicitTag, CartShipment, CountryCode, Currency } from "@boltpay/bolt-typescript-sdk/models/components";

let value: CartShipment = {
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
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `address`                                                            | *components.AddressReferenceInput*                                   | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `cost`                                                               | [components.Amount](../../models/components/amount.md)               | :heavy_minus_sign:                                                   | A monetary amount, i.e. a base unit amount and a supported currency. |                                                                      |
| `carrier`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | The name of the carrier selected.                                    | FedEx                                                                |