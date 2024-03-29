import { isIPhone, isIPad, isMobile } from '@dynamic-labs/utils';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import { detectBrowserName } from '../../../shared/utils/functions/detectBrowser/detectBrowser.js';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';

const parseWalletLinks = (links) => {
    const isIOS = isIPhone() || isIPad();
    const userBrowser = detectBrowserName() || 'chrome';
    let currentDesktopUrl;
    switch (userBrowser) {
        case 'edge':
            currentDesktopUrl = links.edge;
            break;
        case 'firefox':
            currentDesktopUrl = links.firefox;
            break;
        case 'chrome':
        default:
            currentDesktopUrl = links.chrome;
            break;
    }
    const canShowAndroidAppButton = !isIOS && Boolean(links.android);
    const canShowIosAppButton = (isIOS || !isMobile()) && Boolean(links.ios);
    return {
        canShowAndroidAppButton,
        canShowIosAppButton,
        currentDesktopUrl,
        hasMobileAppUrl: canShowAndroidAppButton || canShowIosAppButton,
        userBrowser,
    };
};

export { parseWalletLinks };
