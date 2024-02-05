'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
var useThrottle = require('../../../shared/utils/hooks/useThrottle/useThrottle.cjs');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getWalletIdentifier = require('../../functions/getWalletIdentifier/getWalletIdentifier.cjs');
var isWalletConnected = require('../../functions/isWalletConnected/isWalletConnected.cjs');
var useEventListener = require('../useEventListener/useEventListener.cjs');
var useWalletConnectorEvent = require('../useWalletConnectorEvent/useWalletConnectorEvent.cjs');

/**
 * For the given wallet array, this returns an object mapping from each wallet's
 * identifier to whether its connector recognizes it as currently connected or not.
 */
const getConnectedWalletsMap = (wallets) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const newMap = {};
    yield Promise.all(wallets.map((wallet) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        newMap[getWalletIdentifier.getWalletIdentifier(wallet)] = yield isWalletConnected.isWalletConnected(wallet);
    })));
    return newMap;
});
const useWalletsConnectionState = (wallets) => {
    const [connectedWalletsMap, setConnectedWalletsMap] = React.useState({});
    /**
     * Whether the connection map has been loaded off of the current wallet array.
     * Always false for empty wallet arrays.
     */
    const didConnectedStateLoad = React.useRef(false);
    /**
     * When an accountChanged event is raised, we store the incoming wallet here
     * until it is finally reflected in the wallets prop.
     * During this time we do not update the connectedWalletsMap.
     * This way, we avoid setting the connected state of the primary wallet
     * to false due to a state transition delay.
     */
    const incomingWalletSwitchAddress = React.useRef(undefined);
    const computeConnectedStateForWallets = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
            const accountSwitchIsComplete = wallets.some((wallet) => walletConnectorCore.isSameAddress(incomingWalletSwitchAddress.current, wallet.address, wallet.chain));
            if (accountSwitchIsComplete)
                incomingWalletSwitchAddress.current = undefined;
            else
                return;
        }
        setConnectedWalletsMap(newMap);
    }), [wallets]);
    /** A string that is unique for each possible value of the wallets prop */
    const walletsHash = wallets.map(getWalletIdentifier.getWalletIdentifier).join('-');
    const connectors = wallets.map(({ connector }) => connector);
    // getConnectedAccounts trigger accountChanged event for Phantom EVM wallets
    // which causes a loop of calls to this function, so we throttle it
    const handleEvent = useThrottle.useThrottle(() => {
        if (walletsHash)
            computeConnectedStateForWallets();
    }, 1000);
    const onAccountChange = ({ accounts }) => {
        incomingWalletSwitchAddress.current = accounts[0];
        handleEvent();
    };
    useWalletConnectorEvent.useWalletConnectorEvent(connectors, 'accountChange', onAccountChange);
    useWalletConnectorEvent.useWalletConnectorEvent(connectors, 'disconnect', handleEvent);
    useWalletConnectorEvent.useWalletConnectorEvent(connectors, 'chainChange', handleEvent);
    React.useEffect(() => {
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
    useEventListener.useEventListener('focus', computeConnectedStateForWallets);
    return {
        connectedWalletsMap,
        didConnectedStateLoad,
    };
};

exports.useWalletsConnectionState = useWalletsConnectionState;
