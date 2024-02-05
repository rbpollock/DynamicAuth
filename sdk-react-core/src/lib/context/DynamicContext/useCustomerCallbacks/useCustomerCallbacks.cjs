'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getAuthToken = require('../../../utils/functions/getAuthToken/getAuthToken.cjs');
var isConnectOnly = require('../../../utils/hooks/authenticationHooks/helpers/isConnectOnly.cjs');

const useCustomerCallbacks = ({ callbacks: { onAuthSuccess, onLinkSuccess, onUserProfileUpdate, onConnect, onEmailVerificationFailure, onEmailVerificationSuccess, onEmbeddedWalletCreated, }, handleLogOut, primaryWallet, secondaryWallets, user, isAuthenticated, authMode, setIsVerificationInProgress, }) => {
    const [callbackQueue, setCallbackQueue] = React.useState([]);
    /** Gets the wallet from its id */
    const getWallet = React.useCallback((id) => {
        var _a;
        return id
            ? (_a = [primaryWallet, ...secondaryWallets].find((wallet) => (wallet === null || wallet === void 0 ? void 0 : wallet.id) === id)) !== null && _a !== void 0 ? _a : undefined
            : undefined;
    }, [primaryWallet, secondaryWallets]);
    const isConnectOnlyAndCallbackIsConnectSuccess = React.useCallback((next) => isConnectOnly.isConnectOnly(user, authMode) &&
        Boolean(primaryWallet) &&
        next === 'connectSuccess', [authMode, user, primaryWallet]);
    const handleConnectOnlyAndCallbackIsConnectSuccess = React.useCallback(() => {
        const [{ callback: peek, params }] = callbackQueue;
        // we need to handle connect-only different way
        // for connect-only we don't have user object or JWT (needed in connect-and-sign)
        // so we need to handle connect-only before the early returns
        if (isConnectOnlyAndCallbackIsConnectSuccess(peek)) {
            const updatedQueue = [...callbackQueue];
            updatedQueue.shift();
            setCallbackQueue(updatedQueue);
            try {
                setIsVerificationInProgress(false);
                const wallet = getWallet(params === null || params === void 0 ? void 0 : params.walletId);
                onConnect === null || onConnect === void 0 ? void 0 : onConnect({
                    wallet,
                    walletConnector: wallet === null || wallet === void 0 ? void 0 : wallet.connector,
                });
            }
            catch (e) {
                logger.logger.error('Error calling onConnect: ', e);
            }
            return false;
        }
        return true;
    }, [
        callbackQueue,
        getWallet,
        isConnectOnlyAndCallbackIsConnectSuccess,
        onConnect,
        setIsVerificationInProgress,
    ]);
    const handleNextCallback = React.useCallback((next, authToken, user) => {
        var _a, _b, _c, _d, _e, _f;
        switch (next === null || next === void 0 ? void 0 : next.callback) {
            case 'authSuccess': {
                try {
                    setIsVerificationInProgress(false);
                    onAuthSuccess === null || onAuthSuccess === void 0 ? void 0 : onAuthSuccess({
                        authToken,
                        handleLogOut,
                        isAuthenticated,
                        primaryWallet,
                        user,
                        walletConnector: primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector,
                    });
                }
                catch (e) {
                    logger.logger.error('Error calling onAuthSuccess: ', e);
                }
                break;
            }
            case 'emailVerificationFailure': {
                try {
                    onEmailVerificationFailure === null || onEmailVerificationFailure === void 0 ? void 0 : onEmailVerificationFailure((_b = (_a = next.params) === null || _a === void 0 ? void 0 : _a.email) !== null && _b !== void 0 ? _b : '');
                }
                catch (e) {
                    logger.logger.error('Error calling onEmailVerificationFailure: ', e);
                }
                break;
            }
            case 'emailVerificationSuccess': {
                try {
                    onEmailVerificationSuccess === null || onEmailVerificationSuccess === void 0 ? void 0 : onEmailVerificationSuccess((_d = (_c = next.params) === null || _c === void 0 ? void 0 : _c.email) !== null && _d !== void 0 ? _d : '');
                }
                catch (e) {
                    logger.logger.error('Error calling onEmailVerificationSuccess: ', e);
                }
                break;
            }
            case 'linkSuccess': {
                try {
                    const wallet = getWallet((_e = next.params) === null || _e === void 0 ? void 0 : _e.walletId);
                    onLinkSuccess === null || onLinkSuccess === void 0 ? void 0 : onLinkSuccess({
                        authToken,
                        user,
                        wallet,
                        walletConnector: wallet === null || wallet === void 0 ? void 0 : wallet.connector,
                    });
                }
                catch (e) {
                    logger.logger.error('Error calling onLinkSuccess: ', e);
                }
                break;
            }
            case 'userProfileUpdate': {
                try {
                    onUserProfileUpdate === null || onUserProfileUpdate === void 0 ? void 0 : onUserProfileUpdate(user);
                }
                catch (e) {
                    logger.logger.error('Error calling userProfileUpdate: ', e);
                }
                break;
            }
            case 'embeddedWalletCreated': {
                try {
                    onEmbeddedWalletCreated === null || onEmbeddedWalletCreated === void 0 ? void 0 : onEmbeddedWalletCreated((_f = next.params) === null || _f === void 0 ? void 0 : _f.verifiedCredential);
                }
                catch (e) {
                    logger.logger.error('Error calling onEmbeddedWalletCreated: ', e);
                }
            }
        }
    }, [
        getWallet,
        handleLogOut,
        isAuthenticated,
        onAuthSuccess,
        onEmailVerificationFailure,
        onEmailVerificationSuccess,
        onEmbeddedWalletCreated,
        onLinkSuccess,
        onUserProfileUpdate,
        primaryWallet,
        setIsVerificationInProgress,
    ]);
    React.useEffect(() => {
        if (!callbackQueue.length)
            return;
        if (!handleConnectOnlyAndCallbackIsConnectSuccess())
            return;
        if (!user)
            return;
        const authToken = getAuthToken.getAuthToken();
        if (!authToken)
            return;
        // checks if user logged in with a wallet, so we need to wait
        // for the primary wallet state to be set
        // if user logged in with email without embedded wallet, then
        // there is no wallet so we can go ahead and run the callback
        if (user.isAuthenticatedWithAWallet && !primaryWallet) {
            return;
        }
        const updatedQueue = [...callbackQueue];
        handleNextCallback(updatedQueue.shift(), authToken, user);
        setCallbackQueue(updatedQueue);
    }, [
        callbackQueue,
        handleConnectOnlyAndCallbackIsConnectSuccess,
        handleNextCallback,
        primaryWallet,
        user,
    ]);
    const setCallback = (callback, params) => {
        setCallbackQueue((prev) => [...prev, { callback, params }]);
    };
    return { setCallback };
};

exports.useCustomerCallbacks = useCustomerCallbacks;
