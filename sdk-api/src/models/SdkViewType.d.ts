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
 * @enum {string}
 */
export declare enum SdkViewType {
    Login = "login"
}
export declare function SdkViewTypeFromJSON(json: any): SdkViewType;
export declare function SdkViewTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SdkViewType;
export declare function SdkViewTypeToJSON(value?: SdkViewType | null): any;
