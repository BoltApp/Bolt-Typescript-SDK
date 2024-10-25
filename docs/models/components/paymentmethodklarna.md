# PaymentMethodKlarna

## Example Usage

```typescript
import { PaymentMethodKlarna, PaymentMethodKlarnaTag } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentMethodKlarna = {
  dotTag: PaymentMethodKlarnaTag.Klarna,
  returnUrl: "www.example.com/handle_klarna_success",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `dotTag`                                                                               | [components.PaymentMethodKlarnaTag](../../models/components/paymentmethodklarnatag.md) | :heavy_check_mark:                                                                     | N/A                                                                                    | klarna                                                                                 |
| `returnUrl`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Return URL to return to after payment completion in Klarna.                            | www.example.com/handle_klarna_success                                                  |