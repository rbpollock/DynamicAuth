'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var runtime = require('../runtime.cjs');
require('../models/AccessOutcomeEnum.cjs');
require('../models/AuthModeEnum.cjs');
require('../models/AuthenticatorTransportProtocol.cjs');
require('../models/BillingSubscriptionPlanTypeEnum.cjs');
require('../models/ChainEnum.cjs');
require('../models/ChainalysisCheckResultEnum.cjs');
require('../models/WalletProviderEnum.cjs');
require('../models/EmbeddedWalletProviderEnum.cjs');
require('../models/UserIdentifierTypeEnum.cjs');
require('../models/CurrencyType.cjs');
require('../models/TimeUnitEnum.cjs');
require('../models/JwtVerifiedCredentialFormatEnum.cjs');
require('../models/ProviderEnum.cjs');
require('../models/EmbeddedWalletSecurityMethod.cjs');
require('../models/EnvironmentEnum.cjs');
require('../models/SignInProviderEnum.cjs');
require('../models/SocialSignInProviderEnum.cjs');
require('../models/SdkViewSectionAlignment.cjs');
require('../models/SdkViewSectionType.cjs');
require('../models/SdkViewType.cjs');
require('../models/UserFilterableFieldsEnum.cjs');
require('../models/ExportFormatEnum.cjs');
require('../models/ExportModelEnum.cjs');
require('../models/ExportStatusEnum.cjs');
var Gate = require('../models/Gate.cjs');
var GateCreateRequest = require('../models/GateCreateRequest.cjs');
require('../models/GateRuleType.cjs');
var GateUpdateRequest = require('../models/GateUpdateRequest.cjs');
var GatesResponse = require('../models/GatesResponse.cjs');
require('../models/HealthcheckStatus.cjs');
require('../models/InviteStatusEnum.cjs');
require('../models/NextViewEnum.cjs');
require('../models/OauthResultStatus.cjs');
require('../models/WhenToImplementEnum.cjs');
require('../models/PublishEventsEvents.cjs');
require('../models/RoleEnum.cjs');
require('../models/SubscriptionAdvancedScopeEnum.cjs');
require('../models/SubscriptionFreeScopeEnum.cjs');
require('../models/UnprocessableEntityErrorCode.cjs');
require('../models/VisitorFilterableFieldsEnum.cjs');

/* tslint:disable */
/**
 *
 */
class GatesApi extends runtime.BaseAPI {
    /**
     * Creates a new gate for the project environment
     */
    createGateRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createGate.');
            }
            if (requestParameters.gateCreateRequest === null || requestParameters.gateCreateRequest === undefined) {
                throw new runtime.RequiredError('gateCreateRequest', 'Required parameter requestParameters.gateCreateRequest was null or undefined when calling createGate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/environments/{environmentId}/gates`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GateCreateRequest.GateCreateRequestToJSON(requestParameters.gateCreateRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Gate.GateFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new gate for the project environment
     */
    createGate(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.createGateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete a gate
     */
    deleteGateRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.gateId === null || requestParameters.gateId === undefined) {
                throw new runtime.RequiredError('gateId', 'Required parameter requestParameters.gateId was null or undefined when calling deleteGate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/gates/{gateId}`.replace(`{${"gateId"}}`, encodeURIComponent(String(requestParameters.gateId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete a gate
     */
    deleteGate(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteGateRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Disable the gate for the environment
     */
    disableGateRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.gateId === null || requestParameters.gateId === undefined) {
                throw new runtime.RequiredError('gateId', 'Required parameter requestParameters.gateId was null or undefined when calling disableGate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/gates/{gateId}/disable`.replace(`{${"gateId"}}`, encodeURIComponent(String(requestParameters.gateId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Gate.GateFromJSON(jsonValue));
        });
    }
    /**
     * Disable the gate for the environment
     */
    disableGate(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.disableGateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Enable the gate for the environment
     */
    enableGateRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.gateId === null || requestParameters.gateId === undefined) {
                throw new runtime.RequiredError('gateId', 'Required parameter requestParameters.gateId was null or undefined when calling enableGate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/gates/{gateId}/enable`.replace(`{${"gateId"}}`, encodeURIComponent(String(requestParameters.gateId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Gate.GateFromJSON(jsonValue));
        });
    }
    /**
     * Enable the gate for the environment
     */
    enableGate(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.enableGateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the gates for an environment
     */
    getEnvironmentGatesRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEnvironmentGates.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/gates`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => GatesResponse.GatesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the gates for an environment
     */
    getEnvironmentGates(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEnvironmentGatesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets a gate
     */
    getGateRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.gateId === null || requestParameters.gateId === undefined) {
                throw new runtime.RequiredError('gateId', 'Required parameter requestParameters.gateId was null or undefined when calling getGate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/gates/{gateId}`.replace(`{${"gateId"}}`, encodeURIComponent(String(requestParameters.gateId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Gate.GateFromJSON(jsonValue));
        });
    }
    /**
     * Gets a gate
     */
    getGate(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getGateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Updates a gate
     */
    updateGateRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.gateId === null || requestParameters.gateId === undefined) {
                throw new runtime.RequiredError('gateId', 'Required parameter requestParameters.gateId was null or undefined when calling updateGate.');
            }
            if (requestParameters.gateUpdateRequest === null || requestParameters.gateUpdateRequest === undefined) {
                throw new runtime.RequiredError('gateUpdateRequest', 'Required parameter requestParameters.gateUpdateRequest was null or undefined when calling updateGate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/gates/{gateId}`.replace(`{${"gateId"}}`, encodeURIComponent(String(requestParameters.gateId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: GateUpdateRequest.GateUpdateRequestToJSON(requestParameters.gateUpdateRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Gate.GateFromJSON(jsonValue));
        });
    }
    /**
     * Updates a gate
     */
    updateGate(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateGateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.GatesApi = GatesApi;
