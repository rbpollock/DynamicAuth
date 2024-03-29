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
exports.CurrencyType = void 0;
(function (CurrencyType) {
    CurrencyType["Fiat"] = "fiat";
    CurrencyType["Crypto"] = "crypto";
})(exports.CurrencyType || (exports.CurrencyType = {}));
function CurrencyTypeFromJSON(json) {
    return CurrencyTypeFromJSONTyped(json);
}
function CurrencyTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function CurrencyTypeToJSON(value) {
    return value;
}

exports.CurrencyTypeFromJSON = CurrencyTypeFromJSON;
exports.CurrencyTypeFromJSONTyped = CurrencyTypeFromJSONTyped;
exports.CurrencyTypeToJSON = CurrencyTypeToJSON;
