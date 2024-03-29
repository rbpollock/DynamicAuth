'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var JwtBlockchainAccount = require('./JwtBlockchainAccount.cjs');
var JwtPayloadDeprecatedInfo = require('./JwtPayloadDeprecatedInfo.cjs');
var JwtVerifiedCredential = require('./JwtVerifiedCredential.cjs');
var ProjectSettingsKyc = require('./ProjectSettingsKyc.cjs');

/* tslint:disable */
function DynamicJwtFromJSON(json) {
    return DynamicJwtFromJSONTyped(json);
}
function DynamicJwtFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'kid': !runtime.exists(json, 'kid') ? undefined : json['kid'],
        'aud': json['aud'],
        'iss': json['iss'],
        'sub': json['sub'],
        'exp': !runtime.exists(json, 'exp') ? undefined : json['exp'],
        'iat': !runtime.exists(json, 'iat') ? undefined : json['iat'],
        'sid': json['sid'],
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
        'blockchainAccounts': !runtime.exists(json, 'blockchain_accounts') ? undefined : (json['blockchain_accounts'].map(JwtBlockchainAccount.JwtBlockchainAccountFromJSON)),
        'country': !runtime.exists(json, 'country') ? undefined : json['country'],
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
        'environmentId': json['environment_id'],
        'familyName': !runtime.exists(json, 'family_name') ? undefined : json['family_name'],
        'givenName': !runtime.exists(json, 'given_name') ? undefined : json['given_name'],
        'jobTitle': !runtime.exists(json, 'job_title') ? undefined : json['job_title'],
        'lastAuthenticatedAccountId': !runtime.exists(json, 'last_authenticated_account_id') ? undefined : json['last_authenticated_account_id'],
        'lists': !runtime.exists(json, 'lists') ? undefined : json['lists'],
        'phoneNumber': !runtime.exists(json, 'phone_number') ? undefined : json['phone_number'],
        'missingFields': (json['missing_fields'].map(ProjectSettingsKyc.ProjectSettingsKycFromJSON)),
        'scope': !runtime.exists(json, 'scope') ? undefined : json['scope'],
        'tShirtSize': !runtime.exists(json, 't_shirt_size') ? undefined : json['t_shirt_size'],
        'team': !runtime.exists(json, 'team') ? undefined : json['team'],
        'username': !runtime.exists(json, 'username') ? undefined : json['username'],
        'policiesConsent': !runtime.exists(json, 'policies_consent') ? undefined : json['policies_consent'],
        'verifiedAccount': !runtime.exists(json, 'verified_account') ? undefined : JwtBlockchainAccount.JwtBlockchainAccountFromJSON(json['verified_account']),
        'verifiedCredentials': (json['verified_credentials'].map(JwtVerifiedCredential.JwtVerifiedCredentialFromJSON)),
        'lastVerifiedCredentialId': json['last_verified_credential_id'],
        'firstVisit': !runtime.exists(json, 'first_visit') ? undefined : (new Date(json['first_visit'])),
        'lastVisit': !runtime.exists(json, 'last_visit') ? undefined : (new Date(json['last_visit'])),
        'newUser': !runtime.exists(json, 'new_user') ? undefined : json['new_user'],
        'btcWallet': !runtime.exists(json, 'btc_wallet') ? undefined : json['btc_wallet'],
        'kdaWallet': !runtime.exists(json, 'kda_wallet') ? undefined : json['kda_wallet'],
        'ltcWallet': !runtime.exists(json, 'ltc_wallet') ? undefined : json['ltc_wallet'],
        'ckbWallet': !runtime.exists(json, 'ckb_wallet') ? undefined : json['ckb_wallet'],
        'kasWallet': !runtime.exists(json, 'kas_wallet') ? undefined : json['kas_wallet'],
        'dogeWallet': !runtime.exists(json, 'doge_wallet') ? undefined : json['doge_wallet'],
        'emailNotification': !runtime.exists(json, 'email_notification') ? undefined : json['email_notification'],
        'discordNotification': !runtime.exists(json, 'discord_notification') ? undefined : json['discord_notification'],
        'newsletterNotification': !runtime.exists(json, 'newsletter_notification') ? undefined : json['newsletter_notification'],
        'metadata': !runtime.exists(json, 'metadata') ? undefined : json['metadata'],
        'memberEnvironmentIds': !runtime.exists(json, 'member_environment_ids') ? undefined : json['member_environment_ids'],
        'info': !runtime.exists(json, 'info') ? undefined : JwtPayloadDeprecatedInfo.JwtPayloadDeprecatedInfoFromJSON(json['info']),
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
        'blockchain_accounts': value.blockchainAccounts === undefined ? undefined : (value.blockchainAccounts.map(JwtBlockchainAccount.JwtBlockchainAccountToJSON)),
        'country': value.country,
        'email': value.email,
        'environment_id': value.environmentId,
        'family_name': value.familyName,
        'given_name': value.givenName,
        'job_title': value.jobTitle,
        'last_authenticated_account_id': value.lastAuthenticatedAccountId,
        'lists': value.lists,
        'phone_number': value.phoneNumber,
        'missing_fields': (value.missingFields.map(ProjectSettingsKyc.ProjectSettingsKycToJSON)),
        'scope': value.scope,
        't_shirt_size': value.tShirtSize,
        'team': value.team,
        'username': value.username,
        'policies_consent': value.policiesConsent,
        'verified_account': JwtBlockchainAccount.JwtBlockchainAccountToJSON(value.verifiedAccount),
        'verified_credentials': (value.verifiedCredentials.map(JwtVerifiedCredential.JwtVerifiedCredentialToJSON)),
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
        'info': JwtPayloadDeprecatedInfo.JwtPayloadDeprecatedInfoToJSON(value.info),
    };
}

exports.DynamicJwtFromJSON = DynamicJwtFromJSON;
exports.DynamicJwtFromJSONTyped = DynamicJwtFromJSONTyped;
exports.DynamicJwtToJSON = DynamicJwtToJSON;
