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
import { Export, ExportCreateRequest, ExportsResponse } from '../models';
export interface CreateExportRequest {
    environmentId: string;
    exportCreateRequest: ExportCreateRequest;
}
export interface DownloadExportByIdRequest {
    exportId: string;
}
export interface GetEnvironmentExportsRequest {
    environmentId: string;
}
export interface GetExportByIdRequest {
    exportId: string;
}
/**
 *
 */
export declare class ExportsApi extends runtime.BaseAPI {
    /**
     * Create a new export request for the project environment
     */
    createExportRaw(requestParameters: CreateExportRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Export>>;
    /**
     * Create a new export request for the project environment
     */
    createExport(requestParameters: CreateExportRequest, initOverrides?: RequestInit): Promise<Export>;
    /**
     * Download an export by ID
     */
    downloadExportByIdRaw(requestParameters: DownloadExportByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Download an export by ID
     */
    downloadExportById(requestParameters: DownloadExportByIdRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Get the exports for an environment
     */
    getEnvironmentExportsRaw(requestParameters: GetEnvironmentExportsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ExportsResponse>>;
    /**
     * Get the exports for an environment
     */
    getEnvironmentExports(requestParameters: GetEnvironmentExportsRequest, initOverrides?: RequestInit): Promise<ExportsResponse>;
    /**
     * Get an export using the ID
     */
    getExportByIdRaw(requestParameters: GetExportByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Export>>;
    /**
     * Get an export using the ID
     */
    getExportById(requestParameters: GetExportByIdRequest, initOverrides?: RequestInit): Promise<Export>;
}
