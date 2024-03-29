import { isMobile } from '@dynamic-labs/utils';

const getWalletProvider = (connector) => {
    if (connector.isEmbeddedWallet) {
        return 'embeddedWallet';
    }
    if (connector.canConnectViaCustodialService) {
        return 'custodialService';
    }
    if (connector.isInstalledOnBrowser()) {
        return 'browserExtension';
    }
    return isMobile() ? 'deepLink' : 'qrCode';
};

export { getWalletProvider };
