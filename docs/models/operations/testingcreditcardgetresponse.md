# TestingCreditCardGetResponse

## Example Usage

```typescript
import { CreditCardNetwork } from "@boltpay/bolt-typescript-sdk/models/components";
import { TestingCreditCardGetResponse } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: TestingCreditCardGetResponse = {
    contentType: "<value>",
    statusCode: 71036,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    testCreditCard: {
        network: CreditCardNetwork.Visa,
        bin: "411111",
        last4: "1004",
        expiration: new Date("2023-10-31:T06:00:00Z"),
        token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contentType`                                                          | *string*                                                               | :heavy_check_mark:                                                     | HTTP response content type for this operation                          |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | HTTP response status code for this operation                           |
| `rawResponse`                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)  | :heavy_check_mark:                                                     | Raw HTTP response; suitable for custom response parsing                |
| `testCreditCard`                                                       | [components.TestCreditCard](../../models/components/testcreditcard.md) | :heavy_minus_sign:                                                     | Successfully generated test credit card details                        |