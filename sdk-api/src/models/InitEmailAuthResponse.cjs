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
function InitEmailAuthResponseFromJSON(json) {
    return InitEmailAuthResponseFromJSONTyped(json);
}
function InitEmailAuthResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'turnkeyUserId': json['turnkeyUserId'],
        'turnkeyApiKeyId': json['turnkeyApiKeyId'],
    };
}
function InitEmailAuthResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'turnkeyUserId': value.turnkeyUserId,
        'turnkeyApiKeyId': value.turnkeyApiKeyId,
    };
}

exports.InitEmailAuthResponseFromJSON = InitEmailAuthResponseFromJSON;
exports.InitEmailAuthResponseFromJSONTyped = InitEmailAuthResponseFromJSONTyped;
exports.InitEmailAuthResponseToJSON = InitEmailAuthResponseToJSON;
