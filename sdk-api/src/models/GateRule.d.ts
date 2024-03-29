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
import { GateRuleFilter } from './GateRuleFilter';
import { GateRuleType } from './GateRuleType';
import { TokenAddress } from './TokenAddress';
/**
 * Definition for a single rule in a Gate. This will check for the presence of a token or NFT, given the contract address, in the wallet of a user being evaluated. For multi-wallet users, we will check all wallets. If a filter is defined, then we will also check that the filter checks apply to the user
 * @export
 * @interface GateRule
 */
export interface GateRule {
    /**
     *
     * @type {GateRuleType}
     * @memberof GateRule
     */
    type: GateRuleType;
    /**
     *
     * @type {TokenAddress}
     * @memberof GateRule
     */
    address: TokenAddress;
    /**
     *
     * @type {GateRuleFilter}
     * @memberof GateRule
     */
    filter?: GateRuleFilter;
}
export declare function GateRuleFromJSON(json: any): GateRule;
export declare function GateRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): GateRule;
export declare function GateRuleToJSON(value?: GateRule | null): any;
