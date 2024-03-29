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
 *
 * @export
 * @interface TurnkeyWalletProperties
 */
export interface TurnkeyWalletProperties {
    /**
     *
     * @type {string}
     * @memberof TurnkeyWalletProperties
     */
    turnkeySubOrganizationId: string;
    /**
     *
     * @type {string}
     * @memberof TurnkeyWalletProperties
     */
    turnkeyPrivateKeyId?: string;
    /**
     *
     * @type {string}
     * @memberof TurnkeyWalletProperties
     */
    turnkeyHDWalletId?: string;
    /**
     * Whether or not the wallet has an authenticator (passkey, api key, etc) attached to it. If false, the wallet cannot currently be accessed
     * @type {boolean}
     * @memberof TurnkeyWalletProperties
     */
    isAuthenticatorAttached: boolean;
}
export declare function TurnkeyWalletPropertiesFromJSON(json: any): TurnkeyWalletProperties;
export declare function TurnkeyWalletPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TurnkeyWalletProperties;
export declare function TurnkeyWalletPropertiesToJSON(value?: TurnkeyWalletProperties | null): any;
