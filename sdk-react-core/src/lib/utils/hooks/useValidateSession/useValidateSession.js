import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useState } from 'react';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import { LocalStorage } from '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';

const useValidateSession = ({ handleLogOut, user, authToken, walletConnectV1Bridge, walletConnectors, wcVersion, }) => {
    const [hasLoggedOut, setHasLoggedOut] = useState(false);
    if (hasLoggedOut) {
        return;
    }
    const logout = (reason, params) => __awaiter(void 0, void 0, void 0, function* () {
        setHasLoggedOut(true);
        logger.debug(`Logging out - Reason: ${reason}`, Object.assign({}, params));
        yield handleLogOut();
    });
    const handleUserDataOutOfSync = () => __awaiter(void 0, void 0, void 0, function* () {
        if (authToken || !user) {
            return;
        }
        yield logout('user data out of sync', {
            authToken,
            user,
        });
    });
    const handleConnectorBridgeOutOfSync = () => __awaiter(void 0, void 0, void 0, function* () {
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
    const hasWCV1Data = LocalStorage.getKeys().some((key) => key.startsWith('walletconnect-') || key.startsWith('walletlink'));
    const hasWCV2Data = LocalStorage.getKeys().some((key) => key.startsWith('wc@2'));
    const handleConnectorVersionOutOfSync = () => __awaiter(void 0, void 0, void 0, function* () {
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

export { useValidateSession };
