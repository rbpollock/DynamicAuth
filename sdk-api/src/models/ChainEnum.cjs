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
exports.ChainEnum = void 0;
(function (ChainEnum) {
    ChainEnum["Eth"] = "ETH";
    ChainEnum["Evm"] = "EVM";
    ChainEnum["Flow"] = "FLOW";
    ChainEnum["Sol"] = "SOL";
    ChainEnum["Algo"] = "ALGO";
    ChainEnum["Stark"] = "STARK";
    ChainEnum["Cosmos"] = "COSMOS";
    ChainEnum["Btc"] = "BTC";
})(exports.ChainEnum || (exports.ChainEnum = {}));
function ChainEnumFromJSON(json) {
    return ChainEnumFromJSONTyped(json);
}
function ChainEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function ChainEnumToJSON(value) {
    return value;
}

exports.ChainEnumFromJSON = ChainEnumFromJSON;
exports.ChainEnumFromJSONTyped = ChainEnumFromJSONTyped;
exports.ChainEnumToJSON = ChainEnumToJSON;
