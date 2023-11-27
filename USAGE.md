<!-- Start SDK Example Usage [usage] -->
```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { AccountGetRequest } from "@boltpay/bolt-typescript-sdk/dist/models/operations";

(async () => {
    const sdk = new BoltTypescriptSDK({
        security: {
            apiKey: "",
            oauth: "",
        },
    });
    const xPublishableKey: string = "string";

    const res = await sdk.account.getDetails(xPublishableKey);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage [usage] -->