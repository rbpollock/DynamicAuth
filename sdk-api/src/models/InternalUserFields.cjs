'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function InternalUserFieldsFromJSON(json) {
    return InternalUserFieldsFromJSONTyped(json);
}
function InternalUserFieldsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
        'firstName': !runtime.exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !runtime.exists(json, 'lastName') ? undefined : json['lastName'],
        'jobTitle': !runtime.exists(json, 'jobTitle') ? undefined : json['jobTitle'],
        'phoneNumber': !runtime.exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'metadata': !runtime.exists(json, 'metadata') ? undefined : json['metadata'],
        'tShirtSize': !runtime.exists(json, 'tShirtSize') ? undefined : json['tShirtSize'],
        'team': !runtime.exists(json, 'team') ? undefined : json['team'],
        'policiesConsent': !runtime.exists(json, 'policiesConsent') ? undefined : json['policiesConsent'],
        'country': !runtime.exists(json, 'country') ? undefined : json['country'],
        'username': !runtime.exists(json, 'username') ? undefined : json['username'],
        'btcWallet': !runtime.exists(json, 'btcWallet') ? undefined : json['btcWallet'],
        'kdaWallet': !runtime.exists(json, 'kdaWallet') ? undefined : json['kdaWallet'],
        'ltcWallet': !runtime.exists(json, 'ltcWallet') ? undefined : json['ltcWallet'],
        'ckbWallet': !runtime.exists(json, 'ckbWallet') ? undefined : json['ckbWallet'],
        'kasWallet': !runtime.exists(json, 'kasWallet') ? undefined : json['kasWallet'],
        'dogeWallet': !runtime.exists(json, 'dogeWallet') ? undefined : json['dogeWallet'],
        'emailNotification': !runtime.exists(json, 'emailNotification') ? undefined : json['emailNotification'],
        'discordNotification': !runtime.exists(json, 'discordNotification') ? undefined : json['discordNotification'],
        'newsletterNotification': !runtime.exists(json, 'newsletterNotification') ? undefined : json['newsletterNotification'],
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
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

exports.InternalUserFieldsFromJSON = InternalUserFieldsFromJSON;
exports.InternalUserFieldsFromJSONTyped = InternalUserFieldsFromJSONTyped;
exports.InternalUserFieldsToJSON = InternalUserFieldsToJSON;
