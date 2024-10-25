# PaymentResponse


## Supported Types

### `components.PaymentResponseFinalized`

```typescript
const value: components.PaymentResponseFinalized = {
  dotTag: PaymentResponseFinalizedTag.Finalized,
  id: "iKv7t5bgt1gg",
  status: Status.Success,
  transaction: {
    reference: "OBYG-X1PX-FN55",
    authorizations: [
      {
        processorReference: "123456789XYZ",
      },
    ],
  },
};
```

### `components.PaymentResponsePending`

```typescript
const value: components.PaymentResponsePending = {
  dotTag: PaymentResponsePendingTag.Pending,
  id: "iKv7t5bgt1gg",
  status: PaymentResponsePendingStatus.AwaitingUserConfirmation,
  action: Action.Redirect,
  url: "www.example.com/payments/finalize",
};
```

