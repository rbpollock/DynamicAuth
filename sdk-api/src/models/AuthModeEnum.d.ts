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
export declare enum AuthModeEnum {
    Only = "connect-only",
    AndSign = "connect-and-sign"
}
export declare function AuthModeEnumFromJSON(json: any): AuthModeEnum;
export declare function AuthModeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthModeEnum;
export declare function AuthModeEnumToJSON(value?: AuthModeEnum | null): any;
