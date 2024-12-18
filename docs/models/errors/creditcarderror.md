# CreditCardError

## Example Usage

```typescript
import { CreditCardError } from "@boltpay/bolt-typescript-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `dotTag`                                                                                               | [errors.SchemasCreditCardErrorTag](../../models/errors/schemascreditcarderrortag.md)                   | :heavy_check_mark:                                                                                     | The type of error returned                                                                             | declined_invalid_cvv                                                                                   |
| `message`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | A human-readable error message, which might include information specific to the request that was made. | The payment was declined because the CVV is not valid                                                  |
| `rawResponse`                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                  | :heavy_minus_sign:                                                                                     | Raw HTTP response; suitable for custom response parsing                                                |                                                                                                        |