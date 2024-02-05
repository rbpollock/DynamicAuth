import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useState, useRef, useCallback, useEffect } from 'react';
import { isSameAddress } from '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import { useThrottle } from '../../../shared/utils/hooks/useThrottle/useThrottle.js';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getWalletIdentifier } from '../../functions/getWalletIdentifier/getWalletIdentifier.js';
import { isWalletConnected } from '../../functions/isWalletConnected/isWalletConnected.js';
import { useEventListener } from '../useEventListener/useEventListener.js';
import { useWalletConnectorEvent } from '../useWalletConnectorEvent/useWalletConnectorEvent.js';

/**
 * For the given wallet array, this returns an object mapping from each wallet's
 * identifier to whether its connector recognizes it as currently connected or not.
 */
const getConnectedWalletsMap = (wallets) => __awaiter(void 0, void 0, void 0, function* () {
    const newMap = {};
    yield Promise.all(wallets.map((wallet) => __awaiter(void 0, void 0, void 0, function* () {
        newMap[getWalletIdentifier(wallet)] = yield isWalletConnected(wallet);
    })));
    return newMap;
});
const useWalletsConnectionState = (wallets) => {
    const [connectedWalletsMap, setConnectedWalletsMap] = useState({});
    /**
     * Whether the connection map has been loaded off of the current wallet array.
     * Always false for empty wallet arrays.
     */
    const didConnectedStateLoad = useRef(false);
    /**
     * When an accountChanged event is raised, we store the incoming wallet here
     * until it is finally reflected in the wallets prop.
     * During this time we do not update the connectedWalletsMap.
     * This way, we avoid setting the connected state of the primary wallet
     * to false due to a state transition delay.
     */
    const incomingWalletSwitchAddress = useRef(undefined);
    const computeConnectedStateForWallets = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        didConnectedStateLoad.current = false;
        const newMap = yield getConnectedWalletsMap(wallets);
        if (Object.values(newMap).length === 0) {
            setConnectedWalletsMap({});
            return;
        }
        didConnectedStateLoad.current = true;
        // If there is an incoming account switch and it isn't yet finished,
        // we don't change the map to avoid setting it to a misleading state
        if (incomingWalletSwitchAddress.current) {
            const accountSwitchIsComplete = wallets.some((wallet) => isSameAddress(incomingWalletSwitchAddress.current, wallet.address, wallet.chain));
            if (accountSwitchIsComplete)
                incomingWalletSwitchAddress.current = undefined;
            else
                return;
        }
        setConnectedWalletsMap(newMap);
    }), [wallets]);
    /** A string that is unique for each possible value of the wallets prop */
    const walletsHash = wallets.map(getWalletIdentifier).join('-');
    const connectors = wallets.map(({ connector }) => connector);
    // getConnectedAccounts trigger accountChanged event for Phantom EVM wallets
    // which causes a loop of calls to this function, so we throttle it
    const handleEvent = useThrottle(() => {
        if (walletsHash)
            computeConnectedStateForWallets();
    }, 1000);
    const onAccountChange = ({ accounts }) => {
        incomingWalletSwitchAddress.current = accounts[0];
        handleEvent();
    };
    useWalletConnectorEvent(connectors, 'accountChange', onAccountChange);
    useWalletConnectorEvent(connectors, 'disconnect', handleEvent);
    useWalletConnectorEvent(connectors, 'chainChange', handleEvent);
    useEffect(() => {
        computeConnectedStateForWallets();
    }, 
    /**
     * This is using a custom key to force the useEffect to run only when the ids of the
     * wallets change.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [walletsHash]);
    /**
     * This is a workaround to detect when the user switches to another tab/extension
     * and then comes back to the dapp.
     */
    useEventListener('focus', computeConnectedStateForWallets);
    return {
        connectedWalletsMap,
        didConnectedStateLoad,
    };
};

export { useWalletsConnectionState };
