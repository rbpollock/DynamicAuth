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
export declare enum NextViewEnum {
    Done = "done",
    VerifyEmail = "verify-email",
    VerifiedAndTransferred = "verified-and-transferred"
}
export declare function NextViewEnumFromJSON(json: any): NextViewEnum;
export declare function NextViewEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NextViewEnum;
export declare function NextViewEnumToJSON(value?: NextViewEnum | null): any;
