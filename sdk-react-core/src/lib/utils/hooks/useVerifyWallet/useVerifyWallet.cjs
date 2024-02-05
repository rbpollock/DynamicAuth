'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var utils = require('@dynamic-labs/utils');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var AccessDeniedContext = require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
var AccountExistsContext = require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ErrorContext = require('../../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');
var api = require('../../../data/api.cjs');
var decodeJwt = require('../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('react');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
var localStorage$1 = require('../../constants/localStorage.cjs');
require('../../constants/colors.cjs');
var localStorage = require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
var createUserProfile = require('../../functions/createUserProfile/createUserProfile.cjs');
require('@dynamic-labs/multi-wallet');
require('@dynamic-labs/sdk-api');
var getVerifyArgs = require('../../functions/getVerifyArgs/getVerifyArgs.cjs');
var index = require('../../functions/storeAuthToken/index.cjs');
var getSiweStatement = require('../../functions/getSiweStatement/getSiweStatement.cjs');
var getWalletProvider = require('../../functions/getWalletProvider/getWalletProvider.cjs');

// This logic is used to both verify or link a wallet
// Since we are re-using the different screens to authenticate or link the wallet.
// This logic is the best place to determine whether we should verify or verify and link.
const useVerifyWallet = ({ consumeNonce, displaySiweStatement, environmentId, projectSettings, setIsSingleWalletAccount, }) => {
    const { setDeniedAddress, setDeniedOauthProvider } = AccessDeniedContext.useAccessDeniedContext();
    const { setExistentAccountData } = AccountExistsContext.useAccountExistsContext();
    const { setView, goToInitialView } = ViewContext.useViewContext();
    const { setErrorMessage, setError } = ErrorContext.useErrorContext();
    const { setUser, multiWalletWidgetState, debugError, multiWallet: multiWalletEnabled, appName, primaryWalletId, setCallback, setShowAuthFlow, setPrimaryWalletId, siweStatement, connectedWallets, authMode, setOnboardingOnlyJwt, authToken, setAuthMode, removeConnectedWalletsInfo, setIsVerificationInProgress, eventsCallbacks, primaryWallet, setMultiWalletWidgetState, } = useInternalDynamicContext.useInternalDynamicContext();
    // If the user is not already logged it means that we only need to verify
    // We need this boolean for the part of the logic where we already persisted a new authToken,
    // and need to distinguish between logic for verify or linking.
    const verifyOnly = !authToken;
    const generateJWT = (walletConnector, walletProvider, fetchPublicAddressOpts, publicWalletAddress, captchaToken, oauth) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        let Jwt;
        const nonce = consumeNonce();
        if (nonce === undefined)
            throw new utils.DynamicError('Missing nonce');
        const verifyArgs = yield getVerifyArgs.getVerifyArgs({
            displaySiweStatement,
            environmentId,
            fetchPublicAddressOpts,
            nonce,
            publicWalletAddress,
            siweStatement: getSiweStatement.getSiweStatement({ appName, siweStatement }),
            walletConnector,
            walletProvider,
        });
        if (authToken === undefined || !multiWalletEnabled) {
            Jwt = yield api.verifyWallet(environmentId, Object.assign(Object.assign({}, verifyArgs), { captchaToken,
                oauth }));
        }
        else {
            Jwt = yield api.linkWallet(environmentId, verifyArgs, authToken);
        }
        if (Jwt === undefined)
            throw new utils.DynamicError('Could not obtain a valid JWT');
        // TODO DYN-523: add verification here that the JWT is valid with the publicKey
        return { Jwt, verifyArgs };
    });
    // Overrides the stored primary wallet id when the
    // user logs in for the first time.
    // Or when the user is linking an additional
    // account on the same wallet as the primary wallet.
    const updatePrimaryWalletId = (walletConnector, user) => {
        const newSelectedCredentialWallet = user.verifiedCredentials.find((cred) => cred.id === user.lastVerifiedCredentialId &&
            cred.format === 'blockchain');
        if (newSelectedCredentialWallet) {
            const currentPrimaryWallet = user.verifiedCredentials.find((a) => a.id === primaryWalletId);
            if (verifyOnly ||
                !primaryWallet ||
                (multiWalletWidgetState === 'awaiting_signature' &&
                    newSelectedCredentialWallet.walletName ===
                        (currentPrimaryWallet === null || currentPrimaryWallet === void 0 ? void 0 : currentPrimaryWallet.walletName)) ||
                ((currentPrimaryWallet === null || currentPrimaryWallet === void 0 ? void 0 : currentPrimaryWallet.chain) === 'flow' &&
                    walletConnector.connectedChain === 'FLOW')) {
                setPrimaryWalletId(newSelectedCredentialWallet.id);
            }
        }
    };
    const handleWalletUsedError = (e) => {
        var _a;
        // This is a special case where the user is trying to link a wallet
        // and the wallet is already linked and we don't want to kill the session.
        setShowAuthFlow(true);
        setView('wallet-used');
        setIsSingleWalletAccount(false);
        if (e.code === 'reassign_wallet_error') {
            if ((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.preventOrphanedAccounts) {
                setView('wallet-cannot-be-transferred');
            }
            setIsSingleWalletAccount(true);
        }
    };
    const handleError = (e, walletConnector, address, oauth) => {
        removeConnectedWalletsInfo();
        // Ensure auth verification flag is taken down
        setIsVerificationInProgress(false);
        if (e instanceof utils.WalletUsedError) {
            return handleWalletUsedError(e);
        }
        walletConnector.endSession();
        if (e instanceof utils.ChainalysisError) {
            setDeniedAddress(address);
            setView('chainalysis-blocked-wallet');
            return;
        }
        if (e instanceof utils.GateBlockedError) {
            setDeniedAddress(address);
            setView('gate-blocked-wallet');
            return;
        }
        if (e instanceof utils.NoAccessError) {
            setDeniedAddress(address);
            // we need to set this value if it's magic in order to set proper icon
            if (walletConnectorCore.isSocialWalletConnector(walletConnector)) {
                setDeniedOauthProvider(oauth === null || oauth === void 0 ? void 0 : oauth.provider);
            }
            setView('no-access');
            return;
        }
        if (e instanceof utils.AccountExistsError) {
            setExistentAccountData(e.errorPayload);
            setView('account-exists');
            return;
        }
        if (connectedWallets.length && authMode === 'connect-only') {
            throw new utils.DynamicError(e.message);
        }
        goToInitialView();
        logger.logger.error(e);
        if (debugError) {
            setError(`${e.message}\n ${e.stack}`);
        }
        else {
            setErrorMessage(e.code);
        }
    };
    return ({ walletConnector, fetchPublicAddressOpts, publicWalletAddress, captchaToken, oauth, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const walletProvider = getWalletProvider.getWalletProvider(walletConnector);
        try {
            setIsVerificationInProgress(true);
            const { Jwt, verifyArgs } = yield generateJWT(walletConnector, walletProvider, fetchPublicAddressOpts, publicWalletAddress, captchaToken, oauth);
            const decodedJwt = decodeJwt.decodeJwt(Jwt);
            if (decodedJwt === undefined)
                throw new utils.DynamicError('Invalid token!');
            try {
                (_a = eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onSignedMessage) === null || _a === void 0 ? void 0 : _a.call(eventsCallbacks, {
                    messageToSign: verifyArgs.messageToSign,
                    signedMessage: verifyArgs.signedMessage,
                });
            }
            catch (_b) {
                logger.logger.warn('Error calling onSignedMessage callback');
            }
            const user = yield createUserProfile.createUserProfile(decodedJwt);
            const isKycRequired = decodedJwt.missingFields.length;
            setOnboardingOnlyJwt(Jwt);
            localStorage.LocalStorage.setToLS(localStorage$1.LAST_USED_WALLET, walletConnector.key);
            setAuthMode('connect-and-sign');
            updatePrimaryWalletId(walletConnector, user);
            // TODO: how can projectSettings be undefined?
            if (verifyOnly && projectSettings && isKycRequired) {
                setShowAuthFlow(true);
                return setView('collect-user-data');
            }
            index.storeAuthToken(Jwt);
            setOnboardingOnlyJwt(undefined);
            setMultiWalletWidgetState('idle');
            setUser(user); // The user should only be set if no KYC is needed.
            setShowAuthFlow(false);
            /* istanbul ignore else */
            if (verifyOnly) {
                setCallback('authSuccess');
            }
            else {
                setView('wallet-list');
                setCallback('linkSuccess', {
                    walletId: decodedJwt.lastVerifiedCredentialId,
                });
            }
        }
        catch (e) {
            handleError(e, walletConnector, publicWalletAddress, oauth);
        }
    });
};

exports.useVerifyWallet = useVerifyWallet;
