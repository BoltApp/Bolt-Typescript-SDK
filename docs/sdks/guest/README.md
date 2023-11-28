# Guest
(*payments.guest*)

### Available Operations

* [initialize](#initialize) - Initialize a Bolt payment for guest shoppers
* [update](#update) - Update an existing guest payment
* [performAction](#performaction) - Perform an irreversible action (e.g. finalize) on a pending guest payment

## initialize

Initialize a Bolt payment token that will be used to reference this payment to
Bolt when it is updated or finalized for guest shoppers.


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
  GuestPaymentInitializeRequest,
  ProfileCreationData,
} from "@boltpay/bolt-typescript-sdk/dist/models/components";
import { GuestPaymentsInitializeRequest, GuestPaymentsInitializeSecurity } from "@boltpay/bolt-typescript-sdk/dist/models/operations";

(async() => {
  const sdk = new BoltTypescriptSDK();
const xPublishableKey: string = "string";
const guestPaymentInitializeRequest: GuestPaymentInitializeRequest = {
  profile: {
    createAccount: true,
    firstName: "Alice",
    lastName: "Baker",
    email: "alice@example.com",
    phone: "+14155550199",
  },
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
const operationSecurity: GuestPaymentsInitializeSecurity = "";

  const res = await sdk.payments.guest.initialize(operationSecurity, xPublishableKey, guestPaymentInitializeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `security`                                                                                               | [operations.GuestPaymentsInitializeSecurity](../../models/operations/guestpaymentsinitializesecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `xPublishableKey`                                                                                        | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The publicly viewable identifier used to identify a merchant division.                                   |
| `guestPaymentInitializeRequest`                                                                          | [components.GuestPaymentInitializeRequest](../../models/components/guestpaymentinitializerequest.md)     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GuestPaymentsInitializeResponse](../../models/operations/guestpaymentsinitializeresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## update

Update a pending guest payment


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
import { GuestPaymentsUpdateRequest, GuestPaymentsUpdateSecurity } from "@boltpay/bolt-typescript-sdk/dist/models/operations";

(async() => {
  const sdk = new BoltTypescriptSDK();
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
const operationSecurity: GuestPaymentsUpdateSecurity = "";

  const res = await sdk.payments.guest.update(operationSecurity, id, xPublishableKey, paymentUpdateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `security`                                                                                       | [operations.GuestPaymentsUpdateSecurity](../../models/operations/guestpaymentsupdatesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |                                                                                                  |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the guest payment to update                                                            | iKv7t5bgt1gg                                                                                     |
| `xPublishableKey`                                                                                | *string*                                                                                         | :heavy_check_mark:                                                                               | The publicly viewable identifier used to identify a merchant division.                           |                                                                                                  |
| `paymentUpdateRequest`                                                                           | [components.PaymentUpdateRequest](../../models/components/paymentupdaterequest.md)               | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |                                                                                                  |


### Response

**Promise<[operations.GuestPaymentsUpdateResponse](../../models/operations/guestpaymentsupdateresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |

## performAction

Perform an irreversible action on a pending guest payment, such as finalizing it.


### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { DotTag, PaymentActionRequest } from "@boltpay/bolt-typescript-sdk/dist/models/components";
import { GuestPaymentsActionRequest, GuestPaymentsActionSecurity } from "@boltpay/bolt-typescript-sdk/dist/models/operations";

(async() => {
  const sdk = new BoltTypescriptSDK();
const id: string = "iKv7t5bgt1gg";
const xPublishableKey: string = "string";
const paymentActionRequest: PaymentActionRequest = {
  dotTag: DotTag.Finalize,
  redirectResult: "eyJ0cmFuc",
};
const operationSecurity: GuestPaymentsActionSecurity = "";

  const res = await sdk.payments.guest.performAction(operationSecurity, id, xPublishableKey, paymentActionRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `security`                                                                                       | [operations.GuestPaymentsActionSecurity](../../models/operations/guestpaymentsactionsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |                                                                                                  |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the guest payment to operate on                                                        | iKv7t5bgt1gg                                                                                     |
| `xPublishableKey`                                                                                | *string*                                                                                         | :heavy_check_mark:                                                                               | The publicly viewable identifier used to identify a merchant division.                           |                                                                                                  |
| `paymentActionRequest`                                                                           | [components.PaymentActionRequest](../../models/components/paymentactionrequest.md)               | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |                                                                                                  |


### Response

**Promise<[operations.GuestPaymentsActionResponse](../../models/operations/guestpaymentsactionresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 400-600          | */*              |
