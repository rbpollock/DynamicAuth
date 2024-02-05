import { __awaiter } from '../../_virtual/_tslib.js';
import { BaseAPI, RequiredError, JSONApiResponse, VoidApiResponse } from '../runtime.js';
import '../models/AccessOutcomeEnum.js';
import { AllowlistFromJSON } from '../models/Allowlist.js';
import { AllowlistEntriesResponseFromJSON } from '../models/AllowlistEntriesResponse.js';
import { AllowlistEntryFromJSON } from '../models/AllowlistEntry.js';
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
import '../models/GateRuleType.js';
import '../models/HealthcheckStatus.js';
import '../models/InviteStatusEnum.js';
import '../models/NextViewEnum.js';
import '../models/OauthResultStatus.js';
import '../models/WhenToImplementEnum.js';
import { PostAllowlistEntriesRequestToJSON } from '../models/PostAllowlistEntriesRequest.js';
import { PostAllowlistsRequestToJSON } from '../models/PostAllowlistsRequest.js';
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
class AllowlistsApi extends BaseAPI {
    /**
     * Create new allowlist for a environment
     */
    createAllowlistByEnvironmentIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createAllowlistByEnvironmentId.');
            }
            if (requestParameters.postAllowlistsRequest === null || requestParameters.postAllowlistsRequest === undefined) {
                throw new RequiredError('postAllowlistsRequest', 'Required parameter requestParameters.postAllowlistsRequest was null or undefined when calling createAllowlistByEnvironmentId.');
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
                path: `/environments/{environmentId}/allowlists`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: PostAllowlistsRequestToJSON(requestParameters.postAllowlistsRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => AllowlistFromJSON(jsonValue));
        });
    }
    /**
     * Create new allowlist for a environment
     */
    createAllowlistByEnvironmentId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createAllowlistByEnvironmentIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete an allowlist
     */
    deleteAllowlistByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling deleteAllowlistById.');
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
                path: `/allowlists/{allowlistId}`.replace(`{${"allowlistId"}}`, encodeURIComponent(String(requestParameters.allowlistId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Delete an allowlist
     */
    deleteAllowlistById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteAllowlistByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Delete an allowlist entry
     */
    deleteAllowlistEntryByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistEntryId === null || requestParameters.allowlistEntryId === undefined) {
                throw new RequiredError('allowlistEntryId', 'Required parameter requestParameters.allowlistEntryId was null or undefined when calling deleteAllowlistEntryById.');
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
                path: `/allowlistEntries/{allowlistEntryId}`.replace(`{${"allowlistEntryId"}}`, encodeURIComponent(String(requestParameters.allowlistEntryId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Delete an allowlist entry
     */
    deleteAllowlistEntryById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteAllowlistEntryByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Disable the allow list
     */
    disableAllowlistByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling disableAllowlistById.');
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
                path: `/allowlists/{allowlistId}/disable`.replace(`{${"allowlistId"}}`, encodeURIComponent(String(requestParameters.allowlistId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => AllowlistFromJSON(jsonValue));
        });
    }
    /**
     * Disable the allow list
     */
    disableAllowlistById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.disableAllowlistByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Enable the allowlist
     */
    enableAllowlistByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling enableAllowlistById.');
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
                path: `/allowlists/{allowlistId}/enable`.replace(`{${"allowlistId"}}`, encodeURIComponent(String(requestParameters.allowlistId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => AllowlistFromJSON(jsonValue));
        });
    }
    /**
     * Enable the allowlist
     */
    enableAllowlistById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.enableAllowlistByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all allowlists for a environment
     */
    getAllowlistsByEnvironmentIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getAllowlistsByEnvironmentId.');
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
                path: `/environments/{environmentId}/allowlists`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => jsonValue.map(AllowlistFromJSON));
        });
    }
    /**
     * Get all allowlists for a environment
     */
    getAllowlistsByEnvironmentId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAllowlistsByEnvironmentIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get allowlist by id
     */
    getAllowlistsByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling getAllowlistsById.');
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
                path: `/allowlists/{allowlistId}`.replace(`{${"allowlistId"}}`, encodeURIComponent(String(requestParameters.allowlistId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => AllowlistFromJSON(jsonValue));
        });
    }
    /**
     * Get allowlist by id
     */
    getAllowlistsById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAllowlistsByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all entries for an allowlist
     */
    getEntriesByAllowlistIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling getEntriesByAllowlistId.');
            }
            const queryParameters = {};
            if (requestParameters.orderBy !== undefined) {
                queryParameters['orderBy'] = requestParameters.orderBy;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.query !== undefined) {
                queryParameters['query'] = requestParameters.query;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/allowlists/{allowlistId}/entries`.replace(`{${"allowlistId"}}`, encodeURIComponent(String(requestParameters.allowlistId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => AllowlistEntriesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get all entries for an allowlist
     */
    getEntriesByAllowlistId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEntriesByAllowlistIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Create a new entry for an allowlist
     */
    postEntryByAllowlistIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling postEntryByAllowlistId.');
            }
            if (requestParameters.postAllowlistEntriesRequest === null || requestParameters.postAllowlistEntriesRequest === undefined) {
                throw new RequiredError('postAllowlistEntriesRequest', 'Required parameter requestParameters.postAllowlistEntriesRequest was null or undefined when calling postEntryByAllowlistId.');
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
                path: `/allowlists/{allowlistId}/entries`.replace(`{${"allowlistId"}}`, encodeURIComponent(String(requestParameters.allowlistId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: PostAllowlistEntriesRequestToJSON(requestParameters.postAllowlistEntriesRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => AllowlistEntryFromJSON(jsonValue));
        });
    }
    /**
     * Create a new entry for an allowlist
     */
    postEntryByAllowlistId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postEntryByAllowlistIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update the outcome, scope, or name of an allowlist entry by ID
     */
    updateAllowlistByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling updateAllowlistById.');
            }
            if (requestParameters.postAllowlistsRequest === null || requestParameters.postAllowlistsRequest === undefined) {
                throw new RequiredError('postAllowlistsRequest', 'Required parameter requestParameters.postAllowlistsRequest was null or undefined when calling updateAllowlistById.');
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
                path: `/allowlists/{allowlistId}`.replace(`{${"allowlistId"}}`, encodeURIComponent(String(requestParameters.allowlistId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: PostAllowlistsRequestToJSON(requestParameters.postAllowlistsRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => AllowlistFromJSON(jsonValue));
        });
    }
    /**
     * Update the outcome, scope, or name of an allowlist entry by ID
     */
    updateAllowlistById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateAllowlistByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { AllowlistsApi };
