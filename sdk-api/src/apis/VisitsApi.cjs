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
require('../models/NextViewEnum.cjs');
require('../models/OauthResultStatus.cjs');
require('../models/WhenToImplementEnum.cjs');
require('../models/PublishEventsEvents.cjs');
require('../models/RoleEnum.cjs');
require('../models/SubscriptionAdvancedScopeEnum.cjs');
require('../models/SubscriptionFreeScopeEnum.cjs');
require('../models/UnprocessableEntityErrorCode.cjs');
require('../models/VisitorFilterableFieldsEnum.cjs');
var VisitorsResponse = require('../models/VisitorsResponse.cjs');

/* tslint:disable */
/**
 *
 */
class VisitsApi extends runtime.BaseAPI {
    /**
     * Get all visitors for an environment
     */
    getEnvironmentVisitorsRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEnvironmentVisitors.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => VisitorsResponse.VisitorsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get all visitors for an environment
     */
    getEnvironmentVisitors(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEnvironmentVisitorsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.VisitsApi = VisitsApi;
