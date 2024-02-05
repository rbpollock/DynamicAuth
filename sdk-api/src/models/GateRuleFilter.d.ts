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
 * Defines the filter properties used for the gate
 * @export
 * @interface GateRuleFilter
 */
export interface GateRuleFilter {
    /**
     * Minimum token or NFT amount held by the user. If this `amount` field is provided, then Dynamic will also check that the user has this minimum amount held by the user of the NFT or Token
     * @type {number}
     * @memberof GateRuleFilter
     */
    amount?: number;
}
export declare function GateRuleFilterFromJSON(json: any): GateRuleFilter;
export declare function GateRuleFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): GateRuleFilter;
export declare function GateRuleFilterToJSON(value?: GateRuleFilter | null): any;
