import { useEffect } from 'react';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isProgrammableNetworkSwitchSupported } from '../../functions/isProgrammableNetworkSwitchSupported/isProgrammableNetworkSwitchSupported.js';
import { isSupportedNetwork } from '../../functions/isSupportedNetwork/isSupportedNetwork.js';
import { useIsLoggedIn } from '../useIsLoggedIn/useIsLoggedIn.js';

const useConnectedWalletsNetworkValidation = () => {
    const { connectedWallets, selectedWalletConnector, setSelectedWalletConnectorKey, setShowAuthFlow, bridgeChainsToConnect, sdkHasLoaded, } = useInternalDynamicContext();
    const { setView } = useViewContext();
    const isLoggedIn = useIsLoggedIn();
    useEffect(() => {
        /**
         * This check was added to prevent the "wrong network" modal from appearing
         * after logging out. It seems like on log out, there is a render where the
         * connectedWallets hasn't been cleared out yet, so the logic in this hook
         * runs and ends up showing the "wrong network" modal if the connected wallet
         * is on an unsupported network. by checking sdkHasLoaded, we prevent this
         * extra popup because handleLogOut flips sdkHasLoaded to false, so on the
         * next render it will already be false.
         */
        if (!sdkHasLoaded || !isLoggedIn) {
            return;
        }
        const connectedWalletsWithInvalidNetwork = connectedWallets.filter((connectedWallet) => {
            const isChainInWalletsToConnect = bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.some((walletToConnectByChain) => walletToConnectByChain.chain === connectedWallet.chain);
            const isSupported = isSupportedNetwork({
                network: connectedWallet.network,
                walletConnector: connectedWallet.connector,
            });
            return !isChainInWalletsToConnect && !isSupported;
        });
        if (connectedWalletsWithInvalidNetwork.length) {
            // If we found wallets that require a change of network
            // then, one by one, in the first one we require a change of network.
            const [connectedWalletWithInvalidNetwork] = connectedWalletsWithInvalidNetwork;
            // Keeps the first wallet connectedWallet in setSelectedWalletConnectorKey
            // This is required because NetworkNotSupported uses walletConnector to display wallet icon, address etc.
            if (connectedWalletWithInvalidNetwork.connector.name !==
                (selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name)) {
                setSelectedWalletConnectorKey(connectedWalletWithInvalidNetwork.connector.key);
            }
            const networkNotSupportedView = isProgrammableNetworkSwitchSupported(connectedWalletWithInvalidNetwork.connector)
                ? 'network-not-supported'
                : 'network-not-supported-manual';
            // Doesn't rerender if it's already true
            setShowAuthFlow(true);
            setView(networkNotSupportedView);
        }
    }, [
        sdkHasLoaded,
        connectedWallets,
        selectedWalletConnector,
        setSelectedWalletConnectorKey,
        setShowAuthFlow,
        setView,
        bridgeChainsToConnect,
        isLoggedIn,
    ]);
};

export { useConnectedWalletsNetworkValidation };
