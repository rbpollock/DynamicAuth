import { exists } from '../runtime.js';
import { DurationFromJSON, DurationToJSON } from './Duration.js';
import { SupportedSecurityMethodsFromJSON, SupportedSecurityMethodsToJSON } from './SupportedSecurityMethods.js';

/* tslint:disable */
function ProjectSettingsSdkEmbeddedWalletsFromJSON(json) {
    return ProjectSettingsSdkEmbeddedWalletsFromJSONTyped(json);
}
function ProjectSettingsSdkEmbeddedWalletsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'automaticEmbeddedWalletCreation': !exists(json, 'automaticEmbeddedWalletCreation') ? undefined : json['automaticEmbeddedWalletCreation'],
        'emailRecoveryEnabled': !exists(json, 'emailRecoveryEnabled') ? undefined : json['emailRecoveryEnabled'],
        'forceAuthenticatorAtSignup': !exists(json, 'forceAuthenticatorAtSignup') ? undefined : json['forceAuthenticatorAtSignup'],
        'sessionKeyDuration': !exists(json, 'sessionKeyDuration') ? undefined : DurationFromJSON(json['sessionKeyDuration']),
        'supportedSecurityMethods': !exists(json, 'supportedSecurityMethods') ? undefined : SupportedSecurityMethodsFromJSON(json['supportedSecurityMethods']),
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
        'sessionKeyDuration': DurationToJSON(value.sessionKeyDuration),
        'supportedSecurityMethods': SupportedSecurityMethodsToJSON(value.supportedSecurityMethods),
    };
}

export { ProjectSettingsSdkEmbeddedWalletsFromJSON, ProjectSettingsSdkEmbeddedWalletsFromJSONTyped, ProjectSettingsSdkEmbeddedWalletsToJSON };
