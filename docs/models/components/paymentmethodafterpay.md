# PaymentMethodAfterpay

## Example Usage

```typescript
import { PaymentMethodAfterpay, PaymentMethodAfterpayTag } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentMethodAfterpay = {
  dotTag: PaymentMethodAfterpayTag.Afterpay,
  returnUrl: "www.example.com/handle_afterpay_success",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `dotTag`                                                                                   | [components.PaymentMethodAfterpayTag](../../models/components/paymentmethodafterpaytag.md) | :heavy_check_mark:                                                                         | N/A                                                                                        | afterpay                                                                                   |
| `returnUrl`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | Return URL to return to after payment completion in Afterpay.                              | www.example.com/handle_afterpay_success                                                    |