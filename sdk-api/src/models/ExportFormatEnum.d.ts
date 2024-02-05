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
export declare enum ExportFormatEnum {
    Csv = "csv"
}
export declare function ExportFormatEnumFromJSON(json: any): ExportFormatEnum;
export declare function ExportFormatEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportFormatEnum;
export declare function ExportFormatEnumToJSON(value?: ExportFormatEnum | null): any;
