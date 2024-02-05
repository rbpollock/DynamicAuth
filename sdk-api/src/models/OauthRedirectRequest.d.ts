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
 * @interface OauthRedirectRequest
 */
export interface OauthRedirectRequest {
    /**
     *
     * @type {string}
     * @memberof OauthRedirectRequest
     */
    state: string;
    /**
     *
     * @type {string}
     * @memberof OauthRedirectRequest
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof OauthRedirectRequest
     */
    idToken: string;
}
export declare function OauthRedirectRequestFromJSON(json: any): OauthRedirectRequest;
export declare function OauthRedirectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OauthRedirectRequest;
export declare function OauthRedirectRequestToJSON(value?: OauthRedirectRequest | null): any;
