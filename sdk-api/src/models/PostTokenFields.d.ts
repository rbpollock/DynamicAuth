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
 * @interface PostTokenFields
 */
export interface PostTokenFields {
    /**
     *
     * @type {string}
     * @memberof PostTokenFields
     */
    note: string;
}
export declare function PostTokenFieldsFromJSON(json: any): PostTokenFields;
export declare function PostTokenFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostTokenFields;
export declare function PostTokenFieldsToJSON(value?: PostTokenFields | null): any;