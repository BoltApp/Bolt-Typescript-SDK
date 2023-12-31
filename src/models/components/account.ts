/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AddressListing } from "./addresslisting";
import { Profile } from "./profile";
import { Expose, Type } from "class-transformer";

export class Account extends SpeakeasyBase {
    /**
     * A list of addresses associated with this account.
     */
    @SpeakeasyMetadata({ elemType: AddressListing })
    @Expose({ name: "addresses" })
    @Type(() => AddressListing)
    addresses: AddressListing[];

    /**
     * A list of payment methods associated with this account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payment_methods" })
    paymentMethods: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(() => Profile)
    profile?: Profile;
}
