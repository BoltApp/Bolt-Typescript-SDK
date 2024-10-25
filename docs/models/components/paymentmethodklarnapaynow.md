# PaymentMethodKlarnaPaynow

## Example Usage

```typescript
import { PaymentMethodKlarnaPaynow, PaymentMethodKlarnaPaynowTag } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentMethodKlarnaPaynow = {
  dotTag: PaymentMethodKlarnaPaynowTag.KlarnaPaynow,
  returnUrl: "www.example.com/handle_klarna_paynow_success",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `dotTag`                                                                                           | [components.PaymentMethodKlarnaPaynowTag](../../models/components/paymentmethodklarnapaynowtag.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                | klarna_paynow                                                                                      |
| `returnUrl`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | Return URL to return to after payment completion in Klarna.                                        | www.example.com/handle_klarna_paynow_success                                                       |