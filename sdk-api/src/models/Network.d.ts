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
 * @interface Network
 */
export interface Network {
    /**
     *
     * @type {number}
     * @memberof Network
     */
    networkId: number;
    /**
     *
     * @type {string}
     * @memberof Network
     */
    chainName: string;
    /**
     *
     * @type {boolean}
     * @memberof Network
     */
    enabled: boolean;
    /**
     *
     * @type {string}
     * @memberof Network
     */
    rpcUrl?: string;
}
export declare function NetworkFromJSON(json: any): Network;
export declare function NetworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): Network;
export declare function NetworkToJSON(value?: Network | null): any;
