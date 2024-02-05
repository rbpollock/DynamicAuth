'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function TurnkeyWalletPropertiesFromJSON(json) {
    return TurnkeyWalletPropertiesFromJSONTyped(json);
}
function TurnkeyWalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'turnkeySubOrganizationId': json['turnkeySubOrganizationId'],
        'turnkeyPrivateKeyId': !runtime.exists(json, 'turnkeyPrivateKeyId') ? undefined : json['turnkeyPrivateKeyId'],
        'turnkeyHDWalletId': !runtime.exists(json, 'turnkeyHDWalletId') ? undefined : json['turnkeyHDWalletId'],
        'isAuthenticatorAttached': json['isAuthenticatorAttached'],
    };
}
function TurnkeyWalletPropertiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'turnkeySubOrganizationId': value.turnkeySubOrganizationId,
        'turnkeyPrivateKeyId': value.turnkeyPrivateKeyId,
        'turnkeyHDWalletId': value.turnkeyHDWalletId,
        'isAuthenticatorAttached': value.isAuthenticatorAttached,
    };
}

exports.TurnkeyWalletPropertiesFromJSON = TurnkeyWalletPropertiesFromJSON;
exports.TurnkeyWalletPropertiesFromJSONTyped = TurnkeyWalletPropertiesFromJSONTyped;
exports.TurnkeyWalletPropertiesToJSON = TurnkeyWalletPropertiesToJSON;
