'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var runtime = require('../runtime.cjs');
require('../models/AccessOutcomeEnum.cjs');
var Allowlist = require('../models/Allowlist.cjs');
var AllowlistEntriesResponse = require('../models/AllowlistEntriesResponse.cjs');
var AllowlistEntry = require('../models/AllowlistEntry.cjs');
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
require('../models/GateRuleType.cjs');
require('../models/HealthcheckStatus.cjs');
require('../models/InviteStatusEnum.cjs');
require('../models/NextViewEnum.cjs');
require('../models/OauthResultStatus.cjs');
require('../models/WhenToImplementEnum.cjs');
var PostAllowlistEntriesRequest = require('../models/PostAllowlistEntriesRequest.cjs');
var PostAllowlistsRequest = require('../models/PostAllowlistsRequest.cjs');
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
class AllowlistsApi extends runtime.BaseAPI {
    /**
     * Create new allowlist for a environment
     */
    createAllowlistByEnvironmentIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createAllowlistByEnvironmentId.');
            }
            if (requestParameters.postAllowlistsRequest === null || requestParameters.postAllowlistsRequest === undefined) {
                throw new runtime.RequiredError('postAllowlistsRequest', 'Required parameter requestParameters.postAllowlistsRequest was null or undefined when calling createAllowlistByEnvironmentId.');
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
                body: PostAllowlistsRequest.PostAllowlistsRequestToJSON(requestParameters.postAllowlistsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Allowlist.AllowlistFromJSON(jsonValue));
        });
    }
    /**
     * Create new allowlist for a environment
     */
    createAllowlistByEnvironmentId(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.createAllowlistByEnvironmentIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete an allowlist
     */
    deleteAllowlistByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new runtime.RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling deleteAllowlistById.');
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
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete an allowlist
     */
    deleteAllowlistById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteAllowlistByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Delete an allowlist entry
     */
    deleteAllowlistEntryByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistEntryId === null || requestParameters.allowlistEntryId === undefined) {
                throw new runtime.RequiredError('allowlistEntryId', 'Required parameter requestParameters.allowlistEntryId was null or undefined when calling deleteAllowlistEntryById.');
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
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete an allowlist entry
     */
    deleteAllowlistEntryById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteAllowlistEntryByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Disable the allow list
     */
    disableAllowlistByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new runtime.RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling disableAllowlistById.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => Allowlist.AllowlistFromJSON(jsonValue));
        });
    }
    /**
     * Disable the allow list
     */
    disableAllowlistById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.disableAllowlistByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Enable the allowlist
     */
    enableAllowlistByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new runtime.RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling enableAllowlistById.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => Allowlist.AllowlistFromJSON(jsonValue));
        });
    }
    /**
     * Enable the allowlist
     */
    enableAllowlistById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.enableAllowlistByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all allowlists for a environment
     */
    getAllowlistsByEnvironmentIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getAllowlistsByEnvironmentId.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(Allowlist.AllowlistFromJSON));
        });
    }
    /**
     * Get all allowlists for a environment
     */
    getAllowlistsByEnvironmentId(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAllowlistsByEnvironmentIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get allowlist by id
     */
    getAllowlistsByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new runtime.RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling getAllowlistsById.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => Allowlist.AllowlistFromJSON(jsonValue));
        });
    }
    /**
     * Get allowlist by id
     */
    getAllowlistsById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAllowlistsByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all entries for an allowlist
     */
    getEntriesByAllowlistIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new runtime.RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling getEntriesByAllowlistId.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => AllowlistEntriesResponse.AllowlistEntriesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get all entries for an allowlist
     */
    getEntriesByAllowlistId(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEntriesByAllowlistIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Create a new entry for an allowlist
     */
    postEntryByAllowlistIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new runtime.RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling postEntryByAllowlistId.');
            }
            if (requestParameters.postAllowlistEntriesRequest === null || requestParameters.postAllowlistEntriesRequest === undefined) {
                throw new runtime.RequiredError('postAllowlistEntriesRequest', 'Required parameter requestParameters.postAllowlistEntriesRequest was null or undefined when calling postEntryByAllowlistId.');
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
                body: PostAllowlistEntriesRequest.PostAllowlistEntriesRequestToJSON(requestParameters.postAllowlistEntriesRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => AllowlistEntry.AllowlistEntryFromJSON(jsonValue));
        });
    }
    /**
     * Create a new entry for an allowlist
     */
    postEntryByAllowlistId(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.postEntryByAllowlistIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update the outcome, scope, or name of an allowlist entry by ID
     */
    updateAllowlistByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.allowlistId === null || requestParameters.allowlistId === undefined) {
                throw new runtime.RequiredError('allowlistId', 'Required parameter requestParameters.allowlistId was null or undefined when calling updateAllowlistById.');
            }
            if (requestParameters.postAllowlistsRequest === null || requestParameters.postAllowlistsRequest === undefined) {
                throw new runtime.RequiredError('postAllowlistsRequest', 'Required parameter requestParameters.postAllowlistsRequest was null or undefined when calling updateAllowlistById.');
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
                body: PostAllowlistsRequest.PostAllowlistsRequestToJSON(requestParameters.postAllowlistsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Allowlist.AllowlistFromJSON(jsonValue));
        });
    }
    /**
     * Update the outcome, scope, or name of an allowlist entry by ID
     */
    updateAllowlistById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateAllowlistByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.AllowlistsApi = AllowlistsApi;
