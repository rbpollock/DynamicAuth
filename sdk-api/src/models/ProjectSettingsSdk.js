import { exists } from '../runtime.js';
import { EmbeddedWalletSecurityMethodFromJSON, EmbeddedWalletSecurityMethodToJSON } from './EmbeddedWalletSecurityMethod.js';
import { ProjectSettingsSdkEmbeddedWalletsFromJSON, ProjectSettingsSdkEmbeddedWalletsToJSON } from './ProjectSettingsSdkEmbeddedWallets.js';
import { ProjectSettingsSdkSocialSignInFromJSON, ProjectSettingsSdkSocialSignInToJSON } from './ProjectSettingsSdkSocialSignIn.js';
import { ProjectSettingsSdkWalletConnectFromJSON, ProjectSettingsSdkWalletConnectToJSON } from './ProjectSettingsSdkWalletConnect.js';
import { SdkViewFromJSON, SdkViewToJSON } from './SdkView.js';

/* tslint:disable */
function ProjectSettingsSdkFromJSON(json) {
    return ProjectSettingsSdkFromJSONTyped(json);
}
function ProjectSettingsSdkFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'socialSignIn': !exists(json, 'socialSignIn') ? undefined : ProjectSettingsSdkSocialSignInFromJSON(json['socialSignIn']),
        'multiWallet': !exists(json, 'multiWallet') ? undefined : json['multiWallet'],
        'multiWalletUnlinkDisabled': !exists(json, 'multiWalletUnlinkDisabled') ? undefined : json['multiWalletUnlinkDisabled'],
        'confirmWalletTransfers': !exists(json, 'confirmWalletTransfers') ? undefined : json['confirmWalletTransfers'],
        'onrampFunding': !exists(json, 'onrampFunding') ? undefined : json['onrampFunding'],
        'passkeyEmbeddedWalletEnabled': !exists(json, 'passkeyEmbeddedWalletEnabled') ? undefined : json['passkeyEmbeddedWalletEnabled'],
        'automaticEmbeddedWalletCreation': !exists(json, 'automaticEmbeddedWalletCreation') ? undefined : json['automaticEmbeddedWalletCreation'],
        'passkeyEmbeddedWalletRecoveryEnabled': !exists(json, 'passkeyEmbeddedWalletRecoveryEnabled') ? undefined : json['passkeyEmbeddedWalletRecoveryEnabled'],
        'embeddedWalletSecurityMethods': !exists(json, 'embeddedWalletSecurityMethods') ? undefined : (json['embeddedWalletSecurityMethods'].map(EmbeddedWalletSecurityMethodFromJSON)),
        'embeddedWallets': !exists(json, 'embeddedWallets') ? undefined : ProjectSettingsSdkEmbeddedWalletsFromJSON(json['embeddedWallets']),
        'walletConnect': !exists(json, 'walletConnect') ? undefined : ProjectSettingsSdkWalletConnectFromJSON(json['walletConnect']),
        'confirmEmailProviderForVerify': !exists(json, 'confirmEmailProviderForVerify') ? undefined : json['confirmEmailProviderForVerify'],
        'displayDynamicMessaging': !exists(json, 'displayDynamicMessaging') ? undefined : json['displayDynamicMessaging'],
        'hideNetworkInDynamicWidget': !exists(json, 'hideNetworkInDynamicWidget') ? undefined : json['hideNetworkInDynamicWidget'],
        'preventOrphanedAccounts': !exists(json, 'preventOrphanedAccounts') ? undefined : json['preventOrphanedAccounts'],
        'views': !exists(json, 'views') ? undefined : (json['views'].map(SdkViewFromJSON)),
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
        'socialSignIn': ProjectSettingsSdkSocialSignInToJSON(value.socialSignIn),
        'multiWallet': value.multiWallet,
        'multiWalletUnlinkDisabled': value.multiWalletUnlinkDisabled,
        'confirmWalletTransfers': value.confirmWalletTransfers,
        'onrampFunding': value.onrampFunding,
        'passkeyEmbeddedWalletEnabled': value.passkeyEmbeddedWalletEnabled,
        'automaticEmbeddedWalletCreation': value.automaticEmbeddedWalletCreation,
        'passkeyEmbeddedWalletRecoveryEnabled': value.passkeyEmbeddedWalletRecoveryEnabled,
        'embeddedWalletSecurityMethods': value.embeddedWalletSecurityMethods === undefined ? undefined : (value.embeddedWalletSecurityMethods.map(EmbeddedWalletSecurityMethodToJSON)),
        'embeddedWallets': ProjectSettingsSdkEmbeddedWalletsToJSON(value.embeddedWallets),
        'walletConnect': ProjectSettingsSdkWalletConnectToJSON(value.walletConnect),
        'confirmEmailProviderForVerify': value.confirmEmailProviderForVerify,
        'displayDynamicMessaging': value.displayDynamicMessaging,
        'hideNetworkInDynamicWidget': value.hideNetworkInDynamicWidget,
        'preventOrphanedAccounts': value.preventOrphanedAccounts,
        'views': value.views === undefined ? undefined : (value.views.map(SdkViewToJSON)),
    };
}

export { ProjectSettingsSdkFromJSON, ProjectSettingsSdkFromJSONTyped, ProjectSettingsSdkToJSON };
