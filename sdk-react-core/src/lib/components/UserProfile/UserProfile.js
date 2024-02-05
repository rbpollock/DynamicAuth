import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import { useFields } from '../../views/CollectUserDataView/useFields.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { getValueByKey } from '../../shared/utils/functions/getValueByKey/index.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/multi-wallet';
import { getEnabledOAuthProviders } from '../../utils/functions/getEnabledOAuthProviders/index.js';
import { getUserProfileFields } from '../../utils/functions/getUserProfileFields/getUserProfileFields.js';
import { isSocialKycEnabled } from '../../utils/functions/isSocialKycEnabled/isSocialKycEnabled.js';
import { useErrorContext } from '../../context/ErrorContext/ErrorContext.js';
import { ErrorContainer } from '../ErrorContainer/ErrorContainer.js';
import { UserProfileField } from './parts/UserProfileField/UserProfileField.js';
import { UserProfileSection } from './parts/UserProfileSection/UserProfileSection.js';
import { UserProfileSocialAccount } from './parts/UserProfileSocialAccount/UserProfileSocialAccount.js';

const UserProfile = ({ rootClassName }) => {
    const { projectSettings, user } = useInternalDynamicContext();
    const { error } = useErrorContext();
    const { fieldsConfig } = useFields();
    const containerRef = useRef(null);
    useEffect(() => {
        if (error && containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }, [error]);
    const allUserFields = getUserProfileFields({
        projectSettingsKyc: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc,
        user,
    });
    const providers = isSocialKycEnabled(projectSettings)
        ? getEnabledOAuthProviders(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers)
        : [];
    const mapFieldKeyToValue = (fieldKey) => user === null || user === void 0 ? void 0 : user[fieldKey];
    if (!user)
        return null;
    return (jsxs("div", { "data-testid": 'userProfile', className: classNames('user-profile', rootClassName), ref: containerRef, children: [error && jsx(ErrorContainer, { children: error }), (allUserFields === null || allUserFields === void 0 ? void 0 : allUserFields.length) > 0 && (jsx(UserProfileSection, { title: 'My information', children: jsx("div", { className: 'user-profile__fields', children: allUserFields.map(({ name }) => {
                        const { label, key } = getValueByKey(fieldsConfig, name);
                        const value = mapFieldKeyToValue(name);
                        return (jsx(UserProfileField, { copykey: key, name: name, label: label, value: value }, name));
                    }) }) })), (providers === null || providers === void 0 ? void 0 : providers.length) > 0 && (jsx(UserProfileSection, { title: 'Social accounts', children: jsx("div", { className: 'user-profile__social-accounts', children: providers.map(({ provider }) => (jsx(UserProfileSocialAccount, { provider: provider }, provider))) }) }))] }));
};

export { UserProfile };
