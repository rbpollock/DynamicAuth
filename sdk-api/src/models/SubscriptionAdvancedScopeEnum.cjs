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
exports.SubscriptionAdvancedScopeEnum = void 0;
(function (SubscriptionAdvancedScopeEnum) {
    SubscriptionAdvancedScopeEnum["ConnectAndSign"] = "connect_and_sign";
    SubscriptionAdvancedScopeEnum["MultiWallet"] = "multi_wallet";
    SubscriptionAdvancedScopeEnum["ApiTokens"] = "api_tokens";
    SubscriptionAdvancedScopeEnum["InfoCapture"] = "info_capture";
    SubscriptionAdvancedScopeEnum["AccessList"] = "access_list";
    SubscriptionAdvancedScopeEnum["Chainalysis"] = "chainalysis";
    SubscriptionAdvancedScopeEnum["AnalyticsUsers"] = "analytics_users";
    SubscriptionAdvancedScopeEnum["AnalyticsVisits"] = "analytics_visits";
    SubscriptionAdvancedScopeEnum["Captcha"] = "captcha";
    SubscriptionAdvancedScopeEnum["SigninWithEmail"] = "signin_with_email";
    SubscriptionAdvancedScopeEnum["Gating"] = "gating";
    SubscriptionAdvancedScopeEnum["AccountAbstraction"] = "account_abstraction";
    SubscriptionAdvancedScopeEnum["Webhooks"] = "webhooks";
})(exports.SubscriptionAdvancedScopeEnum || (exports.SubscriptionAdvancedScopeEnum = {}));
function SubscriptionAdvancedScopeEnumFromJSON(json) {
    return SubscriptionAdvancedScopeEnumFromJSONTyped(json);
}
function SubscriptionAdvancedScopeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function SubscriptionAdvancedScopeEnumToJSON(value) {
    return value;
}

exports.SubscriptionAdvancedScopeEnumFromJSON = SubscriptionAdvancedScopeEnumFromJSON;
exports.SubscriptionAdvancedScopeEnumFromJSONTyped = SubscriptionAdvancedScopeEnumFromJSONTyped;
exports.SubscriptionAdvancedScopeEnumToJSON = SubscriptionAdvancedScopeEnumToJSON;
