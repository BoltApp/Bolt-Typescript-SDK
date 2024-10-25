# OrderResponse

## Example Usage

```typescript
import { OrderResponse } from "@boltpay/bolt-typescript-sdk/models/components";

let value: OrderResponse = {
  id: "iKv7t5bgt1gg",
  transaction: {
    reference: "OBYG-X1PX-FN55",
    authorizations: [
      {
        processorReference: "123456789XYZ",
      },
    ],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | iKv7t5bgt1gg                                                     |
| `transaction`                                                    | [components.Transaction](../../models/components/transaction.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |