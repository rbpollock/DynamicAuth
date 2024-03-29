'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const getWalletProvider = (connector) => {
    if (connector.isEmbeddedWallet) {
        return 'embeddedWallet';
    }
    if (connector.canConnectViaCustodialService) {
        return 'custodialService';
    }
    if (connector.isInstalledOnBrowser()) {
        return 'browserExtension';
    }
    return utils.isMobile() ? 'deepLink' : 'qrCode';
};

exports.getWalletProvider = getWalletProvider;
