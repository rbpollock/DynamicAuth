'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../errors/TransactionGasCannotBeSponsoredError.cjs');
require('../errors/InsufficientFundsError.cjs');
require('../logger/logger.cjs');
var isMobile = require('../isMobile.cjs');
require('viem/chains');

const handleMobileWalletRedirect = ({ nativeLink, universalLink, }) => {
    const url = encodeURIComponent(window.location.toString());
    const ref = encodeURIComponent(window.location.origin);
    // samsung browser only supports native links, not universal links
    if (isMobile.isSamsungBrowser()) {
        window.location.assign(`${nativeLink}/${url}?ref=${ref}`);
    }
    else {
        window.location.assign(`${universalLink}/${url}?ref=${ref}`);
    }
};

exports.handleMobileWalletRedirect = handleMobileWalletRedirect;
