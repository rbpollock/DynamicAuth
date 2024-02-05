import { useCallback, useEffect } from 'react';
import { isSameAddress } from '@dynamic-labs/wallet-connector-core';
import { DynamicError } from '@dynamic-labs/utils';
import { isWalletLinked } from '../../../functions/isWalletLinked/isWalletLinked.js';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { MISSING_ADDRESS_ERROR } from '../../../constants/errors.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '@dynamic-labs/wallet-book';
import '../../../constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';

const useSyncPrimaryWallet = (canSync = true) => {
    const { setShowAuthFlow, isAuthenticated, authMode, connectWallet, handleLogOut, multiWalletWidgetState, primaryWallet, secondaryWallets, setMultiWalletWidgetState, setPrimaryWallet, setShowWidgetStatePopup, showLockedWalletView, showWidgetStatePopup, setSelectedWalletWithAction, } = useInternalDynamicContext();
    const { setView } = useViewContext();
    const handlePrimaryWalletNotActive = useCallback((connectedAddress) => {
        if (!primaryWallet)
            return;
        if (authMode === 'connect-only') {
            connectWallet(primaryWallet.connector);
            return;
        }
        const connectedWalletIsLinked = isWalletLinked(connectedAddress, [
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
            isSameAddress(wallet.address, connectedAddress, wallet.chain));
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
    useEffect(() => {
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
            logger.debug('Sync primary wallet - getConnectedAccounts', {
                accounts,
                primaryWalletAddress: primaryWallet.address,
            });
            const [connectedAddress] = accounts;
            if (!connectedAddress) {
                throw new DynamicError('Missing wallet address', MISSING_ADDRESS_ERROR);
            }
            if (isSameAddress(connectedAddress, primaryWallet.address, primaryWallet.chain)) {
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
            if (isAuthenticated && e.code === MISSING_ADDRESS_ERROR) {
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

export { useSyncPrimaryWallet };
