# CartError

## Example Usage

```typescript
import { CartError } from "@boltpay/bolt-typescript-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `dotTag`                                                                                               | [errors.SchemasCartErrorTag](../../models/errors/schemascarterrortag.md)                               | :heavy_check_mark:                                                                                     | The type of error returned                                                                             | payment_already_exists                                                                                 |
| `message`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | A human-readable error message, which might include information specific to the request that was made. | A payment for this order already exists                                                                |
| `rawResponse`                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                  | :heavy_minus_sign:                                                                                     | Raw HTTP response; suitable for custom response parsing                                                |                                                                                                        |