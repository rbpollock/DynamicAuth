import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useState, useCallback, useEffect } from 'react';
import { getWalletConnectorByKey, logger } from '@dynamic-labs/wallet-connector-core';
import { MissingPublicAddressError } from '@dynamic-labs/utils';
import { useInternalUserWallets } from '../../../context/UserWalletsContext/UserWalletsContext.js';
import { createVisit } from '../../../data/api.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { CONNECTED_WALLETS_INFO } from '../../constants/localStorage.js';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { useLocalStorage } from '../../../shared/utils/hooks/useLocalStorage/useLocalStorage.js';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { shouldManuallyReconnectOnRefresh } from '../../functions/shouldManuallyReconnectOnRefresh/shouldManuallyReconnectOnRefresh.js';
import { getWalletProvider } from '../../functions/getWalletProvider/getWalletProvider.js';
import { updateUserWalletsFromConnectedWallets } from './updateUserWalletsFromConnectedWallets/updateUserWalletsFromConnectedWallets.js';

const useConnectWallet = ({ authMode, clearPrimaryWalletId, enableVisitTrackingOnConnectOnly, environmentId, primaryWalletId, setPrimaryWalletId, walletConnectorOptions, onDisconnect, onBeforeConnectSuccessConfirmation, setShowAuthFlow, isBridgeFlow, }) => {
    const [connectedWalletsInfo, setConnectedWalletsInfo, removeConnectedWalletsInfo,] = useLocalStorage(CONNECTED_WALLETS_INFO, []);
    const [connectedWallets, _setConnectedWallets] = useState([]);
    const { setUserWallets } = useInternalUserWallets();
    /** This wrapper is to ensure userWallets is always properly updated alongside connectedWallets */
    const setConnectedWallets = (newWallets) => {
        _setConnectedWallets(newWallets);
        setUserWallets((userWallets) => updateUserWalletsFromConnectedWallets(userWallets, newWallets));
    };
    const disconnectWallet = useCallback((walletId) => __awaiter(void 0, void 0, void 0, function* () {
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
    const updateConnectedWalletsList = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const walletConnectors = walletConnectorOptions.map((wallet) => wallet.walletConnector);
        if (!walletConnectors.length) {
            return;
        }
        const updatedConnectedWallets = (yield Promise.all(connectedWalletsInfo.map((storedConnectedWalletInfo) => __awaiter(void 0, void 0, void 0, function* () {
            const walletConnector = getWalletConnectorByKey(walletConnectors, storedConnectedWalletInfo.walletConnectorKey);
            if (!walletConnector) {
                logger.error('Could not find walletConnector: ' +
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
    useEffect(() => {
        updateConnectedWalletsList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connectedWalletsInfo, walletConnectorOptions]);
    const getNextIdAvailable = useCallback((currentWallets) => {
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
    const updateConnectedWalletById = useCallback((walletId, walletObject) => {
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
    const refreshConnectedWallet = (walletId, walletConnector) => __awaiter(void 0, void 0, void 0, function* () {
        if (shouldManuallyReconnectOnRefresh(walletConnector)) {
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
                logger.info('Connection was not established because onBeforeConnectSuccessConfirmation returned false');
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
    const connectWallet = (walletConnector, fetchPublicAddressOpts, shouldCallCallback = true) => __awaiter(void 0, void 0, void 0, function* () {
        const walletAddress = yield walletConnector.fetchPublicAddress(fetchPublicAddressOpts);
        if (!walletAddress) {
            throw new MissingPublicAddressError();
        }
        if (onBeforeConnectSuccessConfirmation && shouldCallCallback) {
            const shouldProceedWithConnection = yield onBeforeConnectSuccessConfirmation({
                address: walletAddress,
                chain: walletConnector.connectedChain,
                connector: walletConnector,
            });
            if (!shouldProceedWithConnection) {
                logger.info('Connection was not established because onBeforeConnectSuccessConfirmation returned false');
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
                provider: getWalletProvider(walletConnector),
                walletAddress: walletAddress,
                walletChain,
                walletConnectorKey: walletConnector.key,
                walletId,
            });
            if (!shouldSkipCreatingVisit) {
                // send information to backend to kick off background jobs
                // so verify/sign on the next step could go by more quickly
                // this is async work, but DO NOT AWAIT
                createVisit({
                    authMode,
                    chain: walletChain || '',
                    environmentId,
                    publicWalletAddress: walletAddress,
                    walletName: walletConnector.name,
                    walletProvider: getWalletProvider(walletConnector),
                });
            }
        }
        return { address: walletAddress, id: walletId };
    });
    const getConnectedWalletById = useCallback((walletId) => connectedWallets.find((wallet) => wallet.id === walletId), [connectedWallets]);
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

export { useConnectWallet };
