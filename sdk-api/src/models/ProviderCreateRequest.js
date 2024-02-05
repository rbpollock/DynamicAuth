import { exists } from '../runtime.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function ProviderCreateRequestFromJSON(json) {
    return ProviderCreateRequestFromJSONTyped(json);
}
function ProviderCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': ProviderEnumFromJSON(json['provider']),
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'clientSecret': !exists(json, 'clientSecret') ? undefined : json['clientSecret'],
        'providerProjectId': !exists(json, 'providerProjectId') ? undefined : json['providerProjectId'],
        'defaultChainId': !exists(json, 'defaultChainId') ? undefined : json['defaultChainId'],
        'defaultChain': !exists(json, 'defaultChain') ? undefined : json['defaultChain'],
        'keyExportUrl': !exists(json, 'keyExportUrl') ? undefined : json['keyExportUrl'],
        'termsUrl': !exists(json, 'termsUrl') ? undefined : json['termsUrl'],
        'useDynamicCredentials': !exists(json, 'useDynamicCredentials') ? undefined : json['useDynamicCredentials'],
        'appleKeyId': !exists(json, 'appleKeyId') ? undefined : json['appleKeyId'],
        'appleTeamId': !exists(json, 'appleTeamId') ? undefined : json['appleTeamId'],
    };
}
function ProviderCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'provider': ProviderEnumToJSON(value.provider),
        'clientId': value.clientId,
        'clientSecret': value.clientSecret,
        'providerProjectId': value.providerProjectId,
        'defaultChainId': value.defaultChainId,
        'defaultChain': value.defaultChain,
        'keyExportUrl': value.keyExportUrl,
        'termsUrl': value.termsUrl,
        'useDynamicCredentials': value.useDynamicCredentials,
        'appleKeyId': value.appleKeyId,
        'appleTeamId': value.appleTeamId,
    };
}

export { ProviderCreateRequestFromJSON, ProviderCreateRequestFromJSONTyped, ProviderCreateRequestToJSON };
