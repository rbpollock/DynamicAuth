/**
 * Dashboard API
 * Dashboard API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BillingSubscriptionPlanTypeEnum } from './BillingSubscriptionPlanTypeEnum';
/**
 *
 * @export
 * @interface BillingSubscription
 */
export interface BillingSubscription {
    /**
     *
     * @type {string}
     * @memberof BillingSubscription
     */
    billingPortalUrl?: string;
    /**
     *
     * @type {string}
     * @memberof BillingSubscription
     */
    billingPortalAddPaymentMethodUrl?: string;
    /**
     *
     * @type {boolean}
     * @memberof BillingSubscription
     */
    hasPaymentMethod: boolean;
    /**
     *
     * @type {BillingSubscriptionPlanTypeEnum}
     * @memberof BillingSubscription
     */
    planType: BillingSubscriptionPlanTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof BillingSubscription
     */
    inTrial: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof BillingSubscription
     */
    scope: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof BillingSubscription
     */
    trialStart?: Date;
    /**
     *
     * @type {Date}
     * @memberof BillingSubscription
     */
    trialEnd?: Date;
    /**
     *
     * @type {number}
     * @memberof BillingSubscription
     */
    trialDaysLeft?: number;
}
export declare function BillingSubscriptionFromJSON(json: any): BillingSubscription;
export declare function BillingSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingSubscription;
export declare function BillingSubscriptionToJSON(value?: BillingSubscription | null): any;