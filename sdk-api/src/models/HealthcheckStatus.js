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
var HealthcheckStatus;
(function (HealthcheckStatus) {
    HealthcheckStatus["Healthy"] = "healthy";
    HealthcheckStatus["Unhealthy"] = "unhealthy";
})(HealthcheckStatus || (HealthcheckStatus = {}));
function HealthcheckStatusFromJSON(json) {
    return HealthcheckStatusFromJSONTyped(json);
}
function HealthcheckStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function HealthcheckStatusToJSON(value) {
    return value;
}

export { HealthcheckStatus, HealthcheckStatusFromJSON, HealthcheckStatusFromJSONTyped, HealthcheckStatusToJSON };