# LoggedIn
(*payments.loggedIn*)

### Available Operations

* [initialize](#initialize) - Initialize a Bolt payment for logged in shoppers
* [update](#update) - Update an existing payment
* [performAction](#performaction) - Perform an irreversible action (e.g. finalize) on a pending payment

## initialize

Initialize a Bolt payment token that will be used to reference this payment to
Bolt when it is updated or finalized for logged in shoppers.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import {
  Amount,
  Cart,
  CartDiscount,
  CartItem,
  CartShipment,
  Currency,
  PaymentInitializeRequest,
} from "@boltpay/bolt-typescript-sdk/dist/models/components";
import { PaymentsInitializeRequest } from "@boltpay/bolt-typescript-sdk/dist/models/operations";

async function run() {
  const sdk = new BoltTypescriptSDK({
    security: {
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });
const xPublishableKey: string = "string";
const paymentInitializeRequest: PaymentInitializeRequest = {
  cart: {
    orderReference: "order_100",
    orderDescription: "Order #1234567890",
    displayId: "215614191",
    shipments: [
      {
        address: "string",
        cost: {
          currency: Currency.Usd,
          units: 900,
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
        name: "Bolt Swag Bag",
        reference: "item_100",
        description: "Large tote with Bolt logo.",
        totalAmount: {
          currency: Currency.Usd,
          units: 900,
        },
        unitPrice: 1000,
        quantity: 1,
        imageUrl: "https://www.example.com/products/123456/images/1.png",
      },
    ],
    total: {
      currency: Currency.Usd,
      units: 900,
    },
    tax: {
      currency: Currency.Usd,
      units: 900,
    },
  },
  paymentMethod: "string",
};

  const res = await sdk.payments.loggedIn.initialize(xPublishableKey, paymentInitializeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `xPublishableKey`                                                                          | *string*                                                                                   | :heavy_check_mark:                                                                         | The publicly viewable identifier used to identify a merchant division.                     |
| `paymentInitializeRequest`                                                                 | [components.PaymentInitializeRequest](../../models/components/paymentinitializerequest.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PaymentsInitializeResponse](../../models/operations/paymentsinitializeresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## update

Update a pending payment


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import {
  Amount,
  Cart,
  CartDiscount,
  CartItem,
  CartShipment,
  Currency,
  PaymentUpdateRequest,
} from "@boltpay/bolt-typescript-sdk/dist/models/components";
import { PaymentsUpdateRequest } from "@boltpay/bolt-typescript-sdk/dist/models/operations";

async function run() {
  const sdk = new BoltTypescriptSDK({
    security: {
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });
const id: string = "iKv7t5bgt1gg";
const xPublishableKey: string = "string";
const paymentUpdateRequest: PaymentUpdateRequest = {
  cart: {
    orderReference: "order_100",
    orderDescription: "Order #1234567890",
    displayId: "215614191",
    shipments: [
      {
        address: "string",
        cost: {
          currency: Currency.Usd,
          units: 900,
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
        name: "Bolt Swag Bag",
        reference: "item_100",
        description: "Large tote with Bolt logo.",
        totalAmount: {
          currency: Currency.Usd,
          units: 900,
        },
        unitPrice: 1000,
        quantity: 1,
        imageUrl: "https://www.example.com/products/123456/images/1.png",
      },
    ],
    total: {
      currency: Currency.Usd,
      units: 900,
    },
    tax: {
      currency: Currency.Usd,
      units: 900,
    },
  },
};

  const res = await sdk.payments.loggedIn.update(id, xPublishableKey, paymentUpdateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the payment to update                                                    | iKv7t5bgt1gg                                                                       |
| `xPublishableKey`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | The publicly viewable identifier used to identify a merchant division.             |                                                                                    |
| `paymentUpdateRequest`                                                             | [components.PaymentUpdateRequest](../../models/components/paymentupdaterequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |                                                                                    |


### Response

**Promise<[operations.PaymentsUpdateResponse](../../models/operations/paymentsupdateresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## performAction

Perform an irreversible action on a pending payment, such as finalizing it.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { DotTag, PaymentActionRequest } from "@boltpay/bolt-typescript-sdk/dist/models/components";
import { PaymentsActionRequest } from "@boltpay/bolt-typescript-sdk/dist/models/operations";

async function run() {
  const sdk = new BoltTypescriptSDK({
    security: {
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });
const id: string = "iKv7t5bgt1gg";
const xPublishableKey: string = "string";
const paymentActionRequest: PaymentActionRequest = {
  dotTag: DotTag.Finalize,
  redirectResult: "eyJ0cmFuc",
};

  const res = await sdk.payments.loggedIn.performAction(id, xPublishableKey, paymentActionRequest);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the payment to operate on                                                | iKv7t5bgt1gg                                                                       |
| `xPublishableKey`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | The publicly viewable identifier used to identify a merchant division.             |                                                                                    |
| `paymentActionRequest`                                                             | [components.PaymentActionRequest](../../models/components/paymentactionrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |                                                                                    |


### Response

**Promise<[operations.PaymentsActionResponse](../../models/operations/paymentsactionresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |
