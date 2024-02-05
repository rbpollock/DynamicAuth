import { exists } from '../runtime.js';
import { EmailVerificationCreateResponseFromJSON, EmailVerificationCreateResponseToJSON } from './EmailVerificationCreateResponse.js';
import { NextViewEnumFromJSON, NextViewEnumToJSON } from './NextViewEnum.js';
import { SdkUserFromJSON, SdkUserToJSON } from './SdkUser.js';

/* tslint:disable */
function UpdateSelfResponseFromJSON(json) {
    return UpdateSelfResponseFromJSONTyped(json);
}
function UpdateSelfResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'user': SdkUserFromJSON(json['user']),
        'nextView': NextViewEnumFromJSON(json['nextView']),
        'emailVerification': !exists(json, 'emailVerification') ? undefined : EmailVerificationCreateResponseFromJSON(json['emailVerification']),
        'jwt': json['jwt'],
        'minifiedJwt': json['minifiedJwt'],
    };
}
function UpdateSelfResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'user': SdkUserToJSON(value.user),
        'nextView': NextViewEnumToJSON(value.nextView),
        'emailVerification': EmailVerificationCreateResponseToJSON(value.emailVerification),
        'jwt': value.jwt,
        'minifiedJwt': value.minifiedJwt,
    };
}

export { UpdateSelfResponseFromJSON, UpdateSelfResponseFromJSONTyped, UpdateSelfResponseToJSON };
