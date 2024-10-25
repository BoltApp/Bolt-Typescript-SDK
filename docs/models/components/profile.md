# Profile

An account's identifying information.

## Example Usage

```typescript
import { Profile } from "@boltpay/bolt-typescript-sdk/models/components";

let value: Profile = {
  firstName: "Alice",
  lastName: "Baker",
  email: "alice@example.com",
  phone: "+14155550199",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `firstName`                                                | *string*                                                   | :heavy_check_mark:                                         | The given name of the person associated with this profile. | Alice                                                      |
| `lastName`                                                 | *string*                                                   | :heavy_check_mark:                                         | The last name of the person associated with this profile.  | Baker                                                      |
| `email`                                                    | *string*                                                   | :heavy_check_mark:                                         | The email address asscoiated with this profile.            | alice@example.com                                          |
| `phone`                                                    | *string*                                                   | :heavy_minus_sign:                                         | The phone number associated with this profile.             | +14155550199                                               |