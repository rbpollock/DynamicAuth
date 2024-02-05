import { exists } from '../runtime.js';
import { EnvironmentEnumFromJSON, EnvironmentEnumToJSON } from './EnvironmentEnum.js';

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
        'environmentName': EnvironmentEnumFromJSON(json['environmentName']),
        'eventAction': !exists(json, 'eventAction') ? undefined : json['eventAction'],
        'eventName': json['eventName'],
        'resourceType': !exists(json, 'resourceType') ? undefined : json['resourceType'],
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
        'environmentName': EnvironmentEnumToJSON(value.environmentName),
        'eventAction': value.eventAction,
        'eventName': value.eventName,
        'resourceType': value.resourceType,
        'timestamp': (value.timestamp.toISOString()),
        'data': value.data,
    };
}

export { EventFromJSON, EventFromJSONTyped, EventToJSON };
