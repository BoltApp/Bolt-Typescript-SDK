# PaymentResponse

## Example Usage

```typescript
import { Action, PaymentResponse, PaymentResponsePendingStatus, PaymentResponsePendingTag } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentResponse = {
    dotTag: PaymentResponsePendingTag.Pending,
    id: "iKv7t5bgt1gg",
    status: PaymentResponsePendingStatus.AwaitingUserConfirmation,
    action: Action.Redirect,
    url: "www.example.com/payments/finalize",
};
```

## Supported Types

### `components.PaymentResponseFinalized`

```typescript
const value: components.PaymentResponseFinalized = /* values here */
```

### `components.PaymentResponsePending`

```typescript
const value: components.PaymentResponsePending = /* values here */
```

