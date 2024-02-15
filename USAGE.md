<!-- Start SDK Example Usage [usage] -->
```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

async function run() {
    const sdk = new BoltTypescriptSDK({
        security: {
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const xPublishableKey = "<value>";

    const result = await sdk.account.getDetails(xPublishableKey);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->