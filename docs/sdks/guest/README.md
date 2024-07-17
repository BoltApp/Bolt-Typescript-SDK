# Guest
(*payments.guest*)

### Available Operations

* [initialize](#initialize) - Initialize a Bolt payment for guest shoppers
* [update](#update) - Update a pending guest payment
* [performAction](#performaction) - Finalize a pending guest payment

## initialize

Initialize a Bolt guest shopper's intent to pay for a cart, using the specified payment method. Payments must be finalized before indicating the payment result to the shopper. Some payment methods will finalize automatically after initialization. For these payments, they will transition directly to "finalized" and the response from Initialize Payment will contain a finalized payment.

### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { AddressReferenceIdTag, CreditCardNetwork, Currency, DotTag } from "@boltpay/bolt-typescript-sdk/models/components";

const boltTypescriptSDK = new BoltTypescriptSDK();

async function run() {
  const result = await boltTypescriptSDK.payments.guest.initialize("<YOUR_API_KEY_HERE>", "<value>", "<value>", {
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
        dotTag: DotTag.CreditCard,
      billingAddress:     {
            dotTag: AddressReferenceIdTag.Id,
            id: "D4g3h5tBuVYK9",
          },
        network: CreditCardNetwork.Visa,
        bin: "411111",
        last4: "1004",
        expiration: "2025-03",
        token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
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
| `security`                                                                                                                                                                                                          | [operations.GuestPaymentsInitializeSecurity](../../models/operations/guestpaymentsinitializesecurity.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The security requirements to use for the request.                                                                                                                                                                   |
| `xPublishableKey`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The publicly shareable identifier used to identify your Bolt merchant division.                                                                                                                                     |
| `xMerchantClientId`                                                                                                                                                                                                 | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | A unique identifier for a shopper's device, generated by Bolt. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics. |
| `guestPaymentInitializeRequest`                                                                                                                                                                                     | [components.GuestPaymentInitializeRequest](../../models/components/guestpaymentinitializerequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                      |
| `options.retries`                                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                    |


### Response

**Promise\<[operations.GuestPaymentsInitializeResponse](../../models/operations/guestpaymentsinitializeresponse.md)\>**
### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GuestPaymentsInitializeResponseBody | 4XX                                        | application/json                           |
| errors.SDKError                            | 4xx-5xx                                    | */*                                        |

## update

Update a guest payment that is still in the pending state, with new information about the payment.

### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { AddressReferenceExplicitTag, CountryCode, Currency } from "@boltpay/bolt-typescript-sdk/models/components";

const boltTypescriptSDK = new BoltTypescriptSDK();

async function run() {
  const result = await boltTypescriptSDK.payments.guest.update("<YOUR_API_KEY_HERE>", "iKv7t5bgt1gg", "<value>", "<value>", {
    cart: {
      orderReference: "order_100",
      orderDescription: "Order #1234567890",
      displayId: "215614191",
      shipments: [
        {
        address:     {
              dotTag: AddressReferenceExplicitTag.Explicit,
              firstName: "Alice",
              lastName: "Baker",
              company: "ACME Corporation",
              streetAddress1: "535 Mission St, Ste 1401",
              streetAddress2: "c/o Shipping Department",
              locality: "San Francisco",
              postalCode: "94105",
              region: "CA",
              countryCode: CountryCode.Us,
              email: "alice@example.com",
              phone: "+14155550199",
            },
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
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                           | Type                                                                                                                                                                                                                | Required                                                                                                                                                                                                            | Description                                                                                                                                                                                                         | Example                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                                                                                                          | [operations.GuestPaymentsUpdateSecurity](../../models/operations/guestpaymentsupdatesecurity.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                  | The security requirements to use for the request.                                                                                                                                                                   |                                                                                                                                                                                                                     |
| `id`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The ID of the guest payment to update                                                                                                                                                                               | [object Object]                                                                                                                                                                                                     |
| `xPublishableKey`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The publicly shareable identifier used to identify your Bolt merchant division.                                                                                                                                     |                                                                                                                                                                                                                     |
| `xMerchantClientId`                                                                                                                                                                                                 | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | A unique identifier for a shopper's device, generated by Bolt. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics. |                                                                                                                                                                                                                     |
| `paymentUpdateRequest`                                                                                                                                                                                              | [components.PaymentUpdateRequest](../../models/components/paymentupdaterequest.md)                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                 |                                                                                                                                                                                                                     |
| `options`                                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                                               |                                                                                                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                      |                                                                                                                                                                                                                     |
| `options.retries`                                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                    |                                                                                                                                                                                                                     |


### Response

**Promise\<[operations.GuestPaymentsUpdateResponse](../../models/operations/guestpaymentsupdateresponse.md)\>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.GuestPaymentsUpdateResponseBody | 4XX                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |

## performAction

Finalize a pending payment being made by a Bolt guest shopper. Upon receipt of a finalized payment result, payment success should be communicated to the shopper.

### Example Usage

```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { PaymentActionRequestTag } from "@boltpay/bolt-typescript-sdk/models/components";

const boltTypescriptSDK = new BoltTypescriptSDK();

async function run() {
  const result = await boltTypescriptSDK.payments.guest.performAction("<YOUR_API_KEY_HERE>", "iKv7t5bgt1gg", "<value>", "<value>", {
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
| `security`                                                                                                                                                                                                          | [operations.GuestPaymentsActionSecurity](../../models/operations/guestpaymentsactionsecurity.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                  | The security requirements to use for the request.                                                                                                                                                                   |                                                                                                                                                                                                                     |
| `id`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The ID of the guest payment to operate on                                                                                                                                                                           | [object Object]                                                                                                                                                                                                     |
| `xPublishableKey`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The publicly shareable identifier used to identify your Bolt merchant division.                                                                                                                                     |                                                                                                                                                                                                                     |
| `xMerchantClientId`                                                                                                                                                                                                 | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | A unique identifier for a shopper's device, generated by Bolt. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics. |                                                                                                                                                                                                                     |
| `paymentActionRequest`                                                                                                                                                                                              | [components.PaymentActionRequest](../../models/components/paymentactionrequest.md)                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                 |                                                                                                                                                                                                                     |
| `options`                                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                                               |                                                                                                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                      |                                                                                                                                                                                                                     |
| `options.retries`                                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                    |                                                                                                                                                                                                                     |


### Response

**Promise\<[operations.GuestPaymentsActionResponse](../../models/operations/guestpaymentsactionresponse.md)\>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.GuestPaymentsActionResponseBody | 4XX                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |
