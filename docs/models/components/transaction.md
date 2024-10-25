# Transaction

## Example Usage

```typescript
import { Transaction } from "@boltpay/bolt-typescript-sdk/models/components";

let value: Transaction = {
  reference: "OBYG-X1PX-FN55",
  authorizations: [
    {
      processorReference: "123456789XYZ",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `reference`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | OBYG-X1PX-FN55                                                                               |
| `authorizations`                                                                             | [components.TransactionAuthorization](../../models/components/transactionauthorization.md)[] | :heavy_minus_sign:                                                                           | Payment authorization events attached to a transaction                                       |                                                                                              |