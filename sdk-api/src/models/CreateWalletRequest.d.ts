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
import { ChainEnum } from './ChainEnum';
import { WalletProviderEnum } from './WalletProviderEnum';
/**
 *
 * @export
 * @interface CreateWalletRequest
 */
export interface CreateWalletRequest {
    /**
     * Valid blockchain wallet address, must be an alphanumeric string without any special characters
     * @type {string}
     * @memberof CreateWalletRequest
     */
    publicWalletAddress: string;
    /**
     *
     * @type {ChainEnum}
     * @memberof CreateWalletRequest
     */
    chain: ChainEnum;
    /**
     *
     * @type {string}
     * @memberof CreateWalletRequest
     */
    walletName: string;
    /**
     *
     * @type {WalletProviderEnum}
     * @memberof CreateWalletRequest
     */
    walletProvider: WalletProviderEnum;
}
export declare function CreateWalletRequestFromJSON(json: any): CreateWalletRequest;
export declare function CreateWalletRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWalletRequest;
export declare function CreateWalletRequestToJSON(value?: CreateWalletRequest | null): any;
