# FieldError

An error that pertains to validation of a specific field in the request.

## Example Usage

```typescript
import { FieldError } from "@boltpay/bolt-typescript-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `dotTag`                                                                                               | [errors.SchemasTag](../../models/errors/schemastag.md)                                                 | :heavy_check_mark:                                                                                     | The type of error returned                                                                             | invalid_input_parameter                                                                                |
| `message`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | A human-readable error message, which might include information specific to the request that was made. | We were unable to process your request.                                                                |
| `field`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The field (in its hierarchical form) that is failing validation.                                       | address.phone                                                                                          |
| `rawResponse`                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                  | :heavy_minus_sign:                                                                                     | Raw HTTP response; suitable for custom response parsing                                                |                                                                                                        |