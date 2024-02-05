import { __awaiter } from '../../_virtual/_tslib.js';
import { BaseAPI, RequiredError, JSONApiResponse, VoidApiResponse } from '../runtime.js';
import '../models/AccessOutcomeEnum.js';
import '../models/AuthModeEnum.js';
import '../models/AuthenticatorTransportProtocol.js';
import '../models/BillingSubscriptionPlanTypeEnum.js';
import '../models/ChainEnum.js';
import '../models/ChainalysisCheckResultEnum.js';
import '../models/WalletProviderEnum.js';
import '../models/EmbeddedWalletProviderEnum.js';
import { CreateUserEmbeddedWalletsRequestToJSON } from '../models/CreateUserEmbeddedWalletsRequest.js';
import { CreateWalletRequestToJSON } from '../models/CreateWalletRequest.js';
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
import { WalletFromJSON } from '../models/Wallet.js';
import '../models/WhenToImplementEnum.js';
import '../models/PublishEventsEvents.js';
import '../models/RoleEnum.js';
import '../models/SubscriptionAdvancedScopeEnum.js';
import '../models/SubscriptionFreeScopeEnum.js';
import '../models/UnprocessableEntityErrorCode.js';
import '../models/UserIdentifierTypeEnum.js';
import { UserResponseFromJSON } from '../models/UserResponse.js';
import { UserWalletsResponseFromJSON } from '../models/UserWalletsResponse.js';
import '../models/VisitorFilterableFieldsEnum.js';

/* tslint:disable */
/**
 *
 */
class WalletsApi extends BaseAPI {
    /**
     * Creates a new embedded wallet for a user given an email or userId. If an email is provided and it is not associated with an existing user this call will also create a new user.
     * Creates a new embedded wallet for a user given an identifier
     */
    createEmbeddedWalletRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createEmbeddedWallet.');
            }
            if (requestParameters.createUserEmbeddedWalletsRequest === null || requestParameters.createUserEmbeddedWalletsRequest === undefined) {
                throw new RequiredError('createUserEmbeddedWalletsRequest', 'Required parameter requestParameters.createUserEmbeddedWalletsRequest was null or undefined when calling createEmbeddedWallet.');
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
                body: CreateUserEmbeddedWalletsRequestToJSON(requestParameters.createUserEmbeddedWalletsRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new embedded wallet for a user given an email or userId. If an email is provided and it is not associated with an existing user this call will also create a new user.
     * Creates a new embedded wallet for a user given an identifier
     */
    createEmbeddedWallet(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createEmbeddedWalletRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates a new wallet for the user
     */
    createWalletRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling createWallet.');
            }
            if (requestParameters.createWalletRequest === null || requestParameters.createWalletRequest === undefined) {
                throw new RequiredError('createWalletRequest', 'Required parameter requestParameters.createWalletRequest was null or undefined when calling createWallet.');
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
                body: CreateWalletRequestToJSON(requestParameters.createWalletRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => WalletFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new wallet for the user
     */
    createWallet(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createWalletRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete wallet
     */
    deleteWalletByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
                throw new RequiredError('walletId', 'Required parameter requestParameters.walletId was null or undefined when calling deleteWalletById.');
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
            return new VoidApiResponse(response);
        });
    }
    /**
     * Delete wallet
     */
    deleteWalletById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteWalletByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get a wallet using the ID
     */
    getWalletByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
                throw new RequiredError('walletId', 'Required parameter requestParameters.walletId was null or undefined when calling getWalletById.');
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
            return new JSONApiResponse(response, (jsonValue) => WalletFromJSON(jsonValue));
        });
    }
    /**
     * Get a wallet using the ID
     */
    getWalletById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWalletByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get wallets by user
     */
    getWalletsByUserIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling getWalletsByUserId.');
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
            return new JSONApiResponse(response, (jsonValue) => UserWalletsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get wallets by user
     */
    getWalletsByUserId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWalletsByUserIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { WalletsApi };
