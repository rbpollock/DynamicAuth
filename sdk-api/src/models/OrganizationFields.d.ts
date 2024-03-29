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
 * @interface OrganizationFields
 */
export interface OrganizationFields {
    /**
     *
     * @type {string}
     * @memberof OrganizationFields
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof OrganizationFields
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof OrganizationFields
     */
    websiteUrl?: string;
}
export declare function OrganizationFieldsFromJSON(json: any): OrganizationFields;
export declare function OrganizationFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationFields;
export declare function OrganizationFieldsToJSON(value?: OrganizationFields | null): any;
