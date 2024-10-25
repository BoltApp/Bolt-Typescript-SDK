# PaymentMethod


## Supported Types

### `components.PaymentMethodCreditCard`

```typescript
const value: components.PaymentMethodCreditCard = {
  dotTag: DotTag.CreditCard,
  id: "X5h6j8uLpVGK",
  billingAddress: {
    dotTag: AddressReferenceIdTag.Id,
    id: "D4g3h5tBuVYK9",
  },
  network: CreditCardNetwork.Visa,
  last4: "1004",
  expiration: "2029-03",
};
```

### `components.PaymentMethodPaypalOutput`

```typescript
const value: components.PaymentMethodPaypalOutput = {
  dotTag: PaymentMethodPaypalTag.Paypal,
};
```

### `components.PaymentMethodAffirmOutput`

```typescript
const value: components.PaymentMethodAffirmOutput = {
  dotTag: PaymentMethodAffirmTag.Affirm,
};
```

### `components.PaymentMethodAfterpayOutput`

```typescript
const value: components.PaymentMethodAfterpayOutput = {
  dotTag: PaymentMethodAfterpayTag.Afterpay,
};
```

### `components.PaymentMethodKlarnaOutput`

```typescript
const value: components.PaymentMethodKlarnaOutput = {
  dotTag: PaymentMethodKlarnaTag.Klarna,
};
```

### `components.PaymentMethodKlarnaAccountOutput`

```typescript
const value: components.PaymentMethodKlarnaAccountOutput = {
  dotTag: PaymentMethodKlarnaAccountTag.KlarnaAccount,
};
```

### `components.PaymentMethodKlarnaPaynowOutput`

```typescript
const value: components.PaymentMethodKlarnaPaynowOutput = {
  dotTag: PaymentMethodKlarnaPaynowTag.KlarnaPaynow,
};
```

