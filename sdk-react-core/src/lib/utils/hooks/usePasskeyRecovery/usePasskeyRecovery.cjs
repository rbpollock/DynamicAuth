'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');
var constants = require('../../../views/Passkey/PasskeyRecovery/constants.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getAuthToken = require('../../functions/getAuthToken/getAuthToken.cjs');
var isTurnkeyEnabled = require('../../functions/isTurnkeyEnabled/isTurnkeyEnabled.cjs');
var removeElementById = require('../../functions/removeElementById/removeElementById.cjs');
var useEmbeddedWallet = require('../useEmbeddedWallet/useEmbeddedWallet.cjs');

// Hook exposed to customers and used internally to trigger passkey recovery
const usePasskeyRecovery = () => {
    const { projectSettings, onboardingOnlyJwt, setPrimaryWalletId, walletConnectorOptions, internalSetShowAuthFlow, internalEvents, } = useInternalDynamicContext.useInternalDynamicContext();
    const { userHasEmbeddedWallet } = useEmbeddedWallet.useEmbeddedWallet();
    const { setView } = ViewContext.useViewContext();
    const initPasskeyRecoveryProcess = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const jwt = getAuthToken.getAuthToken();
        if (!jwt) {
            throw new Error('User is not logged in');
        }
        if (!isTurnkeyEnabled.isTurnkeyEnabled(projectSettings)) {
            throw new Error('Passkey embedded wallet is not enabled. Go to the dashboard and make sure to have both Turnkey/Passkey Embedded wallets and at least one EVM network enabled. Also, check if EthereumWalletConnectors is in the  DynamicContextProvider > settings > walletConnectors.');
        }
        if (!userHasEmbeddedWallet()) {
            throw new Error('Passkey embedded wallet not found');
        }
        // if user clicks twice to recover,
        // since the iframe can still exist it can't be recreated by Turnkey
        // and throws an error
        removeElementById.removeElementById(constants.iframeContainerId);
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

exports.usePasskeyRecovery = usePasskeyRecovery;
