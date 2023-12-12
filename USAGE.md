<!-- Start SDK Example Usage [usage] -->
```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";
import { AccountGetRequest } from "@boltpay/bolt-typescript-sdk/dist/models/operations";

async function run() {
    const sdk = new BoltTypescriptSDK({
        security: {
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });
    const xPublishableKey: string = "string";

    const res = await sdk.account.getDetails(xPublishableKey);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->