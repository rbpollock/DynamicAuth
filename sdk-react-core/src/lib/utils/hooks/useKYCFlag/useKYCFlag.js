import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useOnlyConnectedMode } from '../useOnlyConnectedMode/useOnlyConnectedMode.js';
import { getUserProfileFields } from '../../functions/getUserProfileFields/getUserProfileFields.js';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isSocialKycEnabled } from '../../functions/isSocialKycEnabled/isSocialKycEnabled.js';

/* eslint-disable max-len */
/**
 * A custom React hook that checks if KYC fields are enabled in the project settings or defined in the user profile.
 *
 * @returns {boolean} - A boolean value indicating whether the KYC fields are enabled in the project settings or defined in the user profile.
 */
const useKYCFlag = () => {
    const isOnlyConnectedMode = useOnlyConnectedMode();
    const { projectSettings, user } = useInternalDynamicContext();
    if (isOnlyConnectedMode)
        return false;
    const hasAnyKYCFields = getUserProfileFields({
        projectSettingsKyc: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc,
        user,
    });
    return hasAnyKYCFields.length > 0 || isSocialKycEnabled(projectSettings);
};

export { useKYCFlag };
