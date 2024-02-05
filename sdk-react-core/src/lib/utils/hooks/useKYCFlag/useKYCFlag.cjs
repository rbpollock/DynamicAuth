'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var useOnlyConnectedMode = require('../useOnlyConnectedMode/useOnlyConnectedMode.cjs');
var getUserProfileFields = require('../../functions/getUserProfileFields/getUserProfileFields.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isSocialKycEnabled = require('../../functions/isSocialKycEnabled/isSocialKycEnabled.cjs');

/* eslint-disable max-len */
/**
 * A custom React hook that checks if KYC fields are enabled in the project settings or defined in the user profile.
 *
 * @returns {boolean} - A boolean value indicating whether the KYC fields are enabled in the project settings or defined in the user profile.
 */
const useKYCFlag = () => {
    const isOnlyConnectedMode = useOnlyConnectedMode.useOnlyConnectedMode();
    const { projectSettings, user } = useInternalDynamicContext.useInternalDynamicContext();
    if (isOnlyConnectedMode)
        return false;
    const hasAnyKYCFields = getUserProfileFields.getUserProfileFields({
        projectSettingsKyc: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc,
        user,
    });
    return hasAnyKYCFields.length > 0 || isSocialKycEnabled.isSocialKycEnabled(projectSettings);
};

exports.useKYCFlag = useKYCFlag;
