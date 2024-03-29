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
exports.EmbeddedWalletSecurityMethod = void 0;
(function (EmbeddedWalletSecurityMethod) {
    EmbeddedWalletSecurityMethod["Passkey"] = "passkey";
    EmbeddedWalletSecurityMethod["Passphrase"] = "passphrase";
})(exports.EmbeddedWalletSecurityMethod || (exports.EmbeddedWalletSecurityMethod = {}));
function EmbeddedWalletSecurityMethodFromJSON(json) {
    return EmbeddedWalletSecurityMethodFromJSONTyped(json);
}
function EmbeddedWalletSecurityMethodFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function EmbeddedWalletSecurityMethodToJSON(value) {
    return value;
}

exports.EmbeddedWalletSecurityMethodFromJSON = EmbeddedWalletSecurityMethodFromJSON;
exports.EmbeddedWalletSecurityMethodFromJSONTyped = EmbeddedWalletSecurityMethodFromJSONTyped;
exports.EmbeddedWalletSecurityMethodToJSON = EmbeddedWalletSecurityMethodToJSON;
