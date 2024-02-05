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
import { CurrencyType } from './CurrencyType';
/**
 *
 * @export
 * @interface Currency
 */
export interface Currency {
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    symbol: string;
    /**
     *
     * @type {CurrencyType}
     * @memberof Currency
     */
    type: CurrencyType;
    /**
     *
     * @type {string}
     * @memberof Currency
     */
    code: string;
    /**
     *
     * @type {number}
     * @memberof Currency
     */
    value: number;
}
export declare function CurrencyFromJSON(json: any): Currency;
export declare function CurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Currency;
export declare function CurrencyToJSON(value?: Currency | null): any;