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
import { TurnkeyWalletProperties } from './TurnkeyWalletProperties';
/**
 * @type WalletProperties
 *
 * @export
 */
export type WalletProperties = TurnkeyWalletProperties;
export declare function WalletPropertiesFromJSON(json: any): WalletProperties;
export declare function WalletPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletProperties;
export declare function WalletPropertiesToJSON(value?: WalletProperties | null): any;
