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
import { TokenWithRaw } from './TokenWithRaw';
/**
 *
 * @export
 * @interface CreateTokenResponse
 */
export interface CreateTokenResponse {
    /**
     *
     * @type {TokenWithRaw}
     * @memberof CreateTokenResponse
     */
    token: TokenWithRaw;
}
export declare function CreateTokenResponseFromJSON(json: any): CreateTokenResponse;
export declare function CreateTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTokenResponse;
export declare function CreateTokenResponseToJSON(value?: CreateTokenResponse | null): any;
