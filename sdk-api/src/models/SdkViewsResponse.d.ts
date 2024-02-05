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
import { SdkView } from './SdkView';
/**
 *
 * @export
 * @interface SdkViewsResponse
 */
export interface SdkViewsResponse {
    /**
     * Configs used to create the views in the sdk.
     * @type {Array<SdkView>}
     * @memberof SdkViewsResponse
     */
    sdkViews?: Array<SdkView>;
}
export declare function SdkViewsResponseFromJSON(json: any): SdkViewsResponse;
export declare function SdkViewsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SdkViewsResponse;
export declare function SdkViewsResponseToJSON(value?: SdkViewsResponse | null): any;