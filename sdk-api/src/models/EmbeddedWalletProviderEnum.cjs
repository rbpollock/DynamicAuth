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
exports.EmbeddedWalletProviderEnum = void 0;
(function (EmbeddedWalletProviderEnum) {
    EmbeddedWalletProviderEnum["Turnkey"] = "turnkey";
    EmbeddedWalletProviderEnum["Turnkeyhd"] = "turnkeyhd";
})(exports.EmbeddedWalletProviderEnum || (exports.EmbeddedWalletProviderEnum = {}));
function EmbeddedWalletProviderEnumFromJSON(json) {
    return EmbeddedWalletProviderEnumFromJSONTyped(json);
}
function EmbeddedWalletProviderEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function EmbeddedWalletProviderEnumToJSON(value) {
    return value;
}

exports.EmbeddedWalletProviderEnumFromJSON = EmbeddedWalletProviderEnumFromJSON;
exports.EmbeddedWalletProviderEnumFromJSONTyped = EmbeddedWalletProviderEnumFromJSONTyped;
exports.EmbeddedWalletProviderEnumToJSON = EmbeddedWalletProviderEnumToJSON;
