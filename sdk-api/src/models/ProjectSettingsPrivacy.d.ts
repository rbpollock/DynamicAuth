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
 * @interface ProjectSettingsPrivacy
 */
export interface ProjectSettingsPrivacy {
    /**
     *
     * @type {boolean}
     * @memberof ProjectSettingsPrivacy
     */
    collectIp?: boolean;
}
export declare function ProjectSettingsPrivacyFromJSON(json: any): ProjectSettingsPrivacy;
export declare function ProjectSettingsPrivacyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectSettingsPrivacy;
export declare function ProjectSettingsPrivacyToJSON(value?: ProjectSettingsPrivacy | null): any;
