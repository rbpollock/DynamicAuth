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
var AccessOutcomeEnum;
(function (AccessOutcomeEnum) {
    AccessOutcomeEnum["Scope"] = "scope";
    AccessOutcomeEnum["SiteAccess"] = "siteAccess";
})(AccessOutcomeEnum || (AccessOutcomeEnum = {}));
function AccessOutcomeEnumFromJSON(json) {
    return AccessOutcomeEnumFromJSONTyped(json);
}
function AccessOutcomeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function AccessOutcomeEnumToJSON(value) {
    return value;
}

export { AccessOutcomeEnum, AccessOutcomeEnumFromJSON, AccessOutcomeEnumFromJSONTyped, AccessOutcomeEnumToJSON };
