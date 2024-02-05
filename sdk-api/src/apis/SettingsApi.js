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
import { ProviderFromJSON } from '../models/Provider.js';
import '../models/UserFilterableFieldsEnum.js';
import '../models/ExportFormatEnum.js';
import '../models/ExportModelEnum.js';
import '../models/ExportStatusEnum.js';
import '../models/GateRuleType.js';
import '../models/HealthcheckStatus.js';
import '../models/InviteStatusEnum.js';
import '../models/NextViewEnum.js';
import '../models/OauthResultStatus.js';
import '../models/WhenToImplementEnum.js';
import { ProviderCreateRequestToJSON } from '../models/ProviderCreateRequest.js';
import { ProviderUpdateRequestToJSON } from '../models/ProviderUpdateRequest.js';
import { ProviderUrlsResponseFromJSON } from '../models/ProviderUrlsResponse.js';
import { ProvidersResponseFromJSON } from '../models/ProvidersResponse.js';
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
class SettingsApi extends BaseAPI {
    /**
     * Creates a new provider for the project environment
     */
    createProviderRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createProvider.');
            }
            if (requestParameters.providerCreateRequest === null || requestParameters.providerCreateRequest === undefined) {
                throw new RequiredError('providerCreateRequest', 'Required parameter requestParameters.providerCreateRequest was null or undefined when calling createProvider.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/environments/{environmentId}/settings/providers`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ProviderCreateRequestToJSON(requestParameters.providerCreateRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ProviderFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new provider for the project environment
     */
    createProvider(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createProviderRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete a provider by providerId
     */
    deleteProviderRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.providerId === null || requestParameters.providerId === undefined) {
                throw new RequiredError('providerId', 'Required parameter requestParameters.providerId was null or undefined when calling deleteProvider.');
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
            return new VoidApiResponse(response);
        });
    }
    /**
     * Delete a provider by providerId
     */
    deleteProvider(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteProviderRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Disable the provider for the environment
     */
    disableProviderRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.providerId === null || requestParameters.providerId === undefined) {
                throw new RequiredError('providerId', 'Required parameter requestParameters.providerId was null or undefined when calling disableProvider.');
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
            return new JSONApiResponse(response, (jsonValue) => ProviderFromJSON(jsonValue));
        });
    }
    /**
     * Disable the provider for the environment
     */
    disableProvider(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.disableProviderRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Enable the provider for the environment
     */
    enableProviderRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.providerId === null || requestParameters.providerId === undefined) {
                throw new RequiredError('providerId', 'Required parameter requestParameters.providerId was null or undefined when calling enableProvider.');
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
            return new JSONApiResponse(response, (jsonValue) => ProviderFromJSON(jsonValue));
        });
    }
    /**
     * Enable the provider for the environment
     */
    enableProvider(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.enableProviderRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the URLs for the environment providers
     */
    getEnvironmentProviderUrlsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEnvironmentProviderUrls.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/settings/providers/urls`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ProviderUrlsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the URLs for the environment providers
     */
    getEnvironmentProviderUrls(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEnvironmentProviderUrlsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the providers for an environment
     */
    getEnvironmentProvidersRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEnvironmentProviders.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/settings/providers`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ProvidersResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the providers for an environment
     */
    getEnvironmentProviders(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEnvironmentProvidersRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets a provider
     */
    getProviderRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.providerId === null || requestParameters.providerId === undefined) {
                throw new RequiredError('providerId', 'Required parameter requestParameters.providerId was null or undefined when calling getProvider.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/settings/providers/{providerId}`.replace(`{${"providerId"}}`, encodeURIComponent(String(requestParameters.providerId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ProviderFromJSON(jsonValue));
        });
    }
    /**
     * Gets a provider
     */
    getProvider(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getProviderRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Updates a provider
     */
    updateProviderRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.providerId === null || requestParameters.providerId === undefined) {
                throw new RequiredError('providerId', 'Required parameter requestParameters.providerId was null or undefined when calling updateProvider.');
            }
            if (requestParameters.providerUpdateRequest === null || requestParameters.providerUpdateRequest === undefined) {
                throw new RequiredError('providerUpdateRequest', 'Required parameter requestParameters.providerUpdateRequest was null or undefined when calling updateProvider.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/settings/providers/{providerId}`.replace(`{${"providerId"}}`, encodeURIComponent(String(requestParameters.providerId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: ProviderUpdateRequestToJSON(requestParameters.providerUpdateRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ProviderFromJSON(jsonValue));
        });
    }
    /**
     * Updates a provider
     */
    updateProvider(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateProviderRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { SettingsApi };
