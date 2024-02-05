'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EnvironmentEnum = require('./EnvironmentEnum.cjs');

/* tslint:disable */
function EventFromJSON(json) {
    return EventFromJSONTyped(json);
}
function EventFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'eventId': json['eventId'],
        'environmentId': json['environmentId'],
        'environmentName': EnvironmentEnum.EnvironmentEnumFromJSON(json['environmentName']),
        'eventAction': !runtime.exists(json, 'eventAction') ? undefined : json['eventAction'],
        'eventName': json['eventName'],
        'resourceType': !runtime.exists(json, 'resourceType') ? undefined : json['resourceType'],
        'timestamp': (new Date(json['timestamp'])),
        'data': json['data'],
    };
}
function EventToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'eventId': value.eventId,
        'environmentId': value.environmentId,
        'environmentName': EnvironmentEnum.EnvironmentEnumToJSON(value.environmentName),
        'eventAction': value.eventAction,
        'eventName': value.eventName,
        'resourceType': value.resourceType,
        'timestamp': (value.timestamp.toISOString()),
        'data': value.data,
    };
}

exports.EventFromJSON = EventFromJSON;
exports.EventFromJSONTyped = EventFromJSONTyped;
exports.EventToJSON = EventToJSON;
