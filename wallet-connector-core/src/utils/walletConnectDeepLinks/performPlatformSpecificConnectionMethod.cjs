'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');
var walletConnectDeepLinks = require('./walletConnectDeepLinks.cjs');

const performPlatformSpecificConnectionMethod = (uri, metadata, opts, preference) => {
    var _a, _b, _c;
    const deepLink = walletConnectDeepLinks.getDeepLink({
        metadata,
        mode: 'connection',
        preference,
        uri,
    });
    if (utils.isMobile()) {
        window.location.href = deepLink;
    }
    else {
        if ((_a = metadata.desktop) === null || _a === void 0 ? void 0 : _a.native) {
            (_b = opts.onDesktopUri) === null || _b === void 0 ? void 0 : _b.call(opts, deepLink);
        }
        (_c = opts.onDisplayUri) === null || _c === void 0 ? void 0 : _c.call(opts, uri);
    }
};

exports.performPlatformSpecificConnectionMethod = performPlatformSpecificConnectionMethod;
