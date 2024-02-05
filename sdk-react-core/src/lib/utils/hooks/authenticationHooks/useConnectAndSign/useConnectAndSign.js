import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { isEmailWalletConnector, isEmailOTPWalletConnector, isBloctoConnector } from '@dynamic-labs/wallet-connector-core';
import { useCaptchaContext } from '../../../../context/CaptchaContext/CaptchaContext.js';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { useErrorContext } from '../../../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import 'react';
import '@dynamic-labs/wallet-book';
import { LAST_USED_WALLET } from '../../../constants/localStorage.js';
import '../../../constants/colors.js';
import { LocalStorage } from '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isProgrammableNetworkSwitchSupported } from '../../../functions/isProgrammableNetworkSwitchSupported/isProgrammableNetworkSwitchSupported.js';
import { isSupportedNetwork } from '../../../functions/isSupportedNetwork/isSupportedNetwork.js';
import { useHandleWalletsToConnect } from '../../useHandleWalletsToConnect/useHandleWalletsToConnect.js';
import { useVerifyWallet } from '../../useVerifyWallet/useVerifyWallet.js';
import { showPendingConnectView } from '../helpers/showPendingConnectView.js';
import { isConnectOnly } from '../helpers/isConnectOnly.js';

const useConnectAndSign = ({ shouldUpdateWallets = true, shouldCallCallback = true, } = {}) => {
    const { setView, goToInitialView } = useViewContext();
    const { engageCaptcha, getCaptchaToken } = useCaptchaContext();
    const { setErrorMessage } = useErrorContext();
    const { authMode, connectWallet, consumeNonce, displaySiweStatement, environmentId, projectSettings, setIsSingleWalletAccount, user, walletUiUtils, setCallback, setIsVerificationInProgress, } = useInternalDynamicContext();
    const { handleWalletsToConnect } = useHandleWalletsToConnect();
    const verifyWallet = useVerifyWallet({
        consumeNonce,
        displaySiweStatement,
        environmentId,
        projectSettings,
        setIsSingleWalletAccount,
    });
    const handleWalletVerify = (walletConnector, publicWalletAddress, captchaToken) => __awaiter(void 0, void 0, void 0, function* () {
        if (!isEmailWalletConnector(walletConnector) ||
            isBloctoConnector(walletConnector)) {
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
            logger.debug(err);
        setErrorMessage((_a = err === null || err === void 0 ? void 0 : err.code) === null || _a === void 0 ? void 0 : _a.toString());
        goToInitialView();
        // Since auth failed, clear verification flag
        // But if user cancelled, clearStatesOnBackClick will have already cleared it. So avoid
        // clearing again since that would trigger a warning
        if (!userCancelled)
            setIsVerificationInProgress(false);
    };
    return ({ walletConnector, fetchPublicAddressOpts = undefined, }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // Raise verification ongoing flag
        setIsVerificationInProgress(true);
        try {
            yield showPendingConnectView(walletConnector, setView);
            if (isEmailWalletConnector(walletConnector)) {
                if (isEmailOTPWalletConnector(walletConnector)) {
                    setView('email-wallet-otp-verification-view');
                }
                else if (!isBloctoConnector(walletConnector)) {
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
            const usesSupportedNetwork = isSupportedNetwork({
                network: walletNetwork,
                walletConnector,
            });
            if (!usesSupportedNetwork) {
                if (!isProgrammableNetworkSwitchSupported(walletConnector)) {
                    return setView('network-not-supported-manual');
                }
                if (shouldForceSupportedNetwork) {
                    return setView('network-not-supported');
                }
            }
            setCallback('connectSuccess', {
                walletId: id,
            });
            if (isConnectOnly(user, authMode)) {
                LocalStorage.setToLS(LAST_USED_WALLET, walletConnector.key);
                if (shouldUpdateWallets) {
                    handleWalletsToConnect({ walletConnector });
                }
                return;
            }
            if ((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.security.hCaptcha) === null || _a === void 0 ? void 0 : _a.enabled) {
                engageCaptcha({
                    authMethod: 'wallet',
                    onCaptchaSuccess: (captchaToken) => __awaiter(void 0, void 0, void 0, function* () {
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

export { useConnectAndSign };
