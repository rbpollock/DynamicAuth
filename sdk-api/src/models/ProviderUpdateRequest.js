import { exists } from '../runtime.js';

/* tslint:disable */
function ProviderUpdateRequestFromJSON(json) {
    return ProviderUpdateRequestFromJSONTyped(json);
}
function ProviderUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'clientSecret': !exists(json, 'clientSecret') ? undefined : json['clientSecret'],
        'providerProjectId': !exists(json, 'providerProjectId') ? undefined : json['providerProjectId'],
        'defaultChainId': !exists(json, 'defaultChainId') ? undefined : json['defaultChainId'],
        'defaultChain': !exists(json, 'defaultChain') ? undefined : json['defaultChain'],
        'keyExportUrl': !exists(json, 'keyExportUrl') ? undefined : json['keyExportUrl'],
        'useDynamicCredentials': !exists(json, 'useDynamicCredentials') ? undefined : json['useDynamicCredentials'],
        'appleKeyId': !exists(json, 'appleKeyId') ? undefined : json['appleKeyId'],
        'appleTeamId': !exists(json, 'appleTeamId') ? undefined : json['appleTeamId'],
    };
}
function ProviderUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientId': value.clientId,
        'clientSecret': value.clientSecret,
        'providerProjectId': value.providerProjectId,
        'defaultChainId': value.defaultChainId,
        'defaultChain': value.defaultChain,
        'keyExportUrl': value.keyExportUrl,
        'useDynamicCredentials': value.useDynamicCredentials,
        'appleKeyId': value.appleKeyId,
        'appleTeamId': value.appleTeamId,
    };
}

export { ProviderUpdateRequestFromJSON, ProviderUpdateRequestFromJSONTyped, ProviderUpdateRequestToJSON };
