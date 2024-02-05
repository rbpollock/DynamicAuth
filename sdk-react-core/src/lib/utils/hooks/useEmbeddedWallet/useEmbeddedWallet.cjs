'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');
var decodeJwt = require('../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
var findEmbeddedWalletFromVerifiedCredentials = require('../../functions/findEmbeddedWalletFromVerifiedCredentials/findEmbeddedWalletFromVerifiedCredentials.cjs');
var findTurnkeyWallet = require('../../functions/findTurnkeyWallet/findTurnkeyWallet.cjs');
require('@dynamic-labs/multi-wallet');
var getAuthToken = require('../../functions/getAuthToken/getAuthToken.cjs');
require('@dynamic-labs/sdk-api');
var getUserWalletsFromVerifiedCredentials = require('../../functions/getUserWalletsFromVerifiedCredentials/getUserWalletsFromVerifiedCredentials.cjs');
var isEmbeddedWalletPresent = require('../../functions/isEmbeddedWalletPresent/isEmbeddedWalletPresent.cjs');
var isTurnkeyEnabled = require('../../functions/isTurnkeyEnabled/isTurnkeyEnabled.cjs');
var smartWallet = require('../useWalletConnectors/utils/smartWallet/smartWallet.cjs');
var useCreateDynamicEmbeddedWalletMutation = require('../useCreateDynamicEmbeddedWalletMutation/useCreateDynamicEmbeddedWalletMutation.cjs');

// Hook exposed to customers and used internally to trigger embedded wallet creation
const useEmbeddedWallet = () => {
    const { projectSettings, onboardingOnlyJwt, setPrimaryWalletId, walletConnectorOptions, internalSetShowAuthFlow, internalEvents, primaryWallet, environmentId, } = useInternalDynamicContext.useInternalDynamicContext();
    const { setView } = ViewContext.useViewContext();
    const { createDynamicEmbeddedWalletMutation } = useCreateDynamicEmbeddedWalletMutation.useCreateDynamicEmbeddedWalletMutation();
    const userHasEmbeddedWallet = () => {
        var _a;
        const jwt = (_a = getAuthToken.getAuthToken()) !== null && _a !== void 0 ? _a : onboardingOnlyJwt;
        if (!jwt) {
            return false;
        }
        return isEmbeddedWalletPresent.isEmbeddedWalletPresent(jwt);
    };
    const startPregeneratedWalletCreationFlow = React.useCallback((jwt, decodedJwt) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
    const startEmbeddedWalletCreationFlow = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
                    logger.logger.error('User cancelled the passkey creation.', error);
                    return;
                }
                reject(error);
            });
        });
    }), [internalEvents, internalSetShowAuthFlow, setView]);
    const returnEmbeddedWallet = React.useCallback((jwt, embeddedWalletVerifiedCredential) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const decodedJwt = decodeJwt.decodeJwt(jwt);
        const turnkeyWallet = findTurnkeyWallet.findTurnkeyWallet(walletConnectorOptions);
        // if user already has embedded wallet, set it as primary wallet
        if (decodedJwt) {
            (_a = turnkeyWallet === null || turnkeyWallet === void 0 ? void 0 : turnkeyWallet.walletConnector) === null || _a === void 0 ? void 0 : _a.setVerifiedCredentials(decodedJwt.verifiedCredentials);
            const smartWallet$1 = smartWallet.findSmartWallet(embeddedWalletVerifiedCredential, decodedJwt.verifiedCredentials);
            if (smartWallet$1) {
                yield smartWallet.initializeSmartWallet({
                    account: smartWallet$1,
                    verifiedCredentials: decodedJwt.verifiedCredentials,
                    walletConnectorOptions,
                });
                setPrimaryWalletId(smartWallet$1.id);
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
    const createEmbeddedWallet = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _e, _f, _g;
        const jwt = (_e = getAuthToken.getAuthToken()) !== null && _e !== void 0 ? _e : onboardingOnlyJwt;
        const decodedJwt = decodeJwt.decodeJwt(jwt);
        if (!jwt || !decodedJwt) {
            throw new Error('User is not logged in');
        }
        if (!isTurnkeyEnabled.isTurnkeyEnabled(projectSettings)) {
            throw new Error('Passkey embedded wallet is not enabled. Go to the dashboard and make sure to have both Turnkey/Passkey Embedded wallets and at least one EVM network enabled. Also, check if EthereumWalletConnectors is in the  DynamicContextProvider > settings > walletConnectors.');
        }
        const userWaletsCredentials = getUserWalletsFromVerifiedCredentials.getUserWalletsFromVerifiedCredentials(jwt);
        // if user doesn't have a wallet yet, show the passkey view to create an embedded wallet
        if (!(userWaletsCredentials === null || userWaletsCredentials === void 0 ? void 0 : userWaletsCredentials.length)) {
            if (((_g = (_f = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.embeddedWalletSecurityMethods) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : 0) === 0) {
                return startPregeneratedWalletCreationFlow(jwt, decodedJwt);
            }
            return startEmbeddedWalletCreationFlow();
        }
        internalSetShowAuthFlow(false);
        const embeddedWalletVerifiedCredential = findEmbeddedWalletFromVerifiedCredentials.findEmbeddedWalletFromVerifiedCredentials(jwt);
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

exports.useEmbeddedWallet = useEmbeddedWallet;
