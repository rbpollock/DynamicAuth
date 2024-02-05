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
 * @interface ExportEmbeddedWalletsRequest
 */
export interface ExportEmbeddedWalletsRequest {
    /**
     * Unique identifier for the wallet.
     * @type {string}
     * @memberof ExportEmbeddedWalletsRequest
     */
    walletId: string;
    /**
     * The public key of the wallet that will be used to encrypt the exported wallet.
     * @type {string}
     * @memberof ExportEmbeddedWalletsRequest
     */
    targetPublicKey: string;
}
export declare function ExportEmbeddedWalletsRequestFromJSON(json: any): ExportEmbeddedWalletsRequest;
export declare function ExportEmbeddedWalletsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportEmbeddedWalletsRequest;
export declare function ExportEmbeddedWalletsRequestToJSON(value?: ExportEmbeddedWalletsRequest | null): any;
