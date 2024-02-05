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
import * as runtime from '../runtime';
import { VisitorSearchFilterParams, VisitorsResponse } from '../models';
export interface GetEnvironmentVisitorsRequest {
    environmentId: string;
    filter?: VisitorSearchFilterParams;
    orderBy?: string;
    offset?: number;
    limit?: number;
}
/**
 *
 */
export declare class VisitsApi extends runtime.BaseAPI {
    /**
     * Get all visitors for an environment
     */
    getEnvironmentVisitorsRaw(requestParameters: GetEnvironmentVisitorsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<VisitorsResponse>>;
    /**
     * Get all visitors for an environment
     */
    getEnvironmentVisitors(requestParameters: GetEnvironmentVisitorsRequest, initOverrides?: RequestInit): Promise<VisitorsResponse>;
}
