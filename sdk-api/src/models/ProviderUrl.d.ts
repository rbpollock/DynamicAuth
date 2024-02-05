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
import { ProviderEnum } from './ProviderEnum';
/**
 *
 * @export
 * @interface ProviderUrl
 */
export interface ProviderUrl {
    /**
     *
     * @type {ProviderEnum}
     * @memberof ProviderUrl
     */
    provider: ProviderEnum;
    /**
     * If the provider supports Oauth 2, this field will contain the URL of the login and authorization where a user can authorize the applciation to gain access to their provider account
     * @type {string}
     * @memberof ProviderUrl
     */
    authorizationUrl: string;
    /**
     * If the provider supports Oauth 2, this field will contain the URL of redirect or callback URL which will need to be provided to the Oauth provider to properly configure your App tp talk with Dynamic
     * @type {string}
     * @memberof ProviderUrl
     */
    redirectUrl: string;
}
export declare function ProviderUrlFromJSON(json: any): ProviderUrl;
export declare function ProviderUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderUrl;
export declare function ProviderUrlToJSON(value?: ProviderUrl | null): any;