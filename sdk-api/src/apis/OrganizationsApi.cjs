'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var runtime = require('../runtime.cjs');
require('../models/AccessOutcomeEnum.cjs');
require('../models/AuthModeEnum.cjs');
require('../models/AuthenticatorTransportProtocol.cjs');
var BillingSubscription = require('../models/BillingSubscription.cjs');
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
require('../models/GateRuleType.cjs');
require('../models/HealthcheckStatus.cjs');
require('../models/InviteStatusEnum.cjs');
require('../models/NextViewEnum.cjs');
require('../models/OauthResultStatus.cjs');
var Organization = require('../models/Organization.cjs');
var OrganizationFields = require('../models/OrganizationFields.cjs');
var OrganizationRequest = require('../models/OrganizationRequest.cjs');
var OrganizationResponse = require('../models/OrganizationResponse.cjs');
var OrganizationsResponse = require('../models/OrganizationsResponse.cjs');
require('../models/PublishEventsEvents.cjs');
require('../models/RoleEnum.cjs');
require('../models/SubscriptionAdvancedScopeEnum.cjs');
require('../models/SubscriptionFreeScopeEnum.cjs');
require('../models/UnprocessableEntityErrorCode.cjs');
require('../models/VisitorFilterableFieldsEnum.cjs');
require('../models/WhenToImplementEnum.cjs');

/* tslint:disable */
/**
 *
 */
class OrganizationsApi extends runtime.BaseAPI {
    /**
     * Creates organization
     */
    createOrganizationRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationRequest === null || requestParameters.organizationRequest === undefined) {
                throw new runtime.RequiredError('organizationRequest', 'Required parameter requestParameters.organizationRequest was null or undefined when calling createOrganization.');
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
                body: OrganizationRequest.OrganizationRequestToJSON(requestParameters.organizationRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationResponse.OrganizationResponseFromJSON(jsonValue));
        });
    }
    /**
     * Creates organization
     */
    createOrganization(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.createOrganizationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Deletes an organization by ID
     */
    deleteOrganizationByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new runtime.RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling deleteOrganizationById.');
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
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes an organization by ID
     */
    deleteOrganizationById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteOrganizationByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Find the subscription of an organization using its ID
     */
    getBillingSubscriptionByOrganizationRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new runtime.RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling getBillingSubscriptionByOrganization.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => BillingSubscription.BillingSubscriptionFromJSON(jsonValue));
        });
    }
    /**
     * Find the subscription of an organization using its ID
     */
    getBillingSubscriptionByOrganization(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getBillingSubscriptionByOrganizationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Find an organization by ID
     */
    getOrganizationByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new runtime.RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling getOrganizationById.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => Organization.OrganizationFromJSON(jsonValue));
        });
    }
    /**
     * Find an organization by ID
     */
    getOrganizationById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getOrganizationByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Fetches all the active organizations that the user has access to
     */
    getOrganizationsForMemberRaw(initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
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
            return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationsResponse.OrganizationsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Fetches all the active organizations that the user has access to
     */
    getOrganizationsForMember(initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getOrganizationsForMemberRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update an organization by ID
     */
    updateOrganizationByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new runtime.RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling updateOrganizationById.');
            }
            if (requestParameters.organizationFields === null || requestParameters.organizationFields === undefined) {
                throw new runtime.RequiredError('organizationFields', 'Required parameter requestParameters.organizationFields was null or undefined when calling updateOrganizationById.');
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
                body: OrganizationFields.OrganizationFieldsToJSON(requestParameters.organizationFields),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationResponse.OrganizationResponseFromJSON(jsonValue));
        });
    }
    /**
     * Update an organization by ID
     */
    updateOrganizationById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateOrganizationByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Upgrade organziation to advanced plan
     */
    upgradeSubscriptionForOrganizationRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new runtime.RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling upgradeSubscriptionForOrganization.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => BillingSubscription.BillingSubscriptionFromJSON(jsonValue));
        });
    }
    /**
     * Upgrade organziation to advanced plan
     */
    upgradeSubscriptionForOrganization(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.upgradeSubscriptionForOrganizationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.OrganizationsApi = OrganizationsApi;
