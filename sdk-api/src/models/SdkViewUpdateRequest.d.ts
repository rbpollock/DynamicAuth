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
import { SdkViewSection } from './SdkViewSection';
/**
 * Request body to update the sdk view for an environment.
 * @export
 * @interface SdkViewUpdateRequest
 */
export interface SdkViewUpdateRequest {
    /**
     * The sections which will be used create the view in the sdk. The sections will be displayed in the order that they appear in the array.
     * @type {Array<SdkViewSection>}
     * @memberof SdkViewUpdateRequest
     */
    sections?: Array<SdkViewSection>;
}
export declare function SdkViewUpdateRequestFromJSON(json: any): SdkViewUpdateRequest;
export declare function SdkViewUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SdkViewUpdateRequest;
export declare function SdkViewUpdateRequestToJSON(value?: SdkViewUpdateRequest | null): any;
