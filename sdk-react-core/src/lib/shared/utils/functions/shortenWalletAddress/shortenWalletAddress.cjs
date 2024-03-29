'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const shortenWalletAddress = (walletAddress, first = 6, last = 4) => {
    if (!walletAddress)
        return '';
    return walletAddress.replace(walletAddress.substring(first, Number(walletAddress.length) - last), '...');
};

exports.shortenWalletAddress = shortenWalletAddress;
