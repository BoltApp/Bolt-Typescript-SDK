<!-- Start SDK Example Usage [usage] -->
```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

async function run() {
    const sdk = new BoltTypescriptSDK({
        security: {
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const xPublishableKey = "string";

    const res = await sdk.account.getDetails(xPublishableKey);

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->