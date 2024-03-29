import { getWalletConnectorNetworks } from '../getWalletConnectorNetworks/getWalletConnectorNetworks.js';

const isSupportedNetwork = ({ walletConnector, network }) => {
    const supportedNetworks = getWalletConnectorNetworks(walletConnector);
    if (!supportedNetworks.length) {
        return true;
    }
    const isCurrentNetworkSupported = supportedNetworks.some(({ chainId }) => String(chainId) === String(network));
    return isCurrentNetworkSupported;
};

export { isSupportedNetwork };
