'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const isAccountAbstractionWallet = (wallet) => {
    if (!wallet ||
        wallet === undefined ||
        wallet === null ||
        typeof wallet !== 'object' ||
        !('connector' in wallet)) {
        return false;
    }
    return walletConnectorCore.isAccountAbstractionConnector(wallet.connector);
};

exports.isAccountAbstractionWallet = isAccountAbstractionWallet;
