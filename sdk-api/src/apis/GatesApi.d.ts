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
import { Gate, GateCreateRequest, GateUpdateRequest, GatesResponse } from '../models';
export interface CreateGateRequest {
    environmentId: string;
    gateCreateRequest: GateCreateRequest;
}
export interface DeleteGateRequest {
    gateId: string;
}
export interface DisableGateRequest {
    gateId: string;
}
export interface EnableGateRequest {
    gateId: string;
}
export interface GetEnvironmentGatesRequest {
    environmentId: string;
}
export interface GetGateRequest {
    gateId: string;
}
export interface UpdateGateRequest {
    gateId: string;
    gateUpdateRequest: GateUpdateRequest;
}
/**
 *
 */
export declare class GatesApi extends runtime.BaseAPI {
    /**
     * Creates a new gate for the project environment
     */
    createGateRaw(requestParameters: CreateGateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Gate>>;
    /**
     * Creates a new gate for the project environment
     */
    createGate(requestParameters: CreateGateRequest, initOverrides?: RequestInit): Promise<Gate>;
    /**
     * Delete a gate
     */
    deleteGateRaw(requestParameters: DeleteGateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete a gate
     */
    deleteGate(requestParameters: DeleteGateRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Disable the gate for the environment
     */
    disableGateRaw(requestParameters: DisableGateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Gate>>;
    /**
     * Disable the gate for the environment
     */
    disableGate(requestParameters: DisableGateRequest, initOverrides?: RequestInit): Promise<Gate>;
    /**
     * Enable the gate for the environment
     */
    enableGateRaw(requestParameters: EnableGateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Gate>>;
    /**
     * Enable the gate for the environment
     */
    enableGate(requestParameters: EnableGateRequest, initOverrides?: RequestInit): Promise<Gate>;
    /**
     * Get the gates for an environment
     */
    getEnvironmentGatesRaw(requestParameters: GetEnvironmentGatesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GatesResponse>>;
    /**
     * Get the gates for an environment
     */
    getEnvironmentGates(requestParameters: GetEnvironmentGatesRequest, initOverrides?: RequestInit): Promise<GatesResponse>;
    /**
     * Gets a gate
     */
    getGateRaw(requestParameters: GetGateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Gate>>;
    /**
     * Gets a gate
     */
    getGate(requestParameters: GetGateRequest, initOverrides?: RequestInit): Promise<Gate>;
    /**
     * Updates a gate
     */
    updateGateRaw(requestParameters: UpdateGateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Gate>>;
    /**
     * Updates a gate
     */
    updateGate(requestParameters: UpdateGateRequest, initOverrides?: RequestInit): Promise<Gate>;
}
