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
exports.EnvironmentEnum = void 0;
(function (EnvironmentEnum) {
    EnvironmentEnum["Sandbox"] = "sandbox";
    EnvironmentEnum["Live"] = "live";
})(exports.EnvironmentEnum || (exports.EnvironmentEnum = {}));
function EnvironmentEnumFromJSON(json) {
    return EnvironmentEnumFromJSONTyped(json);
}
function EnvironmentEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function EnvironmentEnumToJSON(value) {
    return value;
}

exports.EnvironmentEnumFromJSON = EnvironmentEnumFromJSON;
exports.EnvironmentEnumFromJSONTyped = EnvironmentEnumFromJSONTyped;
exports.EnvironmentEnumToJSON = EnvironmentEnumToJSON;
