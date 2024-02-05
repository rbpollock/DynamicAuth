import { exists } from '../runtime.js';

/* tslint:disable */
function InternalUserFieldsFromJSON(json) {
    return InternalUserFieldsFromJSONTyped(json);
}
function InternalUserFieldsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'jobTitle': !exists(json, 'jobTitle') ? undefined : json['jobTitle'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'tShirtSize': !exists(json, 'tShirtSize') ? undefined : json['tShirtSize'],
        'team': !exists(json, 'team') ? undefined : json['team'],
        'policiesConsent': !exists(json, 'policiesConsent') ? undefined : json['policiesConsent'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'btcWallet': !exists(json, 'btcWallet') ? undefined : json['btcWallet'],
        'kdaWallet': !exists(json, 'kdaWallet') ? undefined : json['kdaWallet'],
        'ltcWallet': !exists(json, 'ltcWallet') ? undefined : json['ltcWallet'],
        'ckbWallet': !exists(json, 'ckbWallet') ? undefined : json['ckbWallet'],
        'kasWallet': !exists(json, 'kasWallet') ? undefined : json['kasWallet'],
        'dogeWallet': !exists(json, 'dogeWallet') ? undefined : json['dogeWallet'],
        'emailNotification': !exists(json, 'emailNotification') ? undefined : json['emailNotification'],
        'discordNotification': !exists(json, 'discordNotification') ? undefined : json['discordNotification'],
        'newsletterNotification': !exists(json, 'newsletterNotification') ? undefined : json['newsletterNotification'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}
function InternalUserFieldsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'jobTitle': value.jobTitle,
        'phoneNumber': value.phoneNumber,
        'metadata': value.metadata,
        'tShirtSize': value.tShirtSize,
        'team': value.team,
        'policiesConsent': value.policiesConsent,
        'country': value.country,
        'username': value.username,
        'btcWallet': value.btcWallet,
        'kdaWallet': value.kdaWallet,
        'ltcWallet': value.ltcWallet,
        'ckbWallet': value.ckbWallet,
        'kasWallet': value.kasWallet,
        'dogeWallet': value.dogeWallet,
        'emailNotification': value.emailNotification,
        'discordNotification': value.discordNotification,
        'newsletterNotification': value.newsletterNotification,
        'email': value.email,
    };
}

export { InternalUserFieldsFromJSON, InternalUserFieldsFromJSONTyped, InternalUserFieldsToJSON };
