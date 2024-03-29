'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* tslint:disable */
/* eslint-disable */
/**
 * Dashboard API
 * Dashboard API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @enum {string}
 */
exports.SocialSignInProviderEnum = void 0;
(function (SocialSignInProviderEnum) {
    SocialSignInProviderEnum["Apple"] = "apple";
    SocialSignInProviderEnum["Bitbucket"] = "bitbucket";
    SocialSignInProviderEnum["Discord"] = "discord";
    SocialSignInProviderEnum["Facebook"] = "facebook";
    SocialSignInProviderEnum["Github"] = "github";
    SocialSignInProviderEnum["Gitlab"] = "gitlab";
    SocialSignInProviderEnum["Google"] = "google";
    SocialSignInProviderEnum["Instagram"] = "instagram";
    SocialSignInProviderEnum["Linkedin"] = "linkedin";
    SocialSignInProviderEnum["Microsoft"] = "microsoft";
    SocialSignInProviderEnum["Twitch"] = "twitch";
    SocialSignInProviderEnum["Twitter"] = "twitter";
})(exports.SocialSignInProviderEnum || (exports.SocialSignInProviderEnum = {}));
function SocialSignInProviderEnumFromJSON(json) {
    return SocialSignInProviderEnumFromJSONTyped(json);
}
function SocialSignInProviderEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function SocialSignInProviderEnumToJSON(value) {
    return value;
}

exports.SocialSignInProviderEnumFromJSON = SocialSignInProviderEnumFromJSON;
exports.SocialSignInProviderEnumFromJSONTyped = SocialSignInProviderEnumFromJSONTyped;
exports.SocialSignInProviderEnumToJSON = SocialSignInProviderEnumToJSON;
