'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getWalletBookWallet = require('./getWalletBookWallet.cjs');
var logger = require('./logger.cjs');
var renderTemplate = require('./renderTemplate.cjs');

const getWalletIconUrl = (walletBook, walletKey) => {
    var _a, _b;
    try {
        const walletData = getWalletBookWallet.getWalletBookWallet(walletBook, walletKey);
        if ((_a = walletData === null || walletData === void 0 ? void 0 : walletData.brand) === null || _a === void 0 ? void 0 : _a.spriteId) {
            return renderTemplate.renderTemplate('iconicUrl', walletData.brand.spriteId);
        }
        if ((_b = walletData === null || walletData === void 0 ? void 0 : walletData.brand) === null || _b === void 0 ? void 0 : _b.imageId) {
            return renderTemplate.renderTemplate('walletConnectUrl', walletData.brand.imageId);
        }
    }
    catch (err) {
        logger.logger.error(err);
    }
    return '';
};
const getDefaultWalletIconUrl = () => {
    try {
        return renderTemplate.renderTemplate('iconicUrl', 'defaultwallet');
    }
    catch (err) {
        logger.logger.error(err);
    }
    return '';
};

exports.getDefaultWalletIconUrl = getDefaultWalletIconUrl;
exports.getWalletIconUrl = getWalletIconUrl;
