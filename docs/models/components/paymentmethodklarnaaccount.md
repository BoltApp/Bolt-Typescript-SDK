# PaymentMethodKlarnaAccount

## Example Usage

```typescript
import { PaymentMethodKlarnaAccount, PaymentMethodKlarnaAccountTag } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentMethodKlarnaAccount = {
  dotTag: PaymentMethodKlarnaAccountTag.KlarnaAccount,
  returnUrl: "www.example.com/handle_klarna_account_success",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `dotTag`                                                                                             | [components.PaymentMethodKlarnaAccountTag](../../models/components/paymentmethodklarnaaccounttag.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  | klarna_account                                                                                       |
| `returnUrl`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Return URL to return to after payment completion in Klarna.                                          | www.example.com/handle_klarna_account_success                                                        |