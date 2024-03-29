'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getWalletConnectorNetworks = (walletConnector) => {
    if (!walletConnector)
        return [];
    const _walletConnector = walletConnector;
    return (_walletConnector.evmNetworks || _walletConnector.starknetNetworks || []);
};

exports.getWalletConnectorNetworks = getWalletConnectorNetworks;
