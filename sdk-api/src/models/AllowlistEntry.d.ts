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
 * @interface AllowlistEntry
 */
export interface AllowlistEntry {
    /**
     *
     * @type {string}
     * @memberof AllowlistEntry
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof AllowlistEntry
     */
    allowListId: string;
    /**
     *
     * @type {string}
     * @memberof AllowlistEntry
     */
    walletPublicKey?: string;
    /**
     *
     * @type {string}
     * @memberof AllowlistEntry
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof AllowlistEntry
     */
    alias?: string;
}
export declare function AllowlistEntryFromJSON(json: any): AllowlistEntry;
export declare function AllowlistEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllowlistEntry;
export declare function AllowlistEntryToJSON(value?: AllowlistEntry | null): any;
