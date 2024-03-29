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
export declare enum SdkViewSectionType {
    Email = "email",
    Separator = "separator",
    Social = "social",
    Text = "text",
    Wallet = "wallet"
}
export declare function SdkViewSectionTypeFromJSON(json: any): SdkViewSectionType;
export declare function SdkViewSectionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SdkViewSectionType;
export declare function SdkViewSectionTypeToJSON(value?: SdkViewSectionType | null): any;
