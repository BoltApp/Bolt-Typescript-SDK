# AccountAddressEditResponseBody

The address is invalid and cannot be added, or some other error has occurred


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

