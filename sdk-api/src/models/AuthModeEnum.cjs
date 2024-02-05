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
exports.AuthModeEnum = void 0;
(function (AuthModeEnum) {
    AuthModeEnum["Only"] = "connect-only";
    AuthModeEnum["AndSign"] = "connect-and-sign";
})(exports.AuthModeEnum || (exports.AuthModeEnum = {}));
function AuthModeEnumFromJSON(json) {
    return AuthModeEnumFromJSONTyped(json);
}
function AuthModeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function AuthModeEnumToJSON(value) {
    return value;
}

exports.AuthModeEnumFromJSON = AuthModeEnumFromJSON;
exports.AuthModeEnumFromJSONTyped = AuthModeEnumFromJSONTyped;
exports.AuthModeEnumToJSON = AuthModeEnumToJSON;
