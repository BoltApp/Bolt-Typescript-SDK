# ErrorT

## Example Usage

```typescript
import { ErrorT } from "@boltpay/bolt-typescript-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `dotTag`                                                                                               | [errors.DotTag](../../models/errors/dottag.md)                                                         | :heavy_check_mark:                                                                                     | The type of error returned                                                                             | unprocessable_request                                                                                  |
| `message`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | A human-readable error message, which might include information specific to the request that was made. | We were unable to process your request.                                                                |
| `rawResponse`                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                  | :heavy_minus_sign:                                                                                     | Raw HTTP response; suitable for custom response parsing                                                |                                                                                                        |