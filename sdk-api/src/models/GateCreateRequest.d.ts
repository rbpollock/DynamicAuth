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
import { AccessOutcomeEnum } from './AccessOutcomeEnum';
import { GateRule } from './GateRule';
/**
 * Request body to create a new gate. The gate will be not enabled by default.
 * @export
 * @interface GateCreateRequest
 */
export interface GateCreateRequest {
    /**
     * Human-readable name of the gate. This should be something helpful to organize gates.
     * @type {string}
     * @memberof GateCreateRequest
     */
    name: string;
    /**
     *
     * @type {AccessOutcomeEnum}
     * @memberof GateCreateRequest
     */
    outcome: AccessOutcomeEnum;
    /**
     * String for the resulting scope of the gate. If the rules of the gate apply to the user being verified, then this scope will be surfaced in the JWT. If a scope is not provided for the gate, the default behavior of the gate would be to block access to users that the rules do not currently apply to.
     * @type {string}
     * @memberof GateCreateRequest
     */
    scope?: string;
    /**
     * The rules which will be used to evaluate users being verified. If multiple rules are present in a single gate, then all the rules need to apply for the user to gain the scope defined by the gate.
     * @type {Array<GateRule>}
     * @memberof GateCreateRequest
     */
    rules: Array<GateRule>;
}
export declare function GateCreateRequestFromJSON(json: any): GateCreateRequest;
export declare function GateCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GateCreateRequest;
export declare function GateCreateRequestToJSON(value?: GateCreateRequest | null): any;
