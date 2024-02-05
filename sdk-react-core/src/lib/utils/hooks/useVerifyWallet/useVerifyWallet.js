import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { DynamicError, WalletUsedError, ChainalysisError, GateBlockedError, NoAccessError, AccountExistsError } from '@dynamic-labs/utils';
import { isSocialWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { useAccessDeniedContext } from '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import { useAccountExistsContext } from '../../../context/AccountExistsContext/AccountExistsContext.js';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useErrorContext } from '../../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import { verifyWallet, linkWallet } from '../../../data/api.js';
import { decodeJwt } from '../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import 'react';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import { LAST_USED_WALLET } from '../../constants/localStorage.js';
import '../../constants/colors.js';
import { LocalStorage } from '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import { createUserProfile } from '../../functions/createUserProfile/createUserProfile.js';
import '@dynamic-labs/multi-wallet';
import '@dynamic-labs/sdk-api';
import { getVerifyArgs } from '../../functions/getVerifyArgs/getVerifyArgs.js';
import { storeAuthToken } from '../../functions/storeAuthToken/index.js';
import { getSiweStatement } from '../../functions/getSiweStatement/getSiweStatement.js';
import { getWalletProvider } from '../../functions/getWalletProvider/getWalletProvider.js';

// This logic is used to both verify or link a wallet
// Since we are re-using the different screens to authenticate or link the wallet.
// This logic is the best place to determine whether we should verify or verify and link.
const useVerifyWallet = ({ consumeNonce, displaySiweStatement, environmentId, projectSettings, setIsSingleWalletAccount, }) => {
    const { setDeniedAddress, setDeniedOauthProvider } = useAccessDeniedContext();
    const { setExistentAccountData } = useAccountExistsContext();
    const { setView, goToInitialView } = useViewContext();
    const { setErrorMessage, setError } = useErrorContext();
    const { setUser, multiWalletWidgetState, debugError, multiWallet: multiWalletEnabled, appName, primaryWalletId, setCallback, setShowAuthFlow, setPrimaryWalletId, siweStatement, connectedWallets, authMode, setOnboardingOnlyJwt, authToken, setAuthMode, removeConnectedWalletsInfo, setIsVerificationInProgress, eventsCallbacks, primaryWallet, setMultiWalletWidgetState, } = useInternalDynamicContext();
    // If the user is not already logged it means that we only need to verify
    // We need this boolean for the part of the logic where we already persisted a new authToken,
    // and need to distinguish between logic for verify or linking.
    const verifyOnly = !authToken;
    const generateJWT = (walletConnector, walletProvider, fetchPublicAddressOpts, publicWalletAddress, captchaToken, oauth) => __awaiter(void 0, void 0, void 0, function* () {
        let Jwt;
        const nonce = consumeNonce();
        if (nonce === undefined)
            throw new DynamicError('Missing nonce');
        const verifyArgs = yield getVerifyArgs({
            displaySiweStatement,
            environmentId,
            fetchPublicAddressOpts,
            nonce,
            publicWalletAddress,
            siweStatement: getSiweStatement({ appName, siweStatement }),
            walletConnector,
            walletProvider,
        });
        if (authToken === undefined || !multiWalletEnabled) {
            Jwt = yield verifyWallet(environmentId, Object.assign(Object.assign({}, verifyArgs), { captchaToken,
                oauth }));
        }
        else {
            Jwt = yield linkWallet(environmentId, verifyArgs, authToken);
        }
        if (Jwt === undefined)
            throw new DynamicError('Could not obtain a valid JWT');
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
        if (e instanceof WalletUsedError) {
            return handleWalletUsedError(e);
        }
        walletConnector.endSession();
        if (e instanceof ChainalysisError) {
            setDeniedAddress(address);
            setView('chainalysis-blocked-wallet');
            return;
        }
        if (e instanceof GateBlockedError) {
            setDeniedAddress(address);
            setView('gate-blocked-wallet');
            return;
        }
        if (e instanceof NoAccessError) {
            setDeniedAddress(address);
            // we need to set this value if it's magic in order to set proper icon
            if (isSocialWalletConnector(walletConnector)) {
                setDeniedOauthProvider(oauth === null || oauth === void 0 ? void 0 : oauth.provider);
            }
            setView('no-access');
            return;
        }
        if (e instanceof AccountExistsError) {
            setExistentAccountData(e.errorPayload);
            setView('account-exists');
            return;
        }
        if (connectedWallets.length && authMode === 'connect-only') {
            throw new DynamicError(e.message);
        }
        goToInitialView();
        logger.error(e);
        if (debugError) {
            setError(`${e.message}\n ${e.stack}`);
        }
        else {
            setErrorMessage(e.code);
        }
    };
    return ({ walletConnector, fetchPublicAddressOpts, publicWalletAddress, captchaToken, oauth, }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const walletProvider = getWalletProvider(walletConnector);
        try {
            setIsVerificationInProgress(true);
            const { Jwt, verifyArgs } = yield generateJWT(walletConnector, walletProvider, fetchPublicAddressOpts, publicWalletAddress, captchaToken, oauth);
            const decodedJwt = decodeJwt(Jwt);
            if (decodedJwt === undefined)
                throw new DynamicError('Invalid token!');
            try {
                (_a = eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onSignedMessage) === null || _a === void 0 ? void 0 : _a.call(eventsCallbacks, {
                    messageToSign: verifyArgs.messageToSign,
                    signedMessage: verifyArgs.signedMessage,
                });
            }
            catch (_b) {
                logger.warn('Error calling onSignedMessage callback');
            }
            const user = yield createUserProfile(decodedJwt);
            const isKycRequired = decodedJwt.missingFields.length;
            setOnboardingOnlyJwt(Jwt);
            LocalStorage.setToLS(LAST_USED_WALLET, walletConnector.key);
            setAuthMode('connect-and-sign');
            updatePrimaryWalletId(walletConnector, user);
            // TODO: how can projectSettings be undefined?
            if (verifyOnly && projectSettings && isKycRequired) {
                setShowAuthFlow(true);
                return setView('collect-user-data');
            }
            storeAuthToken(Jwt);
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

export { useVerifyWallet };
