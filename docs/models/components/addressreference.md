# AddressReference


## Supported Types

### `components.AddressReferenceId`

```typescript
const value: components.AddressReferenceId = {
  dotTag: AddressReferenceIdTag.Id,
  id: "D4g3h5tBuVYK9",
};
```

### `components.AddressReferenceExplicit`

```typescript
const value: components.AddressReferenceExplicit = {
  dotTag: AddressReferenceExplicitTag.Explicit,
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
};
```

