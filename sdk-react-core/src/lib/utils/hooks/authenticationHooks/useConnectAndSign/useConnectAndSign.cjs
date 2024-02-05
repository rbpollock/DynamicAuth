'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var CaptchaContext = require('../../../../context/CaptchaContext/CaptchaContext.cjs');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ErrorContext = require('../../../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('react');
require('@dynamic-labs/wallet-book');
var localStorage$1 = require('../../../constants/localStorage.cjs');
require('../../../constants/colors.cjs');
var localStorage = require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isProgrammableNetworkSwitchSupported = require('../../../functions/isProgrammableNetworkSwitchSupported/isProgrammableNetworkSwitchSupported.cjs');
var isSupportedNetwork = require('../../../functions/isSupportedNetwork/isSupportedNetwork.cjs');
var useHandleWalletsToConnect = require('../../useHandleWalletsToConnect/useHandleWalletsToConnect.cjs');
var useVerifyWallet = require('../../useVerifyWallet/useVerifyWallet.cjs');
var showPendingConnectView = require('../helpers/showPendingConnectView.cjs');
var isConnectOnly = require('../helpers/isConnectOnly.cjs');

const useConnectAndSign = ({ shouldUpdateWallets = true, shouldCallCallback = true, } = {}) => {
    const { setView, goToInitialView } = ViewContext.useViewContext();
    const { engageCaptcha, getCaptchaToken } = CaptchaContext.useCaptchaContext();
    const { setErrorMessage } = ErrorContext.useErrorContext();
    const { authMode, connectWallet, consumeNonce, displaySiweStatement, environmentId, projectSettings, setIsSingleWalletAccount, user, walletUiUtils, setCallback, setIsVerificationInProgress, } = useInternalDynamicContext.useInternalDynamicContext();
    const { handleWalletsToConnect } = useHandleWalletsToConnect.useHandleWalletsToConnect();
    const verifyWallet = useVerifyWallet.useVerifyWallet({
        consumeNonce,
        displaySiweStatement,
        environmentId,
        projectSettings,
        setIsSingleWalletAccount,
    });
    const handleWalletVerify = (walletConnector, publicWalletAddress, captchaToken) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (!walletConnectorCore.isEmailWalletConnector(walletConnector) ||
            walletConnectorCore.isBloctoConnector(walletConnector)) {
            setView('pending-signature');
        }
        else {
            walletUiUtils.disabledConfirmationOnce();
        }
        yield verifyWallet({
            captchaToken,
            publicWalletAddress,
            walletConnector,
        });
    });
    const handleWalletVerifyError = (err) => {
        var _a;
        const userCancelled = (err === null || err === void 0 ? void 0 : err.code) === 'user-cancelled';
        if (!userCancelled)
            logger.logger.debug(err);
        setErrorMessage((_a = err === null || err === void 0 ? void 0 : err.code) === null || _a === void 0 ? void 0 : _a.toString());
        goToInitialView();
        // Since auth failed, clear verification flag
        // But if user cancelled, clearStatesOnBackClick will have already cleared it. So avoid
        // clearing again since that would trigger a warning
        if (!userCancelled)
            setIsVerificationInProgress(false);
    };
    return ({ walletConnector, fetchPublicAddressOpts = undefined, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // Raise verification ongoing flag
        setIsVerificationInProgress(true);
        try {
            yield showPendingConnectView.showPendingConnectView(walletConnector, setView);
            if (walletConnectorCore.isEmailWalletConnector(walletConnector)) {
                if (walletConnectorCore.isEmailOTPWalletConnector(walletConnector)) {
                    setView('email-wallet-otp-verification-view');
                }
                else if (!walletConnectorCore.isBloctoConnector(walletConnector)) {
                    setView('wait-for-email-confirmation-view');
                }
            }
            const connectionResult = yield connectWallet(walletConnector, fetchPublicAddressOpts, shouldCallCallback);
            if (!(connectionResult === null || connectionResult === void 0 ? void 0 : connectionResult.address)) {
                return;
            }
            const { address, id } = connectionResult;
            const walletNetwork = yield walletConnector.getNetwork();
            // When we switch networks on MM/walletconnect, it breaks the flow and doesn't always display the sign message
            // Since it the network doesn't matter for the sign, we don't need to force the user to switch to the supported
            // network at this stage and they can switch when doing a transaction
            // Note: not checking specifically for MM since user can choose walletconnect connector to use with MM
            const shouldForceSupportedNetwork = !walletConnector.isWalletConnect;
            const usesSupportedNetwork = isSupportedNetwork.isSupportedNetwork({
                network: walletNetwork,
                walletConnector,
            });
            if (!usesSupportedNetwork) {
                if (!isProgrammableNetworkSwitchSupported.isProgrammableNetworkSwitchSupported(walletConnector)) {
                    return setView('network-not-supported-manual');
                }
                if (shouldForceSupportedNetwork) {
                    return setView('network-not-supported');
                }
            }
            setCallback('connectSuccess', {
                walletId: id,
            });
            if (isConnectOnly.isConnectOnly(user, authMode)) {
                localStorage.LocalStorage.setToLS(localStorage$1.LAST_USED_WALLET, walletConnector.key);
                if (shouldUpdateWallets) {
                    handleWalletsToConnect({ walletConnector });
                }
                return;
            }
            if ((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.security.hCaptcha) === null || _a === void 0 ? void 0 : _a.enabled) {
                engageCaptcha({
                    authMethod: 'wallet',
                    onCaptchaSuccess: (captchaToken) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                        try {
                            yield handleWalletVerify(walletConnector, address, captchaToken);
                        }
                        catch (e) {
                            handleWalletVerifyError(e);
                        }
                    }),
                });
                return;
            }
            yield handleWalletVerify(walletConnector, address, getCaptchaToken());
        }
        catch (err) {
            handleWalletVerifyError(err);
        }
    });
};

exports.useConnectAndSign = useConnectAndSign;
