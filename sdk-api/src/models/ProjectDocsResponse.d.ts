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
/**
 *
 * @export
 * @interface ProjectDocsResponse
 */
export interface ProjectDocsResponse {
    /**
     *
     * @type {string}
     * @memberof ProjectDocsResponse
     */
    url: string;
}
export declare function ProjectDocsResponseFromJSON(json: any): ProjectDocsResponse;
export declare function ProjectDocsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectDocsResponse;
export declare function ProjectDocsResponseToJSON(value?: ProjectDocsResponse | null): any;
