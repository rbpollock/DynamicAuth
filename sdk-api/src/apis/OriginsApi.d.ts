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
import { InlineObject, InlineResponse201, OriginsResponse } from '../models';
export interface AddOriginRequest {
    environmentId: string;
    inlineObject: InlineObject;
}
export interface DeleteOriginByIdRequest {
    originId: string;
}
export interface GetOriginsRequest {
    environmentId: string;
}
/**
 *
 */
export declare class OriginsApi extends runtime.BaseAPI {
    /**
     * Adds an allowed origin for this project environment
     */
    addOriginRaw(requestParameters: AddOriginRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse201>>;
    /**
     * Adds an allowed origin for this project environment
     */
    addOrigin(requestParameters: AddOriginRequest, initOverrides?: RequestInit): Promise<InlineResponse201>;
    /**
     * Delete a origin by id
     */
    deleteOriginByIdRaw(requestParameters: DeleteOriginByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete a origin by id
     */
    deleteOriginById(requestParameters: DeleteOriginByIdRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Get all the allowed origins for a project environment
     */
    getOriginsRaw(requestParameters: GetOriginsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OriginsResponse>>;
    /**
     * Get all the allowed origins for a project environment
     */
    getOrigins(requestParameters: GetOriginsRequest, initOverrides?: RequestInit): Promise<OriginsResponse>;
}
