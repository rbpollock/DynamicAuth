/* tslint:disable */
/* eslint-disable */
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
function EmailVerificationCreateResponseFromJSON(json) {
    return EmailVerificationCreateResponseFromJSONTyped(json);
}
function EmailVerificationCreateResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'verificationUUID': json['verificationUUID'],
        'email': json['email'],
    };
}
function EmailVerificationCreateResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'verificationUUID': value.verificationUUID,
        'email': value.email,
    };
}

export { EmailVerificationCreateResponseFromJSON, EmailVerificationCreateResponseFromJSONTyped, EmailVerificationCreateResponseToJSON };
