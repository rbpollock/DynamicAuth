'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isSameWalletName = require('../../../../functions/isSameWalletName/isSameWalletName.cjs');

const findWallet = (account, walletOptions) => walletOptions.find((wallet) => account.walletName && isSameWalletName.isSameWalletName(wallet.name, account.walletName));

exports.findWallet = findWallet;
