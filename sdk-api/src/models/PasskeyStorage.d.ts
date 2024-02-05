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
 * @interface PasskeyStorage
 */
export interface PasskeyStorage {
    /**
     *
     * @type {string}
     * @memberof PasskeyStorage
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof PasskeyStorage
     */
    icon: string;
    /**
     *
     * @type {Date}
     * @memberof PasskeyStorage
     */
    updatedAt?: Date;
}
export declare function PasskeyStorageFromJSON(json: any): PasskeyStorage;
export declare function PasskeyStorageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PasskeyStorage;
export declare function PasskeyStorageToJSON(value?: PasskeyStorage | null): any;