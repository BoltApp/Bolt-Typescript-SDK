# Account

## Example Usage

```typescript
import { Account, CountryCode, PaymentMethodAffirmTag } from "@boltpay/bolt-typescript-sdk/models/components";

let value: Account = {
    addresses: [
        {
            id: "D4g3h5tBuVYK9",
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
            isDefault: true,
        },
    ],
    paymentMethods: [
        {
            dotTag: PaymentMethodAffirmTag.Affirm,
        },
    ],
    profile: {
        firstName: "Alice",
        lastName: "Baker",
        email: "alice@example.com",
        phone: "+14155550199",
    },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `addresses`                                                              | [components.AddressListing](../../models/components/addresslisting.md)[] | :heavy_check_mark:                                                       | A list of addresses associated with this account.                        |
| `paymentMethods`                                                         | *components.PaymentMethod*[]                                             | :heavy_check_mark:                                                       | A list of payment methods associated with this account.                  |
| `profile`                                                                | [components.Profile](../../models/components/profile.md)                 | :heavy_minus_sign:                                                       | An account's identifying information.                                    |