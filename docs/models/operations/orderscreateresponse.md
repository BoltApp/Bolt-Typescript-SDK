# OrdersCreateResponse

## Example Usage

```typescript
import { OrdersCreateResponse } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: OrdersCreateResponse = {
  contentType: "<value>",
  statusCode: 300,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  orderResponse: {
    id: "iKv7t5bgt1gg",
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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `orderResponse`                                                       | [components.OrderResponse](../../models/components/orderresponse.md)  | :heavy_minus_sign:                                                    | The order was successfuly created                                     |