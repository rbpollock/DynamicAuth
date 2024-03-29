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
 * @interface InitEmailAuthRequest
 */
export interface InitEmailAuthRequest {
    /**
     *
     * @type {string}
     * @memberof InitEmailAuthRequest
     */
    walletId: string;
    /**
     *
     * @type {string}
     * @memberof InitEmailAuthRequest
     */
    turnkeyEmailAuthTargetPublicKey: string;
}
export declare function InitEmailAuthRequestFromJSON(json: any): InitEmailAuthRequest;
export declare function InitEmailAuthRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InitEmailAuthRequest;
export declare function InitEmailAuthRequestToJSON(value?: InitEmailAuthRequest | null): any;
