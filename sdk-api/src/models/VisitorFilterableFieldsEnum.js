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
var VisitorFilterableFieldsEnum;
(function (VisitorFilterableFieldsEnum) {
    VisitorFilterableFieldsEnum["All"] = "all";
    VisitorFilterableFieldsEnum["Id"] = "id";
    VisitorFilterableFieldsEnum["WalletPublicKey"] = "walletPublicKey";
})(VisitorFilterableFieldsEnum || (VisitorFilterableFieldsEnum = {}));
function VisitorFilterableFieldsEnumFromJSON(json) {
    return VisitorFilterableFieldsEnumFromJSONTyped(json);
}
function VisitorFilterableFieldsEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function VisitorFilterableFieldsEnumToJSON(value) {
    return value;
}

export { VisitorFilterableFieldsEnum, VisitorFilterableFieldsEnumFromJSON, VisitorFilterableFieldsEnumFromJSONTyped, VisitorFilterableFieldsEnumToJSON };
