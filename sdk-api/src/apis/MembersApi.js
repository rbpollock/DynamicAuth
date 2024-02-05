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
import '../models/NextViewEnum.js';
import '../models/OauthResultStatus.js';
import { OrganizationMembersResponseFromJSON } from '../models/OrganizationMembersResponse.js';
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
class MembersApi extends BaseAPI {
    /**
     * Delete user membership from being an admin of an organization
     */
    deleteMemberByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.memberId === null || requestParameters.memberId === undefined) {
                throw new RequiredError('memberId', 'Required parameter requestParameters.memberId was null or undefined when calling deleteMemberById.');
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
                path: `/members/{memberId}`.replace(`{${"memberId"}}`, encodeURIComponent(String(requestParameters.memberId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Delete user membership from being an admin of an organization
     */
    deleteMemberById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteMemberByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get all users that are admins for an organization
     */
    getOrganizationMembersRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling getOrganizationMembers.');
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
                path: `/organizations/{organizationId}/members`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => OrganizationMembersResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get all users that are admins for an organization
     */
    getOrganizationMembers(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getOrganizationMembersRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { MembersApi };
