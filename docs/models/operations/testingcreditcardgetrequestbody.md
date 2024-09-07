# TestingCreditCardGetRequestBody

## Example Usage

```typescript
import { TestingCreditCardGetRequestBody, Type } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: TestingCreditCardGetRequestBody = {
    type: Type.Approve,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `type`                                                                          | [operations.Type](../../models/operations/type.md)                              | :heavy_check_mark:                                                              | The expected authorization result when using the generated token for a payment. | approve                                                                         |