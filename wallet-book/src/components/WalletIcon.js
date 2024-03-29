import { __rest } from '../../_virtual/_tslib.js';
import { useState, createElement, Fragment } from 'react';
import { getWalletIconUrl, getDefaultWalletIconUrl } from '../helpers/getWalletIconUrl.js';
import { findWalletBookWallet } from '../helpers/findWalletBookWallet.js';
import '../helpers/logger.js';
import '@dynamic-labs/utils';
import '../schemas/walletConnectSourceSchema.js';
import '../schemas/walletBookSchema.js';
import '../schemas/walletSchema.js';
import { useWalletBookContext } from '../hooks/useWalletBookContext.js';

const WalletIcon = (_a) => {
    var { walletKey, children } = _a, props = __rest(_a, ["walletKey", "children"]);
    const { walletBook } = useWalletBookContext();
    const walletData = findWalletBookWallet(walletBook, walletKey);
    const [imgError, setImgError] = useState(false);
    const walletIconUrl = getWalletIconUrl(walletBook, walletKey);
    const defaultWalletIconUrl = getDefaultWalletIconUrl();
    if (!walletData || !walletData.brand || !walletIconUrl) {
        return createElement(Fragment, {}, children);
    }
    const onError = () => {
        setImgError(true);
    };
    return createElement('img', Object.assign(Object.assign({ 'data-testid': `wallet-icon-${walletKey}` }, props), { alt: walletData.brand.alt, onError: onError, src: imgError ? defaultWalletIconUrl : walletIconUrl }), children);
};

export { WalletIcon };
