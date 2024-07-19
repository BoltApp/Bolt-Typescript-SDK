# LoggedIn
(*payments.loggedIn*)

### Available Operations

* [initialize](#initialize) - Initialize a Bolt payment for logged in shoppers
* [performAction](#performaction) - Finalize a pending payment

## initialize

Initialize a Bolt logged-in shopper's intent to pay for a cart, using the specified payment method. Payments must be finalized before indicating the payment result to the shopper. Some payment methods will finalize automatically after initialization. For these payments, they will transition directly to "finalized" and the response from Initialize Payment will contain a finalized payment.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { AddressReferenceIdTag, Currency, PaymentMethodReferenceTag } from "@boltpay/bolt-typescript-sdk/models/components";

const boltTypescriptSDK = new BoltTypescriptSDK({
  security: {
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await boltTypescriptSDK.payments.loggedIn.initialize("<value>", "<value>", {
    cart: {
      orderReference: "order_100",
      orderDescription: "Order #1234567890",
      displayId: "215614191",
      shipments: [
        {
        address:     {
              dotTag: AddressReferenceIdTag.Id,
              id: "D4g3h5tBuVYK9",
            },
          cost: {
            currency: Currency.Usd,
            units: 10000,
          },
          carrier: "FedEx",
        },
      ],
      discounts: [
        {
          amount: {
            currency: Currency.Usd,
            units: 10000,
          },
          code: "SUMMER10DISCOUNT",
          detailsUrl: "https://www.example.com/SUMMER-SALE",
        },
      ],
      items: [
        {
          name: "Bolt Swag Bag",
          reference: "item_100",
          description: "Large tote with Bolt logo.",
          totalAmount: {
            currency: Currency.Usd,
            units: 9000,
          },
          unitPrice: 1000,
          quantity: 9,
          imageUrl: "https://www.example.com/products/123456/images/1.png",
        },
      ],
      total: {
        currency: Currency.Usd,
        units: 9000,
      },
      tax: {
        currency: Currency.Usd,
        units: 100,
      },
    },
  paymentMethod:     {
        dotTag: PaymentMethodReferenceTag.Id,
        id: "X5h6j8uLpVGK",
      },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                           | Type                                                                                                                                                                                                                | Required                                                                                                                                                                                                            | Description                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xPublishableKey`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The publicly shareable identifier used to identify your Bolt merchant division.                                                                                                                                     |
| `xMerchantClientId`                                                                                                                                                                                                 | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | A unique identifier for a shopper's device, generated by Bolt. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics. |
| `paymentInitializeRequest`                                                                                                                                                                                          | [components.PaymentInitializeRequest](../../models/components/paymentinitializerequest.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                      |
| `options.retries`                                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                    |


### Response

**Promise\<[operations.PaymentsInitializeResponse](../../models/operations/paymentsinitializeresponse.md)\>**
### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.PaymentsInitializeResponseBody | 4XX                                   | application/json                      |
| errors.SDKError                       | 4xx-5xx                               | */*                                   |

## performAction

Finalize a pending payment being made by a Bolt logged-in shopper. Upon receipt of a finalized payment result, payment success should be communicated to the shopper.

### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { PaymentActionRequestTag } from "@boltpay/bolt-typescript-sdk/models/components";

const boltTypescriptSDK = new BoltTypescriptSDK({
  security: {
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await boltTypescriptSDK.payments.loggedIn.performAction("iKv7t5bgt1gg", "<value>", "<value>", {
    dotTag: PaymentActionRequestTag.Finalize,
    redirectResult: "eyJ0cmFuc",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                           | Type                                                                                                                                                                                                                | Required                                                                                                                                                                                                            | Description                                                                                                                                                                                                         | Example                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The ID of the payment to operate on                                                                                                                                                                                 | [object Object]                                                                                                                                                                                                     |
| `xPublishableKey`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The publicly shareable identifier used to identify your Bolt merchant division.                                                                                                                                     |                                                                                                                                                                                                                     |
| `xMerchantClientId`                                                                                                                                                                                                 | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | A unique identifier for a shopper's device, generated by Bolt. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics. |                                                                                                                                                                                                                     |
| `paymentActionRequest`                                                                                                                                                                                              | [components.PaymentActionRequest](../../models/components/paymentactionrequest.md)                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                 |                                                                                                                                                                                                                     |
| `options`                                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                                               |                                                                                                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                      |                                                                                                                                                                                                                     |
| `options.retries`                                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                    |                                                                                                                                                                                                                     |


### Response

**Promise\<[operations.PaymentsActionResponse](../../models/operations/paymentsactionresponse.md)\>**
### Errors

| Error Object                      | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PaymentsActionResponseBody | 4XX                               | application/json                  |
| errors.SDKError                   | 4xx-5xx                           | */*                               |
