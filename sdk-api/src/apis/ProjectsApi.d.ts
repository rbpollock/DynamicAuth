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
import { CreateProjectResponse, Project, ProjectRequest, ProjectsResponse, UpdateProjectRequest, UpdateProjectResponse } from '../models';
export interface CreateProjectRequest {
    organizationId: string;
    projectRequest: ProjectRequest;
}
export interface DeleteProjectByIdRequest {
    projectId: string;
}
export interface GetProjectByIdRequest {
    projectId: string;
}
export interface GetProjectsRequest {
    organizationId: string;
}
export interface UpdateProjectOperationRequest {
    projectId: string;
    updateProjectRequest: UpdateProjectRequest;
}
/**
 *
 */
export declare class ProjectsApi extends runtime.BaseAPI {
    /**
     * Creates a new project
     */
    createProjectRaw(requestParameters: CreateProjectRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateProjectResponse>>;
    /**
     * Creates a new project
     */
    createProject(requestParameters: CreateProjectRequest, initOverrides?: RequestInit): Promise<CreateProjectResponse>;
    /**
     * Deletes a project by ID
     */
    deleteProjectByIdRaw(requestParameters: DeleteProjectByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Deletes a project by ID
     */
    deleteProjectById(requestParameters: DeleteProjectByIdRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Find an project by ID
     */
    getProjectByIdRaw(requestParameters: GetProjectByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Project>>;
    /**
     * Find an project by ID
     */
    getProjectById(requestParameters: GetProjectByIdRequest, initOverrides?: RequestInit): Promise<Project>;
    /**
     * Fetches all the active projects the belong to the organization
     */
    getProjectsRaw(requestParameters: GetProjectsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ProjectsResponse>>;
    /**
     * Fetches all the active projects the belong to the organization
     */
    getProjects(requestParameters: GetProjectsRequest, initOverrides?: RequestInit): Promise<ProjectsResponse>;
    /**
     * Update a project
     */
    updateProjectRaw(requestParameters: UpdateProjectOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<UpdateProjectResponse>>;
    /**
     * Update a project
     */
    updateProject(requestParameters: UpdateProjectOperationRequest, initOverrides?: RequestInit): Promise<UpdateProjectResponse>;
}