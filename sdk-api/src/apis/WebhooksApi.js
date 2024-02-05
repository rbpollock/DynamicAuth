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
import { WebhookFromJSON } from '../models/Webhook.js';
import { WebhookCreateRequestToJSON } from '../models/WebhookCreateRequest.js';
import { WebhookMessageRedeliveryResponseFromJSON } from '../models/WebhookMessageRedeliveryResponse.js';
import { WebhookMessagesResponseFromJSON } from '../models/WebhookMessagesResponse.js';
import { WebhookUpdateRequestToJSON } from '../models/WebhookUpdateRequest.js';
import { WebhooksResponseFromJSON } from '../models/WebhooksResponse.js';

/* tslint:disable */
/**
 *
 */
class WebhooksApi extends BaseAPI {
    /**
     * Creates a new Webhooks for the project environment
     */
    createWebhookRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createWebhook.');
            }
            if (requestParameters.webhookCreateRequest === null || requestParameters.webhookCreateRequest === undefined) {
                throw new RequiredError('webhookCreateRequest', 'Required parameter requestParameters.webhookCreateRequest was null or undefined when calling createWebhook.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: WebhookCreateRequestToJSON(requestParameters.webhookCreateRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => WebhookFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new Webhooks for the project environment
     */
    createWebhook(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createWebhookRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete the Webhook for an environment
     */
    deleteWebhookByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling deleteWebhookById.');
            }
            if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                throw new RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling deleteWebhookById.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks/{webhookId}`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Delete the Webhook for an environment
     */
    deleteWebhookById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteWebhookByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get the Webhook for an environment
     */
    getWebhookRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getWebhook.');
            }
            if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                throw new RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling getWebhook.');
            }
            const queryParameters = {};
            if (requestParameters.includeSecret !== undefined) {
                queryParameters['includeSecret'] = requestParameters.includeSecret;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks/{webhookId}`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => WebhookFromJSON(jsonValue));
        });
    }
    /**
     * Get the Webhook for an environment
     */
    getWebhook(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWebhookRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the Messages for an webhook
     */
    getWebhookMessagesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getWebhookMessages.');
            }
            if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                throw new RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling getWebhookMessages.');
            }
            const queryParameters = {};
            if (requestParameters.cursor !== undefined) {
                queryParameters['cursor'] = requestParameters.cursor;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks/{webhookId}/messages`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => WebhookMessagesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the Messages for an webhook
     */
    getWebhookMessages(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWebhookMessagesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the Webhooks for an environment
     */
    getWebhooksRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getWebhooks.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => WebhooksResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the Webhooks for an environment
     */
    getWebhooks(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWebhooksRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Redeliver message for an webhook
     */
    redeliverWebhookMessageRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling redeliverWebhookMessage.');
            }
            if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                throw new RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling redeliverWebhookMessage.');
            }
            if (requestParameters.messageId === null || requestParameters.messageId === undefined) {
                throw new RequiredError('messageId', 'Required parameter requestParameters.messageId was null or undefined when calling redeliverWebhookMessage.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks/{webhookId}/messages/{messageId}/redeliver`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))).replace(`{${"messageId"}}`, encodeURIComponent(String(requestParameters.messageId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => WebhookMessageRedeliveryResponseFromJSON(jsonValue));
        });
    }
    /**
     * Redeliver message for an webhook
     */
    redeliverWebhookMessage(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.redeliverWebhookMessageRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update the Webhook for an environment
     */
    updateWebhookByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling updateWebhookById.');
            }
            if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                throw new RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling updateWebhookById.');
            }
            if (requestParameters.webhookUpdateRequest === null || requestParameters.webhookUpdateRequest === undefined) {
                throw new RequiredError('webhookUpdateRequest', 'Required parameter requestParameters.webhookUpdateRequest was null or undefined when calling updateWebhookById.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks/{webhookId}`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: WebhookUpdateRequestToJSON(requestParameters.webhookUpdateRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => WebhookFromJSON(jsonValue));
        });
    }
    /**
     * Update the Webhook for an environment
     */
    updateWebhookById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateWebhookByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { WebhooksApi };
