# OauthGetTokenResponse

## Example Usage

```typescript
import { OauthGetTokenResponse } from "@boltpay/bolt-typescript-sdk/models/operations";

let value: OauthGetTokenResponse = {
  contentType: "<value>",
  statusCode: 431,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  getAccessTokenResponse: {
    idToken:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaWNlQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV4cCI6MTcwNTY1MTczMSwiZmlyc3RfbmFtZSI6IkFsaWNlIiwiaXNzIjoiaHR0cDovL2FwaS5ib2x0LmNvbSIsImxhc3RfbmFtZSI6IkJha2VyIiwicGhvbmVfbnVtYmVyIjoiKzE0MTU1NTUwMTk5IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJpYXQiOjE3MDU2NDg0MjF9.Ir0aKx40zfNCZol1DnqchFx9ciHlyZY9y10mndEjOBHhpHif8-7aZl2UoJVs_0Hj-5ArEouUD6n-y1SJD0Wns-gDMoA0Etoc5dT_0zt0Kw5T8FvJWbyKyyGSDEwPFVADIRxDPMpVoHx0C0nwr_GudnIX7YG6p2HCsoGm2C04ZxKpifSixB3-xNB6k9u1ESWh0KjMCYzBQ2x9wbQ_S6kFtio075PFYcZ3iRQz8oD15NsZDd2czzZkRnGTGlpG0sAvScLXMvDDOWBIu-4wvOEOT7avunJQ_rOCYUlyJe7JGh0QllpeJNau8kx-4YGMeFTkeGM_hPIKsRF1e6o_rWp5CMJnmJDPme-zlJxWodyaHNed5XW-4DR7blv_PFOJNrRvymRoTOd74LIpS21GRCNYrphj7N6-TsSfO9hMQ9ehxrgNAryWbVtTM_3VvWyzX-SRa7BcRkS97sokxc04s3cbXra3x6brE3uL1yoOWNf8GDZNkv1uUAnrOZcTuLacrPjkQgOPb-chMiWS1L0Zd1wX3rqpeCyEswsGKxRRkpgwoBaVVQmLB9m51B6SXEvURTcy2Hx8KzgfXQ_-uC-KrniQxWzYms8A1lypKXkEcyMD2E4Q7EB4UeD2qZAk4tZo611uHegaHaEM7EQyFN3nxvibaqFpXzdxVmOCX0_wQr1nDNA",
    accessToken:
      "KCqordmSK6_lpkaXaXfGD8LwnKMGGOYy4Ju2IaBXpJI.CzOF7QOmGGQEgIzBjxOEh1FbRdDpzf9zbm9eHrCZ6zw",
    expiresIn: 3600,
    refreshToken:
      "4hJYNO4GHvALZoocXoLenfNeFy1RR5ZT6G5JYrFbvkI.Q_PqV0lIszCNoN-85EwD-2nYZOVEepVgJSolx-Jbzrs",
    refreshTokenScope: "bolt.account.view",
    scope: "bolt.account.manage openid",
    tokenType: "bearer",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `contentType`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | HTTP response content type for this operation                                          |
| `statusCode`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | HTTP response status code for this operation                                           |
| `rawResponse`                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                  | :heavy_check_mark:                                                                     | Raw HTTP response; suitable for custom response parsing                                |
| `getAccessTokenResponse`                                                               | [components.GetAccessTokenResponse](../../models/components/getaccesstokenresponse.md) | :heavy_minus_sign:                                                                     | Access token is successfully fetched                                                   |