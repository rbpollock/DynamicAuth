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

const magicEmailOtpWalletConnectorKey = 'magicemailotp';
const magicSocialWalletConnectorKey = 'magicsocial';
const verifyMagicIsSetup = (projectSettings, walletConnectors) => {
    var _a;
    const isMagicEnabled = isProviderEnabled.isProviderEnabled((_a = projectSettings.providers) !== null && _a !== void 0 ? _a : [], sdkApi.ProviderEnum.MagicLink);
    const isMagicWalletConnectorPresent = walletConnectors.some(({ key }) => [magicEmailOtpWalletConnectorKey, magicSocialWalletConnectorKey].includes(key));
    if (isMagicEnabled && !isMagicWalletConnectorPresent) {
        throw new ConnectorSetupError.ConnectorSetupError('Magic', 'MagicWalletConnectors');
    }
};

exports.verifyMagicIsSetup = verifyMagicIsSetup;
