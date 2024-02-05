import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { isSameAddress } from '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import { useWalletConnectorEvent } from '../useWalletConnectorEvent/useWalletConnectorEvent.js';

const useWalletEventListeners = ({ handleLogOut, multiWallet, multiWalletWidgetState, primaryWallet, secondaryWallets, selectedWalletConnector, selectedWalletWithAction, setSelectedWalletConnectorKey, setSelectedWalletWithAction, setMultiWalletWidgetState, user, setPrimaryWalletId, authMode, refreshConnectedWallet, }) => {
    const [loadingNetwork, setLoadingNetwork] = useState(true);
    const [network, setNetwork] = useState(undefined);
    useEffect(() => {
        const fetchNetwork = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (!(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector))
                    return;
                const network = yield primaryWallet.connector.getNetwork();
                setNetwork(network);
            }
            catch (error) {
                /* istanbul ignore next */
                logger.debug(error);
            }
            finally {
                setLoadingNetwork(false);
            }
        });
        fetchNetwork();
    }, [primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector]);
    useWalletConnectorEvent(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, 'disconnect', () => {
        logger.debug('primary wallet disconnect');
        handleLogOut();
    });
    useWalletConnectorEvent(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, 'chainChange', ({ chain }) => {
        logger.debug('primary wallet chain change', { chain });
        if (!primaryWallet) {
            return;
        }
        refreshConnectedWallet(primaryWallet.id, primaryWallet.connector);
        // https://linear.app/dynamic-labs/issue/QNTM-84/breaking-change-rename-network-to-primarywalletnetwork
        if (primaryWallet.chain === 'starknet') {
            setNetwork(chain);
        }
        else {
            setNetwork(parseInt(chain));
        }
    });
    useWalletConnectorEvent(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, 'accountChange', ({ accounts }) => {
        logger.debug('primary wallet account change', {
            accounts,
        });
        // change the api here
        if (!primaryWallet)
            return;
        const [newAddress] = accounts;
        const changedAddress = !isSameAddress(newAddress, primaryWallet.address, primaryWallet.chain);
        if (changedAddress && authMode === 'connect-only') {
            refreshConnectedWallet(primaryWallet.id, primaryWallet.connector);
            return;
        }
        const newWallet = secondaryWallets.find((wallet) => isSameAddress(wallet.address, newAddress, wallet.chain));
        if (!changedAddress) {
            setMultiWalletWidgetState('idle');
        }
        else if (!multiWallet) {
            setSelectedWalletWithAction({
                action: 'select',
                wallet: primaryWallet,
            });
            setMultiWalletWidgetState('awaiting_account_switch', 'primary_not_connected');
            return;
        }
        else if (multiWalletWidgetState === 'awaiting_account_switch') {
            handleAccountChangeWhenAwaitingAccountSwitch(true, newAddress);
        }
        else if (multiWalletWidgetState === 'idle' && newWallet) {
            setPrimaryWalletId(newWallet.id);
        }
        else if (multiWalletWidgetState === 'idle' && !newWallet) {
            if (user) {
                setMultiWalletWidgetState('detected_new_wallet');
                setSelectedWalletConnectorKey(primaryWallet.connector.key);
                return;
            }
        }
        else {
            logger.error(`Unexpected multiWalletWidgetState (${multiWalletWidgetState}) and onAccountChange combination. Resetting state to idle.`);
            setMultiWalletWidgetState('idle');
        }
    });
    const uniqueNonPrimaryWallets = useMemo(() => {
        const primaryConnector = primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector;
        const secondaryConnectors = secondaryWallets.map(({ connector }) => connector);
        const allWalletConnectors = new Set([
            ...secondaryConnectors,
            primaryConnector,
            selectedWalletConnector,
        ].filter((connector) => Boolean(connector)));
        if (primaryConnector) {
            allWalletConnectors.delete(primaryConnector);
        }
        return Array.from(allWalletConnectors);
    }, [secondaryWallets, selectedWalletConnector, primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector]);
    useWalletConnectorEvent(uniqueNonPrimaryWallets, 'accountChange', (_, changedConnector) => __awaiter(void 0, void 0, void 0, function* () {
        logger.debug('secondary wallet account change');
        if (authMode === 'connect-only' && secondaryWallets.length) {
            const affectedWallets = secondaryWallets.filter(({ connector }) => connector.key === changedConnector.key);
            for (const wallet of affectedWallets)
                refreshConnectedWallet(wallet.id, wallet.connector);
            return;
        }
        if (multiWalletWidgetState === 'awaiting_account_switch') {
            handleAccountChangeWhenAwaitingAccountSwitch(false, (selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet.address) || '');
        }
    }));
    useWalletConnectorEvent(uniqueNonPrimaryWallets, 'chainChange', (_, changedConnector) => __awaiter(void 0, void 0, void 0, function* () {
        logger.debug('secondary wallet chain change');
        // Get all wallets with this connector
        const affectedWallets = secondaryWallets.filter(({ connector }) => connector.key === changedConnector.key);
        for (const wallet of affectedWallets)
            refreshConnectedWallet(wallet.id, wallet.connector);
    }));
    useWalletConnectorEvent(uniqueNonPrimaryWallets, 'disconnect', (affectedConnector) => {
        logger.debug('secondary wallet disconnect');
        // argent sends a disconnect event when the user adds a new account
        if (authMode === 'connect-only') {
            // Get all wallets with this connector
            const affectedWallets = secondaryWallets.filter(({ connector }) => connector.key === affectedConnector.key);
            for (const wallet of affectedWallets) {
                if (wallet.connector.key === 'argentx')
                    refreshConnectedWallet(wallet.id, wallet.connector);
            }
        }
    });
    const handleAccountChangeWhenAwaitingAccountSwitch = useCallback((isPrimaryWallet, newAddress) => {
        const linkedSecondaryWallet = secondaryWallets.find((wallet) => isSameAddress(wallet.address, newAddress, wallet.chain));
        // this means the user is linking a new account, so we need proof of ownership...
        if (!linkedSecondaryWallet) {
            setMultiWalletWidgetState('awaiting_signature', undefined, 'linking_new_wallet');
            if (isPrimaryWallet && primaryWallet) {
                setSelectedWalletConnectorKey(primaryWallet.connector.key);
            }
            return;
        }
        // ...otherwise, the user is switching primary accounts betweeen the same wallet
        setSelectedWalletWithAction(null);
        setPrimaryWalletId(linkedSecondaryWallet.id);
        setMultiWalletWidgetState('idle');
    }, [
        setMultiWalletWidgetState,
        primaryWallet,
        secondaryWallets,
        setSelectedWalletConnectorKey,
        setSelectedWalletWithAction,
        setPrimaryWalletId,
    ]);
    return {
        loadingNetwork,
        network,
        setNetwork,
    };
};

export { useWalletEventListeners };
