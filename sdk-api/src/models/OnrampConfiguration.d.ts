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
import { ProviderEnum } from './ProviderEnum';
/**
 *
 * @export
 * @interface OnrampConfiguration
 */
export interface OnrampConfiguration {
    /**
     *
     * @type {ProviderEnum}
     * @memberof OnrampConfiguration
     */
    provider?: ProviderEnum;
    /**
     *
     * @type {string}
     * @memberof OnrampConfiguration
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof OnrampConfiguration
     */
    iconUrl?: string;
    /**
     *
     * @type {string}
     * @memberof OnrampConfiguration
     */
    url?: string;
}
export declare function OnrampConfigurationFromJSON(json: any): OnrampConfiguration;
export declare function OnrampConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OnrampConfiguration;
export declare function OnrampConfigurationToJSON(value?: OnrampConfiguration | null): any;
