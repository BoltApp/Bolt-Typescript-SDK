# AccountAddressEditResponse

## Example Usage

```typescript
import { CountryCode } from "@boltpay/bolt-typescript-sdk/models/components";
import { AccountAddressEditResponse } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: AccountAddressEditResponse = {
    contentType: "<value>",
    statusCode: 844266,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    addressListing: {
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
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contentType`                                                          | *string*                                                               | :heavy_check_mark:                                                     | HTTP response content type for this operation                          |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | HTTP response status code for this operation                           |
| `rawResponse`                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)  | :heavy_check_mark:                                                     | Raw HTTP response; suitable for custom response parsing                |
| `addressListing`                                                       | [components.AddressListing](../../models/components/addresslisting.md) | :heavy_minus_sign:                                                     | The address was successfully edited                                    |