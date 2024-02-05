'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApi = require('@dynamic-labs/sdk-api');
require('@dynamic-labs/wallet-connector-core');
require('../../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../../../../constants/colors.cjs');
require('../../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isProviderEnabled = require('../../../../functions/isProviderEnabled/isProviderEnabled.cjs');
var ConnectorSetupError = require('../errors/ConnectorSetupError.cjs');

const zeroDevWalletConnectorKey = 'zerodev';
const verifyZeroDevIsSetup = (projectSettings, walletConnectors) => {
    var _a;
    const isZeroDevEnabled = isProviderEnabled.isProviderEnabled((_a = projectSettings.providers) !== null && _a !== void 0 ? _a : [], sdkApi.ProviderEnum.Zerodev);
    const isZeroDevWalletConnectorPresent = walletConnectors.some(({ key }) => key === zeroDevWalletConnectorKey);
    if (isZeroDevEnabled && !isZeroDevWalletConnectorPresent) {
        throw new ConnectorSetupError.ConnectorSetupError('ZeroDev', 'ZeroDevSmartWalletConnectors');
    }
};

exports.verifyZeroDevIsSetup = verifyZeroDevIsSetup;
