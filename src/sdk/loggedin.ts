/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentsLoggedInInitialize } from "../funcs/paymentsLoggedInInitialize.js";
import { paymentsLoggedInPerformAction } from "../funcs/paymentsLoggedInPerformAction.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class LoggedIn extends ClientSDK {
  /**
   * Initialize a Bolt payment for logged in shoppers
   *
   * @remarks
   * Initialize a Bolt logged-in shopper's intent to pay for a cart, using the specified payment method. Payments must be finalized before indicating the payment result to the shopper. Some payment methods will finalize automatically after initialization. For these payments, they will transition directly to "finalized" and the response from Initialize Payment will contain a finalized payment.
   */
  async initialize(
    paymentInitializeRequest: components.PaymentInitializeRequest,
    xPublishableKey: string,
    xMerchantClientId?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.PaymentsInitializeResponse> {
    return unwrapAsync(paymentsLoggedInInitialize(
      this,
      paymentInitializeRequest,
      xPublishableKey,
      xMerchantClientId,
      options,
    ));
  }

  /**
   * Finalize a pending payment
   *
   * @remarks
   * Finalize a pending payment being made by a Bolt logged-in shopper. Upon receipt of a finalized payment result, payment success should be communicated to the shopper.
   */
  async performAction(
    paymentActionRequest: components.PaymentActionRequest,
    id: string,
    xPublishableKey: string,
    xMerchantClientId?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.PaymentsActionResponse> {
    return unwrapAsync(paymentsLoggedInPerformAction(
      this,
      paymentActionRequest,
      id,
      xPublishableKey,
      xMerchantClientId,
      options,
    ));
  }
}
