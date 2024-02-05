'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Duration = require('./Duration.cjs');
var SupportedSecurityMethods = require('./SupportedSecurityMethods.cjs');

/* tslint:disable */
function ProjectSettingsSdkEmbeddedWalletsFromJSON(json) {
    return ProjectSettingsSdkEmbeddedWalletsFromJSONTyped(json);
}
function ProjectSettingsSdkEmbeddedWalletsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'automaticEmbeddedWalletCreation': !runtime.exists(json, 'automaticEmbeddedWalletCreation') ? undefined : json['automaticEmbeddedWalletCreation'],
        'emailRecoveryEnabled': !runtime.exists(json, 'emailRecoveryEnabled') ? undefined : json['emailRecoveryEnabled'],
        'forceAuthenticatorAtSignup': !runtime.exists(json, 'forceAuthenticatorAtSignup') ? undefined : json['forceAuthenticatorAtSignup'],
        'sessionKeyDuration': !runtime.exists(json, 'sessionKeyDuration') ? undefined : Duration.DurationFromJSON(json['sessionKeyDuration']),
        'supportedSecurityMethods': !runtime.exists(json, 'supportedSecurityMethods') ? undefined : SupportedSecurityMethods.SupportedSecurityMethodsFromJSON(json['supportedSecurityMethods']),
    };
}
function ProjectSettingsSdkEmbeddedWalletsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'automaticEmbeddedWalletCreation': value.automaticEmbeddedWalletCreation,
        'emailRecoveryEnabled': value.emailRecoveryEnabled,
        'forceAuthenticatorAtSignup': value.forceAuthenticatorAtSignup,
        'sessionKeyDuration': Duration.DurationToJSON(value.sessionKeyDuration),
        'supportedSecurityMethods': SupportedSecurityMethods.SupportedSecurityMethodsToJSON(value.supportedSecurityMethods),
    };
}

exports.ProjectSettingsSdkEmbeddedWalletsFromJSON = ProjectSettingsSdkEmbeddedWalletsFromJSON;
exports.ProjectSettingsSdkEmbeddedWalletsFromJSONTyped = ProjectSettingsSdkEmbeddedWalletsFromJSONTyped;
exports.ProjectSettingsSdkEmbeddedWalletsToJSON = ProjectSettingsSdkEmbeddedWalletsToJSON;
