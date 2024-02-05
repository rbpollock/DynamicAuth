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
var SubscriptionFreeScopeEnum;
(function (SubscriptionFreeScopeEnum) {
    SubscriptionFreeScopeEnum["ConnectOnly"] = "connect_only";
    SubscriptionFreeScopeEnum["Design"] = "design";
    SubscriptionFreeScopeEnum["ApiKeys"] = "api_keys";
    SubscriptionFreeScopeEnum["VisitManagement"] = "visit_management";
    SubscriptionFreeScopeEnum["SettingsGeneral"] = "settings_general";
    SubscriptionFreeScopeEnum["SettingsSecurity"] = "settings_security";
    SubscriptionFreeScopeEnum["SettingsPrivacy"] = "settings_privacy";
    SubscriptionFreeScopeEnum["AdminOrgs"] = "admin_orgs";
    SubscriptionFreeScopeEnum["AdminBilling"] = "admin_billing";
    SubscriptionFreeScopeEnum["AdminMembers"] = "admin_members";
    SubscriptionFreeScopeEnum["UserManagement"] = "user_management";
})(SubscriptionFreeScopeEnum || (SubscriptionFreeScopeEnum = {}));
function SubscriptionFreeScopeEnumFromJSON(json) {
    return SubscriptionFreeScopeEnumFromJSONTyped(json);
}
function SubscriptionFreeScopeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function SubscriptionFreeScopeEnumToJSON(value) {
    return value;
}

export { SubscriptionFreeScopeEnum, SubscriptionFreeScopeEnumFromJSON, SubscriptionFreeScopeEnumFromJSONTyped, SubscriptionFreeScopeEnumToJSON };