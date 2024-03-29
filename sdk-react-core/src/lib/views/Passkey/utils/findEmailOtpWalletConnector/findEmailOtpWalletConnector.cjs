'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const findEmailOtpWalletConnector = (wallets) => {
    const walletConnector = wallets
        .map(({ walletConnector }) => walletConnector)
        .find((walletConnector) => walletConnectorCore.isEmailWalletConnector(walletConnector) &&
        // additional check to make sure the wallet connector actually implements its own otp workflow
        // if a walletConnector only uses Dynamic's OTP, then canConnectViaEmail should be false
        walletConnector.canConnectViaEmail);
    return walletConnector;
};

exports.findEmailOtpWalletConnector = findEmailOtpWalletConnector;
