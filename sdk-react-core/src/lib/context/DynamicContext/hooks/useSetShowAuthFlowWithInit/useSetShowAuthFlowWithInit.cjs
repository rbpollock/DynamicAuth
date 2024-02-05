'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/**
 * this hook wraps `setShowAuthFlow`. WalletConnect requires initialization
 * before we can connect a wallet. The goal here is that when a user clicks
 * on the "Connect your wallet" button, the SDK starts initializing WalletConnect
 * and will prime it for connection. This way, when the user clicks on the
 * "Connect" button in the WalletConnect modal, there is a uri ready to go
 * to immediately trigger the deep link on mobile
 */
const useSetShowAuthFlowWithInit = ({ setShowAuthFlow, walletConnectorOptions, user, isMultiWalletEnabled, isRenderingEmbeddedAuthFlow, }) => {
    const setShowAuthFlowWithInit = React.useCallback((value) => {
        var _a;
        if (value) {
            // Do not change state if:
            // 1. The user is already signed in and multi-wallet is not enabled
            // 2. An embedded auth flow is already being rendered
            if ((user && !isMultiWalletEnabled) ||
                isRenderingEmbeddedAuthFlow.current)
                return;
            (_a = walletConnectorOptions
                .find((wallet) => wallet.walletConnector.key === 'walletconnect')) === null || _a === void 0 ? void 0 : _a.walletConnector.init();
        }
        setShowAuthFlow(value);
    }, [setShowAuthFlow, walletConnectorOptions, user, isMultiWalletEnabled]);
    return setShowAuthFlowWithInit;
};

exports.useSetShowAuthFlowWithInit = useSetShowAuthFlowWithInit;
