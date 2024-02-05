'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var NetworkConfigurationResponse = require('./NetworkConfigurationResponse.cjs');
var ProjectSettingsChains = require('./ProjectSettingsChains.cjs');
var ProjectSettingsDesign = require('./ProjectSettingsDesign.cjs');
var ProjectSettingsGeneral = require('./ProjectSettingsGeneral.cjs');
var ProjectSettingsKyc = require('./ProjectSettingsKyc.cjs');
var ProjectSettingsPrivacy = require('./ProjectSettingsPrivacy.cjs');
var ProjectSettingsSdk = require('./ProjectSettingsSdk.cjs');
var ProjectSettingsSecurity = require('./ProjectSettingsSecurity.cjs');
var Provider = require('./Provider.cjs');

/* tslint:disable */
function ProjectSettingsFromJSON(json) {
    return ProjectSettingsFromJSONTyped(json);
}
function ProjectSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chains': (json['chains'].map(ProjectSettingsChains.ProjectSettingsChainsFromJSON)),
        'kyc': (json['kyc'].map(ProjectSettingsKyc.ProjectSettingsKycFromJSON)),
        'design': ProjectSettingsDesign.ProjectSettingsDesignFromJSON(json['design']),
        'general': ProjectSettingsGeneral.ProjectSettingsGeneralFromJSON(json['general']),
        'privacy': ProjectSettingsPrivacy.ProjectSettingsPrivacyFromJSON(json['privacy']),
        'providers': !runtime.exists(json, 'providers') ? undefined : (json['providers'].map(Provider.ProviderFromJSON)),
        'sdk': ProjectSettingsSdk.ProjectSettingsSdkFromJSON(json['sdk']),
        'security': ProjectSettingsSecurity.ProjectSettingsSecurityFromJSON(json['security']),
        'networks': !runtime.exists(json, 'networks') ? undefined : (json['networks'].map(NetworkConfigurationResponse.NetworkConfigurationResponseFromJSON)),
    };
}
function ProjectSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chains': (value.chains.map(ProjectSettingsChains.ProjectSettingsChainsToJSON)),
        'kyc': (value.kyc.map(ProjectSettingsKyc.ProjectSettingsKycToJSON)),
        'design': ProjectSettingsDesign.ProjectSettingsDesignToJSON(value.design),
        'general': ProjectSettingsGeneral.ProjectSettingsGeneralToJSON(value.general),
        'privacy': ProjectSettingsPrivacy.ProjectSettingsPrivacyToJSON(value.privacy),
        'providers': value.providers === undefined ? undefined : (value.providers.map(Provider.ProviderToJSON)),
        'sdk': ProjectSettingsSdk.ProjectSettingsSdkToJSON(value.sdk),
        'security': ProjectSettingsSecurity.ProjectSettingsSecurityToJSON(value.security),
        'networks': value.networks === undefined ? undefined : (value.networks.map(NetworkConfigurationResponse.NetworkConfigurationResponseToJSON)),
    };
}

exports.ProjectSettingsFromJSON = ProjectSettingsFromJSON;
exports.ProjectSettingsFromJSONTyped = ProjectSettingsFromJSONTyped;
exports.ProjectSettingsToJSON = ProjectSettingsToJSON;
