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
import { ProjectEnvironment } from './ProjectEnvironment';
/**
 *
 * @export
 * @interface EnvironmentsResponseEnvironments
 */
export interface EnvironmentsResponseEnvironments {
    /**
     *
     * @type {ProjectEnvironment}
     * @memberof EnvironmentsResponseEnvironments
     */
    live: ProjectEnvironment;
    /**
     *
     * @type {ProjectEnvironment}
     * @memberof EnvironmentsResponseEnvironments
     */
    sandbox: ProjectEnvironment;
}
export declare function EnvironmentsResponseEnvironmentsFromJSON(json: any): EnvironmentsResponseEnvironments;
export declare function EnvironmentsResponseEnvironmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentsResponseEnvironments;
export declare function EnvironmentsResponseEnvironmentsToJSON(value?: EnvironmentsResponseEnvironments | null): any;
