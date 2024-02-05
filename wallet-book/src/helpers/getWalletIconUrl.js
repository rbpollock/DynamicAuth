import { getWalletBookWallet } from './getWalletBookWallet.js';
import { logger } from './logger.js';
import { renderTemplate } from './renderTemplate.js';

const getWalletIconUrl = (walletBook, walletKey) => {
    var _a, _b;
    try {
        const walletData = getWalletBookWallet(walletBook, walletKey);
        if ((_a = walletData === null || walletData === void 0 ? void 0 : walletData.brand) === null || _a === void 0 ? void 0 : _a.spriteId) {
            return renderTemplate('iconicUrl', walletData.brand.spriteId);
        }
        if ((_b = walletData === null || walletData === void 0 ? void 0 : walletData.brand) === null || _b === void 0 ? void 0 : _b.imageId) {
            return renderTemplate('walletConnectUrl', walletData.brand.imageId);
        }
    }
    catch (err) {
        logger.error(err);
    }
    return '';
};
const getDefaultWalletIconUrl = () => {
    try {
        return renderTemplate('iconicUrl', 'defaultwallet');
    }
    catch (err) {
        logger.error(err);
    }
    return '';
};

export { getDefaultWalletIconUrl, getWalletIconUrl };
