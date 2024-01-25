# AddressReferenceExplicitInput

A physical address.


## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `dotTag`                                                                                               | [components.AddressReferenceExplicitTag](../../models/components/addressreferenceexplicittag.md)       | :heavy_check_mark:                                                                                     | The type of address reference                                                                          | explicit                                                                                               |
| `firstName`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | The first name of the person associated with this address.                                             | Alice                                                                                                  |
| `lastName`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | The last name of the person associated with this address.                                              | Baker                                                                                                  |
| `company`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The company associated with this address.                                                              | ACME Corporation                                                                                       |
| `streetAddress1`                                                                                       | *string*                                                                                               | :heavy_check_mark:                                                                                     | The street address associated with this address.                                                       | 535 Mission St, Ste 1401                                                                               |
| `streetAddress2`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Any additional, optional, street address information associated with this address.                     | c/o Shipping Department                                                                                |
| `locality`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | The locality (e.g. city, town, etc...) associated with this address.                                   | San Francisco                                                                                          |
| `postalCode`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | The postal code associated with this address.                                                          | 94105                                                                                                  |
| `region`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The region or administrative area (e.g. state, province, county, etc...) associated with this address. | CA                                                                                                     |
| `countryCode`                                                                                          | [components.CountryCode](../../models/components/countrycode.md)                                       | :heavy_check_mark:                                                                                     | The country (in its ISO 3166 alpha-2 format) associated with this address.                             | US                                                                                                     |
| `email`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The email address associated with this address.                                                        | alice@example.com                                                                                      |
| `phone`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The phone number associated with this address.                                                         | +14155550199                                                                                           |