<!-- Start SDK Example Usage [usage] -->
```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

const boltTypescriptSDK = new BoltTypescriptSDK({
    security: {
        oauth: "<YOUR_OAUTH_HERE>",
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await boltTypescriptSDK.account.getDetails("<value>", "<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->