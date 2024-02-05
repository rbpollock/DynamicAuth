import { __awaiter } from '../../_virtual/_tslib.js';
import { BaseAPI, JSONApiResponse, RequiredError } from '../runtime.js';
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
import { EventFromJSON } from '../models/Event.js';
import { EventTypeFromJSON } from '../models/EventType.js';
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

/* tslint:disable */
/**
 *
 */
class EventsApi extends BaseAPI {
    /**
     * Get event types
     */
    getEventTypesRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/eventTypes`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => jsonValue.map(EventTypeFromJSON));
        });
    }
    /**
     * Get event types
     */
    getEventTypes(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEventTypesRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get environment events
     */
    getEventsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEvents.');
            }
            const queryParameters = {};
            if (requestParameters.cursor !== undefined) {
                queryParameters['cursor'] = requestParameters.cursor;
            }
            if (requestParameters.resourceType !== undefined) {
                queryParameters['resourceType'] = requestParameters.resourceType;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/events`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => jsonValue.map(EventFromJSON));
        });
    }
    /**
     * Get environment events
     */
    getEvents(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEventsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { EventsApi };
