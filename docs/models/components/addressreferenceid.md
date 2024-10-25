# AddressReferenceId

## Example Usage

```typescript
import { AddressReferenceId, AddressReferenceIdTag } from "@boltpay/bolt-typescript-sdk/models/components";

let value: AddressReferenceId = {
  dotTag: AddressReferenceIdTag.Id,
  id: "D4g3h5tBuVYK9",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `dotTag`                                                                             | [components.AddressReferenceIdTag](../../models/components/addressreferenceidtag.md) | :heavy_check_mark:                                                                   | The type of address reference                                                        | id                                                                                   |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The address's ID                                                                     | D4g3h5tBuVYK9                                                                        |