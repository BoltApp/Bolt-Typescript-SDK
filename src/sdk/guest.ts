/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentsGuestInitialize } from "../funcs/paymentsGuestInitialize.js";
import { paymentsGuestPerformAction } from "../funcs/paymentsGuestPerformAction.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Guest extends ClientSDK {
  /**
   * Initialize a Bolt payment for guest shoppers
   *
   * @remarks
   * Initialize a Bolt guest shopper's intent to pay for a cart, using the specified payment method. Payments must be finalized before indicating the payment result to the shopper. Some payment methods will finalize automatically after initialization. For these payments, they will transition directly to "finalized" and the response from Initialize Payment will contain a finalized payment.
   */
  async initialize(
    security: operations.GuestPaymentsInitializeSecurity,
    guestPaymentInitializeRequest: components.GuestPaymentInitializeRequest,
    xPublishableKey: string,
    xMerchantClientId?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.GuestPaymentsInitializeResponse> {
    return unwrapAsync(paymentsGuestInitialize(
      this,
      security,
      guestPaymentInitializeRequest,
      xPublishableKey,
      xMerchantClientId,
      options,
    ));
  }

  /**
   * Finalize a pending guest payment
   *
   * @remarks
   * Finalize a pending payment being made by a Bolt guest shopper. Upon receipt of a finalized payment result, payment success should be communicated to the shopper.
   */
  async performAction(
    security: operations.GuestPaymentsActionSecurity,
    paymentActionRequest: components.PaymentActionRequest,
    id: string,
    xPublishableKey: string,
    xMerchantClientId?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.GuestPaymentsActionResponse> {
    return unwrapAsync(paymentsGuestPerformAction(
      this,
      security,
      paymentActionRequest,
      id,
      xPublishableKey,
      xMerchantClientId,
      options,
    ));
  }
}
