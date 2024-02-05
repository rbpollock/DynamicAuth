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
import { Visitor } from './Visitor';
/**
 *
 * @export
 * @interface VisitorsResponse
 */
export interface VisitorsResponse {
    /**
     *
     * @type {number}
     * @memberof VisitorsResponse
     */
    count?: number;
    /**
     *
     * @type {Array<Visitor>}
     * @memberof VisitorsResponse
     */
    visitors?: Array<Visitor>;
}
export declare function VisitorsResponseFromJSON(json: any): VisitorsResponse;
export declare function VisitorsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VisitorsResponse;
export declare function VisitorsResponseToJSON(value?: VisitorsResponse | null): any;
