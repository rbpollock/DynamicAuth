'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var utils = require('@dynamic-labs/utils');
var UserWalletsContext = require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
var api = require('../../../data/api.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var localStorage = require('../../constants/localStorage.cjs');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var useLocalStorage = require('../../../shared/utils/hooks/useLocalStorage/useLocalStorage.cjs');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var shouldManuallyReconnectOnRefresh = require('../../functions/shouldManuallyReconnectOnRefresh/shouldManuallyReconnectOnRefresh.cjs');
var getWalletProvider = require('../../functions/getWalletProvider/getWalletProvider.cjs');
var updateUserWalletsFromConnectedWallets = require('./updateUserWalletsFromConnectedWallets/updateUserWalletsFromConnectedWallets.cjs');

const useConnectWallet = ({ authMode, clearPrimaryWalletId, enableVisitTrackingOnConnectOnly, environmentId, primaryWalletId, setPrimaryWalletId, walletConnectorOptions, onDisconnect, onBeforeConnectSuccessConfirmation, setShowAuthFlow, isBridgeFlow, }) => {
    const [connectedWalletsInfo, setConnectedWalletsInfo, removeConnectedWalletsInfo,] = useLocalStorage.useLocalStorage(localStorage.CONNECTED_WALLETS_INFO, []);
    const [connectedWallets, _setConnectedWallets] = React.useState([]);
    const { setUserWallets } = UserWalletsContext.useInternalUserWallets();
    /** This wrapper is to ensure userWallets is always properly updated alongside connectedWallets */
    const setConnectedWallets = (newWallets) => {
        _setConnectedWallets(newWallets);
        setUserWallets((userWallets) => updateUserWalletsFromConnectedWallets.updateUserWalletsFromConnectedWallets(userWallets, newWallets));
    };
    const disconnectWallet = React.useCallback((walletId) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const walletToDisconnect = connectedWallets.find((wallet) => wallet.id === walletId);
        yield (walletToDisconnect === null || walletToDisconnect === void 0 ? void 0 : walletToDisconnect.connector.endSession());
        const updatedConnectedWalletsInfo = connectedWalletsInfo.filter((wallet) => wallet.id !== walletId);
        setConnectedWalletsInfo(updatedConnectedWalletsInfo);
        onDisconnect(updatedConnectedWalletsInfo, walletToDisconnect);
        if (walletId !== primaryWalletId) {
            return;
        }
        const hasConnectedWallet = updatedConnectedWalletsInfo.length > 0;
        if (isBridgeFlow || !hasConnectedWallet) {
            clearPrimaryWalletId();
        }
        else {
            setPrimaryWalletId(updatedConnectedWalletsInfo[0].id);
        }
    }), [
        clearPrimaryWalletId,
        connectedWallets,
        connectedWalletsInfo,
        isBridgeFlow,
        onDisconnect,
        primaryWalletId,
        setConnectedWalletsInfo,
        setPrimaryWalletId,
    ]);
    // The function to update and define the connectedWallets list.
    // It uses walletConnector to get the current wallet address and network
    // The address and network in the runtime are updated by the event listeners
    // The event listeners are updating `connectedWallets` list.
    // It should be called on the first render and when connectedWalletsInfo updates
    const updateConnectedWalletsList = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const walletConnectors = walletConnectorOptions.map((wallet) => wallet.walletConnector);
        if (!walletConnectors.length) {
            return;
        }
        const updatedConnectedWallets = (yield Promise.all(connectedWalletsInfo.map((storedConnectedWalletInfo) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            const walletConnector = walletConnectorCore.getWalletConnectorByKey(walletConnectors, storedConnectedWalletInfo.walletConnectorKey);
            if (!walletConnector) {
                walletConnectorCore.logger.error('Could not find walletConnector: ' +
                    storedConnectedWalletInfo.walletConnectorKey);
                yield disconnectWallet(storedConnectedWalletInfo.id);
                return null;
            }
            const [walletAddress] = yield walletConnector.getConnectedAccounts();
            if (!walletAddress) {
                yield disconnectWallet(storedConnectedWalletInfo.id);
                return null;
            }
            const walletNetwork = yield walletConnector.getNetwork();
            const walletChain = walletConnector.connectedChain;
            const walletObject = {
                address: walletAddress || '',
                authenticated: false,
                chain: walletChain || '',
                connected: true,
                connector: walletConnector,
                id: storedConnectedWalletInfo.id,
                network: walletNetwork,
            };
            return walletObject;
        })))).filter((wallet) => Boolean(wallet));
        setConnectedWallets(updatedConnectedWallets);
    }), [connectedWalletsInfo, disconnectWallet, walletConnectorOptions]);
    // Generate the connectedWallets list when connectedWalletsInfo (localStorage) or memoized wallet connector updates
    React.useEffect(() => {
        updateConnectedWalletsList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connectedWalletsInfo, walletConnectorOptions]);
    const getNextIdAvailable = React.useCallback((currentWallets) => {
        const existingIds = currentWallets.map(({ id }) => id);
        const sortedIds = existingIds
            .map((id) => Number(id.replace('connect-wallet-', '')))
            .sort((a, b) => a - b);
        for (let i = 0; i < sortedIds.length; i++) {
            if (sortedIds[i] !== i) {
                return i;
            }
        }
        return sortedIds.length;
    }, []);
    const updateConnectedWalletById = React.useCallback((walletId, walletObject) => {
        const clonedConnectedWalletsList = [...connectedWallets];
        const connectedWalletIndex = clonedConnectedWalletsList.findIndex((connectedWallet) => connectedWallet.id === walletId);
        if (connectedWalletIndex > -1) {
            clonedConnectedWalletsList[connectedWalletIndex] = Object.assign(Object.assign({}, clonedConnectedWalletsList[connectedWalletIndex]), walletObject);
            setConnectedWallets(clonedConnectedWalletsList);
        }
    }, [connectedWallets]);
    // Keeps connected wallet data inside localStorage
    const applyConnectedWalletToStore = ({ walletId, walletConnectorKey, walletChain, provider, }) => {
        const updatedConnectedWalletsInfo = [...connectedWalletsInfo];
        updatedConnectedWalletsInfo.push({
            id: walletId,
            provider,
            walletChain,
            walletConnectorKey,
        });
        setConnectedWalletsInfo(updatedConnectedWalletsInfo);
    };
    // Updates connected wallet (network and address) and verifies connected wallet connection
    const refreshConnectedWallet = (walletId, walletConnector) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (shouldManuallyReconnectOnRefresh.shouldManuallyReconnectOnRefresh(walletConnector)) {
            yield walletConnector.connect();
        }
        const currentWalletConnectorAddress = yield walletConnector.fetchPublicAddress();
        if (!currentWalletConnectorAddress) {
            return;
        }
        if (onBeforeConnectSuccessConfirmation) {
            const shouldProceedWithConnection = yield onBeforeConnectSuccessConfirmation({
                address: currentWalletConnectorAddress,
                chain: walletConnector.connectedChain,
                connector: walletConnector,
            });
            if (!shouldProceedWithConnection) {
                walletConnectorCore.logger.info('Connection was not established because onBeforeConnectSuccessConfirmation returned false');
                disconnectWallet(walletId);
                setShowAuthFlow(false);
                return;
            }
        }
        const currentWalletConnectorNetwork = yield walletConnector.getNetwork();
        updateConnectedWalletById(walletId, {
            address: currentWalletConnectorAddress,
            network: currentWalletConnectorNetwork,
        });
    });
    const shouldSkipCreatingVisit = authMode === 'connect-only' && !enableVisitTrackingOnConnectOnly;
    const connectWallet = (walletConnector, fetchPublicAddressOpts, shouldCallCallback = true) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const walletAddress = yield walletConnector.fetchPublicAddress(fetchPublicAddressOpts);
        if (!walletAddress) {
            throw new utils.MissingPublicAddressError();
        }
        if (onBeforeConnectSuccessConfirmation && shouldCallCallback) {
            const shouldProceedWithConnection = yield onBeforeConnectSuccessConfirmation({
                address: walletAddress,
                chain: walletConnector.connectedChain,
                connector: walletConnector,
            });
            if (!shouldProceedWithConnection) {
                walletConnectorCore.logger.info('Connection was not established because onBeforeConnectSuccessConfirmation returned false');
                setShowAuthFlow(false);
                return;
            }
        }
        const walletId = `connect-wallet-${getNextIdAvailable(connectedWalletsInfo)}`;
        if (!primaryWalletId) {
            setPrimaryWalletId(walletId);
        }
        const walletChain = walletConnector.connectedChain;
        const isWalletStored = connectedWalletsInfo.some(({ walletConnectorKey: storedWalletConnectorKey }) => storedWalletConnectorKey === walletConnector.key);
        if (isWalletStored) {
            yield updateConnectedWalletsList();
        }
        else {
            applyConnectedWalletToStore({
                provider: getWalletProvider.getWalletProvider(walletConnector),
                walletAddress: walletAddress,
                walletChain,
                walletConnectorKey: walletConnector.key,
                walletId,
            });
            if (!shouldSkipCreatingVisit) {
                // send information to backend to kick off background jobs
                // so verify/sign on the next step could go by more quickly
                // this is async work, but DO NOT AWAIT
                api.createVisit({
                    authMode,
                    chain: walletChain || '',
                    environmentId,
                    publicWalletAddress: walletAddress,
                    walletName: walletConnector.name,
                    walletProvider: getWalletProvider.getWalletProvider(walletConnector),
                });
            }
        }
        return { address: walletAddress, id: walletId };
    });
    const getConnectedWalletById = React.useCallback((walletId) => connectedWallets.find((wallet) => wallet.id === walletId), [connectedWallets]);
    return {
        connectWallet,
        connectedWallets,
        connectedWalletsInfo,
        disconnectWallet,
        getConnectedWalletById,
        refreshConnectedWallet,
        removeConnectedWalletsInfo,
    };
};

exports.useConnectWallet = useConnectWallet;
