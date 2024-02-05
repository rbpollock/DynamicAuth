import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { ChainalysisCheckFromJSON, ChainalysisCheckToJSON } from './ChainalysisCheck.js';
import { JwtVerifiedCredentialFromJSON, JwtVerifiedCredentialToJSON } from './JwtVerifiedCredential.js';
import { OAuthAccountFromJSON, OAuthAccountToJSON } from './OAuthAccount.js';
import { ProjectSettingsKycFromJSON, ProjectSettingsKycToJSON } from './ProjectSettingsKyc.js';
import { SessionFromJSON, SessionToJSON } from './Session.js';
import { WalletFromJSON, WalletToJSON } from './Wallet.js';

/* tslint:disable */
function UserFromJSON(json) {
    return UserFromJSONTyped(json);
}
function UserFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'projectEnvironmentId': json['projectEnvironmentId'],
        'verifiedCredentials': !exists(json, 'verifiedCredentials') ? undefined : (json['verifiedCredentials'].map(JwtVerifiedCredentialFromJSON)),
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'jobTitle': !exists(json, 'jobTitle') ? undefined : json['jobTitle'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'policiesConsent': !exists(json, 'policiesConsent') ? undefined : json['policiesConsent'],
        'tShirtSize': !exists(json, 'tShirtSize') ? undefined : json['tShirtSize'],
        'team': !exists(json, 'team') ? undefined : json['team'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'firstVisit': !exists(json, 'firstVisit') ? undefined : (new Date(json['firstVisit'])),
        'lastVisit': !exists(json, 'lastVisit') ? undefined : (new Date(json['lastVisit'])),
        'newUser': !exists(json, 'newUser') ? undefined : json['newUser'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'btcWallet': !exists(json, 'btcWallet') ? undefined : json['btcWallet'],
        'kdaWallet': !exists(json, 'kdaWallet') ? undefined : json['kdaWallet'],
        'ltcWallet': !exists(json, 'ltcWallet') ? undefined : json['ltcWallet'],
        'ckbWallet': !exists(json, 'ckbWallet') ? undefined : json['ckbWallet'],
        'kasWallet': !exists(json, 'kasWallet') ? undefined : json['kasWallet'],
        'dogeWallet': !exists(json, 'dogeWallet') ? undefined : json['dogeWallet'],
        'emailNotification': !exists(json, 'emailNotification') ? undefined : json['emailNotification'],
        'discordNotification': !exists(json, 'discordNotification') ? undefined : json['discordNotification'],
        'newsletterNotification': !exists(json, 'newsletterNotification') ? undefined : json['newsletterNotification'],
        'lists': !exists(json, 'lists') ? undefined : json['lists'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'missingFields': !exists(json, 'missingFields') ? undefined : (json['missingFields'].map(ProjectSettingsKycFromJSON)),
        'walletPublicKey': !exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
        'wallet': !exists(json, 'wallet') ? undefined : json['wallet'],
        'chain': !exists(json, 'chain') ? undefined : ChainEnumFromJSON(json['chain']),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'sessions': !exists(json, 'sessions') ? undefined : (json['sessions'].map(SessionFromJSON)),
        'wallets': !exists(json, 'wallets') ? undefined : (json['wallets'].map(WalletFromJSON)),
        'chainalysisChecks': !exists(json, 'chainalysisChecks') ? undefined : (json['chainalysisChecks'].map(ChainalysisCheckFromJSON)),
        'oauthAccounts': !exists(json, 'oauthAccounts') ? undefined : (json['oauthAccounts'].map(OAuthAccountFromJSON)),
    };
}
function UserToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'projectEnvironmentId': value.projectEnvironmentId,
        'verifiedCredentials': value.verifiedCredentials === undefined ? undefined : (value.verifiedCredentials.map(JwtVerifiedCredentialToJSON)),
        'alias': value.alias,
        'country': value.country,
        'email': value.email,
        'firstName': value.firstName,
        'jobTitle': value.jobTitle,
        'lastName': value.lastName,
        'phoneNumber': value.phoneNumber,
        'policiesConsent': value.policiesConsent,
        'tShirtSize': value.tShirtSize,
        'team': value.team,
        'username': value.username,
        'firstVisit': value.firstVisit === undefined ? undefined : (value.firstVisit.toISOString()),
        'lastVisit': value.lastVisit === undefined ? undefined : (value.lastVisit.toISOString()),
        'newUser': value.newUser,
        'metadata': value.metadata,
        'btcWallet': value.btcWallet,
        'kdaWallet': value.kdaWallet,
        'ltcWallet': value.ltcWallet,
        'ckbWallet': value.ckbWallet,
        'kasWallet': value.kasWallet,
        'dogeWallet': value.dogeWallet,
        'emailNotification': value.emailNotification,
        'discordNotification': value.discordNotification,
        'newsletterNotification': value.newsletterNotification,
        'lists': value.lists,
        'scope': value.scope,
        'missingFields': value.missingFields === undefined ? undefined : (value.missingFields.map(ProjectSettingsKycToJSON)),
        'walletPublicKey': value.walletPublicKey,
        'wallet': value.wallet,
        'chain': ChainEnumToJSON(value.chain),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'sessions': value.sessions === undefined ? undefined : (value.sessions.map(SessionToJSON)),
        'wallets': value.wallets === undefined ? undefined : (value.wallets.map(WalletToJSON)),
        'chainalysisChecks': value.chainalysisChecks === undefined ? undefined : (value.chainalysisChecks.map(ChainalysisCheckToJSON)),
        'oauthAccounts': value.oauthAccounts === undefined ? undefined : (value.oauthAccounts.map(OAuthAccountToJSON)),
    };
}

export { UserFromJSON, UserFromJSONTyped, UserToJSON };
