'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var normalizeWalletName = require('./normalizeWalletName.cjs');

const getWalletBookWallet = (walletBook, walletName) => {
    var _a, _b;
    const normalizedWalletName = normalizeWalletName.normalizeWalletName(walletName);
    const walletData = (_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) === null || _a === void 0 ? void 0 : _a[normalizedWalletName];
    if (!walletData)
        throw new Error(`Wallet ${walletName} not found in wallet book (${Object.keys((_b = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _b !== void 0 ? _b : {}).length} wallets found)`);
    return walletData;
};

exports.getWalletBookWallet = getWalletBookWallet;
