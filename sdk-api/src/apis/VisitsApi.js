import { __awaiter } from '../../_virtual/_tslib.js';
import { BaseAPI, RequiredError, JSONApiResponse } from '../runtime.js';
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
import '../models/WhenToImplementEnum.js';
import '../models/PublishEventsEvents.js';
import '../models/RoleEnum.js';
import '../models/SubscriptionAdvancedScopeEnum.js';
import '../models/SubscriptionFreeScopeEnum.js';
import '../models/UnprocessableEntityErrorCode.js';
import '../models/VisitorFilterableFieldsEnum.js';
import { VisitorsResponseFromJSON } from '../models/VisitorsResponse.js';

/* tslint:disable */
/**
 *
 */
class VisitsApi extends BaseAPI {
    /**
     * Get all visitors for an environment
     */
    getEnvironmentVisitorsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEnvironmentVisitors.');
            }
            const queryParameters = {};
            if (requestParameters.filter !== undefined) {
                queryParameters['filter'] = requestParameters.filter;
            }
            if (requestParameters.orderBy !== undefined) {
                queryParameters['orderBy'] = requestParameters.orderBy;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
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
                path: `/environments/{environmentId}/visitors`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VisitorsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get all visitors for an environment
     */
    getEnvironmentVisitors(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEnvironmentVisitorsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { VisitsApi };
