'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var utils = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ErrorContext = require('../../../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
var useVerifyWallet = require('../../useVerifyWallet/useVerifyWallet.cjs');
var showPendingConnectView = require('../helpers/showPendingConnectView.cjs');
var isConnectOnly = require('../helpers/isConnectOnly.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('react');
require('@dynamic-labs/wallet-book');
var localStorage$1 = require('../../../constants/localStorage.cjs');
require('../../../constants/colors.cjs');
var localStorage = require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
var CaptchaContext = require('../../../../context/CaptchaContext/CaptchaContext.cjs');
var useHandleWalletsToConnect = require('../../useHandleWalletsToConnect/useHandleWalletsToConnect.cjs');

const useConnectAndSignSplitSteps = () => {
    const { setView, goToInitialView } = ViewContext.useViewContext();
    const { setErrorMessage } = ErrorContext.useErrorContext();
    const { getCaptchaToken, engageCaptcha } = CaptchaContext.useCaptchaContext();
    const { connectWallet, consumeNonce, displaySiweStatement, projectSettings, environmentId, setIsSingleWalletAccount, setShowAuthFlow, user, authMode, setCallback, setIsVerificationInProgress, } = useInternalDynamicContext.useInternalDynamicContext();
    const { handleWalletsToConnect } = useHandleWalletsToConnect.useHandleWalletsToConnect();
    const verifyWallet = useVerifyWallet.useVerifyWallet({
        consumeNonce,
        displaySiweStatement,
        environmentId,
        projectSettings,
        setIsSingleWalletAccount,
    });
    const onErrorHandler = (err) => {
        logger.logger.debug(err);
        goToInitialView();
        setIsVerificationInProgress(false);
        /**
         * On mobile we don't want to show error message because the user
         * is redirected to the wallet mobile app
         */
        const isMissingPublicAddressErrorExpected = err instanceof utils.MissingPublicAddressError && utils.isMobile();
        if (!isMissingPublicAddressErrorExpected) {
            setErrorMessage(err.toString());
        }
    };
    // This method is similar to useConnectAndSign, but it skips signing for now
    // It's used when we want to connect and sign in two separate steps
    // For example on mobile when we want to sign on button click
    // or in Dapper
    const onlyConnectUser = ({ walletConnector, fetchPublicAddressOpts = undefined, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // Raise verification ongoing flag
        setIsVerificationInProgress(true);
        yield showPendingConnectView.showPendingConnectView(walletConnector, setView);
        try {
            const connectionResult = yield connectWallet(walletConnector, fetchPublicAddressOpts);
            setCallback('connectSuccess', {
                walletId: connectionResult === null || connectionResult === void 0 ? void 0 : connectionResult.id,
            });
            if (isConnectOnly.isConnectOnly(user, authMode)) {
                localStorage.LocalStorage.setToLS(localStorage$1.LAST_USED_WALLET, walletConnector.key);
                handleWalletsToConnect({ walletConnector });
                return;
            }
            if ((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.security.hCaptcha) === null || _a === void 0 ? void 0 : _a.enabled) {
                engageCaptcha({
                    authMethod: 'wallet',
                    onCaptchaSuccess: (_captchaToken) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                        setShowAuthFlow(true);
                        setView('pending-signature');
                    }),
                });
                return;
            }
            setShowAuthFlow(true);
            setView('pending-signature');
        }
        catch (err) {
            onErrorHandler(err);
            return;
        }
    });
    // This method is similar to useConnectAndSign, but it does not call showPendingConnectView
    // This is because we already called it in onlyConnectUser and now we just want to sign
    const signAlreadyConnectedUser = ({ walletConnector, fetchPublicAddressOpts = undefined, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        // Raise verification ongoing flag
        setIsVerificationInProgress(true);
        try {
            const connectionResult = yield connectWallet(walletConnector, fetchPublicAddressOpts);
            if (!(connectionResult === null || connectionResult === void 0 ? void 0 : connectionResult.address)) {
                return;
            }
            yield verifyWallet({
                captchaToken: getCaptchaToken(),
                publicWalletAddress: connectionResult.address,
                walletConnector,
            });
        }
        catch (err) {
            onErrorHandler(err);
            return;
        }
    });
    return {
        onlyConnectUser,
        signAlreadyConnectedUser,
    };
};

exports.useConnectAndSignSplitSteps = useConnectAndSignSplitSteps;
