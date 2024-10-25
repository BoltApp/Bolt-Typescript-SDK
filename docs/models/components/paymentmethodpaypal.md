# PaymentMethodPaypal

## Example Usage

```typescript
import { PaymentMethodPaypal, PaymentMethodPaypalTag } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentMethodPaypal = {
  dotTag: PaymentMethodPaypalTag.Paypal,
  successUrl: "https://www.example.com/paypal-callback/success",
  cancelUrl: "https://www.example.com/paypal-callback/cancel",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `dotTag`                                                                               | [components.PaymentMethodPaypalTag](../../models/components/paymentmethodpaypaltag.md) | :heavy_check_mark:                                                                     | N/A                                                                                    | paypal                                                                                 |
| `successUrl`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | Redirect URL for successful PayPal transaction.                                        | https://www.example.com/paypal-callback/success                                        |
| `cancelUrl`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Redirect URL for canceled PayPal transaction.                                          | https://www.example.com/paypal-callback/cancel                                         |