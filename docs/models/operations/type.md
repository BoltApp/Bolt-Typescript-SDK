# Type

The expected authorization result when using the generated token for a payment.

## Example Usage

```typescript
import { Type } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: Type = Type.Approve;
```

## Values

| Name      | Value     |
| --------- | --------- |
| `Approve` | approve   |
| `Decline` | decline   |