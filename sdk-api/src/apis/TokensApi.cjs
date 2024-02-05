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
var CreateTokenResponse = require('../models/CreateTokenResponse.cjs');
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
var PostTokenFields = require('../models/PostTokenFields.cjs');
require('../models/PublishEventsEvents.cjs');
require('../models/RoleEnum.cjs');
require('../models/SubscriptionAdvancedScopeEnum.cjs');
require('../models/SubscriptionFreeScopeEnum.cjs');
var TokensResponse = require('../models/TokensResponse.cjs');
require('../models/UnprocessableEntityErrorCode.cjs');
require('../models/VisitorFilterableFieldsEnum.cjs');

/* tslint:disable */
/**
 *
 */
class TokensApi extends runtime.BaseAPI {
    /**
     * Delete a token by token id
     */
    deleteTokenByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.tokenId === null || requestParameters.tokenId === undefined) {
                throw new runtime.RequiredError('tokenId', 'Required parameter requestParameters.tokenId was null or undefined when calling deleteTokenById.');
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
                path: `/tokens/{tokenId}`.replace(`{${"tokenId"}}`, encodeURIComponent(String(requestParameters.tokenId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete a token by token id
     */
    deleteTokenById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteTokenByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get all the tokens for a project environment (does not include the raw token)
     */
    getTokensRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getTokens.');
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
                path: `/environments/{environmentId}/tokens`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => TokensResponse.TokensResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get all the tokens for a project environment (does not include the raw token)
     */
    getTokens(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTokensRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Create a new API Token
     */
    postTokenRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling postToken.');
            }
            if (requestParameters.postTokenFields === null || requestParameters.postTokenFields === undefined) {
                throw new runtime.RequiredError('postTokenFields', 'Required parameter requestParameters.postTokenFields was null or undefined when calling postToken.');
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
                path: `/environments/{environmentId}/tokens`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: PostTokenFields.PostTokenFieldsToJSON(requestParameters.postTokenFields),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateTokenResponse.CreateTokenResponseFromJSON(jsonValue));
        });
    }
    /**
     * Create a new API Token
     */
    postToken(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.postTokenRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.TokensApi = TokensApi;
