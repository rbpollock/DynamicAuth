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
 * @interface ReactSettings
 */
export interface ReactSettings {
    /**
     *
     * @type {string}
     * @memberof ReactSettings
     */
    version?: string;
}
export declare function ReactSettingsFromJSON(json: any): ReactSettings;
export declare function ReactSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReactSettings;
export declare function ReactSettingsToJSON(value?: ReactSettings | null): any;
