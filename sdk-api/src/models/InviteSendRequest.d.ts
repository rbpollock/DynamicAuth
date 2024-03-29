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
 * @interface InviteSendRequest
 */
export interface InviteSendRequest {
    /**
     * Valid blockchain wallet address, must be an alphanumeric string without any special characters
     * @type {string}
     * @memberof InviteSendRequest
     */
    walletPublicKey?: string;
    /**
     *
     * @type {string}
     * @memberof InviteSendRequest
     */
    alias?: string;
    /**
     *
     * @type {string}
     * @memberof InviteSendRequest
     */
    email?: string;
}
export declare function InviteSendRequestFromJSON(json: any): InviteSendRequest;
export declare function InviteSendRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteSendRequest;
export declare function InviteSendRequestToJSON(value?: InviteSendRequest | null): any;
