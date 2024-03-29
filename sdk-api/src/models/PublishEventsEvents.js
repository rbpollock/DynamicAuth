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
* @export
* @enum {string}
*/
var PublishEventsEventsTypeEnum;
(function (PublishEventsEventsTypeEnum) {
    PublishEventsEventsTypeEnum["Track"] = "track";
})(PublishEventsEventsTypeEnum || (PublishEventsEventsTypeEnum = {}));
function PublishEventsEventsFromJSON(json) {
    return PublishEventsEventsFromJSONTyped(json);
}
function PublishEventsEventsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'anonymousId': json['anonymousId'],
        'event': json['event'],
        'properties': json['properties'],
        'type': json['type'],
    };
}
function PublishEventsEventsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'anonymousId': value.anonymousId,
        'event': value.event,
        'properties': value.properties,
        'type': value.type,
    };
}

export { PublishEventsEventsFromJSON, PublishEventsEventsFromJSONTyped, PublishEventsEventsToJSON, PublishEventsEventsTypeEnum };
