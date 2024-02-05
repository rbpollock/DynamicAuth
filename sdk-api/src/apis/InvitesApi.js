import { __awaiter } from '../../_virtual/_tslib.js';
import { BaseAPI, RequiredError, VoidApiResponse, JSONApiResponse } from '../runtime.js';
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
import '../models/GateRuleType.js';
import '../models/HealthcheckStatus.js';
import '../models/InviteStatusEnum.js';
import { InviteSendRequestToJSON } from '../models/InviteSendRequest.js';
import { InviteUpdateRequestToJSON } from '../models/InviteUpdateRequest.js';
import { InvitesResponseFromJSON } from '../models/InvitesResponse.js';
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
class InvitesApi extends BaseAPI {
    /**
     * Creates an invite to the organization
     */
    createInviteRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling createInvite.');
            }
            if (requestParameters.inviteSendRequest === null || requestParameters.inviteSendRequest === undefined) {
                throw new RequiredError('inviteSendRequest', 'Required parameter requestParameters.inviteSendRequest was null or undefined when calling createInvite.');
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
                body: InviteSendRequestToJSON(requestParameters.inviteSendRequest),
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Creates an invite to the organization
     */
    createInvite(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createInviteRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Delete invite for user
     */
    deleteInviteRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.inviteId === null || requestParameters.inviteId === undefined) {
                throw new RequiredError('inviteId', 'Required parameter requestParameters.inviteId was null or undefined when calling deleteInvite.');
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
            return new VoidApiResponse(response);
        });
    }
    /**
     * Delete invite for user
     */
    deleteInvite(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteInviteRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get all the user invites
     */
    getInvitesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.status === null || requestParameters.status === undefined) {
                throw new RequiredError('status', 'Required parameter requestParameters.status was null or undefined when calling getInvites.');
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
            return new JSONApiResponse(response, (jsonValue) => InvitesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get all the user invites
     */
    getInvites(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getInvitesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Fetches all the Invites the belong to the organization
     */
    getOrganizationInvitesByOrganizationIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling getOrganizationInvitesByOrganizationId.');
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
            return new JSONApiResponse(response, (jsonValue) => InvitesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Fetches all the Invites the belong to the organization
     */
    getOrganizationInvitesByOrganizationId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getOrganizationInvitesByOrganizationIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update invite for user (accept/reject)
     */
    updateInviteRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.inviteId === null || requestParameters.inviteId === undefined) {
                throw new RequiredError('inviteId', 'Required parameter requestParameters.inviteId was null or undefined when calling updateInvite.');
            }
            if (requestParameters.inviteUpdateRequest === null || requestParameters.inviteUpdateRequest === undefined) {
                throw new RequiredError('inviteUpdateRequest', 'Required parameter requestParameters.inviteUpdateRequest was null or undefined when calling updateInvite.');
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
                body: InviteUpdateRequestToJSON(requestParameters.inviteUpdateRequest),
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Update invite for user (accept/reject)
     */
    updateInvite(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateInviteRaw(requestParameters, initOverrides);
        });
    }
}

export { InvitesApi };
