'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var utils = require('@dynamic-labs/utils');
var isWalletLinked = require('../../../functions/isWalletLinked/isWalletLinked.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var errors = require('../../../constants/errors.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('@dynamic-labs/wallet-book');
require('../../../constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');

const useSyncPrimaryWallet = (canSync = true) => {
    const { setShowAuthFlow, isAuthenticated, authMode, connectWallet, handleLogOut, multiWalletWidgetState, primaryWallet, secondaryWallets, setMultiWalletWidgetState, setPrimaryWallet, setShowWidgetStatePopup, showLockedWalletView, showWidgetStatePopup, setSelectedWalletWithAction, } = useInternalDynamicContext.useInternalDynamicContext();
    const { setView } = ViewContext.useViewContext();
    const handlePrimaryWalletNotActive = React.useCallback((connectedAddress) => {
        if (!primaryWallet)
            return;
        if (authMode === 'connect-only') {
            connectWallet(primaryWallet.connector);
            return;
        }
        const connectedWalletIsLinked = isWalletLinked.isWalletLinked(connectedAddress, [
            primaryWallet,
            ...secondaryWallets,
        ]);
        if (!connectedWalletIsLinked) {
            // MM returns all connected wallets now, so we need to check if the active account
            // is not in the same wallet as the primary wallet before automatically switching
            // to a connected secondary wallet as it was causing an infinite loop
            const connectedSecondaryWallet = secondaryWallets.find((wallet) => wallet.connected && primaryWallet.connector !== wallet.connector);
            if (!connectedSecondaryWallet) {
                setSelectedWalletWithAction({
                    action: 'select',
                    wallet: primaryWallet,
                });
                setMultiWalletWidgetState('awaiting_account_switch', 'primary_not_connected');
                return;
            }
            setPrimaryWallet(connectedSecondaryWallet.id);
            return;
        }
        if (showWidgetStatePopup) {
            // user updates wallet address in the widget
            setShowWidgetStatePopup(false);
            setMultiWalletWidgetState('awaiting_account_switch', 'switching_primary');
            return;
        }
        // !showWidgetStatePopup - user comes back to site with different wallet address
        const connectedWallet = secondaryWallets.find((wallet) => wallet.connected &&
            walletConnectorCore.isSameAddress(wallet.address, connectedAddress, wallet.chain));
        if (connectedWallet) {
            setPrimaryWallet(connectedWallet.id);
            return;
        }
        setMultiWalletWidgetState('awaiting_account_switch', 'primary_not_connected');
    }, [
        primaryWallet,
        authMode,
        secondaryWallets,
        showWidgetStatePopup,
        setMultiWalletWidgetState,
        setPrimaryWallet,
        setShowWidgetStatePopup,
        connectWallet,
    ]);
    React.useEffect(() => {
        if (!canSync)
            return;
        if (!primaryWallet || multiWalletWidgetState !== 'idle')
            return;
        if (primaryWallet.connector.connectedChain === 'FLOW')
            return;
        if (primaryWallet.connector.connectedChain === 'COSMOS')
            return;
        primaryWallet.connector
            .getConnectedAccounts()
            .then((accounts) => {
            logger.logger.debug('Sync primary wallet - getConnectedAccounts', {
                accounts,
                primaryWalletAddress: primaryWallet.address,
            });
            const [connectedAddress] = accounts;
            if (!connectedAddress) {
                throw new utils.DynamicError('Missing wallet address', errors.MISSING_ADDRESS_ERROR);
            }
            if (walletConnectorCore.isSameAddress(connectedAddress, primaryWallet.address, primaryWallet.chain)) {
                return;
            }
            handlePrimaryWalletNotActive(connectedAddress);
        })
            .catch((e) => {
            const connectedSecondaryWallet = secondaryWallets.find((wallet) => wallet.connected);
            if (connectedSecondaryWallet) {
                setPrimaryWallet(connectedSecondaryWallet.id);
                return;
            }
            // user is logged in (has valid jwt), but no wallet is connected
            if (isAuthenticated && e.code === errors.MISSING_ADDRESS_ERROR) {
                if (!primaryWallet.connector.isInstalledOnBrowser()) {
                    handleLogOut();
                    return;
                }
                if (showLockedWalletView) {
                    setShowAuthFlow(true);
                    setView('wallet-locked-view');
                }
            }
        });
    }, [
        primaryWallet,
        secondaryWallets,
        multiWalletWidgetState,
        setMultiWalletWidgetState,
        handlePrimaryWalletNotActive,
        handleLogOut,
        setPrimaryWallet,
        canSync,
        setView,
        setShowAuthFlow,
        authMode,
        isAuthenticated,
        showLockedWalletView,
    ]);
};

exports.useSyncPrimaryWallet = useSyncPrimaryWallet;
