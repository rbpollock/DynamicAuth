import { isMobile } from '@dynamic-labs/utils';
import { getDeepLink } from './walletConnectDeepLinks.js';

const performPlatformSpecificConnectionMethod = (uri, metadata, opts, preference) => {
    var _a, _b, _c;
    const deepLink = getDeepLink({
        metadata,
        mode: 'connection',
        preference,
        uri,
    });
    if (isMobile()) {
        window.location.href = deepLink;
    }
    else {
        if ((_a = metadata.desktop) === null || _a === void 0 ? void 0 : _a.native) {
            (_b = opts.onDesktopUri) === null || _b === void 0 ? void 0 : _b.call(opts, deepLink);
        }
        (_c = opts.onDisplayUri) === null || _c === void 0 ? void 0 : _c.call(opts, uri);
    }
};

export { performPlatformSpecificConnectionMethod };
