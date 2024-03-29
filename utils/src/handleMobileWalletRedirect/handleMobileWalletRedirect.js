import '../errors/TransactionGasCannotBeSponsoredError.js';
import '../errors/InsufficientFundsError.js';
import '../logger/logger.js';
import { isSamsungBrowser } from '../isMobile.js';
import 'viem/chains';

const handleMobileWalletRedirect = ({ nativeLink, universalLink, }) => {
    const url = encodeURIComponent(window.location.toString());
    const ref = encodeURIComponent(window.location.origin);
    // samsung browser only supports native links, not universal links
    if (isSamsungBrowser()) {
        window.location.assign(`${nativeLink}/${url}?ref=${ref}`);
    }
    else {
        window.location.assign(`${universalLink}/${url}?ref=${ref}`);
    }
};

export { handleMobileWalletRedirect };
