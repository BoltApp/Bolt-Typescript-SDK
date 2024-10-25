# CartShipment

## Example Usage

```typescript
import { AddressReferenceIdTag, CartShipment, Currency } from "@boltpay/bolt-typescript-sdk/models/components";

let value: CartShipment = {
  address: {
    dotTag: AddressReferenceIdTag.Id,
    id: "D4g3h5tBuVYK9",
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