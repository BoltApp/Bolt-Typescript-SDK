# PaymentsInitializeResponseBody

The payment operation cannot complete


## Supported Types

### `errors.ErrorT`

```typescript
const value: errors.ErrorT = {
  dotTag: DotTag.UnprocessableRequest,
  message: "We were unable to process your request.",
};
```

### `errors.FieldError`

```typescript
const value: errors.FieldError = {
  dotTag: SchemasTag.InvalidInputParameter,
  message: "We were unable to process your request.",
  field: "address.phone",
};
```

### `errors.CartError`

```typescript
const value: errors.CartError = {
  dotTag: SchemasCartErrorTag.PaymentAlreadyExists,
  message: "A payment for this order already exists",
};
```

### `errors.CreditCardError`

```typescript
const value: errors.CreditCardError = {
  dotTag: SchemasCreditCardErrorTag.DeclinedInvalidCvv,
  message: "The payment was declined because the CVV is not valid",
};
```

