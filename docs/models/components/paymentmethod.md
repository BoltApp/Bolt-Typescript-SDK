# PaymentMethod

## Example Usage

```typescript
import {
  AddressReferenceExplicitTag,
  CountryCode,
  CreditCardNetwork,
  DotTag,
  PaymentMethod,
} from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentMethod = {
    dotTag: DotTag.CreditCard,
    id: "X5h6j8uLpVGK",
    billingAddress: {
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
    },
    network: CreditCardNetwork.Visa,
    last4: "1004",
    expiration: "2029-03",
};
```

## Supported Types

### `components.PaymentMethodCreditCard`

```typescript
const value: components.PaymentMethodCreditCard = /* values here */
```

### `components.PaymentMethodPaypalOutput`

```typescript
const value: components.PaymentMethodPaypalOutput = /* values here */
```

### `components.PaymentMethodAffirmOutput`

```typescript
const value: components.PaymentMethodAffirmOutput = /* values here */
```

### `components.PaymentMethodAfterpayOutput`

```typescript
const value: components.PaymentMethodAfterpayOutput = /* values here */
```

### `components.PaymentMethodKlarnaOutput`

```typescript
const value: components.PaymentMethodKlarnaOutput = /* values here */
```

### `components.PaymentMethodKlarnaAccountOutput`

```typescript
const value: components.PaymentMethodKlarnaAccountOutput = /* values here */
```

### `components.PaymentMethodKlarnaPaynowOutput`

```typescript
const value: components.PaymentMethodKlarnaPaynowOutput = /* values here */
```

