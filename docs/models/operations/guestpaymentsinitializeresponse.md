# GuestPaymentsInitializeResponse

## Example Usage

```typescript
import { PaymentResponseFinalizedTag, Status } from "@boltpay/bolt-typescript-sdk/models/components";
import { GuestPaymentsInitializeResponse } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: GuestPaymentsInitializeResponse = {
    contentType: "<value>",
    statusCode: 272656,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    paymentResponse: {
        dotTag: PaymentResponseFinalizedTag.Finalized,
        id: "iKv7t5bgt1gg",
        status: Status.Success,
        transaction: {
            reference: "OBYG-X1PX-FN55",
            authorizations: [
                {
                    processorReference: "123456789XYZ",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `contentType`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | HTTP response content type for this operation                                                |
| `statusCode`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | HTTP response status code for this operation                                                 |
| `rawResponse`                                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                        | :heavy_check_mark:                                                                           | Raw HTTP response; suitable for custom response parsing                                      |
| `paymentResponse`                                                                            | *components.PaymentResponse*                                                                 | :heavy_minus_sign:                                                                           | The payment was successfully initialized, and was either immediately finalized or is pending |