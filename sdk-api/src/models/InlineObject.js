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
function InlineObjectFromJSON(json) {
    return InlineObjectFromJSONTyped(json);
}
function InlineObjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'origin': json['origin'],
    };
}
function InlineObjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'origin': value.origin,
    };
}

export { InlineObjectFromJSON, InlineObjectFromJSONTyped, InlineObjectToJSON };
