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
import { Allowlist, AllowlistEntriesResponse, AllowlistEntry, PostAllowlistEntriesRequest, PostAllowlistsRequest } from '../models';
export interface CreateAllowlistByEnvironmentIdRequest {
    environmentId: string;
    postAllowlistsRequest: PostAllowlistsRequest;
}
export interface DeleteAllowlistByIdRequest {
    allowlistId: string;
}
export interface DeleteAllowlistEntryByIdRequest {
    allowlistEntryId: string;
}
export interface DisableAllowlistByIdRequest {
    allowlistId: string;
}
export interface EnableAllowlistByIdRequest {
    allowlistId: string;
}
export interface GetAllowlistsByEnvironmentIdRequest {
    environmentId: string;
}
export interface GetAllowlistsByIdRequest {
    allowlistId: string;
}
export interface GetEntriesByAllowlistIdRequest {
    allowlistId: string;
    orderBy?: string;
    offset?: number;
    limit?: number;
    query?: string;
}
export interface PostEntryByAllowlistIdRequest {
    allowlistId: string;
    postAllowlistEntriesRequest: PostAllowlistEntriesRequest;
}
export interface UpdateAllowlistByIdRequest {
    allowlistId: string;
    postAllowlistsRequest: PostAllowlistsRequest;
}
/**
 *
 */
export declare class AllowlistsApi extends runtime.BaseAPI {
    /**
     * Create new allowlist for a environment
     */
    createAllowlistByEnvironmentIdRaw(requestParameters: CreateAllowlistByEnvironmentIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Allowlist>>;
    /**
     * Create new allowlist for a environment
     */
    createAllowlistByEnvironmentId(requestParameters: CreateAllowlistByEnvironmentIdRequest, initOverrides?: RequestInit): Promise<Allowlist>;
    /**
     * Delete an allowlist
     */
    deleteAllowlistByIdRaw(requestParameters: DeleteAllowlistByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete an allowlist
     */
    deleteAllowlistById(requestParameters: DeleteAllowlistByIdRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Delete an allowlist entry
     */
    deleteAllowlistEntryByIdRaw(requestParameters: DeleteAllowlistEntryByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete an allowlist entry
     */
    deleteAllowlistEntryById(requestParameters: DeleteAllowlistEntryByIdRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Disable the allow list
     */
    disableAllowlistByIdRaw(requestParameters: DisableAllowlistByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Allowlist>>;
    /**
     * Disable the allow list
     */
    disableAllowlistById(requestParameters: DisableAllowlistByIdRequest, initOverrides?: RequestInit): Promise<Allowlist>;
    /**
     * Enable the allowlist
     */
    enableAllowlistByIdRaw(requestParameters: EnableAllowlistByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Allowlist>>;
    /**
     * Enable the allowlist
     */
    enableAllowlistById(requestParameters: EnableAllowlistByIdRequest, initOverrides?: RequestInit): Promise<Allowlist>;
    /**
     * Get all allowlists for a environment
     */
    getAllowlistsByEnvironmentIdRaw(requestParameters: GetAllowlistsByEnvironmentIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Allowlist>>>;
    /**
     * Get all allowlists for a environment
     */
    getAllowlistsByEnvironmentId(requestParameters: GetAllowlistsByEnvironmentIdRequest, initOverrides?: RequestInit): Promise<Array<Allowlist>>;
    /**
     * Get allowlist by id
     */
    getAllowlistsByIdRaw(requestParameters: GetAllowlistsByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Allowlist>>;
    /**
     * Get allowlist by id
     */
    getAllowlistsById(requestParameters: GetAllowlistsByIdRequest, initOverrides?: RequestInit): Promise<Allowlist>;
    /**
     * Get all entries for an allowlist
     */
    getEntriesByAllowlistIdRaw(requestParameters: GetEntriesByAllowlistIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AllowlistEntriesResponse>>;
    /**
     * Get all entries for an allowlist
     */
    getEntriesByAllowlistId(requestParameters: GetEntriesByAllowlistIdRequest, initOverrides?: RequestInit): Promise<AllowlistEntriesResponse>;
    /**
     * Create a new entry for an allowlist
     */
    postEntryByAllowlistIdRaw(requestParameters: PostEntryByAllowlistIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AllowlistEntry>>;
    /**
     * Create a new entry for an allowlist
     */
    postEntryByAllowlistId(requestParameters: PostEntryByAllowlistIdRequest, initOverrides?: RequestInit): Promise<AllowlistEntry>;
    /**
     * Update the outcome, scope, or name of an allowlist entry by ID
     */
    updateAllowlistByIdRaw(requestParameters: UpdateAllowlistByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Allowlist>>;
    /**
     * Update the outcome, scope, or name of an allowlist entry by ID
     */
    updateAllowlistById(requestParameters: UpdateAllowlistByIdRequest, initOverrides?: RequestInit): Promise<Allowlist>;
}
