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
import { Organization } from './Organization';
/**
 *
 * @export
 * @interface OrganizationsResponse
 */
export interface OrganizationsResponse {
    /**
     *
     * @type {Array<Organization>}
     * @memberof OrganizationsResponse
     */
    organizations?: Array<Organization>;
}
export declare function OrganizationsResponseFromJSON(json: any): OrganizationsResponse;
export declare function OrganizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationsResponse;
export declare function OrganizationsResponseToJSON(value?: OrganizationsResponse | null): any;
