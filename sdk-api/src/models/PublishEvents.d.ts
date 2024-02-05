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
import { PublishEventsEvents } from './PublishEventsEvents';
/**
 *
 * @export
 * @interface PublishEvents
 */
export interface PublishEvents {
    /**
     *
     * @type {Array<PublishEventsEvents>}
     * @memberof PublishEvents
     */
    events: Array<PublishEventsEvents>;
}
export declare function PublishEventsFromJSON(json: any): PublishEvents;
export declare function PublishEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishEvents;
export declare function PublishEventsToJSON(value?: PublishEvents | null): any;
