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
 * @interface UpdateProjectRequest
 */
export interface UpdateProjectRequest {
    /**
     *
     * @type {string}
     * @memberof UpdateProjectRequest
     */
    name: string;
}
export declare function UpdateProjectRequestFromJSON(json: any): UpdateProjectRequest;
export declare function UpdateProjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateProjectRequest;
export declare function UpdateProjectRequestToJSON(value?: UpdateProjectRequest | null): any;
