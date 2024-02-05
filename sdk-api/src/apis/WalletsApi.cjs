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
var CreateUserEmbeddedWalletsRequest = require('../models/CreateUserEmbeddedWalletsRequest.cjs');
var CreateWalletRequest = require('../models/CreateWalletRequest.cjs');
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
var Wallet = require('../models/Wallet.cjs');
require('../models/WhenToImplementEnum.cjs');
require('../models/PublishEventsEvents.cjs');
require('../models/RoleEnum.cjs');
require('../models/SubscriptionAdvancedScopeEnum.cjs');
require('../models/SubscriptionFreeScopeEnum.cjs');
require('../models/UnprocessableEntityErrorCode.cjs');
require('../models/UserIdentifierTypeEnum.cjs');
var UserResponse = require('../models/UserResponse.cjs');
var UserWalletsResponse = require('../models/UserWalletsResponse.cjs');
require('../models/VisitorFilterableFieldsEnum.cjs');

/* tslint:disable */
/**
 *
 */
class WalletsApi extends runtime.BaseAPI {
    /**
     * Creates a new embedded wallet for a user given an email or userId. If an email is provided and it is not associated with an existing user this call will also create a new user.
     * Creates a new embedded wallet for a user given an identifier
     */
    createEmbeddedWalletRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createEmbeddedWallet.');
            }
            if (requestParameters.createUserEmbeddedWalletsRequest === null || requestParameters.createUserEmbeddedWalletsRequest === undefined) {
                throw new runtime.RequiredError('createUserEmbeddedWalletsRequest', 'Required parameter requestParameters.createUserEmbeddedWalletsRequest was null or undefined when calling createEmbeddedWallet.');
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
                path: `/environments/{environmentId}/embeddedWallets`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateUserEmbeddedWalletsRequest.CreateUserEmbeddedWalletsRequestToJSON(requestParameters.createUserEmbeddedWalletsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UserResponse.UserResponseFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new embedded wallet for a user given an email or userId. If an email is provided and it is not associated with an existing user this call will also create a new user.
     * Creates a new embedded wallet for a user given an identifier
     */
    createEmbeddedWallet(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.createEmbeddedWalletRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates a new wallet for the user
     */
    createWalletRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling createWallet.');
            }
            if (requestParameters.createWalletRequest === null || requestParameters.createWalletRequest === undefined) {
                throw new runtime.RequiredError('createWalletRequest', 'Required parameter requestParameters.createWalletRequest was null or undefined when calling createWallet.');
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
                path: `/users/{userId}/wallets`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateWalletRequest.CreateWalletRequestToJSON(requestParameters.createWalletRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Wallet.WalletFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new wallet for the user
     */
    createWallet(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.createWalletRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete wallet
     */
    deleteWalletByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
                throw new runtime.RequiredError('walletId', 'Required parameter requestParameters.walletId was null or undefined when calling deleteWalletById.');
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
                path: `/wallets/{walletId}`.replace(`{${"walletId"}}`, encodeURIComponent(String(requestParameters.walletId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete wallet
     */
    deleteWalletById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteWalletByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get a wallet using the ID
     */
    getWalletByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
                throw new runtime.RequiredError('walletId', 'Required parameter requestParameters.walletId was null or undefined when calling getWalletById.');
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
                path: `/wallets/{walletId}`.replace(`{${"walletId"}}`, encodeURIComponent(String(requestParameters.walletId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Wallet.WalletFromJSON(jsonValue));
        });
    }
    /**
     * Get a wallet using the ID
     */
    getWalletById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWalletByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get wallets by user
     */
    getWalletsByUserIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling getWalletsByUserId.');
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
                path: `/users/{userId}/wallets`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UserWalletsResponse.UserWalletsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get wallets by user
     */
    getWalletsByUserId(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWalletsByUserIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.WalletsApi = WalletsApi;
