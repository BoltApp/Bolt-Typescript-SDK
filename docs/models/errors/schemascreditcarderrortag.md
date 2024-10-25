# SchemasCreditCardErrorTag

The type of error returned

## Example Usage

```typescript
import { SchemasCreditCardErrorTag } from "@boltpay/bolt-typescript-sdk/models/errors";

let value: SchemasCreditCardErrorTag =
  SchemasCreditCardErrorTag.DeclinedInvalidCvv;
```

## Values

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `Declined`                | declined                  |
| `DeclinedInvalidAmount`   | declined_invalid_amount   |
| `DeclinedInvalidCvv`      | declined_invalid_cvv      |
| `DeclinedInvalidMerchant` | declined_invalid_merchant |
| `DeclinedInvalidNumber`   | declined_invalid_number   |
| `DeclinedExpired`         | declined_expired          |
| `DeclinedCallIssuer`      | declined_call_issuer      |
| `DeclinedUnsupported`     | declined_unsupported      |