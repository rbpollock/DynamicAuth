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
 * @interface ProjectSettingsRequest
 */
export interface ProjectSettingsRequest {
    /**
     *
     * @type {object}
     * @memberof ProjectSettingsRequest
     */
    dynamicContextProps?: object;
}
export declare function ProjectSettingsRequestFromJSON(json: any): ProjectSettingsRequest;
export declare function ProjectSettingsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectSettingsRequest;
export declare function ProjectSettingsRequestToJSON(value?: ProjectSettingsRequest | null): any;