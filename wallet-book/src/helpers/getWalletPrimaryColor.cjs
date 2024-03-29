'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getWalletBookWallet = require('./getWalletBookWallet.cjs');

const getWalletPrimaryColor = (walletBook, walletKey) => {
    var _a;
    const walletData = getWalletBookWallet.getWalletBookWallet(walletBook, walletKey);
    return (_a = walletData === null || walletData === void 0 ? void 0 : walletData.brand) === null || _a === void 0 ? void 0 : _a.primaryColor;
};

exports.getWalletPrimaryColor = getWalletPrimaryColor;
