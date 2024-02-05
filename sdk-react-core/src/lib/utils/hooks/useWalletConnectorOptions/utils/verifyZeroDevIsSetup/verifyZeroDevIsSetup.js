import { ProviderEnum } from '@dynamic-labs/sdk-api';
import '@dynamic-labs/wallet-connector-core';
import '../../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../../../constants/colors.js';
import '../../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isProviderEnabled } from '../../../../functions/isProviderEnabled/isProviderEnabled.js';
import { ConnectorSetupError } from '../errors/ConnectorSetupError.js';

const zeroDevWalletConnectorKey = 'zerodev';
const verifyZeroDevIsSetup = (projectSettings, walletConnectors) => {
    var _a;
    const isZeroDevEnabled = isProviderEnabled((_a = projectSettings.providers) !== null && _a !== void 0 ? _a : [], ProviderEnum.Zerodev);
    const isZeroDevWalletConnectorPresent = walletConnectors.some(({ key }) => key === zeroDevWalletConnectorKey);
    if (isZeroDevEnabled && !isZeroDevWalletConnectorPresent) {
        throw new ConnectorSetupError('ZeroDev', 'ZeroDevSmartWalletConnectors');
    }
};

export { verifyZeroDevIsSetup };
