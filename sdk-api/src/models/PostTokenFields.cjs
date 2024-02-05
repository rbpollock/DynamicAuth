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
function PostTokenFieldsFromJSON(json) {
    return PostTokenFieldsFromJSONTyped(json);
}
function PostTokenFieldsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'note': json['note'],
    };
}
function PostTokenFieldsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'note': value.note,
    };
}

exports.PostTokenFieldsFromJSON = PostTokenFieldsFromJSON;
exports.PostTokenFieldsFromJSONTyped = PostTokenFieldsFromJSONTyped;
exports.PostTokenFieldsToJSON = PostTokenFieldsToJSON;