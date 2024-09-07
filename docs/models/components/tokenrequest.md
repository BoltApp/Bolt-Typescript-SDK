# TokenRequest

## Example Usage

```typescript
import { GrantType, Scope, TokenRequest } from "@boltpay/bolt-typescript-sdk/models/components";

let value: TokenRequest = {
    grantType: GrantType.AuthorizationCode,
    code: "7GSjMRSHs6Ak7C_zvVW6P2IhZOHxMK7HZKW1fMX85ms",
    clientId:
        "8fd9diIy59sj.IraJdeIgmdsO.fd233434fg2c616cgo932aa6e1e4fc627a9385045gr395222a127gi93c595rg4",
    clientSecret: "23ee7ec7301779eaff451d7c6f6cba322499e3c0ec752f800c72a8f99217e3a8",
    scope: [Scope.BoltAccountView],
    state: "xyzABC123",
};
```

## Supported Types

### `components.AuthorizationCodeRequest`

```typescript
const value: components.AuthorizationCodeRequest = /* values here */
```

### `components.RefreshTokenRequest`

```typescript
const value: components.RefreshTokenRequest = /* values here */
```

