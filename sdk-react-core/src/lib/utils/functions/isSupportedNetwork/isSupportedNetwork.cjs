'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getWalletConnectorNetworks = require('../getWalletConnectorNetworks/getWalletConnectorNetworks.cjs');

const isSupportedNetwork = ({ walletConnector, network }) => {
    const supportedNetworks = getWalletConnectorNetworks.getWalletConnectorNetworks(walletConnector);
    if (!supportedNetworks.length) {
        return true;
    }
    const isCurrentNetworkSupported = supportedNetworks.some(({ chainId }) => String(chainId) === String(network));
    return isCurrentNetworkSupported;
};

exports.isSupportedNetwork = isSupportedNetwork;
