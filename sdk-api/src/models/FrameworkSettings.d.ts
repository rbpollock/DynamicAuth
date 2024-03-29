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
import { NextJsSettings } from './NextJsSettings';
import { ReactSettings } from './ReactSettings';
/**
 *
 * @export
 * @interface FrameworkSettings
 */
export interface FrameworkSettings {
    /**
     *
     * @type {ReactSettings}
     * @memberof FrameworkSettings
     */
    react?: ReactSettings;
    /**
     *
     * @type {NextJsSettings}
     * @memberof FrameworkSettings
     */
    nextjs?: NextJsSettings;
}
export declare function FrameworkSettingsFromJSON(json: any): FrameworkSettings;
export declare function FrameworkSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrameworkSettings;
export declare function FrameworkSettingsToJSON(value?: FrameworkSettings | null): any;
