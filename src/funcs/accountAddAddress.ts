/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { BoltTypescriptSDKCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Add an address
 *
 * @remarks
 * Add an address to the shopper's account
 */
export async function accountAddAddress(
  client: BoltTypescriptSDKCore,
  addressListing: components.AddressListingInput,
  xPublishableKey: string,
  xMerchantClientId?: string | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    operations.AccountAddressCreateResponse,
    | errors.AccountAddressCreateResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: operations.AccountAddressCreateRequest = {
    addressListing: addressListing,
    xPublishableKey: xPublishableKey,
    xMerchantClientId: xMerchantClientId,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.AccountAddressCreateRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload["address-listing"], {
    explode: true,
  });

  const path = pathToFunc("/account/addresses")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Merchant-Client-Id": encodeSimple(
      "X-Merchant-Client-Id",
      payload["X-Merchant-Client-Id"],
      { explode: false, charEncoding: "none" },
    ),
    "X-Publishable-Key": encodeSimple(
      "X-Publishable-Key",
      payload["X-Publishable-Key"],
      { explode: false, charEncoding: "none" },
    ),
  });

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "accountAddressCreate",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result] = await M.match<
    operations.AccountAddressCreateResponse,
    | errors.AccountAddressCreateResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.AccountAddressCreateResponse$inboundSchema, {
      key: "address-listing",
    }),
    M.jsonErr("4XX", errors.AccountAddressCreateResponseBody$inboundSchema),
    M.fail("5XX"),
    M.nil("default", operations.AccountAddressCreateResponse$inboundSchema),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
