import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import { decodeJwt } from '../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import { findEmbeddedWalletFromVerifiedCredentials } from '../../functions/findEmbeddedWalletFromVerifiedCredentials/findEmbeddedWalletFromVerifiedCredentials.js';
import { findTurnkeyWallet } from '../../functions/findTurnkeyWallet/findTurnkeyWallet.js';
import '@dynamic-labs/multi-wallet';
import { getAuthToken } from '../../functions/getAuthToken/getAuthToken.js';
import '@dynamic-labs/sdk-api';
import { getUserWalletsFromVerifiedCredentials } from '../../functions/getUserWalletsFromVerifiedCredentials/getUserWalletsFromVerifiedCredentials.js';
import { isEmbeddedWalletPresent } from '../../functions/isEmbeddedWalletPresent/isEmbeddedWalletPresent.js';
import { isTurnkeyEnabled } from '../../functions/isTurnkeyEnabled/isTurnkeyEnabled.js';
import { findSmartWallet, initializeSmartWallet } from '../useWalletConnectors/utils/smartWallet/smartWallet.js';
import { useCreateDynamicEmbeddedWalletMutation } from '../useCreateDynamicEmbeddedWalletMutation/useCreateDynamicEmbeddedWalletMutation.js';

// Hook exposed to customers and used internally to trigger embedded wallet creation
const useEmbeddedWallet = () => {
    const { projectSettings, onboardingOnlyJwt, setPrimaryWalletId, walletConnectorOptions, internalSetShowAuthFlow, internalEvents, primaryWallet, environmentId, } = useInternalDynamicContext();
    const { setView } = useViewContext();
    const { createDynamicEmbeddedWalletMutation } = useCreateDynamicEmbeddedWalletMutation();
    const userHasEmbeddedWallet = () => {
        var _a;
        const jwt = (_a = getAuthToken()) !== null && _a !== void 0 ? _a : onboardingOnlyJwt;
        if (!jwt) {
            return false;
        }
        return isEmbeddedWalletPresent(jwt);
    };
    const startPregeneratedWalletCreationFlow = useCallback((jwt, decodedJwt) => __awaiter(void 0, void 0, void 0, function* () {
        createDynamicEmbeddedWalletMutation({
            authToken: jwt,
            decodedJwt,
            environmentId,
            walletConnectorOptions,
            withAuthenticator: false,
        });
        internalSetShowAuthFlow(false); // close email otp pin modal
        return new Promise((resolve, reject) => {
            internalEvents.current.once('embeddedWalletCreated', (wallet) => resolve(wallet));
            internalEvents.current.once('embeddedWalletFailed', (error) => reject(error));
        });
    }), [
        createDynamicEmbeddedWalletMutation,
        environmentId,
        walletConnectorOptions,
        internalSetShowAuthFlow,
        internalEvents,
    ]);
    const startEmbeddedWalletCreationFlow = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        internalSetShowAuthFlow(true);
        setView('passkey-intro');
        return new Promise((resolve, reject) => {
            internalEvents.current.once('embeddedWalletCreated', (wallet) => resolve(wallet));
            internalEvents.current.once('embeddedWalletFailed', (error) => {
                // when creating a passkey, if user cancels the passkey modal more than once
                // it will throw this DOMException, but we don't want to let user to have access
                // to the app before they've a passkey correctly setup
                if (error instanceof DOMException &&
                    error.name === 'NotAllowedError') {
                    logger.error('User cancelled the passkey creation.', error);
                    return;
                }
                reject(error);
            });
        });
    }), [internalEvents, internalSetShowAuthFlow, setView]);
    const returnEmbeddedWallet = useCallback((jwt, embeddedWalletVerifiedCredential) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const decodedJwt = decodeJwt(jwt);
        const turnkeyWallet = findTurnkeyWallet(walletConnectorOptions);
        // if user already has embedded wallet, set it as primary wallet
        if (decodedJwt) {
            (_a = turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.walletConnector) === null || _a === void 0 ? void 0 : _a.setVerifiedCredentials(decodedJwt.verifiedCredentials);
            const smartWallet = findSmartWallet(embeddedWalletVerifiedCredential, decodedJwt.verifiedCredentials);
            if (smartWallet) {
                yield initializeSmartWallet({
                    account: smartWallet,
                    verifiedCredentials: decodedJwt.verifiedCredentials,
                    walletConnectorOptions,
                });
                setPrimaryWalletId(smartWallet.id);
            }
            else {
                setPrimaryWalletId(embeddedWalletVerifiedCredential.id);
            }
        }
        /** It's not authenticated if it still hasn't created a passkey */
        const authenticated = Boolean((_b = embeddedWalletVerifiedCredential.walletProperties) === null || _b === void 0 ? void 0 : _b.isAuthenticatorAttached);
        const passkeyWallet = {
            address: (yield ((_c = turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.walletConnector) === null || _c === void 0 ? void 0 : _c.fetchPublicAddress())) || '',
            authenticated,
            chain: ((_d = turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.walletConnector) === null || _d === void 0 ? void 0 : _d.connectedChain) || '',
            connected: true,
            connector: (turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.walletConnector) || {},
            id: embeddedWalletVerifiedCredential.id,
        };
        return Promise.resolve(passkeyWallet);
    }), [setPrimaryWalletId, walletConnectorOptions]);
    const createEmbeddedWallet = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        var _e, _f, _g;
        const jwt = (_e = getAuthToken()) !== null && _e !== void 0 ? _e : onboardingOnlyJwt;
        const decodedJwt = decodeJwt(jwt);
        if (!jwt || !decodedJwt) {
            throw new Error('User is not logged in');
        }
        if (!isTurnkeyEnabled(projectSettings)) {
            throw new Error('Passkey embedded wallet is not enabled. Go to the dashboard and make sure to have both Turnkey/Passkey Embedded wallets and at least one EVM network enabled. Also, check if EthereumWalletConnectors is in the  DynamicContextProvider > settings > walletConnectors.');
        }
        const userWaletsCredentials = getUserWalletsFromVerifiedCredentials(jwt);
        // if user doesn't have a wallet yet, show the passkey view to create an embedded wallet
        if (!(userWaletsCredentials === null || userWaletsCredentials === void 0 ? void 0 : userWaletsCredentials.length)) {
            if (((_g = (_f = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.embeddedWalletSecurityMethods) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : 0) === 0) {
                return startPregeneratedWalletCreationFlow(jwt, decodedJwt);
            }
            return startEmbeddedWalletCreationFlow();
        }
        internalSetShowAuthFlow(false);
        const embeddedWalletVerifiedCredential = findEmbeddedWalletFromVerifiedCredentials(jwt);
        // if user logged in with MM for example, just continue the flow
        if (!embeddedWalletVerifiedCredential) {
            // user logged in through an email linked to a third party wallet
            // at this point primary wallet is still undefined and we need to set it
            if (!primaryWallet) {
                setPrimaryWalletId(userWaletsCredentials[0].id);
            }
            return Promise.resolve(primaryWallet);
        }
        // if user already has embedded wallet, returns it
        return returnEmbeddedWallet(jwt, embeddedWalletVerifiedCredential);
    }), [
        onboardingOnlyJwt,
        projectSettings,
        internalSetShowAuthFlow,
        returnEmbeddedWallet,
        startEmbeddedWalletCreationFlow,
        startPregeneratedWalletCreationFlow,
        primaryWallet,
    ]);
    return {
        createEmbeddedWallet,
        userHasEmbeddedWallet,
    };
};

export { useEmbeddedWallet };
