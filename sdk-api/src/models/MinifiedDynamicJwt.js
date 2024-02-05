import { exists } from '../runtime.js';

/* tslint:disable */
function MinifiedDynamicJwtFromJSON(json) {
    return MinifiedDynamicJwtFromJSONTyped(json);
}
function MinifiedDynamicJwtFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'kid': json['kid'],
        'aud': json['aud'],
        'iss': json['iss'],
        'sub': json['sub'],
        'sid': json['sid'],
        'exp': !exists(json, 'exp') ? undefined : json['exp'],
        'iat': !exists(json, 'iat') ? undefined : json['iat'],
        'environmentId': json['environment_id'],
        'lastVerifiedCredentialId': json['last_verified_credential_id'],
        'memberEnvironmentIds': !exists(json, 'member_environment_ids') ? undefined : json['member_environment_ids'],
    };
}
function MinifiedDynamicJwtToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'kid': value.kid,
        'aud': value.aud,
        'iss': value.iss,
        'sub': value.sub,
        'sid': value.sid,
        'exp': value.exp,
        'iat': value.iat,
        'environment_id': value.environmentId,
        'last_verified_credential_id': value.lastVerifiedCredentialId,
        'member_environment_ids': value.memberEnvironmentIds,
    };
}

export { MinifiedDynamicJwtFromJSON, MinifiedDynamicJwtFromJSONTyped, MinifiedDynamicJwtToJSON };
