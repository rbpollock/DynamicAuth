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
 * Reference to the user that accepted the terms and conditions, if one is necessary for this provider.
 * @export
 * @interface ProviderAgreement
 */
export interface ProviderAgreement {
    /**
     * The url of the terms and conditions or privacy policy needed to be shown to the client when creating a new provider that requires terms and conditions to be signed before starting configuration.
     * @type {string}
     * @memberof ProviderAgreement
     */
    termsUrl: string;
    /**
     *
     * @type {string}
     * @memberof ProviderAgreement
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof ProviderAgreement
     */
    userId: string;
    /**
     *
     * @type {Date}
     * @memberof ProviderAgreement
     */
    createdAt: Date;
}
export declare function ProviderAgreementFromJSON(json: any): ProviderAgreement;
export declare function ProviderAgreementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProviderAgreement;
export declare function ProviderAgreementToJSON(value?: ProviderAgreement | null): any;