'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EmailVerificationCreateResponse = require('./EmailVerificationCreateResponse.cjs');
var NextViewEnum = require('./NextViewEnum.cjs');
var SdkUser = require('./SdkUser.cjs');

/* tslint:disable */
function UpdateSelfResponseFromJSON(json) {
    return UpdateSelfResponseFromJSONTyped(json);
}
function UpdateSelfResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'user': SdkUser.SdkUserFromJSON(json['user']),
        'nextView': NextViewEnum.NextViewEnumFromJSON(json['nextView']),
        'emailVerification': !runtime.exists(json, 'emailVerification') ? undefined : EmailVerificationCreateResponse.EmailVerificationCreateResponseFromJSON(json['emailVerification']),
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
        'user': SdkUser.SdkUserToJSON(value.user),
        'nextView': NextViewEnum.NextViewEnumToJSON(value.nextView),
        'emailVerification': EmailVerificationCreateResponse.EmailVerificationCreateResponseToJSON(value.emailVerification),
        'jwt': value.jwt,
        'minifiedJwt': value.minifiedJwt,
    };
}

exports.UpdateSelfResponseFromJSON = UpdateSelfResponseFromJSON;
exports.UpdateSelfResponseFromJSONTyped = UpdateSelfResponseFromJSONTyped;
exports.UpdateSelfResponseToJSON = UpdateSelfResponseToJSON;
