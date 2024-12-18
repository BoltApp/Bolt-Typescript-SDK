/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { BoltTypescriptSDKCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity } from "../lib/security.js";
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
 * Create a test account
 *
 * @remarks
 * Create a Bolt shopper account for testing purposes.
 */
export async function testingCreateAccount(
  client: BoltTypescriptSDKCore,
  security: operations.TestingAccountCreateSecurity,
  accountTestCreationData: components.AccountTestCreationData,
  xPublishableKey: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.TestingAccountCreateResponse,
    | errors.TestingAccountCreateResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: operations.TestingAccountCreateRequest = {
    accountTestCreationData: accountTestCreationData,
    xPublishableKey: xPublishableKey,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.TestingAccountCreateRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload["account-test-creation-data"], {
    explode: true,
  });

  const path = pathToFunc("/testing/accounts")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Publishable-Key": encodeSimple(
      "X-Publishable-Key",
      payload["X-Publishable-Key"],
      { explode: false, charEncoding: "none" },
    ),
  });

  const requestSecurity = resolveSecurity(
    [
      {
        fieldName: "X-API-Key",
        type: "apiKey:header",
        value: security?.apiKey,
      },
    ],
  );

  const context = {
    operationID: "testingAccountCreate",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: security,
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
    operations.TestingAccountCreateResponse,
    | errors.TestingAccountCreateResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.TestingAccountCreateResponse$inboundSchema, {
      key: "account-test-creation-data",
    }),
    M.jsonErr("4XX", errors.TestingAccountCreateResponseBody$inboundSchema),
    M.fail("5XX"),
    M.nil("default", operations.TestingAccountCreateResponse$inboundSchema),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
