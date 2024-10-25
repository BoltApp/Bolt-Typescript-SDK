# PaymentMethodReference

## Example Usage

```typescript
import { PaymentMethodReference, PaymentMethodReferenceTag } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentMethodReference = {
  dotTag: PaymentMethodReferenceTag.Id,
  id: "X5h6j8uLpVGK",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `dotTag`                                                                                     | [components.PaymentMethodReferenceTag](../../models/components/paymentmethodreferencetag.md) | :heavy_check_mark:                                                                           | N/A                                                                                          | id                                                                                           |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | Payment ID of the saved Bolt Payment method.                                                 | X5h6j8uLpVGK                                                                                 |