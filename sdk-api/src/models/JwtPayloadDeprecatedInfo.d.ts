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
import { NameServiceData } from './NameServiceData';
/**
 *
 * @export
 * @interface JwtPayloadDeprecatedInfo
 */
export interface JwtPayloadDeprecatedInfo {
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    alias?: string;
    /**
     *
     * @type {ChainEnum}
     * @memberof JwtPayloadDeprecatedInfo
     */
    chain?: ChainEnum;
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    email?: string;
    /**
     *
     * @type {NameServiceData}
     * @memberof JwtPayloadDeprecatedInfo
     */
    ens?: NameServiceData;
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    environmentId: string;
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    jobTitle?: string;
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    lastName?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof JwtPayloadDeprecatedInfo
     */
    lists?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    phoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    tShirtSize?: string;
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    userId?: string;
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    wallet?: string;
    /**
     *
     * @type {string}
     * @memberof JwtPayloadDeprecatedInfo
     */
    walletPublicKey?: string;
}
export declare function JwtPayloadDeprecatedInfoFromJSON(json: any): JwtPayloadDeprecatedInfo;
export declare function JwtPayloadDeprecatedInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): JwtPayloadDeprecatedInfo;
export declare function JwtPayloadDeprecatedInfoToJSON(value?: JwtPayloadDeprecatedInfo | null): any;