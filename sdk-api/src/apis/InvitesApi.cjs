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
require('../models/GateRuleType.cjs');
require('../models/HealthcheckStatus.cjs');
require('../models/InviteStatusEnum.cjs');
var InviteSendRequest = require('../models/InviteSendRequest.cjs');
var InviteUpdateRequest = require('../models/InviteUpdateRequest.cjs');
var InvitesResponse = require('../models/InvitesResponse.cjs');
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
class InvitesApi extends runtime.BaseAPI {
    /**
     * Creates an invite to the organization
     */
    createInviteRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new runtime.RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling createInvite.');
            }
            if (requestParameters.inviteSendRequest === null || requestParameters.inviteSendRequest === undefined) {
                throw new runtime.RequiredError('inviteSendRequest', 'Required parameter requestParameters.inviteSendRequest was null or undefined when calling createInvite.');
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
                path: `/organizations/{organizationId}/invites`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: InviteSendRequest.InviteSendRequestToJSON(requestParameters.inviteSendRequest),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Creates an invite to the organization
     */
    createInvite(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.createInviteRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Delete invite for user
     */
    deleteInviteRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.inviteId === null || requestParameters.inviteId === undefined) {
                throw new runtime.RequiredError('inviteId', 'Required parameter requestParameters.inviteId was null or undefined when calling deleteInvite.');
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
                path: `/invites/{inviteId}`.replace(`{${"inviteId"}}`, encodeURIComponent(String(requestParameters.inviteId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete invite for user
     */
    deleteInvite(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteInviteRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get all the user invites
     */
    getInvitesRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.status === null || requestParameters.status === undefined) {
                throw new runtime.RequiredError('status', 'Required parameter requestParameters.status was null or undefined when calling getInvites.');
            }
            const queryParameters = {};
            if (requestParameters.status !== undefined) {
                queryParameters['status'] = requestParameters.status;
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
                path: `/invites`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => InvitesResponse.InvitesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get all the user invites
     */
    getInvites(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getInvitesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Fetches all the Invites the belong to the organization
     */
    getOrganizationInvitesByOrganizationIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new runtime.RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling getOrganizationInvitesByOrganizationId.');
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
                path: `/organizations/{organizationId}/invites`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => InvitesResponse.InvitesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Fetches all the Invites the belong to the organization
     */
    getOrganizationInvitesByOrganizationId(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getOrganizationInvitesByOrganizationIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update invite for user (accept/reject)
     */
    updateInviteRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.inviteId === null || requestParameters.inviteId === undefined) {
                throw new runtime.RequiredError('inviteId', 'Required parameter requestParameters.inviteId was null or undefined when calling updateInvite.');
            }
            if (requestParameters.inviteUpdateRequest === null || requestParameters.inviteUpdateRequest === undefined) {
                throw new runtime.RequiredError('inviteUpdateRequest', 'Required parameter requestParameters.inviteUpdateRequest was null or undefined when calling updateInvite.');
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
                path: `/invites/{inviteId}`.replace(`{${"inviteId"}}`, encodeURIComponent(String(requestParameters.inviteId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: InviteUpdateRequest.InviteUpdateRequestToJSON(requestParameters.inviteUpdateRequest),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Update invite for user (accept/reject)
     */
    updateInvite(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.updateInviteRaw(requestParameters, initOverrides);
        });
    }
}

exports.InvitesApi = InvitesApi;
