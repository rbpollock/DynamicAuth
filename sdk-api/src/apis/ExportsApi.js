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
import { ExportFromJSON } from '../models/Export.js';
import { ExportCreateRequestToJSON } from '../models/ExportCreateRequest.js';
import '../models/UserFilterableFieldsEnum.js';
import '../models/ExportFormatEnum.js';
import '../models/ExportModelEnum.js';
import '../models/ExportStatusEnum.js';
import { ExportsResponseFromJSON } from '../models/ExportsResponse.js';
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
class ExportsApi extends BaseAPI {
    /**
     * Create a new export request for the project environment
     */
    createExportRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling createExport.');
            }
            if (requestParameters.exportCreateRequest === null || requestParameters.exportCreateRequest === undefined) {
                throw new RequiredError('exportCreateRequest', 'Required parameter requestParameters.exportCreateRequest was null or undefined when calling createExport.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/environments/{environmentId}/exports`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ExportCreateRequestToJSON(requestParameters.exportCreateRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ExportFromJSON(jsonValue));
        });
    }
    /**
     * Create a new export request for the project environment
     */
    createExport(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createExportRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Download an export by ID
     */
    downloadExportByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.exportId === null || requestParameters.exportId === undefined) {
                throw new RequiredError('exportId', 'Required parameter requestParameters.exportId was null or undefined when calling downloadExportById.');
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
                path: `/exports/{exportId}/download`.replace(`{${"exportId"}}`, encodeURIComponent(String(requestParameters.exportId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Download an export by ID
     */
    downloadExportById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.downloadExportByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get the exports for an environment
     */
    getEnvironmentExportsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getEnvironmentExports.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/environments/{environmentId}/exports`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ExportsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the exports for an environment
     */
    getEnvironmentExports(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getEnvironmentExportsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get an export using the ID
     */
    getExportByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.exportId === null || requestParameters.exportId === undefined) {
                throw new RequiredError('exportId', 'Required parameter requestParameters.exportId was null or undefined when calling getExportById.');
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
                path: `/exports/{exportId}`.replace(`{${"exportId"}}`, encodeURIComponent(String(requestParameters.exportId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ExportFromJSON(jsonValue));
        });
    }
    /**
     * Get an export using the ID
     */
    getExportById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getExportByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { ExportsApi };
