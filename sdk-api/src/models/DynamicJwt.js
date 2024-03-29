import { exists } from '../runtime.js';
import { JwtBlockchainAccountFromJSON, JwtBlockchainAccountToJSON } from './JwtBlockchainAccount.js';
import { JwtPayloadDeprecatedInfoFromJSON, JwtPayloadDeprecatedInfoToJSON } from './JwtPayloadDeprecatedInfo.js';
import { JwtVerifiedCredentialFromJSON, JwtVerifiedCredentialToJSON } from './JwtVerifiedCredential.js';
import { ProjectSettingsKycFromJSON, ProjectSettingsKycToJSON } from './ProjectSettingsKyc.js';

/* tslint:disable */
function DynamicJwtFromJSON(json) {
    return DynamicJwtFromJSONTyped(json);
}
function DynamicJwtFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'kid': !exists(json, 'kid') ? undefined : json['kid'],
        'aud': json['aud'],
        'iss': json['iss'],
        'sub': json['sub'],
        'exp': !exists(json, 'exp') ? undefined : json['exp'],
        'iat': !exists(json, 'iat') ? undefined : json['iat'],
        'sid': json['sid'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'blockchainAccounts': !exists(json, 'blockchain_accounts') ? undefined : (json['blockchain_accounts'].map(JwtBlockchainAccountFromJSON)),
        'country': !exists(json, 'country') ? undefined : json['country'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'environmentId': json['environment_id'],
        'familyName': !exists(json, 'family_name') ? undefined : json['family_name'],
        'givenName': !exists(json, 'given_name') ? undefined : json['given_name'],
        'jobTitle': !exists(json, 'job_title') ? undefined : json['job_title'],
        'lastAuthenticatedAccountId': !exists(json, 'last_authenticated_account_id') ? undefined : json['last_authenticated_account_id'],
        'lists': !exists(json, 'lists') ? undefined : json['lists'],
        'phoneNumber': !exists(json, 'phone_number') ? undefined : json['phone_number'],
        'missingFields': (json['missing_fields'].map(ProjectSettingsKycFromJSON)),
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'tShirtSize': !exists(json, 't_shirt_size') ? undefined : json['t_shirt_size'],
        'team': !exists(json, 'team') ? undefined : json['team'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'policiesConsent': !exists(json, 'policies_consent') ? undefined : json['policies_consent'],
        'verifiedAccount': !exists(json, 'verified_account') ? undefined : JwtBlockchainAccountFromJSON(json['verified_account']),
        'verifiedCredentials': (json['verified_credentials'].map(JwtVerifiedCredentialFromJSON)),
        'lastVerifiedCredentialId': json['last_verified_credential_id'],
        'firstVisit': !exists(json, 'first_visit') ? undefined : (new Date(json['first_visit'])),
        'lastVisit': !exists(json, 'last_visit') ? undefined : (new Date(json['last_visit'])),
        'newUser': !exists(json, 'new_user') ? undefined : json['new_user'],
        'btcWallet': !exists(json, 'btc_wallet') ? undefined : json['btc_wallet'],
        'kdaWallet': !exists(json, 'kda_wallet') ? undefined : json['kda_wallet'],
        'ltcWallet': !exists(json, 'ltc_wallet') ? undefined : json['ltc_wallet'],
        'ckbWallet': !exists(json, 'ckb_wallet') ? undefined : json['ckb_wallet'],
        'kasWallet': !exists(json, 'kas_wallet') ? undefined : json['kas_wallet'],
        'dogeWallet': !exists(json, 'doge_wallet') ? undefined : json['doge_wallet'],
        'emailNotification': !exists(json, 'email_notification') ? undefined : json['email_notification'],
        'discordNotification': !exists(json, 'discord_notification') ? undefined : json['discord_notification'],
        'newsletterNotification': !exists(json, 'newsletter_notification') ? undefined : json['newsletter_notification'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'memberEnvironmentIds': !exists(json, 'member_environment_ids') ? undefined : json['member_environment_ids'],
        'info': !exists(json, 'info') ? undefined : JwtPayloadDeprecatedInfoFromJSON(json['info']),
    };
}
function DynamicJwtToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'kid': value.kid,
        'aud': value.aud,
        'iss': value.iss,
        'sub': value.sub,
        'exp': value.exp,
        'iat': value.iat,
        'sid': value.sid,
        'alias': value.alias,
        'blockchain_accounts': value.blockchainAccounts === undefined ? undefined : (value.blockchainAccounts.map(JwtBlockchainAccountToJSON)),
        'country': value.country,
        'email': value.email,
        'environment_id': value.environmentId,
        'family_name': value.familyName,
        'given_name': value.givenName,
        'job_title': value.jobTitle,
        'last_authenticated_account_id': value.lastAuthenticatedAccountId,
        'lists': value.lists,
        'phone_number': value.phoneNumber,
        'missing_fields': (value.missingFields.map(ProjectSettingsKycToJSON)),
        'scope': value.scope,
        't_shirt_size': value.tShirtSize,
        'team': value.team,
        'username': value.username,
        'policies_consent': value.policiesConsent,
        'verified_account': JwtBlockchainAccountToJSON(value.verifiedAccount),
        'verified_credentials': (value.verifiedCredentials.map(JwtVerifiedCredentialToJSON)),
        'last_verified_credential_id': value.lastVerifiedCredentialId,
        'first_visit': value.firstVisit === undefined ? undefined : (value.firstVisit.toISOString()),
        'last_visit': value.lastVisit === undefined ? undefined : (value.lastVisit.toISOString()),
        'new_user': value.newUser,
        'btc_wallet': value.btcWallet,
        'kda_wallet': value.kdaWallet,
        'ltc_wallet': value.ltcWallet,
        'ckb_wallet': value.ckbWallet,
        'kas_wallet': value.kasWallet,
        'doge_wallet': value.dogeWallet,
        'email_notification': value.emailNotification,
        'discord_notification': value.discordNotification,
        'newsletter_notification': value.newsletterNotification,
        'metadata': value.metadata,
        'member_environment_ids': value.memberEnvironmentIds,
        'info': JwtPayloadDeprecatedInfoToJSON(value.info),
    };
}

export { DynamicJwtFromJSON, DynamicJwtFromJSONTyped, DynamicJwtToJSON };
