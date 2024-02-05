'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ProviderAgreement = require('./ProviderAgreement.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function ProviderFromJSON(json) {
    return ProviderFromJSONTyped(json);
}
function ProviderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'provider': ProviderEnum.ProviderEnumFromJSON(json['provider']),
        'enabledAt': !runtime.exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
        'clientId': !runtime.exists(json, 'clientId') ? undefined : json['clientId'],
        'clientSecret': !runtime.exists(json, 'clientSecret') ? undefined : json['clientSecret'],
        'providerProjectId': !runtime.exists(json, 'providerProjectId') ? undefined : json['providerProjectId'],
        'authorizationUrl': !runtime.exists(json, 'authorizationUrl') ? undefined : json['authorizationUrl'],
        'redirectUrl': !runtime.exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'defaultChainId': !runtime.exists(json, 'defaultChainId') ? undefined : json['defaultChainId'],
        'defaultChain': !runtime.exists(json, 'defaultChain') ? undefined : json['defaultChain'],
        'keyExportUrl': !runtime.exists(json, 'keyExportUrl') ? undefined : json['keyExportUrl'],
        'termsAcceptedByUser': !runtime.exists(json, 'termsAcceptedByUser') ? undefined : ProviderAgreement.ProviderAgreementFromJSON(json['termsAcceptedByUser']),
        'appleKeyId': !runtime.exists(json, 'appleKeyId') ? undefined : json['appleKeyId'],
        'appleTeamId': !runtime.exists(json, 'appleTeamId') ? undefined : json['appleTeamId'],
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
        'provider': ProviderEnum.ProviderEnumToJSON(value.provider),
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt === null ? null : value.enabledAt.toISOString()),
        'clientId': value.clientId,
        'clientSecret': value.clientSecret,
        'providerProjectId': value.providerProjectId,
        'authorizationUrl': value.authorizationUrl,
        'redirectUrl': value.redirectUrl,
        'defaultChainId': value.defaultChainId,
        'defaultChain': value.defaultChain,
        'keyExportUrl': value.keyExportUrl,
        'termsAcceptedByUser': ProviderAgreement.ProviderAgreementToJSON(value.termsAcceptedByUser),
        'appleKeyId': value.appleKeyId,
        'appleTeamId': value.appleTeamId,
    };
}

exports.ProviderFromJSON = ProviderFromJSON;
exports.ProviderFromJSONTyped = ProviderFromJSONTyped;
exports.ProviderToJSON = ProviderToJSON;
