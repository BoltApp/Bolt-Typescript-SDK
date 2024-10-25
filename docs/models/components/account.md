# Account

## Example Usage

```typescript
import { Account, CountryCode, PaymentMethodKlarnaTag } from "@boltpay/bolt-typescript-sdk/models/components";

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
      dotTag: PaymentMethodKlarnaTag.Klarna,
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

| Field                                                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addresses`                                                                                                                                                                                                                                                                                                                        | [components.AddressListing](../../models/components/addresslisting.md)[]                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                 | A list of addresses associated with this account. These can be considered the "shipping addresses". The account's visible addresses are filtered according to the configured shipping destinations in your Bolt merchant dashboard. If no account addresses are available, use the billing address of the selected payment method. |
| `paymentMethods`                                                                                                                                                                                                                                                                                                                   | *components.PaymentMethod*[]                                                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                 | A list of payment methods associated with this account. The account's visible payment methods are filtered to include only cards that are chargeable.                                                                                                                                                                              |
| `profile`                                                                                                                                                                                                                                                                                                                          | [components.Profile](../../models/components/profile.md)                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                 | An account's identifying information.                                                                                                                                                                                                                                                                                              |