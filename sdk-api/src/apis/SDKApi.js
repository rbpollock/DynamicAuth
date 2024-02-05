import { __awaiter } from '../../_virtual/_tslib.js';
import { BaseAPI, RequiredError, JSONApiResponse, VoidApiResponse, TextApiResponse, canConsumeForm } from '../runtime.js';
import '../models/AccessOutcomeEnum.js';
import '../models/AuthModeEnum.js';
import '../models/AuthenticatorTransportProtocol.js';
import '../models/BillingSubscriptionPlanTypeEnum.js';
import '../models/ChainEnum.js';
import '../models/ChainalysisCheckResultEnum.js';
import { CompletePasskeyRecoveryRequestToJSON } from '../models/CompletePasskeyRecoveryRequest.js';
import { ConnectRequestToJSON } from '../models/ConnectRequest.js';
import '../models/EmbeddedWalletProviderEnum.js';
import { CreateEmbeddedWalletsRequestToJSON } from '../models/CreateEmbeddedWalletsRequest.js';
import '../models/UserIdentifierTypeEnum.js';
import '../models/WalletProviderEnum.js';
import { CurrencyFromJSON } from '../models/Currency.js';
import '../models/CurrencyType.js';
import '../models/TimeUnitEnum.js';
import '../models/JwtVerifiedCredentialFormatEnum.js';
import '../models/ProviderEnum.js';
import { EmailProviderResponseFromJSON } from '../models/EmailProviderResponse.js';
import { EmailVerificationCreateRequestToJSON } from '../models/EmailVerificationCreateRequest.js';
import { EmailVerificationCreateResponseFromJSON } from '../models/EmailVerificationCreateResponse.js';
import { EmailVerificationRetryRequestToJSON } from '../models/EmailVerificationRetryRequest.js';
import { EmailVerificationVerifyRequestToJSON } from '../models/EmailVerificationVerifyRequest.js';
import '../models/EmbeddedWalletSecurityMethod.js';
import '../models/EnvironmentEnum.js';
import { ProjectSettingsFromJSON } from '../models/ProjectSettings.js';
import '../models/UserFilterableFieldsEnum.js';
import '../models/ExportFormatEnum.js';
import '../models/ExportModelEnum.js';
import '../models/ExportStatusEnum.js';
import { ExportEmbeddedWalletResponseFromJSON } from '../models/ExportEmbeddedWalletResponse.js';
import '../models/GateRuleType.js';
import { GetUserPasskeysResponseFromJSON } from '../models/GetUserPasskeysResponse.js';
import { HealthcheckResponseFromJSON } from '../models/HealthcheckResponse.js';
import '../models/HealthcheckStatus.js';
import { InitEmailAuthRequestToJSON } from '../models/InitEmailAuthRequest.js';
import { InitEmailAuthResponseFromJSON } from '../models/InitEmailAuthResponse.js';
import { InitPasskeyRecoveryRequestToJSON } from '../models/InitPasskeyRecoveryRequest.js';
import { InitPasskeyRecoveryResponseFromJSON } from '../models/InitPasskeyRecoveryResponse.js';
import '../models/InviteStatusEnum.js';
import { JwksResponseFromJSON } from '../models/JwksResponse.js';
import { NetworkConfigurationResponseFromJSON } from '../models/NetworkConfigurationResponse.js';
import '../models/NextViewEnum.js';
import { NonceResponseFromJSON } from '../models/NonceResponse.js';
import { OauthProviderLoginUrlFromJSON } from '../models/OauthProviderLoginUrl.js';
import { OauthRequestToJSON } from '../models/OauthRequest.js';
import { OauthResultRequestToJSON } from '../models/OauthResultRequest.js';
import { OauthResultResponseFromJSON } from '../models/OauthResultResponse.js';
import '../models/OauthResultStatus.js';
import '../models/WhenToImplementEnum.js';
import { PrefetchRequestToJSON } from '../models/PrefetchRequest.js';
import '../models/SignInProviderEnum.js';
import '../models/SocialSignInProviderEnum.js';
import '../models/SdkViewSectionAlignment.js';
import '../models/SdkViewSectionType.js';
import '../models/SdkViewType.js';
import { PublishEventsToJSON } from '../models/PublishEvents.js';
import '../models/PublishEventsEvents.js';
import '../models/RoleEnum.js';
import { SdkSettingsRequestToJSON } from '../models/SdkSettingsRequest.js';
import '../models/SubscriptionAdvancedScopeEnum.js';
import '../models/SubscriptionFreeScopeEnum.js';
import { SupportedOnrampsResponseFromJSON } from '../models/SupportedOnrampsResponse.js';
import '../models/UnprocessableEntityErrorCode.js';
import { UpdateSelfResponseFromJSON } from '../models/UpdateSelfResponse.js';
import { UpdateUserPasskeyRequestToJSON } from '../models/UpdateUserPasskeyRequest.js';
import { UserFieldsToJSON } from '../models/UserFields.js';
import { UserPasskeyFromJSON } from '../models/UserPasskey.js';
import { VerifyRequestToJSON } from '../models/VerifyRequest.js';
import { VerifyResponseFromJSON } from '../models/VerifyResponse.js';
import { VerifyUnlinkRequestToJSON } from '../models/VerifyUnlinkRequest.js';
import '../models/VisitorFilterableFieldsEnum.js';

/* tslint:disable */
/**
 *
 */
class SDKApi extends BaseAPI {
    /**
     * Completes the passkey recovery process for a user\'s passkey embedded wallet
     * Completes the passkey recovery process for a user\'s passkey embedded wallet
     */
    completePasskeyRecoveryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling completePasskeyRecovery.');
            }
            if (requestParameters.completePasskeyRecoveryRequest === null || requestParameters.completePasskeyRecoveryRequest === undefined) {
                throw new RequiredError('completePasskeyRecoveryRequest', 'Required parameter requestParameters.completePasskeyRecoveryRequest was null or undefined when calling completePasskeyRecovery.');
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
                path: `/sdk/{environmentId}/users/embeddedWallets/passkeyRecovery`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: CompletePasskeyRecoveryRequestToJSON(requestParameters.completePasskeyRecoveryRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Completes the passkey recovery process for a user\'s passkey embedded wallet
     * Completes the passkey recovery process for a user\'s passkey embedded wallet
     */
    completePasskeyRecovery(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.completePasskeyRecoveryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Initialize email verification process
     */
    createEmailVerificationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createEmailVerification.');
            }
            if (requestParameters.emailVerificationCreateRequest === null || requestParameters.emailVerificationCreateRequest === undefined) {
                throw new RequiredError('emailVerificationCreateRequest', 'Required parameter requestParameters.emailVerificationCreateRequest was null or undefined when calling createEmailVerification.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/sdk/{environmentId}/emailVerifications/create`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: EmailVerificationCreateRequestToJSON(requestParameters.emailVerificationCreateRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => EmailVerificationCreateResponseFromJSON(jsonValue));
        });
    }
    /**
     * Initialize email verification process
     */
    createEmailVerification(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createEmailVerificationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    createEmailVerificationOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createEmailVerificationOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/emailVerifications/create`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    createEmailVerificationOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createEmailVerificationOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Create one or more embedded wallets for a user
     * Create one or more new embedded wallets for a user
     */
    createEmbeddedWalletsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createEmbeddedWallets.');
            }
            if (requestParameters.createEmbeddedWalletsRequest === null || requestParameters.createEmbeddedWalletsRequest === undefined) {
                throw new RequiredError('createEmbeddedWalletsRequest', 'Required parameter requestParameters.createEmbeddedWalletsRequest was null or undefined when calling createEmbeddedWallets.');
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
                path: `/sdk/{environmentId}/users/embeddedWallets`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateEmbeddedWalletsRequestToJSON(requestParameters.createEmbeddedWalletsRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Create one or more embedded wallets for a user
     * Create one or more new embedded wallets for a user
     */
    createEmbeddedWallets(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createEmbeddedWalletsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    createEmbeddedWalletsOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createEmbeddedWalletsOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/users/embeddedWallets`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    createEmbeddedWalletsOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createEmbeddedWalletsOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Endpoint to send minimal wallet information for a connect-only or connect-first visitor.
     * Create a visit
     */
    createVisitRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createVisit.');
            }
            if (requestParameters.connectRequest === null || requestParameters.connectRequest === undefined) {
                throw new RequiredError('connectRequest', 'Required parameter requestParameters.connectRequest was null or undefined when calling createVisit.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/sdk/{environmentId}/connect`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ConnectRequestToJSON(requestParameters.connectRequest),
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Endpoint to send minimal wallet information for a connect-only or connect-first visitor.
     * Create a visit
     */
    createVisit(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createVisitRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    emailAuthOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling emailAuthOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/users/embeddedWallets/emailAuth`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    emailAuthOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.emailAuthOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    emailProviderOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling emailProviderOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/emailProvider`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    emailProviderOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.emailProviderOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Requests an export of an embedded wallet
     * Requests an export of an embedded wallet
     */
    embeddedWalletExportRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling embeddedWalletExport.');
            }
            if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
                throw new RequiredError('walletId', 'Required parameter requestParameters.walletId was null or undefined when calling embeddedWalletExport.');
            }
            if (requestParameters.activityId === null || requestParameters.activityId === undefined) {
                throw new RequiredError('activityId', 'Required parameter requestParameters.activityId was null or undefined when calling embeddedWalletExport.');
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
                path: `/sdk/{environmentId}/users/embeddedWallets/{walletId}/activities/{activityId}/export`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"walletId"}}`, encodeURIComponent(String(requestParameters.walletId))).replace(`{${"activityId"}}`, encodeURIComponent(String(requestParameters.activityId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ExportEmbeddedWalletResponseFromJSON(jsonValue));
        });
    }
    /**
     * Requests an export of an embedded wallet
     * Requests an export of an embedded wallet
     */
    embeddedWalletExport(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.embeddedWalletExportRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    embeddedWalletExportOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling embeddedWalletExportOptions.');
            }
            if (requestParameters.walletId === null || requestParameters.walletId === undefined) {
                throw new RequiredError('walletId', 'Required parameter requestParameters.walletId was null or undefined when calling embeddedWalletExportOptions.');
            }
            if (requestParameters.activityId === null || requestParameters.activityId === undefined) {
                throw new RequiredError('activityId', 'Required parameter requestParameters.activityId was null or undefined when calling embeddedWalletExportOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/users/embeddedWallets/{walletId}/activities/{activityId}/export`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"walletId"}}`, encodeURIComponent(String(requestParameters.walletId))).replace(`{${"activityId"}}`, encodeURIComponent(String(requestParameters.activityId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    embeddedWalletExportOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.embeddedWalletExportOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    eventsOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling eventsOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/events`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     */
    eventsOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.eventsOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Return the email provider to be used for signing in with a given email. If an external provider such as magicLink is disabled, this endpoint would return emailOnly. If an external provider such as magicLink is enabled, it will return emailOnly when the email already exists in Dynamic and it is associated with a wallet, otherwise it will return magicLink.
     * Get signin email provider
     */
    getEmailProviderRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEmailProvider.');
            }
            if (requestParameters.email === null || requestParameters.email === undefined) {
                throw new RequiredError('email', 'Required parameter requestParameters.email was null or undefined when calling getEmailProvider.');
            }
            const queryParameters = {};
            if (requestParameters.email !== undefined) {
                queryParameters['email'] = requestParameters.email;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/emailProvider`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => EmailProviderResponseFromJSON(jsonValue));
        });
    }
    /**
     * Return the email provider to be used for signing in with a given email. If an external provider such as magicLink is disabled, this endpoint would return emailOnly. If an external provider such as magicLink is enabled, it will return emailOnly when the email already exists in Dynamic and it is associated with a wallet, otherwise it will return magicLink.
     * Get signin email provider
     */
    getEmailProvider(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEmailProviderRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the environment\'s settings
     */
    getEnvironmentSettingsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEnvironmentSettings.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/settings`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ProjectSettingsFromJSON(jsonValue));
        });
    }
    /**
     * Get the environment\'s settings
     */
    getEnvironmentSettings(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEnvironmentSettingsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Exchange rates for the given currency
     */
    getExchangeRatesRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/exchangeRates`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => jsonValue.map(CurrencyFromJSON));
        });
    }
    /**
     * Exchange rates for the given currency
     */
    getExchangeRates(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getExchangeRatesRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    getExchangeRatesOptionsRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/exchangeRates`,
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    getExchangeRatesOptions(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getExchangeRatesOptionsRaw(initOverrides);
        });
    }
    /**
     * Health check endpoint to check for uptime of API.
     */
    getHealthcheckRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getHealthcheck.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/healthcheck`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => HealthcheckResponseFromJSON(jsonValue));
        });
    }
    /**
     * Health check endpoint to check for uptime of API.
     */
    getHealthcheck(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getHealthcheckRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    getHealthcheckOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getHealthcheckOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/healthcheck`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    getHealthcheckOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getHealthcheckOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Find jwks for public key
     */
    getJwksByEnvironmentIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getJwksByEnvironmentId.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/.well-known/jwks`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => JwksResponseFromJSON(jsonValue));
        });
    }
    /**
     * Find jwks for public key
     */
    getJwksByEnvironmentId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getJwksByEnvironmentIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Find the configuration for the enabled networks associated to an environment
     */
    getNetworksConfigurationByEnvIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getNetworksConfigurationByEnvId.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/networks`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => jsonValue.map(NetworkConfigurationResponseFromJSON));
        });
    }
    /**
     * Find the configuration for the enabled networks associated to an environment
     */
    getNetworksConfigurationByEnvId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNetworksConfigurationByEnvIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Create nonce for authentication flow
     */
    getNonceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getNonce.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/nonce`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => NonceResponseFromJSON(jsonValue));
        });
    }
    /**
     * Create nonce for authentication flow
     */
    getNonce(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNonceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Find the configuration for the enabled onramps associated to an environment
     * Configuration for enabled onramps
     */
    getSupportedOnrampsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getSupportedOnramps.');
            }
            if (requestParameters.walletAddress === null || requestParameters.walletAddress === undefined) {
                throw new RequiredError('walletAddress', 'Required parameter requestParameters.walletAddress was null or undefined when calling getSupportedOnramps.');
            }
            if (requestParameters.chain === null || requestParameters.chain === undefined) {
                throw new RequiredError('chain', 'Required parameter requestParameters.chain was null or undefined when calling getSupportedOnramps.');
            }
            const queryParameters = {};
            if (requestParameters.walletAddress !== undefined) {
                queryParameters['walletAddress'] = requestParameters.walletAddress;
            }
            if (requestParameters.chain !== undefined) {
                queryParameters['chain'] = requestParameters.chain;
            }
            if (requestParameters.networkId !== undefined) {
                queryParameters['networkId'] = requestParameters.networkId;
            }
            if (requestParameters.token !== undefined) {
                queryParameters['token'] = requestParameters.token;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/onramps`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => SupportedOnrampsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Find the configuration for the enabled onramps associated to an environment
     * Configuration for enabled onramps
     */
    getSupportedOnramps(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getSupportedOnrampsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets passkey data associated with a user
     */
    getUserPasskeysRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getUserPasskeys.');
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
                path: `/sdk/{environmentId}/users/passkeys`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => GetUserPasskeysResponseFromJSON(jsonValue));
        });
    }
    /**
     * Gets passkey data associated with a user
     */
    getUserPasskeys(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getUserPasskeysRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Initialize the email authentication process for a user\'s embedded wallet
     * Initialize the email authentication process for a user\'s embedded wallet
     */
    initEmailAuthRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling initEmailAuth.');
            }
            if (requestParameters.initEmailAuthRequest === null || requestParameters.initEmailAuthRequest === undefined) {
                throw new RequiredError('initEmailAuthRequest', 'Required parameter requestParameters.initEmailAuthRequest was null or undefined when calling initEmailAuth.');
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
                path: `/sdk/{environmentId}/users/embeddedWallets/emailAuth`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: InitEmailAuthRequestToJSON(requestParameters.initEmailAuthRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => InitEmailAuthResponseFromJSON(jsonValue));
        });
    }
    /**
     * Initialize the email authentication process for a user\'s embedded wallet
     * Initialize the email authentication process for a user\'s embedded wallet
     */
    initEmailAuth(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.initEmailAuthRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Initialize the passkey recovery process for a user\'s passkey embedded wallet
     * Initialize the passkey recovery process for a user\'s passkey embedded wallet
     */
    initPasskeyRecoveryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling initPasskeyRecovery.');
            }
            if (requestParameters.initPasskeyRecoveryRequest === null || requestParameters.initPasskeyRecoveryRequest === undefined) {
                throw new RequiredError('initPasskeyRecoveryRequest', 'Required parameter requestParameters.initPasskeyRecoveryRequest was null or undefined when calling initPasskeyRecovery.');
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
                path: `/sdk/{environmentId}/users/embeddedWallets/passkeyRecovery`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: InitPasskeyRecoveryRequestToJSON(requestParameters.initPasskeyRecoveryRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => InitPasskeyRecoveryResponseFromJSON(jsonValue));
        });
    }
    /**
     * Initialize the passkey recovery process for a user\'s passkey embedded wallet
     * Initialize the passkey recovery process for a user\'s passkey embedded wallet
     */
    initPasskeyRecovery(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.initPasskeyRecoveryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    jwksOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling jwksOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/.well-known/jwks`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    jwksOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.jwksOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Update SDK settings for a specific environment
     */
    logDynamicSdkSettingsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling logDynamicSdkSettings.');
            }
            if (requestParameters.sdkSettingsRequest === null || requestParameters.sdkSettingsRequest === undefined) {
                throw new RequiredError('sdkSettingsRequest', 'Required parameter requestParameters.sdkSettingsRequest was null or undefined when calling logDynamicSdkSettings.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/sdk/{environmentId}/sdkSettings`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SdkSettingsRequestToJSON(requestParameters.sdkSettingsRequest),
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Update SDK settings for a specific environment
     */
    logDynamicSdkSettings(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.logDynamicSdkSettingsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Used to merge two owned accounts connected by email address
     * After successful verification allow to merge two owned accounts
     */
    mergeUsersRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling mergeUsers.');
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
                path: `/sdk/{environmentId}/users/merge`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Used to merge two owned accounts connected by email address
     * After successful verification allow to merge two owned accounts
     */
    mergeUsers(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.mergeUsersRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    mergeUsersOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling mergeUsersOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/users/merge`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    mergeUsersOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.mergeUsersOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    networksOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling networksOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/networks`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    networksOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.networksOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    nonceOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling nonceOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/nonce`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    nonceOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.nonceOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Endpoint where an oauth provider would return authorization HTML used for mobile-friendly login, such as Apple ID with Touch ID on enabled devices.
     * Oauth provider authorization endpoint
     */
    oauthAuthorizeHtmlRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthAuthorizeHtml.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthAuthorizeHtml.');
            }
            const queryParameters = {};
            if (requestParameters.scope !== undefined) {
                queryParameters['scope'] = requestParameters.scope;
            }
            if (requestParameters.state !== undefined) {
                queryParameters['state'] = requestParameters.state;
            }
            if (requestParameters.redirectUri !== undefined) {
                queryParameters['redirect_uri'] = requestParameters.redirectUri;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/authorizeHtml`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new TextApiResponse(response);
        });
    }
    /**
     * Endpoint where an oauth provider would return authorization HTML used for mobile-friendly login, such as Apple ID with Touch ID on enabled devices.
     * Oauth provider authorization endpoint
     */
    oauthAuthorizeHtml(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.oauthAuthorizeHtmlRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthAuthorizeHtmlOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthAuthorizeHtmlOptions.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthAuthorizeHtmlOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/authorizeHtml`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthAuthorizeHtmlOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oauthAuthorizeHtmlOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get redirect URL for Oauth provider login
     */
    oauthLoginRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthLogin.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthLogin.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/login`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Get redirect URL for Oauth provider login
     */
    oauthLogin(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oauthLoginRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthLoginOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthLoginOptions.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthLoginOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/login`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthLoginOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oauthLoginOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get redirect URL for Oauth provider login. This will return a string that the SDK can manipulate before redirecting the browser to.
     */
    oauthLoginUrlRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthLoginUrl.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthLoginUrl.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/loginUrl`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => OauthProviderLoginUrlFromJSON(jsonValue));
        });
    }
    /**
     * Get redirect URL for Oauth provider login. This will return a string that the SDK can manipulate before redirecting the browser to.
     */
    oauthLoginUrl(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.oauthLoginUrlRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthLoginUrlOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthLoginUrlOptions.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthLoginUrlOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/loginUrl`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthLoginUrlOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oauthLoginUrlOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Endpoint where an oauth provider would redirect after a successful user authorizing the oauth application.
     * Oauth provider redirect endpoint for apple ID
     */
    oauthRedirectRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthRedirect.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthRedirect.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const consumes = [
                { contentType: 'application/x-www-form-urlencoded' },
            ];
            // @ts-ignore: canConsumeForm may be unused
            canConsumeForm(consumes);
            let formParams;
            {
                formParams = new URLSearchParams();
            }
            if (requestParameters.code !== undefined) {
                formParams.append('code', requestParameters.code);
            }
            if (requestParameters.state !== undefined) {
                formParams.append('state', requestParameters.state);
            }
            if (requestParameters.idToken !== undefined) {
                formParams.append('id_token', requestParameters.idToken);
            }
            if (requestParameters.error !== undefined) {
                formParams.append('error', requestParameters.error);
            }
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/redirect`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            }, initOverrides);
            return new TextApiResponse(response);
        });
    }
    /**
     * Endpoint where an oauth provider would redirect after a successful user authorizing the oauth application.
     * Oauth provider redirect endpoint for apple ID
     */
    oauthRedirect(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.oauthRedirectRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Endpoint where an oauth provider would redirect after a successful user authorizing the oauth application.
     * Oauth provider redirect endpoint
     */
    oauthRedirectCodeRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthRedirectCode.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthRedirectCode.');
            }
            const queryParameters = {};
            if (requestParameters.code !== undefined) {
                queryParameters['code'] = requestParameters.code;
            }
            if (requestParameters.scope !== undefined) {
                queryParameters['scope'] = requestParameters.scope;
            }
            if (requestParameters.state !== undefined) {
                queryParameters['state'] = requestParameters.state;
            }
            if (requestParameters.authuser !== undefined) {
                queryParameters['authuser'] = requestParameters.authuser;
            }
            if (requestParameters.prompt !== undefined) {
                queryParameters['prompt'] = requestParameters.prompt;
            }
            if (requestParameters.error !== undefined) {
                queryParameters['error'] = requestParameters.error;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/redirect`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new TextApiResponse(response);
        });
    }
    /**
     * Endpoint where an oauth provider would redirect after a successful user authorizing the oauth application.
     * Oauth provider redirect endpoint
     */
    oauthRedirectCode(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.oauthRedirectCodeRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthRedirectOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthRedirectOptions.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthRedirectOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/redirect`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthRedirectOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oauthRedirectOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Returns the authorization code or error retuned by oauth provider
     */
    oauthResultRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthResult.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthResult.');
            }
            if (requestParameters.oauthResultRequest === null || requestParameters.oauthResultRequest === undefined) {
                throw new RequiredError('oauthResultRequest', 'Required parameter requestParameters.oauthResultRequest was null or undefined when calling oauthResult.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/oauthResult`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: OauthResultRequestToJSON(requestParameters.oauthResultRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => OauthResultResponseFromJSON(jsonValue));
        });
    }
    /**
     * Returns the authorization code or error retuned by oauth provider
     */
    oauthResult(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.oauthResultRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthResultOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthResultOptions.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthResultOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/oauthResult`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthResultOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oauthResultOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Standard OAuth SignIn callback to exchange temproary code for oauth access and return a valid Dynamic JWT and user
     * Oauth provider SignIn endpoint
     */
    oauthSignInRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthSignIn.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthSignIn.');
            }
            if (requestParameters.oauthRequest === null || requestParameters.oauthRequest === undefined) {
                throw new RequiredError('oauthRequest', 'Required parameter requestParameters.oauthRequest was null or undefined when calling oauthSignIn.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/signIn`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: OauthRequestToJSON(requestParameters.oauthRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Standard OAuth SignIn callback to exchange temproary code for oauth access and return a valid Dynamic JWT and user
     * Oauth provider SignIn endpoint
     */
    oauthSignIn(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.oauthSignInRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthSignInOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthSignInOptions.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthSignInOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/signIn`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthSignInOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oauthSignInOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Standard OAuth verify callback to exchange temproary code for oauth access
     * Oauth provider verify endpoint
     */
    oauthVerifyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthVerify.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthVerify.');
            }
            if (requestParameters.oauthRequest === null || requestParameters.oauthRequest === undefined) {
                throw new RequiredError('oauthRequest', 'Required parameter requestParameters.oauthRequest was null or undefined when calling oauthVerify.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/verify`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: OauthRequestToJSON(requestParameters.oauthRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Standard OAuth verify callback to exchange temproary code for oauth access
     * Oauth provider verify endpoint
     */
    oauthVerify(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.oauthVerifyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthVerifyOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling oauthVerifyOptions.');
            }
            if (requestParameters.providerType === null || requestParameters.providerType === undefined) {
                throw new RequiredError('providerType', 'Required parameter requestParameters.providerType was null or undefined when calling oauthVerifyOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/providers/{providerType}/verify`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"providerType"}}`, encodeURIComponent(String(requestParameters.providerType))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    oauthVerifyOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oauthVerifyOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    onrampsOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling onrampsOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/onramps`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    onrampsOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.onrampsOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    optionsConnectRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling optionsConnect.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/connect`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    optionsConnect(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.optionsConnectRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    passkeyRecoveryOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling passkeyRecoveryOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/users/embeddedWallets/passkeyRecovery`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    passkeyRecoveryOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.passkeyRecoveryOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Endpoint to send minimal wallet information to the API to prefetch name service information for an address.
     * prefetch information for wallet address
     */
    prefetchRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling prefetch.');
            }
            if (requestParameters.prefetchRequest === null || requestParameters.prefetchRequest === undefined) {
                throw new RequiredError('prefetchRequest', 'Required parameter requestParameters.prefetchRequest was null or undefined when calling prefetch.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/sdk/{environmentId}/prefetch`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: PrefetchRequestToJSON(requestParameters.prefetchRequest),
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Endpoint to send minimal wallet information to the API to prefetch name service information for an address.
     * prefetch information for wallet address
     */
    prefetch(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prefetchRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Publish events for SDK
     */
    publishEventRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling publishEvent.');
            }
            if (requestParameters.publishEvents === null || requestParameters.publishEvents === undefined) {
                throw new RequiredError('publishEvents', 'Required parameter requestParameters.publishEvents was null or undefined when calling publishEvent.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/sdk/{environmentId}/events`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: PublishEventsToJSON(requestParameters.publishEvents),
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Publish events for SDK
     */
    publishEvent(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.publishEventRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Endpoint to refresh the JWT auth token using the current valid JWT auth token in the authorization header
     */
    refreshAuthRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling refreshAuth.');
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
                path: `/sdk/{environmentId}/refresh`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Endpoint to refresh the JWT auth token using the current valid JWT auth token in the authorization header
     */
    refreshAuth(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.refreshAuthRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    refreshOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling refreshOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/refresh`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    refreshOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.refreshOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Send new code for email verification
     */
    retryEmailVerificationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling retryEmailVerification.');
            }
            if (requestParameters.emailVerificationRetryRequest === null || requestParameters.emailVerificationRetryRequest === undefined) {
                throw new RequiredError('emailVerificationRetryRequest', 'Required parameter requestParameters.emailVerificationRetryRequest was null or undefined when calling retryEmailVerification.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/sdk/{environmentId}/emailVerifications/retry`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: EmailVerificationRetryRequestToJSON(requestParameters.emailVerificationRetryRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => EmailVerificationCreateResponseFromJSON(jsonValue));
        });
    }
    /**
     * Send new code for email verification
     */
    retryEmailVerification(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.retryEmailVerificationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    retryEmailVerificationOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling retryEmailVerificationOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/emailVerifications/retry`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    retryEmailVerificationOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.retryEmailVerificationOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Revoke a session
     */
    revokeSessionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling revokeSession.');
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
                path: `/sdk/{environmentId}/revoke`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Revoke a session
     */
    revokeSession(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.revokeSessionRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    revokeSessionOptionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling revokeSessionOption.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/revoke`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    revokeSessionOption(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.revokeSessionOptionRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    sdkSettingsOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling sdkSettingsOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/sdkSettings`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     */
    sdkSettingsOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sdkSettingsOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    settingsOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling settingsOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/settings`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    settingsOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.settingsOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Verify an email and sign in user
     */
    signInWithEmailVerificationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling signInWithEmailVerification.');
            }
            if (requestParameters.emailVerificationVerifyRequest === null || requestParameters.emailVerificationVerifyRequest === undefined) {
                throw new RequiredError('emailVerificationVerifyRequest', 'Required parameter requestParameters.emailVerificationVerifyRequest was null or undefined when calling signInWithEmailVerification.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/sdk/{environmentId}/emailVerifications/signin`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: EmailVerificationVerifyRequestToJSON(requestParameters.emailVerificationVerifyRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Verify an email and sign in user
     */
    signInWithEmailVerification(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.signInWithEmailVerificationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    signInWithEmailVerificationOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling signInWithEmailVerificationOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/emailVerifications/signin`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    signInWithEmailVerificationOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.signInWithEmailVerificationOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Update a passkey\'s info
     */
    updatePasskeyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling updatePasskey.');
            }
            if (requestParameters.updateUserPasskeyRequest === null || requestParameters.updateUserPasskeyRequest === undefined) {
                throw new RequiredError('updateUserPasskeyRequest', 'Required parameter requestParameters.updateUserPasskeyRequest was null or undefined when calling updatePasskey.');
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
                path: `/sdk/{environmentId}/users/passkeys`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateUserPasskeyRequestToJSON(requestParameters.updateUserPasskeyRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => UserPasskeyFromJSON(jsonValue));
        });
    }
    /**
     * Update a passkey\'s info
     */
    updatePasskey(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updatePasskeyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update a user\'s fields
     */
    updateSelfRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling updateSelf.');
            }
            if (requestParameters.userFields === null || requestParameters.userFields === undefined) {
                throw new RequiredError('userFields', 'Required parameter requestParameters.userFields was null or undefined when calling updateSelf.');
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
                path: `/sdk/{environmentId}/users`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: UserFieldsToJSON(requestParameters.userFields),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => UpdateSelfResponseFromJSON(jsonValue));
        });
    }
    /**
     * Update a user\'s fields
     */
    updateSelf(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateSelfRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    userPasskeysOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling userPasskeysOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/users/passkeys`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    userPasskeysOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userPasskeysOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    usersOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling usersOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/users`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    usersOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usersOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Verify payload and return JWT
     */
    verifyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling verify.');
            }
            if (requestParameters.verifyRequest === null || requestParameters.verifyRequest === undefined) {
                throw new RequiredError('verifyRequest', 'Required parameter requestParameters.verifyRequest was null or undefined when calling verify.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/sdk/{environmentId}/verify`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: VerifyRequestToJSON(requestParameters.verifyRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Verify payload and return JWT
     */
    verify(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.verifyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Verify email verification request
     */
    verifyEmailVerificationRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling verifyEmailVerification.');
            }
            if (requestParameters.emailVerificationVerifyRequest === null || requestParameters.emailVerificationVerifyRequest === undefined) {
                throw new RequiredError('emailVerificationVerifyRequest', 'Required parameter requestParameters.emailVerificationVerifyRequest was null or undefined when calling verifyEmailVerification.');
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
                path: `/sdk/{environmentId}/emailVerifications/verify`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: EmailVerificationVerifyRequestToJSON(requestParameters.emailVerificationVerifyRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => UpdateSelfResponseFromJSON(jsonValue));
        });
    }
    /**
     * Verify email verification request
     */
    verifyEmailVerification(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.verifyEmailVerificationRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyEmailVerificationOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling verifyEmailVerificationOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/emailVerifications/verify`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyEmailVerificationOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.verifyEmailVerificationOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Link a wallet to a valid environment user, and return an updated JWT
     * Link wallet to user
     */
    verifyLinkRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling verifyLink.');
            }
            if (requestParameters.verifyRequest === null || requestParameters.verifyRequest === undefined) {
                throw new RequiredError('verifyRequest', 'Required parameter requestParameters.verifyRequest was null or undefined when calling verifyLink.');
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
                path: `/sdk/{environmentId}/verify/link`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: VerifyRequestToJSON(requestParameters.verifyRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Link a wallet to a valid environment user, and return an updated JWT
     * Link wallet to user
     */
    verifyLink(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.verifyLinkRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyLinkOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling verifyLinkOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/verify/link`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyLinkOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.verifyLinkOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling verifyOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/verify`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.verifyOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyPrefetchRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling verifyPrefetch.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/prefetch`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyPrefetch(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.verifyPrefetchRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Used to link a wallet after user has confirmed transfer to the new account
     * Verify wallet transfer
     */
    verifyTransferRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling verifyTransfer.');
            }
            if (requestParameters.verifyRequest === null || requestParameters.verifyRequest === undefined) {
                throw new RequiredError('verifyRequest', 'Required parameter requestParameters.verifyRequest was null or undefined when calling verifyTransfer.');
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
                path: `/sdk/{environmentId}/verify/transfer`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: VerifyRequestToJSON(requestParameters.verifyRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Used to link a wallet after user has confirmed transfer to the new account
     * Verify wallet transfer
     */
    verifyTransfer(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.verifyTransferRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyTransferOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling verifyTransferOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/verify/transfer`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyTransferOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.verifyTransferOptionsRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Remove a link from to a valid environment user, and return an updated JWT
     * unlink wallet from user
     */
    verifyUnlinkRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling verifyUnlink.');
            }
            if (requestParameters.verifyUnlinkRequest === null || requestParameters.verifyUnlinkRequest === undefined) {
                throw new RequiredError('verifyUnlinkRequest', 'Required parameter requestParameters.verifyUnlinkRequest was null or undefined when calling verifyUnlink.');
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
                path: `/sdk/{environmentId}/verify/unlink`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: VerifyUnlinkRequestToJSON(requestParameters.verifyUnlinkRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => VerifyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Remove a link from to a valid environment user, and return an updated JWT
     * unlink wallet from user
     */
    verifyUnlink(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.verifyUnlinkRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyUnlinkOptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling verifyUnlinkOptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/verify/unlink`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Options call for this endpoint
     */
    verifyUnlinkOptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.verifyUnlinkOptionsRaw(requestParameters, initOverrides);
        });
    }
}

export { SDKApi };
