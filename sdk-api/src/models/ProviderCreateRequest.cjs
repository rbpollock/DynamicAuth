'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function ProviderCreateRequestFromJSON(json) {
    return ProviderCreateRequestFromJSONTyped(json);
}
function ProviderCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': ProviderEnum.ProviderEnumFromJSON(json['provider']),
        'clientId': !runtime.exists(json, 'clientId') ? undefined : json['clientId'],
        'clientSecret': !runtime.exists(json, 'clientSecret') ? undefined : json['clientSecret'],
        'providerProjectId': !runtime.exists(json, 'providerProjectId') ? undefined : json['providerProjectId'],
        'defaultChainId': !runtime.exists(json, 'defaultChainId') ? undefined : json['defaultChainId'],
        'defaultChain': !runtime.exists(json, 'defaultChain') ? undefined : json['defaultChain'],
        'keyExportUrl': !runtime.exists(json, 'keyExportUrl') ? undefined : json['keyExportUrl'],
        'termsUrl': !runtime.exists(json, 'termsUrl') ? undefined : json['termsUrl'],
        'useDynamicCredentials': !runtime.exists(json, 'useDynamicCredentials') ? undefined : json['useDynamicCredentials'],
        'appleKeyId': !runtime.exists(json, 'appleKeyId') ? undefined : json['appleKeyId'],
        'appleTeamId': !runtime.exists(json, 'appleTeamId') ? undefined : json['appleTeamId'],
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
        'provider': ProviderEnum.ProviderEnumToJSON(value.provider),
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

exports.ProviderCreateRequestFromJSON = ProviderCreateRequestFromJSON;
exports.ProviderCreateRequestFromJSONTyped = ProviderCreateRequestFromJSONTyped;
exports.ProviderCreateRequestToJSON = ProviderCreateRequestToJSON;
