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
var SdkView = require('../models/SdkView.cjs');
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
require('../models/SdkViewSectionAlignment.cjs');
require('../models/SdkViewSectionType.cjs');
require('../models/SdkViewType.cjs');
var SdkViewUpdateRequest = require('../models/SdkViewUpdateRequest.cjs');
var SdkViewsResponse = require('../models/SdkViewsResponse.cjs');
require('../models/SubscriptionAdvancedScopeEnum.cjs');
require('../models/SubscriptionFreeScopeEnum.cjs');
require('../models/UnprocessableEntityErrorCode.cjs');
require('../models/VisitorFilterableFieldsEnum.cjs');

/* tslint:disable */
/**
 *
 */
class SDKViewsApi extends runtime.BaseAPI {
    /**
     * Get a sdk view given a type and environment
     */
    getSdkViewRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getSdkView.');
            }
            if (requestParameters.sdkViewType === null || requestParameters.sdkViewType === undefined) {
                throw new runtime.RequiredError('sdkViewType', 'Required parameter requestParameters.sdkViewType was null or undefined when calling getSdkView.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/sdkViews/{sdkViewType}`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"sdkViewType"}}`, encodeURIComponent(String(requestParameters.sdkViewType))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => SdkView.SdkViewFromJSON(jsonValue));
        });
    }
    /**
     * Get a sdk view given a type and environment
     */
    getSdkView(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSdkViewRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the sdk views for an environment
     */
    getSdkViewsRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getSdkViews.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/sdkViews`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => SdkViewsResponse.SdkViewsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the sdk views for an environment
     */
    getSdkViews(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSdkViewsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Updates the configs for the sdk view and project environment
     */
    updateSdkViewRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling updateSdkView.');
            }
            if (requestParameters.sdkViewType === null || requestParameters.sdkViewType === undefined) {
                throw new runtime.RequiredError('sdkViewType', 'Required parameter requestParameters.sdkViewType was null or undefined when calling updateSdkView.');
            }
            if (requestParameters.sdkViewUpdateRequest === null || requestParameters.sdkViewUpdateRequest === undefined) {
                throw new runtime.RequiredError('sdkViewUpdateRequest', 'Required parameter requestParameters.sdkViewUpdateRequest was null or undefined when calling updateSdkView.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/environments/{environmentId}/sdkViews/{sdkViewType}`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"sdkViewType"}}`, encodeURIComponent(String(requestParameters.sdkViewType))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: SdkViewUpdateRequest.SdkViewUpdateRequestToJSON(requestParameters.sdkViewUpdateRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => SdkView.SdkViewFromJSON(jsonValue));
        });
    }
    /**
     * Updates the configs for the sdk view and project environment
     */
    updateSdkView(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateSdkViewRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.SDKViewsApi = SDKViewsApi;
