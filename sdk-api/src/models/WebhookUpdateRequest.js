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
function WebhookUpdateRequestFromJSON(json) {
    return WebhookUpdateRequestFromJSONTyped(json);
}
function WebhookUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'url': json['url'],
        'isEnabled': json['isEnabled'],
        'events': json['events'],
    };
}
function WebhookUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'url': value.url,
        'isEnabled': value.isEnabled,
        'events': value.events,
    };
}

export { WebhookUpdateRequestFromJSON, WebhookUpdateRequestFromJSONTyped, WebhookUpdateRequestToJSON };