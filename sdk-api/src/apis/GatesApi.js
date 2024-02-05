import { __awaiter } from '../../_virtual/_tslib.js';
import { BaseAPI, RequiredError, JSONApiResponse, VoidApiResponse } from '../runtime.js';
import '../models/AccessOutcomeEnum.js';
import '../models/AuthModeEnum.js';
import '../models/AuthenticatorTransportProtocol.js';
import '../models/BillingSubscriptionPlanTypeEnum.js';
import '../models/ChainEnum.js';
import '../models/ChainalysisCheckResultEnum.js';
import '../models/WalletProviderEnum.js';
import '../models/EmbeddedWalletProviderEnum.js';
import '../models/UserIdentifierTypeEnum.js';
import '../models/CurrencyType.js';
import '../models/TimeUnitEnum.js';
import '../models/JwtVerifiedCredentialFormatEnum.js';
import '../models/ProviderEnum.js';
import '../models/EmbeddedWalletSecurityMethod.js';
import '../models/EnvironmentEnum.js';
import '../models/SignInProviderEnum.js';
import '../models/SocialSignInProviderEnum.js';
import '../models/SdkViewSectionAlignment.js';
import '../models/SdkViewSectionType.js';
import '../models/SdkViewType.js';
import '../models/UserFilterableFieldsEnum.js';
import '../models/ExportFormatEnum.js';
import '../models/ExportModelEnum.js';
import '../models/ExportStatusEnum.js';
import { GateFromJSON } from '../models/Gate.js';
import { GateCreateRequestToJSON } from '../models/GateCreateRequest.js';
import '../models/GateRuleType.js';
import { GateUpdateRequestToJSON } from '../models/GateUpdateRequest.js';
import { GatesResponseFromJSON } from '../models/GatesResponse.js';
import '../models/HealthcheckStatus.js';
import '../models/InviteStatusEnum.js';
import '../models/NextViewEnum.js';
import '../models/OauthResultStatus.js';
import '../models/WhenToImplementEnum.js';
import '../models/PublishEventsEvents.js';
import '../models/RoleEnum.js';
import '../models/SubscriptionAdvancedScopeEnum.js';
import '../models/SubscriptionFreeScopeEnum.js';
import '../models/UnprocessableEntityErrorCode.js';
import '../models/VisitorFilterableFieldsEnum.js';

/* tslint:disable */
/**
 *
 */
class GatesApi extends BaseAPI {
    /**
     * Creates a new gate for the project environment
     */
    createGateRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createGate.');
            }
            if (requestParameters.gateCreateRequest === null || requestParameters.gateCreateRequest === undefined) {
                throw new RequiredError('gateCreateRequest', 'Required parameter requestParameters.gateCreateRequest was null or undefined when calling createGate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/environments/{environmentId}/gates`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GateCreateRequestToJSON(requestParameters.gateCreateRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => GateFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new gate for the project environment
     */
    createGate(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createGateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete a gate
     */
    deleteGateRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.gateId === null || requestParameters.gateId === undefined) {
                throw new RequiredError('gateId', 'Required parameter requestParameters.gateId was null or undefined when calling deleteGate.');
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
            return new VoidApiResponse(response);
        });
    }
    /**
     * Delete a gate
     */
    deleteGate(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteGateRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Disable the gate for the environment
     */
    disableGateRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.gateId === null || requestParameters.gateId === undefined) {
                throw new RequiredError('gateId', 'Required parameter requestParameters.gateId was null or undefined when calling disableGate.');
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
            return new JSONApiResponse(response, (jsonValue) => GateFromJSON(jsonValue));
        });
    }
    /**
     * Disable the gate for the environment
     */
    disableGate(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.disableGateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Enable the gate for the environment
     */
    enableGateRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.gateId === null || requestParameters.gateId === undefined) {
                throw new RequiredError('gateId', 'Required parameter requestParameters.gateId was null or undefined when calling enableGate.');
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
            return new JSONApiResponse(response, (jsonValue) => GateFromJSON(jsonValue));
        });
    }
    /**
     * Enable the gate for the environment
     */
    enableGate(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.enableGateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the gates for an environment
     */
    getEnvironmentGatesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEnvironmentGates.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/gates`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => GatesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the gates for an environment
     */
    getEnvironmentGates(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEnvironmentGatesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets a gate
     */
    getGateRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.gateId === null || requestParameters.gateId === undefined) {
                throw new RequiredError('gateId', 'Required parameter requestParameters.gateId was null or undefined when calling getGate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/gates/{gateId}`.replace(`{${"gateId"}}`, encodeURIComponent(String(requestParameters.gateId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => GateFromJSON(jsonValue));
        });
    }
    /**
     * Gets a gate
     */
    getGate(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getGateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Updates a gate
     */
    updateGateRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.gateId === null || requestParameters.gateId === undefined) {
                throw new RequiredError('gateId', 'Required parameter requestParameters.gateId was null or undefined when calling updateGate.');
            }
            if (requestParameters.gateUpdateRequest === null || requestParameters.gateUpdateRequest === undefined) {
                throw new RequiredError('gateUpdateRequest', 'Required parameter requestParameters.gateUpdateRequest was null or undefined when calling updateGate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/gates/{gateId}`.replace(`{${"gateId"}}`, encodeURIComponent(String(requestParameters.gateId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: GateUpdateRequestToJSON(requestParameters.gateUpdateRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => GateFromJSON(jsonValue));
        });
    }
    /**
     * Updates a gate
     */
    updateGate(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateGateRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { GatesApi };
