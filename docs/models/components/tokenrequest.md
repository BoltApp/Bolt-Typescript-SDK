# TokenRequest


## Supported Types

### `components.AuthorizationCodeRequest`

```typescript
const value: components.AuthorizationCodeRequest = {
  grantType: GrantType.AuthorizationCode,
  code: "7GSjMRSHs6Ak7C_zvVW6P2IhZOHxMK7HZKW1fMX85ms",
  clientId:
    "8fd9diIy59sj.IraJdeIgmdsO.fd233434fg2c616cgo932aa6e1e4fc627a9385045gr395222a127gi93c595rg4",
  clientSecret:
    "23ee7ec7301779eaff451d7c6f6cba322499e3c0ec752f800c72a8f99217e3a8",
  scope: [
    Scope.BoltAccountView,
  ],
  state: "xyzABC123",
};
```

### `components.RefreshTokenRequest`

```typescript
const value: components.RefreshTokenRequest = {
  grantType: RefreshTokenRequestGrantType.RefreshToken,
  refreshToken:
    "4hJYNO4GHvALZoocXoLenfNeFy1RR5ZT6G5JYrFbvkI.Q_PqV0lIszCNoN-85EwD-2nYZOVEepVgJSolx-Jbzrs",
  clientId:
    "8fd9diIy59sj.IraJdeIgmdsO.fd233434fg2c616cgo932aa6e1e4fc627a9385045gr395222a127gi93c595rg4",
  clientSecret:
    "23ee7ec7301779eaff451d7c6f6cba322499e3c0ec752f800c72a8f99217e3a8",
  scope: [
    RefreshTokenRequestScope.BoltAccountManage,
  ],
  state: "xyzABC123",
};
```

