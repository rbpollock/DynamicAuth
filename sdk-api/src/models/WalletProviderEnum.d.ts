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
 * @enum {string}
 */
export declare enum WalletProviderEnum {
    BrowserExtension = "browserExtension",
    CustodialService = "custodialService",
    WalletConnect = "walletConnect",
    QrCode = "qrCode",
    DeepLink = "deepLink",
    EmbeddedWallet = "embeddedWallet",
    SmartContractWallet = "smartContractWallet"
}
export declare function WalletProviderEnumFromJSON(json: any): WalletProviderEnum;
export declare function WalletProviderEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletProviderEnum;
export declare function WalletProviderEnumToJSON(value?: WalletProviderEnum | null): any;
