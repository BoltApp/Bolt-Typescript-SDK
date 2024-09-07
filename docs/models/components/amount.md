# Amount

A monetary amount, i.e. a base unit amount and a supported currency.

## Example Usage

```typescript
import { Amount, Currency } from "@boltpay/bolt-typescript-sdk/models/components";

let value: Amount = {
    currency: Currency.Usd,
    units: 900,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `currency`                                                             | [components.Currency](../../models/components/currency.md)             | :heavy_check_mark:                                                     | A supported currency.                                                  | USD                                                                    |
| `units`                                                                | *number*                                                               | :heavy_check_mark:                                                     | A monetary amount, represented in its base units (e.g. USD/EUR cents). | 900                                                                    |