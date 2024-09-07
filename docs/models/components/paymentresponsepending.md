# PaymentResponsePending

## Example Usage

```typescript
import {
  Action,
  PaymentResponsePending,
  PaymentResponsePendingStatus,
  PaymentResponsePendingTag,
} from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentResponsePending = {
    dotTag: PaymentResponsePendingTag.Pending,
    id: "iKv7t5bgt1gg",
    status: PaymentResponsePendingStatus.AwaitingUserConfirmation,
    action: Action.Redirect,
    url: "www.example.com/payments/finalize",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `dotTag`                                                                                           | [components.PaymentResponsePendingTag](../../models/components/paymentresponsependingtag.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                | pending                                                                                            |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | iKv7t5bgt1gg                                                                                       |
| `status`                                                                                           | [components.PaymentResponsePendingStatus](../../models/components/paymentresponsependingstatus.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                | awaiting_user_confirmation                                                                         |
| `action`                                                                                           | [components.Action](../../models/components/action.md)                                             | :heavy_check_mark:                                                                                 | N/A                                                                                                | redirect                                                                                           |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | www.example.com/payments/finalize                                                                  |