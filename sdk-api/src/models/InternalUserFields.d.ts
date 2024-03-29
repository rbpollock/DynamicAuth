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
/**
 * User fields that can be updated on dashboard or through the rest API which do not involve any uniqueness checks or further verification
 * @export
 * @interface InternalUserFields
 */
export interface InternalUserFields {
    /**
     *
     * @type {string}
     * @memberof InternalUserFields
     */
    alias?: string;
    /**
     *
     * @type {string}
     * @memberof InternalUserFields
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof InternalUserFields
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof InternalUserFields
     */
    jobTitle?: string;
    /**
     *
     * @type {string}
     * @memberof InternalUserFields
     */
    phoneNumber?: string;
    /**
     *
     * @type {object}
     * @memberof InternalUserFields
     */
    metadata?: object;
    /**
     *
     * @type {string}
     * @memberof InternalUserFields
     */
    tShirtSize?: string;
    /**
     *
     * @type {string}
     * @memberof InternalUserFields
     */
    team?: string;
    /**
     *
     * @type {boolean}
     * @memberof InternalUserFields
     */
    policiesConsent?: boolean;
    /**
     * Standard ISO 3166-1 alpha-2 two-letter country code
     * @type {string}
     * @memberof InternalUserFields
     */
    country?: string | null;
    /**
     * Alphanumeric username
     * @type {string}
     * @memberof InternalUserFields
     */
    username?: string | null;
    /**
     * BTC wallet address
     * @type {string}
     * @memberof InternalUserFields
     */
    btcWallet?: string | null;
    /**
     * KDA wallet address
     * @type {string}
     * @memberof InternalUserFields
     */
    kdaWallet?: string | null;
    /**
     * LTC wallet address
     * @type {string}
     * @memberof InternalUserFields
     */
    ltcWallet?: string | null;
    /**
     * CKB wallet address
     * @type {string}
     * @memberof InternalUserFields
     */
    ckbWallet?: string | null;
    /**
     * KAS wallet address
     * @type {string}
     * @memberof InternalUserFields
     */
    kasWallet?: string | null;
    /**
     * DOGE wallet address
     * @type {string}
     * @memberof InternalUserFields
     */
    dogeWallet?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof InternalUserFields
     */
    emailNotification?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InternalUserFields
     */
    discordNotification?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InternalUserFields
     */
    newsletterNotification?: boolean;
    /**
     *
     * @type {string}
     * @memberof InternalUserFields
     */
    email?: string;
}
export declare function InternalUserFieldsFromJSON(json: any): InternalUserFields;
export declare function InternalUserFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalUserFields;
export declare function InternalUserFieldsToJSON(value?: InternalUserFields | null): any;
