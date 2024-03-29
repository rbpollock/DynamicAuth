import { getWalletBookWallet } from './getWalletBookWallet.js';

const getWalletPrimaryColor = (walletBook, walletKey) => {
    var _a;
    const walletData = getWalletBookWallet(walletBook, walletKey);
    return (_a = walletData === null || walletData === void 0 ? void 0 : walletData.brand) === null || _a === void 0 ? void 0 : _a.primaryColor;
};

export { getWalletPrimaryColor };
