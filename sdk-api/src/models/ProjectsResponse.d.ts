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
import { Project } from './Project';
/**
 *
 * @export
 * @interface ProjectsResponse
 */
export interface ProjectsResponse {
    /**
     *
     * @type {Array<Project>}
     * @memberof ProjectsResponse
     */
    projects?: Array<Project>;
}
export declare function ProjectsResponseFromJSON(json: any): ProjectsResponse;
export declare function ProjectsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsResponse;
export declare function ProjectsResponseToJSON(value?: ProjectsResponse | null): any;
