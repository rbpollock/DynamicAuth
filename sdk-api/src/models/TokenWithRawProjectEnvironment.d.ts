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
 * @interface TokenWithRawProjectEnvironment
 */
export interface TokenWithRawProjectEnvironment {
    /**
     *
     * @type {string}
     * @memberof TokenWithRawProjectEnvironment
     */
    id?: string;
}
export declare function TokenWithRawProjectEnvironmentFromJSON(json: any): TokenWithRawProjectEnvironment;
export declare function TokenWithRawProjectEnvironmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenWithRawProjectEnvironment;
export declare function TokenWithRawProjectEnvironmentToJSON(value?: TokenWithRawProjectEnvironment | null): any;
