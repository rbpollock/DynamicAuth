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
import { SdkViewFromJSON } from '../models/SdkView.js';
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
import '../models/SdkViewSectionAlignment.js';
import '../models/SdkViewSectionType.js';
import '../models/SdkViewType.js';
import { SdkViewUpdateRequestToJSON } from '../models/SdkViewUpdateRequest.js';
import { SdkViewsResponseFromJSON } from '../models/SdkViewsResponse.js';
import '../models/SubscriptionAdvancedScopeEnum.js';
import '../models/SubscriptionFreeScopeEnum.js';
import '../models/UnprocessableEntityErrorCode.js';
import '../models/VisitorFilterableFieldsEnum.js';

/* tslint:disable */
/**
 *
 */
class SDKViewsApi extends BaseAPI {
    /**
     * Get a sdk view given a type and environment
     */
    getSdkViewRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getSdkView.');
            }
            if (requestParameters.sdkViewType === null || requestParameters.sdkViewType === undefined) {
                throw new RequiredError('sdkViewType', 'Required parameter requestParameters.sdkViewType was null or undefined when calling getSdkView.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/sdkViews/{sdkViewType}`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"sdkViewType"}}`, encodeURIComponent(String(requestParameters.sdkViewType))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => SdkViewFromJSON(jsonValue));
        });
    }
    /**
     * Get a sdk view given a type and environment
     */
    getSdkView(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSdkViewRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the sdk views for an environment
     */
    getSdkViewsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getSdkViews.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/sdkViews`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => SdkViewsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the sdk views for an environment
     */
    getSdkViews(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSdkViewsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Updates the configs for the sdk view and project environment
     */
    updateSdkViewRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling updateSdkView.');
            }
            if (requestParameters.sdkViewType === null || requestParameters.sdkViewType === undefined) {
                throw new RequiredError('sdkViewType', 'Required parameter requestParameters.sdkViewType was null or undefined when calling updateSdkView.');
            }
            if (requestParameters.sdkViewUpdateRequest === null || requestParameters.sdkViewUpdateRequest === undefined) {
                throw new RequiredError('sdkViewUpdateRequest', 'Required parameter requestParameters.sdkViewUpdateRequest was null or undefined when calling updateSdkView.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/environments/{environmentId}/sdkViews/{sdkViewType}`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"sdkViewType"}}`, encodeURIComponent(String(requestParameters.sdkViewType))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: SdkViewUpdateRequestToJSON(requestParameters.sdkViewUpdateRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => SdkViewFromJSON(jsonValue));
        });
    }
    /**
     * Updates the configs for the sdk view and project environment
     */
    updateSdkView(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateSdkViewRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { SDKViewsApi };
