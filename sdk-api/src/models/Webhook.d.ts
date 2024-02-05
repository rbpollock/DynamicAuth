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
 * @interface Webhook
 */
export interface Webhook {
    /**
     *
     * @type {string}
     * @memberof Webhook
     */
    environmentId: string;
    /**
     *
     * @type {string}
     * @memberof Webhook
     */
    webhookId: string;
    /**
     *
     * @type {string}
     * @memberof Webhook
     */
    url: string;
    /**
     *
     * @type {string}
     * @memberof Webhook
     */
    secret?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof Webhook
     */
    events: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof Webhook
     */
    isEnabled: boolean;
    /**
     *
     * @type {Date}
     * @memberof Webhook
     */
    enabledAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Webhook
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof Webhook
     */
    updatedAt: Date;
}
export declare function WebhookFromJSON(json: any): Webhook;
export declare function WebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): Webhook;
export declare function WebhookToJSON(value?: Webhook | null): any;
