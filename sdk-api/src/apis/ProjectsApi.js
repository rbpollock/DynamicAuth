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
import { CreateProjectResponseFromJSON } from '../models/CreateProjectResponse.js';
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
import { ProjectFromJSON } from '../models/Project.js';
import { ProjectRequestToJSON } from '../models/ProjectRequest.js';
import { ProjectsResponseFromJSON } from '../models/ProjectsResponse.js';
import '../models/PublishEventsEvents.js';
import '../models/RoleEnum.js';
import '../models/SubscriptionAdvancedScopeEnum.js';
import '../models/SubscriptionFreeScopeEnum.js';
import '../models/UnprocessableEntityErrorCode.js';
import { UpdateProjectRequestToJSON } from '../models/UpdateProjectRequest.js';
import { UpdateProjectResponseFromJSON } from '../models/UpdateProjectResponse.js';
import '../models/VisitorFilterableFieldsEnum.js';

/* tslint:disable */
/**
 *
 */
class ProjectsApi extends BaseAPI {
    /**
     * Creates a new project
     */
    createProjectRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling createProject.');
            }
            if (requestParameters.projectRequest === null || requestParameters.projectRequest === undefined) {
                throw new RequiredError('projectRequest', 'Required parameter requestParameters.projectRequest was null or undefined when calling createProject.');
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
                path: `/organizations/{organizationId}/projects`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ProjectRequestToJSON(requestParameters.projectRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => CreateProjectResponseFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new project
     */
    createProject(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createProjectRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Deletes a project by ID
     */
    deleteProjectByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling deleteProjectById.');
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
                path: `/projects/{projectId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Deletes a project by ID
     */
    deleteProjectById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteProjectByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Find an project by ID
     */
    getProjectByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling getProjectById.');
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
                path: `/projects/{projectId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ProjectFromJSON(jsonValue));
        });
    }
    /**
     * Find an project by ID
     */
    getProjectById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getProjectByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Fetches all the active projects the belong to the organization
     */
    getProjectsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling getProjects.');
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
                path: `/organizations/{organizationId}/projects`.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters.organizationId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ProjectsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Fetches all the active projects the belong to the organization
     */
    getProjects(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getProjectsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update a project
     */
    updateProjectRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling updateProject.');
            }
            if (requestParameters.updateProjectRequest === null || requestParameters.updateProjectRequest === undefined) {
                throw new RequiredError('updateProjectRequest', 'Required parameter requestParameters.updateProjectRequest was null or undefined when calling updateProject.');
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
                path: `/projects/{projectId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: UpdateProjectRequestToJSON(requestParameters.updateProjectRequest),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => UpdateProjectResponseFromJSON(jsonValue));
        });
    }
    /**
     * Update a project
     */
    updateProject(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateProjectRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { ProjectsApi };
