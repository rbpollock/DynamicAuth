'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EmbeddedWalletSecurityMethod = require('./EmbeddedWalletSecurityMethod.cjs');
var ProjectSettingsSdkEmbeddedWallets = require('./ProjectSettingsSdkEmbeddedWallets.cjs');
var ProjectSettingsSdkSocialSignIn = require('./ProjectSettingsSdkSocialSignIn.cjs');
var ProjectSettingsSdkWalletConnect = require('./ProjectSettingsSdkWalletConnect.cjs');
var SdkView = require('./SdkView.cjs');

/* tslint:disable */
function ProjectSettingsSdkFromJSON(json) {
    return ProjectSettingsSdkFromJSONTyped(json);
}
function ProjectSettingsSdkFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'socialSignIn': !runtime.exists(json, 'socialSignIn') ? undefined : ProjectSettingsSdkSocialSignIn.ProjectSettingsSdkSocialSignInFromJSON(json['socialSignIn']),
        'multiWallet': !runtime.exists(json, 'multiWallet') ? undefined : json['multiWallet'],
        'multiWalletUnlinkDisabled': !runtime.exists(json, 'multiWalletUnlinkDisabled') ? undefined : json['multiWalletUnlinkDisabled'],
        'confirmWalletTransfers': !runtime.exists(json, 'confirmWalletTransfers') ? undefined : json['confirmWalletTransfers'],
        'onrampFunding': !runtime.exists(json, 'onrampFunding') ? undefined : json['onrampFunding'],
        'passkeyEmbeddedWalletEnabled': !runtime.exists(json, 'passkeyEmbeddedWalletEnabled') ? undefined : json['passkeyEmbeddedWalletEnabled'],
        'automaticEmbeddedWalletCreation': !runtime.exists(json, 'automaticEmbeddedWalletCreation') ? undefined : json['automaticEmbeddedWalletCreation'],
        'passkeyEmbeddedWalletRecoveryEnabled': !runtime.exists(json, 'passkeyEmbeddedWalletRecoveryEnabled') ? undefined : json['passkeyEmbeddedWalletRecoveryEnabled'],
        'embeddedWalletSecurityMethods': !runtime.exists(json, 'embeddedWalletSecurityMethods') ? undefined : (json['embeddedWalletSecurityMethods'].map(EmbeddedWalletSecurityMethod.EmbeddedWalletSecurityMethodFromJSON)),
        'embeddedWallets': !runtime.exists(json, 'embeddedWallets') ? undefined : ProjectSettingsSdkEmbeddedWallets.ProjectSettingsSdkEmbeddedWalletsFromJSON(json['embeddedWallets']),
        'walletConnect': !runtime.exists(json, 'walletConnect') ? undefined : ProjectSettingsSdkWalletConnect.ProjectSettingsSdkWalletConnectFromJSON(json['walletConnect']),
        'confirmEmailProviderForVerify': !runtime.exists(json, 'confirmEmailProviderForVerify') ? undefined : json['confirmEmailProviderForVerify'],
        'displayDynamicMessaging': !runtime.exists(json, 'displayDynamicMessaging') ? undefined : json['displayDynamicMessaging'],
        'hideNetworkInDynamicWidget': !runtime.exists(json, 'hideNetworkInDynamicWidget') ? undefined : json['hideNetworkInDynamicWidget'],
        'preventOrphanedAccounts': !runtime.exists(json, 'preventOrphanedAccounts') ? undefined : json['preventOrphanedAccounts'],
        'views': !runtime.exists(json, 'views') ? undefined : (json['views'].map(SdkView.SdkViewFromJSON)),
    };
}
function ProjectSettingsSdkToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'socialSignIn': ProjectSettingsSdkSocialSignIn.ProjectSettingsSdkSocialSignInToJSON(value.socialSignIn),
        'multiWallet': value.multiWallet,
        'multiWalletUnlinkDisabled': value.multiWalletUnlinkDisabled,
        'confirmWalletTransfers': value.confirmWalletTransfers,
        'onrampFunding': value.onrampFunding,
        'passkeyEmbeddedWalletEnabled': value.passkeyEmbeddedWalletEnabled,
        'automaticEmbeddedWalletCreation': value.automaticEmbeddedWalletCreation,
        'passkeyEmbeddedWalletRecoveryEnabled': value.passkeyEmbeddedWalletRecoveryEnabled,
        'embeddedWalletSecurityMethods': value.embeddedWalletSecurityMethods === undefined ? undefined : (value.embeddedWalletSecurityMethods.map(EmbeddedWalletSecurityMethod.EmbeddedWalletSecurityMethodToJSON)),
        'embeddedWallets': ProjectSettingsSdkEmbeddedWallets.ProjectSettingsSdkEmbeddedWalletsToJSON(value.embeddedWallets),
        'walletConnect': ProjectSettingsSdkWalletConnect.ProjectSettingsSdkWalletConnectToJSON(value.walletConnect),
        'confirmEmailProviderForVerify': value.confirmEmailProviderForVerify,
        'displayDynamicMessaging': value.displayDynamicMessaging,
        'hideNetworkInDynamicWidget': value.hideNetworkInDynamicWidget,
        'preventOrphanedAccounts': value.preventOrphanedAccounts,
        'views': value.views === undefined ? undefined : (value.views.map(SdkView.SdkViewToJSON)),
    };
}

exports.ProjectSettingsSdkFromJSON = ProjectSettingsSdkFromJSON;
exports.ProjectSettingsSdkFromJSONTyped = ProjectSettingsSdkFromJSONTyped;
exports.ProjectSettingsSdkToJSON = ProjectSettingsSdkToJSON;
