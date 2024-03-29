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
import { CreateTokenResponse, PostTokenFields, TokensResponse } from '../models';
export interface DeleteTokenByIdRequest {
    tokenId: string;
}
export interface GetTokensRequest {
    environmentId: string;
}
export interface PostTokenRequest {
    environmentId: string;
    postTokenFields: PostTokenFields;
}
/**
 *
 */
export declare class TokensApi extends runtime.BaseAPI {
    /**
     * Delete a token by token id
     */
    deleteTokenByIdRaw(requestParameters: DeleteTokenByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete a token by token id
     */
    deleteTokenById(requestParameters: DeleteTokenByIdRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Get all the tokens for a project environment (does not include the raw token)
     */
    getTokensRaw(requestParameters: GetTokensRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TokensResponse>>;
    /**
     * Get all the tokens for a project environment (does not include the raw token)
     */
    getTokens(requestParameters: GetTokensRequest, initOverrides?: RequestInit): Promise<TokensResponse>;
    /**
     * Create a new API Token
     */
    postTokenRaw(requestParameters: PostTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CreateTokenResponse>>;
    /**
     * Create a new API Token
     */
    postToken(requestParameters: PostTokenRequest, initOverrides?: RequestInit): Promise<CreateTokenResponse>;
}
