<!-- Start SDK Example Usage [usage] -->
```typescript
import { BoltTypescriptSDK } from "@boltpay/bolt-typescript-sdk";

const boltTypescriptSDK = new BoltTypescriptSDK({
    security: {
        oauth: "<YOUR_OAUTH_HERE>",
    },
});

async function run() {
    const xPublishableKey = "<value>";

    const result = await boltTypescriptSDK.account.getDetails(xPublishableKey);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->