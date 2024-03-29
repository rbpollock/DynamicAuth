'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var findWalletBookWallet = require('./findWalletBookWallet.cjs');
var renderTemplate = require('./renderTemplate.cjs');

const getWalletLinks = (walletBook, walletKey) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const walletData = findWalletBookWallet.findWalletBookWallet(walletBook, walletKey);
    const links = {
        android: '',
        brave: '',
        chrome: '',
        edge: '',
        firefox: '',
        ios: '',
    };
    links.brave =
        (_b = renderTemplate.renderTemplate('chromeUrl', (_a = walletData === null || walletData === void 0 ? void 0 : walletData.desktop) === null || _a === void 0 ? void 0 : _a.chromeId)) !== null && _b !== void 0 ? _b : '';
    links.chrome =
        (_d = renderTemplate.renderTemplate('chromeUrl', (_c = walletData === null || walletData === void 0 ? void 0 : walletData.desktop) === null || _c === void 0 ? void 0 : _c.chromeId)) !== null && _d !== void 0 ? _d : '';
    links.edge = (_f = renderTemplate.renderTemplate('edgeUrl', (_e = walletData === null || walletData === void 0 ? void 0 : walletData.desktop) === null || _e === void 0 ? void 0 : _e.edgeId)) !== null && _f !== void 0 ? _f : '';
    links.firefox =
        (_h = renderTemplate.renderTemplate('firefoxUrl', (_g = walletData === null || walletData === void 0 ? void 0 : walletData.desktop) === null || _g === void 0 ? void 0 : _g.firefoxId)) !== null && _h !== void 0 ? _h : '';
    links.ios =
        (_m = (_k = renderTemplate.renderTemplate('iosUrl', (_j = walletData === null || walletData === void 0 ? void 0 : walletData.mobile) === null || _j === void 0 ? void 0 : _j.iosId)) !== null && _k !== void 0 ? _k : (_l = walletData === null || walletData === void 0 ? void 0 : walletData.mobile) === null || _l === void 0 ? void 0 : _l.ios) !== null && _m !== void 0 ? _m : '';
    links.android =
        (_r = (_p = renderTemplate.renderTemplate('androidUrl', (_o = walletData === null || walletData === void 0 ? void 0 : walletData.mobile) === null || _o === void 0 ? void 0 : _o.androidId)) !== null && _p !== void 0 ? _p : (_q = walletData === null || walletData === void 0 ? void 0 : walletData.mobile) === null || _q === void 0 ? void 0 : _q.android) !== null && _r !== void 0 ? _r : '';
    return links;
};

exports.getWalletLinks = getWalletLinks;
