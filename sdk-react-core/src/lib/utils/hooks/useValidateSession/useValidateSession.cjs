'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
var localStorage = require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');

const useValidateSession = ({ handleLogOut, user, authToken, walletConnectV1Bridge, walletConnectors, wcVersion, }) => {
    const [hasLoggedOut, setHasLoggedOut] = React.useState(false);
    if (hasLoggedOut) {
        return;
    }
    const logout = (reason, params) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        setHasLoggedOut(true);
        logger.logger.debug(`Logging out - Reason: ${reason}`, Object.assign({}, params));
        yield handleLogOut();
    });
    const handleUserDataOutOfSync = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (authToken || !user) {
            return;
        }
        yield logout('user data out of sync', {
            authToken,
            user,
        });
    });
    const handleConnectorBridgeOutOfSync = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        let currentWalletConnectV1Bridge;
        if (walletConnectors) {
            for (const connector of walletConnectors) {
                if (!connector.isWalletConnect) {
                    continue;
                }
                const session = yield connector.getSession();
                const bridge = session && (session === null || session === void 0 ? void 0 : session.bridge);
                if (bridge) {
                    currentWalletConnectV1Bridge = bridge;
                    break;
                }
            }
        }
        if (!walletConnectV1Bridge ||
            !currentWalletConnectV1Bridge ||
            walletConnectV1Bridge === currentWalletConnectV1Bridge) {
            return;
        }
        yield logout('connector bridge out of sync', {
            newBridge: walletConnectV1Bridge,
            oldBridge: currentWalletConnectV1Bridge,
        });
    });
    // Pera Wallet uses WC v1 and sets a 'walletconnect' key in localStorage
    // so we can't just check for a key starting with 'walletconnect'
    const hasWCV1Data = localStorage.LocalStorage.getKeys().some((key) => key.startsWith('walletconnect-') || key.startsWith('walletlink'));
    const hasWCV2Data = localStorage.LocalStorage.getKeys().some((key) => key.startsWith('wc@2'));
    const handleConnectorVersionOutOfSync = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (!wcVersion ||
            (wcVersion === 2 && !hasWCV1Data) ||
            (wcVersion === 1 && !hasWCV2Data)) {
            return;
        }
        yield logout('connector version out of sync', {
            newVersion: wcVersion,
            oldVersion: hasWCV1Data ? 1 : 2,
        });
    });
    handleUserDataOutOfSync();
    handleConnectorBridgeOutOfSync();
    handleConnectorVersionOutOfSync();
};

exports.useValidateSession = useValidateSession;
