# PaymentResponseFinalized

## Example Usage

```typescript
import { PaymentResponseFinalized, PaymentResponseFinalizedTag, Status } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentResponseFinalized = {
  dotTag: PaymentResponseFinalizedTag.Finalized,
  id: "iKv7t5bgt1gg",
  status: Status.Success,
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `dotTag`                                                                                         | [components.PaymentResponseFinalizedTag](../../models/components/paymentresponsefinalizedtag.md) | :heavy_check_mark:                                                                               | N/A                                                                                              | finalized                                                                                        |
| `id`                                                                                             | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | iKv7t5bgt1gg                                                                                     |
| `status`                                                                                         | [components.Status](../../models/components/status.md)                                           | :heavy_check_mark:                                                                               | N/A                                                                                              | success                                                                                          |
| `transaction`                                                                                    | [components.Transaction](../../models/components/transaction.md)                                 | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |