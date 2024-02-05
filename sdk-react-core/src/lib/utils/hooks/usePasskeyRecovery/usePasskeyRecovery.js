import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import { iframeContainerId } from '../../../views/Passkey/PasskeyRecovery/constants.js';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getAuthToken } from '../../functions/getAuthToken/getAuthToken.js';
import { isTurnkeyEnabled } from '../../functions/isTurnkeyEnabled/isTurnkeyEnabled.js';
import { removeElementById } from '../../functions/removeElementById/removeElementById.js';
import { useEmbeddedWallet } from '../useEmbeddedWallet/useEmbeddedWallet.js';

// Hook exposed to customers and used internally to trigger passkey recovery
const usePasskeyRecovery = () => {
    const { projectSettings, onboardingOnlyJwt, setPrimaryWalletId, walletConnectorOptions, internalSetShowAuthFlow, internalEvents, } = useInternalDynamicContext();
    const { userHasEmbeddedWallet } = useEmbeddedWallet();
    const { setView } = useViewContext();
    const initPasskeyRecoveryProcess = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const jwt = getAuthToken();
        if (!jwt) {
            throw new Error('User is not logged in');
        }
        if (!isTurnkeyEnabled(projectSettings)) {
            throw new Error('Passkey embedded wallet is not enabled. Go to the dashboard and make sure to have both Turnkey/Passkey Embedded wallets and at least one EVM network enabled. Also, check if EthereumWalletConnectors is in the  DynamicContextProvider > settings > walletConnectors.');
        }
        if (!userHasEmbeddedWallet()) {
            throw new Error('Passkey embedded wallet not found');
        }
        // if user clicks twice to recover,
        // since the iframe can still exist it can't be recreated by Turnkey
        // and throws an error
        removeElementById(iframeContainerId);
        internalSetShowAuthFlow(true);
        setView('passkey-recovery-start');
        return new Promise((resolve, reject) => {
            internalEvents.current.once('passkeyRecoveryCompleted', (wallet) => resolve(wallet));
            internalEvents.current.once('passkeyRecoveryFailed', (error) => reject(error));
        });
    }), [
        internalEvents,
        internalSetShowAuthFlow,
        onboardingOnlyJwt,
        projectSettings,
        setPrimaryWalletId,
        setView,
        walletConnectorOptions,
    ]);
    return {
        initPasskeyRecoveryProcess,
    };
};

export { usePasskeyRecovery };
