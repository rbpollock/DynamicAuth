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
import { ChainalysisCheck } from './ChainalysisCheck';
import { OAuthAccount } from './OAuthAccount';
import { Session } from './Session';
import { Wallet } from './Wallet';
/**
 *
 * @export
 * @interface UserAllOf
 */
export interface UserAllOf {
    /**
     *
     * @type {string}
     * @memberof UserAllOf
     */
    walletPublicKey?: string;
    /**
     *
     * @type {string}
     * @memberof UserAllOf
     */
    wallet?: string;
    /**
     *
     * @type {ChainEnum}
     * @memberof UserAllOf
     */
    chain?: ChainEnum;
    /**
     *
     * @type {Date}
     * @memberof UserAllOf
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof UserAllOf
     */
    updatedAt?: Date;
    /**
     *
     * @type {Array<Session>}
     * @memberof UserAllOf
     */
    sessions?: Array<Session>;
    /**
     *
     * @type {Array<Wallet>}
     * @memberof UserAllOf
     */
    wallets?: Array<Wallet>;
    /**
     *
     * @type {Array<ChainalysisCheck>}
     * @memberof UserAllOf
     */
    chainalysisChecks?: Array<ChainalysisCheck>;
    /**
     *
     * @type {Array<OAuthAccount>}
     * @memberof UserAllOf
     */
    oauthAccounts?: Array<OAuthAccount>;
}
export declare function UserAllOfFromJSON(json: any): UserAllOf;
export declare function UserAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAllOf;
export declare function UserAllOfToJSON(value?: UserAllOf | null): any;
