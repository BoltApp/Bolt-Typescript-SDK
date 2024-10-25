# GuestPaymentsActionResponse

## Example Usage

```typescript
import { Action, PaymentResponsePendingStatus, PaymentResponsePendingTag } from "@boltpay/bolt-typescript-sdk/models/components";
import { GuestPaymentsActionResponse } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: GuestPaymentsActionResponse = {
  contentType: "<value>",
  statusCode: 302,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  paymentResponse: {
    dotTag: PaymentResponsePendingTag.Pending,
    id: "iKv7t5bgt1gg",
    status: PaymentResponsePendingStatus.AwaitingUserConfirmation,
    action: Action.Redirect,
    url: "www.example.com/payments/finalize",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `paymentResponse`                                                     | *components.PaymentResponse*                                          | :heavy_minus_sign:                                                    | The action was successfully applied to the pending guest payment      |