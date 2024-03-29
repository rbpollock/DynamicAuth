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
 * Request body to update an existing gate. This will not affect whether a gate is enabled or not.
 * @export
 * @interface GateUpdateRequest
 */
export interface GateUpdateRequest {
    /**
     * Human-readable name of the gate. This should be something helpful to organize gates.
     * @type {string}
     * @memberof GateUpdateRequest
     */
    name?: string;
    /**
     *
     * @type {AccessOutcomeEnum}
     * @memberof GateUpdateRequest
     */
    outcome?: AccessOutcomeEnum;
    /**
     * String for the resulting scope of the gate. If the rules of the gate apply to the user being verified, then this scope will be surfaced in the JWT
     * @type {string}
     * @memberof GateUpdateRequest
     */
    scope?: string;
    /**
     * The rules which will be used to evaluate users being verified. If multiple rules are present in a single gate, then all the rules need to apply for the user to gain the scope defined by the gate.
     * @type {Array<GateRule>}
     * @memberof GateUpdateRequest
     */
    rules?: Array<GateRule>;
}
export declare function GateUpdateRequestFromJSON(json: any): GateUpdateRequest;
export declare function GateUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GateUpdateRequest;
export declare function GateUpdateRequestToJSON(value?: GateUpdateRequest | null): any;
