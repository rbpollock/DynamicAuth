import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useState, useRef } from 'react';
import { OauthResultStatus } from '@dynamic-labs/sdk-api';
import { SocialOAuthErrorCode } from '@dynamic-labs/types';
import { isMobile, SocialAccountAlreadyExistsError, NoAccessError } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { getOAuthResult, verifyOAuth, signInOAuth } from '../../../data/api.js';
import { useUpdateUserProfileByJWTCallback } from '../useUpdateUserProfileByJWTCallback/useUpdateUserProfileByJWTCallback.js';
import '@dynamic-labs/wallet-connector-core';
import { digestSHA256 } from '../../functions/digestSHA256/digestSHA256.js';
import { encodeBase64URL } from '../../functions/encodeBase64URL/encodeBase64URL.js';
import { decodeJwt } from '../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getAuthToken } from '../../functions/getAuthToken/getAuthToken.js';
import { getOauthLoginUrl } from '../../functions/getOauthLoginUrl/getOauthLoginUrl.js';
import { getProviderByType } from '../../functions/getProviderByType/getProviderByType.js';
import { randomString } from '../../functions/randomString/randomString.js';
import { stringifyURIQuery } from '../../functions/stringifyURIQuery/stringifyURIQuery.js';
import { useCreateUserProfileByJWTCallback } from '../useCreateUserProfileByJWTCallback/useCreateUserProfileByJWTCallback.js';
import { useErrorContext } from '../../../context/ErrorContext/ErrorContext.js';
import { useEmbeddedWallet } from '../useEmbeddedWallet/useEmbeddedWallet.js';

const socialProviders = [
    'apple',
    'discord',
    'facebook',
    'github',
    'google',
    'instagram',
    'twitch',
    'twitter',
];
// pkce params are only required for twitter and break if added for other providers, like google
// so we should only add provider that support pkce to this list
const providersRequiringPkce = ['twitter', 'github'];
const providersWithoutWindowOpenerRefence = ['twitter'];
// Hook to handle common social auth logic (for social linking and social sign in)
const useSocialAuth = ({ sessionTimeout, authMode, onSettled, onError, }) => {
    var _a;
    const { environmentId, onboardingOnlyJwt, setOnboardingOnlyJwt, setCallback, setShowAuthFlow, setIsVerificationInProgress, projectSettings, } = useInternalDynamicContext();
    const { setView } = useViewContext();
    const { setErrorMessage, setError: setContextError } = useErrorContext();
    const { updateUserProfileByJWT } = useUpdateUserProfileByJWTCallback();
    const { createUserProfileByJWT } = useCreateUserProfileByJWTCallback();
    const { createEmbeddedWallet } = useEmbeddedWallet();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState();
    const providersWaitingOauthMessage = useRef({});
    const authWindowInterval = useRef();
    const shouldPool = useRef(false);
    const userJwt = (_a = getAuthToken()) !== null && _a !== void 0 ? _a : onboardingOnlyJwt;
    const clearError = () => {
        setError(undefined);
        setContextError(undefined);
    };
    const handleError = (code, message) => {
        logger.error(message);
        setIsProcessing(false);
        setError({ code, message });
        setErrorMessage(code);
        onError === null || onError === void 0 ? void 0 : onError();
        onSettled === null || onSettled === void 0 ? void 0 : onSettled();
    };
    const poolOauthResult = (provider, state) => __awaiter(void 0, void 0, void 0, function* () {
        if (!shouldPool.current) {
            return;
        }
        const result = yield getOAuthResult(environmentId, provider, {
            state,
        });
        if ((result === null || result === void 0 ? void 0 : result.status) !== OauthResultStatus.Completed) {
            setTimeout(() => poolOauthResult(provider, state), 1000);
            return;
        }
        shouldPool.current = false;
        const authMessage = {
            code: result === null || result === void 0 ? void 0 : result.code,
            error: result === null || result === void 0 ? void 0 : result.error,
            provider,
            type: 'authorization_response',
        };
        window.postMessage(authMessage, '*');
    });
    const checkValidProvider = (provider) => {
        if (!provider) {
            handleError(SocialOAuthErrorCode.NO_PROVIDER, 'Provider is required');
            return false;
        }
        if (!socialProviders.includes(provider)) {
            handleError(SocialOAuthErrorCode.INVALID_PROVIDER, `Invalid social provider. Valid providers are: ${socialProviders.join(', ')}`);
            return false;
        }
        return true;
    };
    const linkAccount = (provider, code, verifier, state) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const jwt = yield verifyOAuth(environmentId, provider, {
                code,
                codeVerifier: verifier,
                state,
            }, String(userJwt));
            if (!jwt) {
                handleError(SocialOAuthErrorCode.VERIFICATION_ERROR, `Failed to link social account: ${provider}`);
                return;
            }
            yield updateUserProfileByJWT(jwt);
            onSettled === null || onSettled === void 0 ? void 0 : onSettled();
        }
        catch (error) {
            if (error instanceof SocialAccountAlreadyExistsError) {
                handleError(SocialOAuthErrorCode.ACCOUNT_ALREADY_LINKED_TO_DIFFERENT_PROFILE, `Social account already linked to a different profile: ${provider}`);
            }
        }
    });
    const signInAccount = (provider, code, verifier, state, captchaToken) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        try {
            const jwt = yield signInOAuth(environmentId, provider, {
                captchaToken,
                code,
                codeVerifier: verifier,
                state,
            });
            if (!jwt) {
                handleError(SocialOAuthErrorCode.SIGNIN_ERROR, `Failed to sign-in with social account: ${provider}`);
                return;
            }
            setIsVerificationInProgress(true);
            const decodedJwt = decodeJwt(jwt);
            if (decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.missingFields.length) {
                setOnboardingOnlyJwt(jwt);
                setView('collect-user-data-login-with-email');
                onSettled === null || onSettled === void 0 ? void 0 : onSettled();
                return;
            }
            setCallback('authSuccess');
            yield createUserProfileByJWT(jwt);
            if (!((_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _b === void 0 ? void 0 : _b.automaticEmbeddedWalletCreation)) {
                setShowAuthFlow(false);
                onSettled === null || onSettled === void 0 ? void 0 : onSettled();
                return;
            }
            try {
                // this function will check turnkey wallet enabled and create wallet if needed
                // if not enabled, it will throw an error.
                yield createEmbeddedWallet();
                onSettled === null || onSettled === void 0 ? void 0 : onSettled();
            }
            catch (e) {
                setShowAuthFlow(false);
                onSettled === null || onSettled === void 0 ? void 0 : onSettled();
            }
        }
        catch (error) {
            if (error instanceof NoAccessError) {
                setView('no-access');
            }
            handleError(SocialOAuthErrorCode.GENERAL_ERROR, error);
        }
    });
    const connectSocialAccount = ({ provider, validator, captchaToken, }) => __awaiter(void 0, void 0, void 0, function* () {
        var _c, _d;
        clearInterval(authWindowInterval.current);
        clearError();
        setIsProcessing(true);
        if (!checkValidProvider(provider)) {
            return;
        }
        // invalid connect request
        if (validator && !validator(provider)) {
            return;
        }
        const authWindow = window.open('', '_blank', 'width=500,height=600');
        const state = randomString(8);
        const verifier = randomString(43);
        const clearListeners = () => {
            window.removeEventListener('message', handleAuthWindowMessage);
            providersWaitingOauthMessage.current = Object.assign(Object.assign({}, providersWaitingOauthMessage.current), { [provider]: false });
        };
        const handleAuthWindowMessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
            var _e, _f;
            const message = event.data;
            const apiProvider = getProviderByType((_e = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _e !== void 0 ? _e : [], provider);
            if (!(apiProvider === null || apiProvider === void 0 ? void 0 : apiProvider.redirectUrl)) {
                return;
            }
            let expectedOrigin = window.location.origin;
            if (!providersWithoutWindowOpenerRefence.includes(provider)) {
                try {
                    const redirectUri = new URL(apiProvider.redirectUrl);
                    expectedOrigin = redirectUri.origin;
                }
                catch (e) {
                    logger.error('Failed to parse social provider redirect url', {
                        error: e,
                    });
                    return;
                }
            }
            if ((message === null || message === void 0 ? void 0 : message.type) === 'origin_check' && authWindow) {
                logger.debug('Origin check message received. Sending response now.', {
                    data: message,
                    expectedOrigin,
                });
                authWindow.postMessage('origin_check_response', expectedOrigin);
                return;
            }
            const isAuthorizationMessage = (message === null || message === void 0 ? void 0 : message.type) === 'authorization_response';
            if (isAuthorizationMessage) {
                logger.debug('Message received', { data: message });
            }
            const isExpectedOrigin = event.origin === expectedOrigin;
            const isValidMessage = isAuthorizationMessage &&
                (message === null || message === void 0 ? void 0 : message.provider) === provider &&
                isExpectedOrigin;
            // don't process invalid messages for provider
            if (!isValidMessage) {
                return;
            }
            setIsProcessing(true);
            if (!((_f = providersWaitingOauthMessage.current) === null || _f === void 0 ? void 0 : _f[provider])) {
                handleError(SocialOAuthErrorCode.SESSION_TIMEOUT, `Connecting ${provider} account session timeout.`);
                return;
            }
            clearListeners();
            const { code, error, state: authState } = message;
            if (error && error !== 'undefined') {
                handleError(SocialOAuthErrorCode.OAUTH_ERROR, `Failed to connect ${provider} social account: ${error}`);
                return;
            }
            // check that the state we receive from message is the same state we calculated earlier
            // this could be an attack
            // this state check is used only by providers with an open window opener reference (eg, not twitter)
            if (!providersWithoutWindowOpenerRefence.includes(provider) &&
                state !== authState) {
                handleError(SocialOAuthErrorCode.OAUTH_ERROR, `Failed to connect ${provider} social account: Invalid random state`);
                return;
            }
            if (!code) {
                handleError(SocialOAuthErrorCode.NO_AUTH_CODE, `Failed to connect ${provider} social account: no authorization code`);
                return;
            }
            if (authMode === 'signin') {
                yield signInAccount(provider, code, verifier, state, captchaToken);
            }
            else {
                yield linkAccount(provider, code, verifier, state);
            }
            setIsProcessing(false);
        });
        const loginUrl = getOauthLoginUrl((_c = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _c !== void 0 ? _c : [], provider);
        if (!loginUrl) {
            handleError(SocialOAuthErrorCode.NO_OAUTH_URL, `Failed to get login url to connect social account: ${provider}`);
            return;
        }
        if (!((_d = providersWaitingOauthMessage.current) === null || _d === void 0 ? void 0 : _d[provider])) {
            window.addEventListener('message', handleAuthWindowMessage);
            providersWaitingOauthMessage.current = Object.assign(Object.assign({}, providersWaitingOauthMessage.current), { [provider]: true });
        }
        // add state param for all providers
        const stateParam = stringifyURIQuery({
            state,
        });
        let oauthLoginUrl = `${loginUrl}&${stateParam}`;
        // only add pkce params for providers that support/require it
        if (providersRequiringPkce.includes(provider)) {
            const digest = yield digestSHA256(verifier);
            const pkceParams = stringifyURIQuery({
                code_challenge: encodeBase64URL(digest),
                code_challenge_method: 'S256',
            });
            oauthLoginUrl = `${oauthLoginUrl}&${pkceParams}`;
        }
        authWindow === null || authWindow === void 0 ? void 0 : authWindow.location.assign(oauthLoginUrl);
        if (!providersWithoutWindowOpenerRefence.includes(provider)) {
            // For provider that support window.opener, we need to clear all states/listeners when the window is closed
            authWindowInterval.current = setInterval(() => {
                var _a;
                if (!(authWindow === null || authWindow === void 0 ? void 0 : authWindow.closed)) {
                    return;
                }
                clearInterval(authWindowInterval.current);
                setIsProcessing(false);
                // user didn't complete oauth
                if ((_a = providersWaitingOauthMessage.current) === null || _a === void 0 ? void 0 : _a[provider]) {
                    onError === null || onError === void 0 ? void 0 : onError();
                    onSettled === null || onSettled === void 0 ? void 0 : onSettled();
                }
            }, 2000);
        }
        else {
            // For provider that don't support window.opener, we need to use a timeout to pool the oauth result
            // If we don't get a valid result in {async sessionTimeout} ms, we'll assume the user closed the window
            // and we'll clear all states/listeners
            // start pooling oauth result
            shouldPool.current = true;
            poolOauthResult(provider, state);
            // if this is mobile, set a longer timeout to allow the user to login to the provider in the browser
            let authWindowTimeout = sessionTimeout;
            if (isMobile()) {
                authWindowTimeout = authWindowTimeout * 3;
            }
            authWindowInterval.current = setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
                var _g;
                shouldPool.current = false;
                // clear all states/listeners, assuming user closed the window before completing oauth
                if ((_g = providersWaitingOauthMessage.current) === null || _g === void 0 ? void 0 : _g[provider]) {
                    clearListeners();
                    handleError(SocialOAuthErrorCode.OAUTH_WINDOW_TIMEOUT, `Connecting ${provider} account window timeout.`);
                }
                clearInterval(authWindowInterval.current);
                setIsProcessing(false);
                onSettled === null || onSettled === void 0 ? void 0 : onSettled();
            }), authWindowTimeout);
        }
    });
    return {
        checkValidProvider,
        connectSocialAccount,
        error,
        handleError,
        isProcessing,
        setError,
        setIsProcessing,
    };
};

export { useSocialAuth };
