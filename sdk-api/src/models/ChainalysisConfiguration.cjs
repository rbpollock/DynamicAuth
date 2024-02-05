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
function ChainalysisConfigurationFromJSON(json) {
    return ChainalysisConfigurationFromJSONTyped(json);
}
function ChainalysisConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'sanctionsApiEnabled': json['sanctionsApiEnabled'],
        'kytApiEnabled': json['kytApiEnabled'],
        'projectEnvironmentId': json['projectEnvironmentId'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}
function ChainalysisConfigurationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'sanctionsApiEnabled': value.sanctionsApiEnabled,
        'kytApiEnabled': value.kytApiEnabled,
        'projectEnvironmentId': value.projectEnvironmentId,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

exports.ChainalysisConfigurationFromJSON = ChainalysisConfigurationFromJSON;
exports.ChainalysisConfigurationFromJSONTyped = ChainalysisConfigurationFromJSONTyped;
exports.ChainalysisConfigurationToJSON = ChainalysisConfigurationToJSON;
