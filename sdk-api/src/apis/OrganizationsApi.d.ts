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
import { BillingSubscription, Organization, OrganizationFields, OrganizationRequest, OrganizationResponse, OrganizationsResponse } from '../models';
export interface CreateOrganizationRequest {
    organizationRequest: OrganizationRequest;
}
export interface DeleteOrganizationByIdRequest {
    organizationId: string;
}
export interface GetBillingSubscriptionByOrganizationRequest {
    organizationId: string;
}
export interface GetOrganizationByIdRequest {
    organizationId: string;
}
export interface UpdateOrganizationByIdRequest {
    organizationId: string;
    organizationFields: OrganizationFields;
}
export interface UpgradeSubscriptionForOrganizationRequest {
    organizationId: string;
}
/**
 *
 */
export declare class OrganizationsApi extends runtime.BaseAPI {
    /**
     * Creates organization
     */
    createOrganizationRaw(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OrganizationResponse>>;
    /**
     * Creates organization
     */
    createOrganization(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit): Promise<OrganizationResponse>;
    /**
     * Deletes an organization by ID
     */
    deleteOrganizationByIdRaw(requestParameters: DeleteOrganizationByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Deletes an organization by ID
     */
    deleteOrganizationById(requestParameters: DeleteOrganizationByIdRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Find the subscription of an organization using its ID
     */
    getBillingSubscriptionByOrganizationRaw(requestParameters: GetBillingSubscriptionByOrganizationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BillingSubscription>>;
    /**
     * Find the subscription of an organization using its ID
     */
    getBillingSubscriptionByOrganization(requestParameters: GetBillingSubscriptionByOrganizationRequest, initOverrides?: RequestInit): Promise<BillingSubscription>;
    /**
     * Find an organization by ID
     */
    getOrganizationByIdRaw(requestParameters: GetOrganizationByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Organization>>;
    /**
     * Find an organization by ID
     */
    getOrganizationById(requestParameters: GetOrganizationByIdRequest, initOverrides?: RequestInit): Promise<Organization>;
    /**
     * Fetches all the active organizations that the user has access to
     */
    getOrganizationsForMemberRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<OrganizationsResponse>>;
    /**
     * Fetches all the active organizations that the user has access to
     */
    getOrganizationsForMember(initOverrides?: RequestInit): Promise<OrganizationsResponse>;
    /**
     * Update an organization by ID
     */
    updateOrganizationByIdRaw(requestParameters: UpdateOrganizationByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<OrganizationResponse>>;
    /**
     * Update an organization by ID
     */
    updateOrganizationById(requestParameters: UpdateOrganizationByIdRequest, initOverrides?: RequestInit): Promise<OrganizationResponse>;
    /**
     * Upgrade organziation to advanced plan
     */
    upgradeSubscriptionForOrganizationRaw(requestParameters: UpgradeSubscriptionForOrganizationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BillingSubscription>>;
    /**
     * Upgrade organziation to advanced plan
     */
    upgradeSubscriptionForOrganization(requestParameters: UpgradeSubscriptionForOrganizationRequest, initOverrides?: RequestInit): Promise<BillingSubscription>;
}
