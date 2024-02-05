'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
var useWalletConnectorEvent = require('../useWalletConnectorEvent/useWalletConnectorEvent.cjs');

const useWalletEventListeners = ({ handleLogOut, multiWallet, multiWalletWidgetState, primaryWallet, secondaryWallets, selectedWalletConnector, selectedWalletWithAction, setSelectedWalletConnectorKey, setSelectedWalletWithAction, setMultiWalletWidgetState, user, setPrimaryWalletId, authMode, refreshConnectedWallet, }) => {
    const [loadingNetwork, setLoadingNetwork] = React.useState(true);
    const [network, setNetwork] = React.useState(undefined);
    React.useEffect(() => {
        const fetchNetwork = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            try {
                if (!(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector))
                    return;
                const network = yield primaryWallet.connector.getNetwork();
                setNetwork(network);
            }
            catch (error) {
                /* istanbul ignore next */
                logger.logger.debug(error);
            }
            finally {
                setLoadingNetwork(false);
            }
        });
        fetchNetwork();
    }, [primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector]);
    useWalletConnectorEvent.useWalletConnectorEvent(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, 'disconnect', () => {
        logger.logger.debug('primary wallet disconnect');
        handleLogOut();
    });
    useWalletConnectorEvent.useWalletConnectorEvent(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, 'chainChange', ({ chain }) => {
        logger.logger.debug('primary wallet chain change', { chain });
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
    useWalletConnectorEvent.useWalletConnectorEvent(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, 'accountChange', ({ accounts }) => {
        logger.logger.debug('primary wallet account change', {
            accounts,
        });
        // change the api here
        if (!primaryWallet)
            return;
        const [newAddress] = accounts;
        const changedAddress = !walletConnectorCore.isSameAddress(newAddress, primaryWallet.address, primaryWallet.chain);
        if (changedAddress && authMode === 'connect-only') {
            refreshConnectedWallet(primaryWallet.id, primaryWallet.connector);
            return;
        }
        const newWallet = secondaryWallets.find((wallet) => walletConnectorCore.isSameAddress(wallet.address, newAddress, wallet.chain));
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
            logger.logger.error(`Unexpected multiWalletWidgetState (${multiWalletWidgetState}) and onAccountChange combination. Resetting state to idle.`);
            setMultiWalletWidgetState('idle');
        }
    });
    const uniqueNonPrimaryWallets = React.useMemo(() => {
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
    useWalletConnectorEvent.useWalletConnectorEvent(uniqueNonPrimaryWallets, 'accountChange', (_, changedConnector) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        logger.logger.debug('secondary wallet account change');
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
    useWalletConnectorEvent.useWalletConnectorEvent(uniqueNonPrimaryWallets, 'chainChange', (_, changedConnector) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        logger.logger.debug('secondary wallet chain change');
        // Get all wallets with this connector
        const affectedWallets = secondaryWallets.filter(({ connector }) => connector.key === changedConnector.key);
        for (const wallet of affectedWallets)
            refreshConnectedWallet(wallet.id, wallet.connector);
    }));
    useWalletConnectorEvent.useWalletConnectorEvent(uniqueNonPrimaryWallets, 'disconnect', (affectedConnector) => {
        logger.logger.debug('secondary wallet disconnect');
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
    const handleAccountChangeWhenAwaitingAccountSwitch = React.useCallback((isPrimaryWallet, newAddress) => {
        const linkedSecondaryWallet = secondaryWallets.find((wallet) => walletConnectorCore.isSameAddress(wallet.address, newAddress, wallet.chain));
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

exports.useWalletEventListeners = useWalletEventListeners;
