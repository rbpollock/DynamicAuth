'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var runtime = require('../runtime.cjs');
require('../models/AccessOutcomeEnum.cjs');
var AnalyticsVisitResponse = require('../models/AnalyticsVisitResponse.cjs');
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

/* tslint:disable */
/**
 *
 */
class AnalyticsApi extends runtime.BaseAPI {
    /**
     */
    getVisitAnalyticsRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getVisitAnalytics.');
            }
            const queryParameters = {};
            if (requestParameters.startDate !== undefined) {
                queryParameters['startDate'] = requestParameters.startDate;
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['endDate'] = requestParameters.endDate;
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
                path: `/environments/{environmentId}/analytics/visits`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => AnalyticsVisitResponse.AnalyticsVisitResponseFromJSON(jsonValue));
        });
    }
    /**
     */
    getVisitAnalytics(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getVisitAnalyticsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Fetch visit analytics
     */
    getWalletsBreakdownRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getWalletsBreakdown.');
            }
            const queryParameters = {};
            if (requestParameters.startDate !== undefined) {
                queryParameters['startDate'] = requestParameters.startDate;
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['endDate'] = requestParameters.endDate;
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
                path: `/environments/{environmentId}/analytics/wallets`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Fetch visit analytics
     */
    getWalletsBreakdown(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWalletsBreakdownRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.AnalyticsApi = AnalyticsApi;
