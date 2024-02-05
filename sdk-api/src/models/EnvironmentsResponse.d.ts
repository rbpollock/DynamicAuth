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
import { EnvironmentsResponseEnvironments } from './EnvironmentsResponseEnvironments';
/**
 *
 * @export
 * @interface EnvironmentsResponse
 */
export interface EnvironmentsResponse {
    /**
     *
     * @type {EnvironmentsResponseEnvironments}
     * @memberof EnvironmentsResponse
     */
    environments: EnvironmentsResponseEnvironments;
}
export declare function EnvironmentsResponseFromJSON(json: any): EnvironmentsResponse;
export declare function EnvironmentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentsResponse;
export declare function EnvironmentsResponseToJSON(value?: EnvironmentsResponse | null): any;