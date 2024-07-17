# Orders
(*orders*)

## Overview

Use the Orders API to create and manage orders, including orders that have been placed outside the Bolt ecosystem.

### Available Operations

* [ordersCreate](#orderscreate) - Create an order that was prepared outside the Bolt ecosystem.

## ordersCreate

Create an order that was prepared outside the Bolt ecosystem. Some Bolt-powered flows automatically manage order creation - in those flows the order ID will be provided separately and not through this API.

### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { AddressReferenceIdTag, Currency } from "@boltpay/bolt-typescript-sdk/models/components";

const boltTypescriptSDK = new BoltTypescriptSDK();

async function run() {
  const result = await boltTypescriptSDK.orders.ordersCreate("<YOUR_API_KEY_HERE>", "<value>", "<value>", {
    profile: {
      firstName: "Charlie",
      lastName: "Dunn",
      email: "charlie@example.com",
      phone: "+14085551111",
    },
    cart: {
      orderReference: "instore_20240116-878",
      orderDescription: "Order #878",
      displayId: "20240116-878",
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
            units: 900,
          },
          code: "SUMMER10DISCOUNT",
          detailsUrl: "https://www.example.com/SUMMER-SALE",
        },
      ],
      items: [
        {
          name: "Red Fidget Spinner",
          reference: "sku-984",
          description: "Single-packed fidget spinner, red",
          totalAmount: {
            currency: Currency.Usd,
            units: 1000,
          },
          unitPrice: 1000,
          quantity: 1,
          imageUrl: "https://www.example.com/products/984/image.png",
        },
      ],
      total: {
        currency: Currency.Usd,
        units: 1000,
      },
      tax: {
        currency: Currency.Usd,
        units: 100,
      },
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
| `security`                                                                                                                                                                                                          | [operations.OrdersCreateSecurity](../../models/operations/orderscreatesecurity.md)                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                  | The security requirements to use for the request.                                                                                                                                                                   |
| `xPublishableKey`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The publicly shareable identifier used to identify your Bolt merchant division.                                                                                                                                     |
| `xMerchantClientId`                                                                                                                                                                                                 | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | A unique identifier for a shopper's device, generated by Bolt. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics. |
| `order`                                                                                                                                                                                                             | [components.Order](../../models/components/order.md)                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                      |
| `options.retries`                                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                    |


### Response

**Promise\<[operations.OrdersCreateResponse](../../models/operations/orderscreateresponse.md)\>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.OrdersCreateResponseBody | 4XX                             | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
