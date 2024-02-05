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
var CreateProjectResponse = require('../models/CreateProjectResponse.cjs');
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
var Project = require('../models/Project.cjs');
var ProjectRequest = require('../models/ProjectRequest.cjs');
var ProjectsResponse = require('../models/ProjectsResponse.cjs');
require('../models/PublishEventsEvents.cjs');
require('../models/RoleEnum.cjs');
require('../models/SubscriptionAdvancedScopeEnum.cjs');
require('../models/SubscriptionFreeScopeEnum.cjs');
require('../models/UnprocessableEntityErrorCode.cjs');
var UpdateProjectRequest = require('../models/UpdateProjectRequest.cjs');
var UpdateProjectResponse = require('../models/UpdateProjectResponse.cjs');
require('../models/VisitorFilterableFieldsEnum.cjs');

/* tslint:disable */
/**
 *
 */
class ProjectsApi extends runtime.BaseAPI {
    /**
     * Creates a new project
     */
    createProjectRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new runtime.RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling createProject.');
            }
            if (requestParameters.projectRequest === null || requestParameters.projectRequest === undefined) {
                throw new runtime.RequiredError('projectRequest', 'Required parameter requestParameters.projectRequest was null or undefined when calling createProject.');
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
                body: ProjectRequest.ProjectRequestToJSON(requestParameters.projectRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateProjectResponse.CreateProjectResponseFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new project
     */
    createProject(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.createProjectRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Deletes a project by ID
     */
    deleteProjectByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling deleteProjectById.');
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
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes a project by ID
     */
    deleteProjectById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.deleteProjectByIdRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Find an project by ID
     */
    getProjectByIdRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling getProjectById.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => Project.ProjectFromJSON(jsonValue));
        });
    }
    /**
     * Find an project by ID
     */
    getProjectById(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getProjectByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Fetches all the active projects the belong to the organization
     */
    getProjectsRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
                throw new runtime.RequiredError('organizationId', 'Required parameter requestParameters.organizationId was null or undefined when calling getProjects.');
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
            return new runtime.JSONApiResponse(response, (jsonValue) => ProjectsResponse.ProjectsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Fetches all the active projects the belong to the organization
     */
    getProjects(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getProjectsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update a project
     */
    updateProjectRaw(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling updateProject.');
            }
            if (requestParameters.updateProjectRequest === null || requestParameters.updateProjectRequest === undefined) {
                throw new runtime.RequiredError('updateProjectRequest', 'Required parameter requestParameters.updateProjectRequest was null or undefined when calling updateProject.');
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
                body: UpdateProjectRequest.UpdateProjectRequestToJSON(requestParameters.updateProjectRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateProjectResponse.UpdateProjectResponseFromJSON(jsonValue));
        });
    }
    /**
     * Update a project
     */
    updateProject(requestParameters, initOverrides) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateProjectRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.ProjectsApi = ProjectsApi;
