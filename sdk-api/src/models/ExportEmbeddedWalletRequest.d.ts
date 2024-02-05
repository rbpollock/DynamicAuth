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
 * @interface ExportEmbeddedWalletRequest
 */
export interface ExportEmbeddedWalletRequest {
    /**
     * The public key of the wallet that will be used to encrypt the exported wallet.
     * @type {string}
     * @memberof ExportEmbeddedWalletRequest
     */
    targetPublicKey: string;
}
export declare function ExportEmbeddedWalletRequestFromJSON(json: any): ExportEmbeddedWalletRequest;
export declare function ExportEmbeddedWalletRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportEmbeddedWalletRequest;
export declare function ExportEmbeddedWalletRequestToJSON(value?: ExportEmbeddedWalletRequest | null): any;