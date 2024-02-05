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
import { JwtVerifiedCredentialFormatEnum } from './JwtVerifiedCredentialFormatEnum';
import { NameServiceData } from './NameServiceData';
import { ProviderEnum } from './ProviderEnum';
import { WalletProperties } from './WalletProperties';
import { WalletProviderEnum } from './WalletProviderEnum';
/**
 *
 * @export
 * @interface JwtVerifiedCredential
 */
export interface JwtVerifiedCredential {
    /**
     * Valid blockchain wallet address, must be an alphanumeric string without any special characters
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    address?: string;
    /**
     *
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    chain?: string;
    /**
     *
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    refId?: string;
    /**
     *
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    signerRefId?: string;
    /**
     *
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    id: string;
    /**
     *
     * @type {NameServiceData}
     * @memberof JwtVerifiedCredential
     */
    nameService?: NameServiceData;
    /**
     * This is used to publicly identify a verified credential in a human-friendly way. For example, this will be the email address if credential format=email.
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    publicIdentifier?: string;
    /**
     *
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    walletName?: string;
    /**
     *
     * @type {WalletProviderEnum}
     * @memberof JwtVerifiedCredential
     */
    walletProvider?: WalletProviderEnum;
    /**
     *
     * @type {WalletProperties}
     * @memberof JwtVerifiedCredential
     */
    walletProperties?: WalletProperties;
    /**
     *
     * @type {JwtVerifiedCredentialFormatEnum}
     * @memberof JwtVerifiedCredential
     */
    format: JwtVerifiedCredentialFormatEnum;
    /**
     *
     * @type {ProviderEnum}
     * @memberof JwtVerifiedCredential
     */
    oauthProvider?: ProviderEnum;
    /**
     *
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    oauthUsername?: string;
    /**
     *
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    oauthDisplayName?: string;
    /**
     *
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    oauthAccountId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof JwtVerifiedCredential
     */
    oauthAccountPhotos?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof JwtVerifiedCredential
     */
    oauthEmails?: Array<string>;
    /**
     * This object contains JSON metadata for a social-based verified credential. It may contain data about the user that does not fit into the other structured fields, and could include arbitrary fields about the user from the oauth provider's API.
     * @type {object}
     * @memberof JwtVerifiedCredential
     */
    oauthMetadata?: object;
    /**
     * This will only be provided in the responses for GET /users/{userId}.Previous user IDs that owned this verified credential and was tranfered to the current user ID.
     * @type {Array<string>}
     * @memberof JwtVerifiedCredential
     */
    previousUsers?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof JwtVerifiedCredential
     */
    embeddedWalletId?: string | null;
}
export declare function JwtVerifiedCredentialFromJSON(json: any): JwtVerifiedCredential;
export declare function JwtVerifiedCredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): JwtVerifiedCredential;
export declare function JwtVerifiedCredentialToJSON(value?: JwtVerifiedCredential | null): any;