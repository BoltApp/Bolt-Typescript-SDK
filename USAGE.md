<!-- Start SDK Example Usage -->
```typescript
import { BoltTypescriptSDK } from "Bolt-Typescript-SDK";
import { AccountGetRequest } from "Bolt-Typescript-SDK/dist/models/operations";

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
<!-- End SDK Example Usage -->