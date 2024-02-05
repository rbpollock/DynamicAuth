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
 * @interface NameServiceData
 */
export interface NameServiceData {
    /**
     *
     * @type {string}
     * @memberof NameServiceData
     */
    avatar?: string;
    /**
     *
     * @type {string}
     * @memberof NameServiceData
     */
    name?: string;
}
export declare function NameServiceDataFromJSON(json: any): NameServiceData;
export declare function NameServiceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameServiceData;
export declare function NameServiceDataToJSON(value?: NameServiceData | null): any;