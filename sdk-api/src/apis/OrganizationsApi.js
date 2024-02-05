import { __awaiter } from '../../_virtual/_tslib.js';
import { BaseAPI, RequiredError, JSONApiResponse, VoidApiResponse } from '../runtime.js';
import '../models/AccessOutcomeEnum.js';
import '../models/AuthModeEnum.js';
import '../models/AuthenticatorTransportProtocol.js';
import { BillingSubscriptionFromJSON } from '../models/BillingSubscription.js';
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
import '../models/GateRuleType.js';
import '../models/HealthcheckStatus.js';
import '../models/InviteStatusEnum.js';
import '../models/NextViewEnum.js';
import '../models/OauthResultStatus.js';
import { OrganizationFromJSON } from '../models/Organization.js';
import { OrganizationFieldsToJSON } from '../models/OrganizationFields.js';
import { OrganizationRequestToJSON } from '../models/OrganizationRequest.js';
import { OrganizationResponseFromJSON } from '../models/OrganizationResponse.js';
import { OrganizationsResponseFromJSON } from '../models/OrganizationsResponse.js';
import '../models/PublishEventsEvents.js';
import '../models/RoleEnum.js';
import '../models/SubscriptionAdvancedScopeEnum.js';
import '../models/SubscriptionFreeScopeEnum.js';
import '../models/UnprocessableEntityErrorCode.js';
import '../models/VisitorFilterableFieldsEnum.js';
import '../models/WhenToImplementEnum.js';

/* tslint:disable */
/**
 *
 */
class OrganizationsApi extends BaseAPI {
    /**
     * Creates organization
     */
    createOrganizationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationRequest === null || requestParameters.organizationRequest === undefined) {
                throw new RequiredError('organizationRequest', 'Required parameter requestParameters.organizationRequest was null or undefined when calling createOrganization.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/organizations`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: OrganizationRequestToJSON(requestParameters.organizationRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => OrganizationResponseFromJSON(jsonValue));
        });
    }
    /**
     * Creates organization
     */
    createOrganization(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createOrganizationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Deletes an organization by ID
     */
    deleteOrganizationByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling deleteOrganizationById.');
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
                path: `/organizations/{organizationId}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Deletes an organization by ID
     */
    deleteOrganizationById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteOrganizationByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Find the subscription of an organization using its ID
     */
    getBillingSubscriptionByOrganizationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling getBillingSubscriptionByOrganization.');
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
                path: `/organizations/{organizationId}/billing/subscription`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => BillingSubscriptionFromJSON(jsonValue));
        });
    }
    /**
     * Find the subscription of an organization using its ID
     */
    getBillingSubscriptionByOrganization(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBillingSubscriptionByOrganizationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Find an organization by ID
     */
    getOrganizationByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling getOrganizationById.');
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
                path: `/organizations/{organizationId}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => OrganizationFromJSON(jsonValue));
        });
    }
    /**
     * Find an organization by ID
     */
    getOrganizationById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getOrganizationByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Fetches all the active organizations that the user has access to
     */
    getOrganizationsForMemberRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
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
                path: `/organizations`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => OrganizationsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Fetches all the active organizations that the user has access to
     */
    getOrganizationsForMember(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getOrganizationsForMemberRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update an organization by ID
     */
    updateOrganizationByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling updateOrganizationById.');
            }
            if (requestParameters.organizationFields === null || requestParameters.organizationFields === undefined) {
                throw new RequiredError('organizationFields', 'Required parameter requestParameters.organizationFields was null or undefined when calling updateOrganizationById.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/organizations/{organizationId}`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: OrganizationFieldsToJSON(requestParameters.organizationFields),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => OrganizationResponseFromJSON(jsonValue));
        });
    }
    /**
     * Update an organization by ID
     */
    updateOrganizationById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateOrganizationByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Upgrade organziation to advanced plan
     */
    upgradeSubscriptionForOrganizationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling upgradeSubscriptionForOrganization.');
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
                path: `/organizations/{organizationId}/billing/upgrade`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => BillingSubscriptionFromJSON(jsonValue));
        });
    }
    /**
     * Upgrade organziation to advanced plan
     */
    upgradeSubscriptionForOrganization(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.upgradeSubscriptionForOrganizationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { OrganizationsApi };
