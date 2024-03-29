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
 * Request body to update oauth properties and other metadata about a provider.
 * @export
 * @interface ProviderUpdateRequest
 */
export interface ProviderUpdateRequest {
    /**
     * Standard OAuth client ID. For more information, see: https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/
     * @type {string}
     * @memberof ProviderUpdateRequest
     */
    clientId?: string;
    /**
     * Standard OAuth client secret key. For more information, see: https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/
     * @type {string}
     * @memberof ProviderUpdateRequest
     */
    clientSecret?: string;
    /**
     * Some providers require additional information, typically called a project ID or site ID
     * @type {string}
     * @memberof ProviderUpdateRequest
     */
    providerProjectId?: string;
    /**
     * The default chain id the SDK should use
     * @type {number}
     * @memberof ProviderUpdateRequest
     */
    defaultChainId?: number;
    /**
     * CAIP-2 Chain ID (https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md)
     * @type {string}
     * @memberof ProviderUpdateRequest
     */
    defaultChain?: string;
    /**
     * The url of the site to go to export wallets private keys
     * @type {string}
     * @memberof ProviderUpdateRequest
     */
    keyExportUrl?: string;
    /**
     *
     * @type {boolean}
     * @memberof ProviderUpdateRequest
     */
    useDynamicCredentials?: boolean;
    /**
     * Key ID required for Apple Oauth2 applications. This is the identifier for a private key.
     * @type {string}
     * @memberof ProviderUpdateRequest
     */
    appleKeyId?: string;
    /**
     * Team ID required for Apple Oauth2 applications. This is associated with the Apple developer membership account.
     * @type {string}
     * @memberof ProviderUpdateRequest
     */
    appleTeamId?: string;
}
export declare function ProviderUpdateRequestFromJSON(json: any): ProviderUpdateRequest;
export declare function ProviderUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderUpdateRequest;
export declare function ProviderUpdateRequestToJSON(value?: ProviderUpdateRequest | null): any;
