'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var multiWallet = require('./multi-wallet.cjs');
var message = require('./utils/message.cjs');



exports.getEnabledProviders = multiWallet.getEnabledProviders;
exports.getEnabledWallets = multiWallet.getEnabledWallets;
exports.getSupportedChainsForWalletConnector = multiWallet.getSupportedChainsForWalletConnector;
exports.getSupportedWallets = multiWallet.getSupportedWallets;
exports.generateMessageToSign = message.generateMessageToSign;
