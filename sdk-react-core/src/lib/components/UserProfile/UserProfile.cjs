'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useFields = require('../../views/CollectUserDataView/useFields.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var index$1 = require('../../shared/utils/functions/getValueByKey/index.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/multi-wallet');
var index = require('../../utils/functions/getEnabledOAuthProviders/index.cjs');
var getUserProfileFields = require('../../utils/functions/getUserProfileFields/getUserProfileFields.cjs');
var isSocialKycEnabled = require('../../utils/functions/isSocialKycEnabled/isSocialKycEnabled.cjs');
var ErrorContext = require('../../context/ErrorContext/ErrorContext.cjs');
var ErrorContainer = require('../ErrorContainer/ErrorContainer.cjs');
var UserProfileField = require('./parts/UserProfileField/UserProfileField.cjs');
var UserProfileSection = require('./parts/UserProfileSection/UserProfileSection.cjs');
var UserProfileSocialAccount = require('./parts/UserProfileSocialAccount/UserProfileSocialAccount.cjs');

const UserProfile = ({ rootClassName }) => {
    const { projectSettings, user } = useInternalDynamicContext.useInternalDynamicContext();
    const { error } = ErrorContext.useErrorContext();
    const { fieldsConfig } = useFields.useFields();
    const containerRef = React.useRef(null);
    React.useEffect(() => {
        if (error && containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }, [error]);
    const allUserFields = getUserProfileFields.getUserProfileFields({
        projectSettingsKyc: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc,
        user,
    });
    const providers = isSocialKycEnabled.isSocialKycEnabled(projectSettings)
        ? index.getEnabledOAuthProviders(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers)
        : [];
    const mapFieldKeyToValue = (fieldKey) => user === null || user === void 0 ? void 0 : user[fieldKey];
    if (!user)
        return null;
    return (jsxRuntime.jsxs("div", { "data-testid": 'userProfile', className: classNames.classNames('user-profile', rootClassName), ref: containerRef, children: [error && jsxRuntime.jsx(ErrorContainer.ErrorContainer, { children: error }), (allUserFields === null || allUserFields === void 0 ? void 0 : allUserFields.length) > 0 && (jsxRuntime.jsx(UserProfileSection.UserProfileSection, { title: 'My information', children: jsxRuntime.jsx("div", { className: 'user-profile__fields', children: allUserFields.map(({ name }) => {
                        const { label, key } = index$1.getValueByKey(fieldsConfig, name);
                        const value = mapFieldKeyToValue(name);
                        return (jsxRuntime.jsx(UserProfileField.UserProfileField, { copykey: key, name: name, label: label, value: value }, name));
                    }) }) })), (providers === null || providers === void 0 ? void 0 : providers.length) > 0 && (jsxRuntime.jsx(UserProfileSection.UserProfileSection, { title: 'Social accounts', children: jsxRuntime.jsx("div", { className: 'user-profile__social-accounts', children: providers.map(({ provider }) => (jsxRuntime.jsx(UserProfileSocialAccount.UserProfileSocialAccount, { provider: provider }, provider))) }) }))] }));
};

exports.UserProfile = UserProfile;
