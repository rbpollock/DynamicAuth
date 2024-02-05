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
import { WebhookMessage } from './WebhookMessage';
/**
 *
 * @export
 * @interface WebhookMessagesResponse
 */
export interface WebhookMessagesResponse {
    /**
     *
     * @type {string}
     * @memberof WebhookMessagesResponse
     */
    cursor?: string;
    /**
     *
     * @type {Array<WebhookMessage>}
     * @memberof WebhookMessagesResponse
     */
    data?: Array<WebhookMessage>;
}
export declare function WebhookMessagesResponseFromJSON(json: any): WebhookMessagesResponse;
export declare function WebhookMessagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookMessagesResponse;
export declare function WebhookMessagesResponseToJSON(value?: WebhookMessagesResponse | null): any;
