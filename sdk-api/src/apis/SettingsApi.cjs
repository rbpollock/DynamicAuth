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
var Provider = require('../models/Provider.cjs');
require('../models/UserFilterableFieldsEnum.cjs');
require('../models/ExportFormatEnum.cjs');
require('../models/ExportModelEnum.cjs');
require('../models/ExportStatusEnum.cjs');
require('../models/GateRuleType.cjs');
require('../models/HealthcheckStatus.cjs');
require('../models/InviteStatusEnum.cjs');
require('../models/NextViewEnum.cjs');
require('../models/OauthResultStatus.cjs');
require('../models/WhenToImplementEnum.cjs');
var ProviderCreateRequest = require('../models/ProviderCreateRequest.cjs');
var ProviderUpdateRequest = require('../models/ProviderUpdateRequest.cjs');
var ProviderUrlsResponse = require('../models/ProviderUrlsResponse.cjs');
var ProvidersResponse = require('../models/ProvidersResponse.cjs');
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
class SettingsApi extends runtime.BaseAPI {
    /**
     * Creates a new provider for the project environment
     */
    createProviderRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createProvider.');
            }
            if (requestParameters.providerCreateRequest === null || requestParameters.providerCreateRequest === undefined) {
                throw new runtime.RequiredError('providerCreateRequest', 'Required parameter requestParameters.providerCreateRequest was null or undefined when calling createProvider.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/environments/{environmentId}/settings/providers`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ProviderCreateRequest.ProviderCreateRequestToJSON(requestParameters.providerCreateRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Provider.ProviderFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new provider for the project environment
     */
    createProvider(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.createProviderRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete a provider by providerId
     */
    deleteProviderRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.providerId === null || requestParameters.providerId === undefined) {
                throw new runtime.RequiredError('providerId', 'Required parameter requestParameters.providerId was null or undefined when calling deleteProvider.');
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
                path: `/settings/providers/{providerId}`.replace(`{${"providerId"}}`, encodeURIComponent(String(requestParameters.providerId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete a provider by providerId
     */
    deleteProvider(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteProviderRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Disable the provider for the environment
     */
    disableProviderRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.providerId === null || requestParameters.providerId === undefined) {
                throw new runtime.RequiredError('providerId', 'Required parameter requestParameters.providerId was null or undefined when calling disableProvider.');
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
                path: `/settings/providers/{providerId}/disable`.replace(`{${"providerId"}}`, encodeURIComponent(String(requestParameters.providerId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Provider.ProviderFromJSON(jsonValue));
        });
    }
    /**
     * Disable the provider for the environment
     */
    disableProvider(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.disableProviderRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Enable the provider for the environment
     */
    enableProviderRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.providerId === null || requestParameters.providerId === undefined) {
                throw new runtime.RequiredError('providerId', 'Required parameter requestParameters.providerId was null or undefined when calling enableProvider.');
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
                path: `/settings/providers/{providerId}/enable`.replace(`{${"providerId"}}`, encodeURIComponent(String(requestParameters.providerId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Provider.ProviderFromJSON(jsonValue));
        });
    }
    /**
     * Enable the provider for the environment
     */
    enableProvider(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.enableProviderRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the URLs for the environment providers
     */
    getEnvironmentProviderUrlsRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEnvironmentProviderUrls.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/settings/providers/urls`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ProviderUrlsResponse.ProviderUrlsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the URLs for the environment providers
     */
    getEnvironmentProviderUrls(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEnvironmentProviderUrlsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the providers for an environment
     */
    getEnvironmentProvidersRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEnvironmentProviders.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/settings/providers`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => ProvidersResponse.ProvidersResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the providers for an environment
     */
    getEnvironmentProviders(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEnvironmentProvidersRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets a provider
     */
    getProviderRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.providerId === null || requestParameters.providerId === undefined) {
                throw new runtime.RequiredError('providerId', 'Required parameter requestParameters.providerId was null or undefined when calling getProvider.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/settings/providers/{providerId}`.replace(`{${"providerId"}}`, encodeURIComponent(String(requestParameters.providerId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Provider.ProviderFromJSON(jsonValue));
        });
    }
    /**
     * Gets a provider
     */
    getProvider(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getProviderRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Updates a provider
     */
    updateProviderRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.providerId === null || requestParameters.providerId === undefined) {
                throw new runtime.RequiredError('providerId', 'Required parameter requestParameters.providerId was null or undefined when calling updateProvider.');
            }
            if (requestParameters.providerUpdateRequest === null || requestParameters.providerUpdateRequest === undefined) {
                throw new runtime.RequiredError('providerUpdateRequest', 'Required parameter requestParameters.providerUpdateRequest was null or undefined when calling updateProvider.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/settings/providers/{providerId}`.replace(`{${"providerId"}}`, encodeURIComponent(String(requestParameters.providerId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: ProviderUpdateRequest.ProviderUpdateRequestToJSON(requestParameters.providerUpdateRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Provider.ProviderFromJSON(jsonValue));
        });
    }
    /**
     * Updates a provider
     */
    updateProvider(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateProviderRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.SettingsApi = SettingsApi;
