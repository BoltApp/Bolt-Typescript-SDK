# AccountGetResponse

## Example Usage

```typescript
import { CountryCode, PaymentMethodKlarnaTag } from "@boltpay/bolt-typescript-sdk/models/components";
import { AccountGetResponse } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: AccountGetResponse = {
  contentType: "<value>",
  statusCode: 306,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  account: {
    addresses: [
      {
        id: "D4g3h5tBuVYK9",
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
        isDefault: true,
      },
    ],
    paymentMethods: [
      {
        dotTag: PaymentMethodKlarnaTag.Klarna,
      },
    ],
    profile: {
      firstName: "Alice",
      lastName: "Baker",
      email: "alice@example.com",
      phone: "+14155550199",
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
| `account`                                                             | [components.Account](../../models/components/account.md)              | :heavy_minus_sign:                                                    | The account details were successfully retrieved                       |