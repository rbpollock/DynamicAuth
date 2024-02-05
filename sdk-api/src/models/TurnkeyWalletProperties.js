import { exists } from '../runtime.js';

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
        'turnkeyPrivateKeyId': !exists(json, 'turnkeyPrivateKeyId') ? undefined : json['turnkeyPrivateKeyId'],
        'turnkeyHDWalletId': !exists(json, 'turnkeyHDWalletId') ? undefined : json['turnkeyHDWalletId'],
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

export { TurnkeyWalletPropertiesFromJSON, TurnkeyWalletPropertiesFromJSONTyped, TurnkeyWalletPropertiesToJSON };
