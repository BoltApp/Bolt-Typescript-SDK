# PaymentMethodInput


## Supported Types

### `components.PaymentMethodCreditCardInput`

```typescript
const value: components.PaymentMethodCreditCardInput = {
  dotTag: DotTag.CreditCard,
  billingAddress: {
    dotTag: AddressReferenceIdTag.Id,
    id: "D4g3h5tBuVYK9",
  },
  network: CreditCardNetwork.Visa,
  bin: "411111",
  last4: "1004",
  expiration: "2029-03",
  token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
};
```

### `components.PaymentMethodPaypal`

```typescript
const value: components.PaymentMethodPaypal = {
  dotTag: PaymentMethodPaypalTag.Paypal,
  successUrl: "https://www.example.com/paypal-callback/success",
  cancelUrl: "https://www.example.com/paypal-callback/cancel",
};
```

### `components.PaymentMethodAffirm`

```typescript
const value: components.PaymentMethodAffirm = {
  dotTag: PaymentMethodAffirmTag.Affirm,
  returnUrl: "www.example.com/handle_affirm_success",
};
```

### `components.PaymentMethodAfterpay`

```typescript
const value: components.PaymentMethodAfterpay = {
  dotTag: PaymentMethodAfterpayTag.Afterpay,
  returnUrl: "www.example.com/handle_afterpay_success",
};
```

### `components.PaymentMethodKlarna`

```typescript
const value: components.PaymentMethodKlarna = {
  dotTag: PaymentMethodKlarnaTag.Klarna,
  returnUrl: "www.example.com/handle_klarna_success",
};
```

### `components.PaymentMethodKlarnaAccount`

```typescript
const value: components.PaymentMethodKlarnaAccount = {
  dotTag: PaymentMethodKlarnaAccountTag.KlarnaAccount,
  returnUrl: "www.example.com/handle_klarna_account_success",
};
```

### `components.PaymentMethodKlarnaPaynow`

```typescript
const value: components.PaymentMethodKlarnaPaynow = {
  dotTag: PaymentMethodKlarnaPaynowTag.KlarnaPaynow,
  returnUrl: "www.example.com/handle_klarna_paynow_success",
};
```

