import { exists } from '../runtime.js';
import { ProviderAgreementFromJSON, ProviderAgreementToJSON } from './ProviderAgreement.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function ProviderFromJSON(json) {
    return ProviderFromJSONTyped(json);
}
function ProviderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'provider': ProviderEnumFromJSON(json['provider']),
        'enabledAt': !exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'clientSecret': !exists(json, 'clientSecret') ? undefined : json['clientSecret'],
        'providerProjectId': !exists(json, 'providerProjectId') ? undefined : json['providerProjectId'],
        'authorizationUrl': !exists(json, 'authorizationUrl') ? undefined : json['authorizationUrl'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'defaultChainId': !exists(json, 'defaultChainId') ? undefined : json['defaultChainId'],
        'defaultChain': !exists(json, 'defaultChain') ? undefined : json['defaultChain'],
        'keyExportUrl': !exists(json, 'keyExportUrl') ? undefined : json['keyExportUrl'],
        'termsAcceptedByUser': !exists(json, 'termsAcceptedByUser') ? undefined : ProviderAgreementFromJSON(json['termsAcceptedByUser']),
        'appleKeyId': !exists(json, 'appleKeyId') ? undefined : json['appleKeyId'],
        'appleTeamId': !exists(json, 'appleTeamId') ? undefined : json['appleTeamId'],
    };
}
function ProviderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'provider': ProviderEnumToJSON(value.provider),
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt === null ? null : value.enabledAt.toISOString()),
        'clientId': value.clientId,
        'clientSecret': value.clientSecret,
        'providerProjectId': value.providerProjectId,
        'authorizationUrl': value.authorizationUrl,
        'redirectUrl': value.redirectUrl,
        'defaultChainId': value.defaultChainId,
        'defaultChain': value.defaultChain,
        'keyExportUrl': value.keyExportUrl,
        'termsAcceptedByUser': ProviderAgreementToJSON(value.termsAcceptedByUser),
        'appleKeyId': value.appleKeyId,
        'appleTeamId': value.appleTeamId,
    };
}

export { ProviderFromJSON, ProviderFromJSONTyped, ProviderToJSON };
