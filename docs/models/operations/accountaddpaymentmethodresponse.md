# AccountAddPaymentMethodResponse

## Example Usage

```typescript
import { PaymentMethodAfterpayTag } from "@boltpay/bolt-typescript-sdk/models/components";
import { AccountAddPaymentMethodResponse } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: AccountAddPaymentMethodResponse = {
  contentType: "<value>",
  statusCode: 415,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  paymentMethod: {
    dotTag: PaymentMethodAfterpayTag.Afterpay,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `paymentMethod`                                                       | *components.PaymentMethod*                                            | :heavy_minus_sign:                                                    | The payment method was successfully added                             |