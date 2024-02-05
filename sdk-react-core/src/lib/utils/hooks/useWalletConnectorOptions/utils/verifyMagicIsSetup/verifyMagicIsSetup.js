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

const magicEmailOtpWalletConnectorKey = 'magicemailotp';
const magicSocialWalletConnectorKey = 'magicsocial';
const verifyMagicIsSetup = (projectSettings, walletConnectors) => {
    var _a;
    const isMagicEnabled = isProviderEnabled((_a = projectSettings.providers) !== null && _a !== void 0 ? _a : [], ProviderEnum.MagicLink);
    const isMagicWalletConnectorPresent = walletConnectors.some(({ key }) => [magicEmailOtpWalletConnectorKey, magicSocialWalletConnectorKey].includes(key));
    if (isMagicEnabled && !isMagicWalletConnectorPresent) {
        throw new ConnectorSetupError('Magic', 'MagicWalletConnectors');
    }
};

export { verifyMagicIsSetup };
