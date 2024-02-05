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
var Webhook = require('../models/Webhook.cjs');
var WebhookCreateRequest = require('../models/WebhookCreateRequest.cjs');
var WebhookMessageRedeliveryResponse = require('../models/WebhookMessageRedeliveryResponse.cjs');
var WebhookMessagesResponse = require('../models/WebhookMessagesResponse.cjs');
var WebhookUpdateRequest = require('../models/WebhookUpdateRequest.cjs');
var WebhooksResponse = require('../models/WebhooksResponse.cjs');

/* tslint:disable */
/**
 *
 */
class WebhooksApi extends runtime.BaseAPI {
    /**
     * Creates a new Webhooks for the project environment
     */
    createWebhookRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createWebhook.');
            }
            if (requestParameters.webhookCreateRequest === null || requestParameters.webhookCreateRequest === undefined) {
                throw new runtime.RequiredError('webhookCreateRequest', 'Required parameter requestParameters.webhookCreateRequest was null or undefined when calling createWebhook.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: WebhookCreateRequest.WebhookCreateRequestToJSON(requestParameters.webhookCreateRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Webhook.WebhookFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new Webhooks for the project environment
     */
    createWebhook(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.createWebhookRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete the Webhook for an environment
     */
    deleteWebhookByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling deleteWebhookById.');
            }
            if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                throw new runtime.RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling deleteWebhookById.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks/{webhookId}`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete the Webhook for an environment
     */
    deleteWebhookById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteWebhookByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get the Webhook for an environment
     */
    getWebhookRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getWebhook.');
            }
            if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                throw new runtime.RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling getWebhook.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => Webhook.WebhookFromJSON(jsonValue));
        });
    }
    /**
     * Get the Webhook for an environment
     */
    getWebhook(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWebhookRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the Messages for an webhook
     */
    getWebhookMessagesRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getWebhookMessages.');
            }
            if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                throw new runtime.RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling getWebhookMessages.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => WebhookMessagesResponse.WebhookMessagesResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the Messages for an webhook
     */
    getWebhookMessages(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWebhookMessagesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the Webhooks for an environment
     */
    getWebhooksRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getWebhooks.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => WebhooksResponse.WebhooksResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the Webhooks for an environment
     */
    getWebhooks(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWebhooksRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Redeliver message for an webhook
     */
    redeliverWebhookMessageRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling redeliverWebhookMessage.');
            }
            if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                throw new runtime.RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling redeliverWebhookMessage.');
            }
            if (requestParameters.messageId === null || requestParameters.messageId === undefined) {
                throw new runtime.RequiredError('messageId', 'Required parameter requestParameters.messageId was null or undefined when calling redeliverWebhookMessage.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks/{webhookId}/messages/{messageId}/redeliver`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))).replace(`{${"messageId"}}`, encodeURIComponent(String(requestParameters.messageId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => WebhookMessageRedeliveryResponse.WebhookMessageRedeliveryResponseFromJSON(jsonValue));
        });
    }
    /**
     * Redeliver message for an webhook
     */
    redeliverWebhookMessage(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.redeliverWebhookMessageRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update the Webhook for an environment
     */
    updateWebhookByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new runtime.RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling updateWebhookById.');
            }
            if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                throw new runtime.RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling updateWebhookById.');
            }
            if (requestParameters.webhookUpdateRequest === null || requestParameters.webhookUpdateRequest === undefined) {
                throw new runtime.RequiredError('webhookUpdateRequest', 'Required parameter requestParameters.webhookUpdateRequest was null or undefined when calling updateWebhookById.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/environments/{environmentId}/webhooks/{webhookId}`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))).replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: WebhookUpdateRequest.WebhookUpdateRequestToJSON(requestParameters.webhookUpdateRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => Webhook.WebhookFromJSON(jsonValue));
        });
    }
    /**
     * Update the Webhook for an environment
     */
    updateWebhookById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateWebhookByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.WebhooksApi = WebhooksApi;
