'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isProgrammableNetworkSwitchSupported = require('../../functions/isProgrammableNetworkSwitchSupported/isProgrammableNetworkSwitchSupported.cjs');
var isSupportedNetwork = require('../../functions/isSupportedNetwork/isSupportedNetwork.cjs');
var useIsLoggedIn = require('../useIsLoggedIn/useIsLoggedIn.cjs');

const useConnectedWalletsNetworkValidation = () => {
    const { connectedWallets, selectedWalletConnector, setSelectedWalletConnectorKey, setShowAuthFlow, bridgeChainsToConnect, sdkHasLoaded, } = useInternalDynamicContext.useInternalDynamicContext();
    const { setView } = ViewContext.useViewContext();
    const isLoggedIn = useIsLoggedIn.useIsLoggedIn();
    React.useEffect(() => {
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
            const isSupported = isSupportedNetwork.isSupportedNetwork({
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
            const networkNotSupportedView = isProgrammableNetworkSwitchSupported.isProgrammableNetworkSwitchSupported(connectedWalletWithInvalidNetwork.connector)
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

exports.useConnectedWalletsNetworkValidation = useConnectedWalletsNetworkValidation;
