'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var react = require('react');
var getWalletIconUrl = require('../helpers/getWalletIconUrl.cjs');
var findWalletBookWallet = require('../helpers/findWalletBookWallet.cjs');
require('../helpers/logger.cjs');
require('@dynamic-labs/utils');
require('../schemas/walletConnectSourceSchema.cjs');
require('../schemas/walletBookSchema.cjs');
require('../schemas/walletSchema.cjs');
var useWalletBookContext = require('../hooks/useWalletBookContext.cjs');

const WalletIcon = (_a) => {
    var { walletKey, children } = _a, props = _tslib.__rest(_a, ["walletKey", "children"]);
    const { walletBook } = useWalletBookContext.useWalletBookContext();
    const walletData = findWalletBookWallet.findWalletBookWallet(walletBook, walletKey);
    const [imgError, setImgError] = react.useState(false);
    const walletIconUrl = getWalletIconUrl.getWalletIconUrl(walletBook, walletKey);
    const defaultWalletIconUrl = getWalletIconUrl.getDefaultWalletIconUrl();
    if (!walletData || !walletData.brand || !walletIconUrl) {
        return react.createElement(react.Fragment, {}, children);
    }
    const onError = () => {
        setImgError(true);
    };
    return react.createElement('img', Object.assign(Object.assign({ 'data-testid': `wallet-icon-${walletKey}` }, props), { alt: walletData.brand.alt, onError: onError, src: imgError ? defaultWalletIconUrl : walletIconUrl }), children);
};

exports.WalletIcon = WalletIcon;
