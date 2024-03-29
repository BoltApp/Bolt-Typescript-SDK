/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../models/components";
import { HTTPClient } from "./http";
import { RetryConfig } from "./retries";
import { pathToFunc } from "./url";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://{environment}.bolt.com/v3"] as const;

export enum ServerEnvironment {
    Api = "api",
    ApiSandbox = "api-sandbox",
}

export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: components.Security | (() => Promise<components.Security>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows setting the environment variable for url substitution
     */
    environment?: ServerEnvironment;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const serverParams = [
        {
            environment: options.environment?.toString() ?? "api-sandbox",
        },
    ];
    let params: Record<string, string> = {};

    if (!serverURL) {
        const serverIdx = options.serverIdx ?? 0;
        if (serverIdx < 0 || serverIdx >= ServerList.length) {
            throw new Error(`Invalid server index ${serverIdx}`);
        }
        serverURL = ServerList[serverIdx] || "";
        params = serverParams[serverIdx] || {};
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = Object.freeze({
    language: "typescript",
    openapiDocVersion: "3.0.2",
    sdkVersion: "0.12.1",
    genVersion: "2.281.2",
    userAgent: "speakeasy-sdk/typescript 0.12.1 2.281.2 3.0.2 @boltpay/bolt-typescript-sdk",
});
