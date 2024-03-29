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
import { Invite } from './Invite';
/**
 *
 * @export
 * @interface InvitesResponse
 */
export interface InvitesResponse {
    /**
     *
     * @type {number}
     * @memberof InvitesResponse
     */
    count?: number;
    /**
     *
     * @type {Array<Invite>}
     * @memberof InvitesResponse
     */
    invites?: Array<Invite>;
}
export declare function InvitesResponseFromJSON(json: any): InvitesResponse;
export declare function InvitesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvitesResponse;
export declare function InvitesResponseToJSON(value?: InvitesResponse | null): any;
