import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { MissingPublicAddressError, isMobile } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { useErrorContext } from '../../../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';
import { useVerifyWallet } from '../../useVerifyWallet/useVerifyWallet.js';
import { showPendingConnectView } from '../helpers/showPendingConnectView.js';
import { isConnectOnly } from '../helpers/isConnectOnly.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import 'react';
import '@dynamic-labs/wallet-book';
import { LAST_USED_WALLET } from '../../../constants/localStorage.js';
import '../../../constants/colors.js';
import { LocalStorage } from '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import { useCaptchaContext } from '../../../../context/CaptchaContext/CaptchaContext.js';
import { useHandleWalletsToConnect } from '../../useHandleWalletsToConnect/useHandleWalletsToConnect.js';

const useConnectAndSignSplitSteps = () => {
    const { setView, goToInitialView } = useViewContext();
    const { setErrorMessage } = useErrorContext();
    const { getCaptchaToken, engageCaptcha } = useCaptchaContext();
    const { connectWallet, consumeNonce, displaySiweStatement, projectSettings, environmentId, setIsSingleWalletAccount, setShowAuthFlow, user, authMode, setCallback, setIsVerificationInProgress, } = useInternalDynamicContext();
    const { handleWalletsToConnect } = useHandleWalletsToConnect();
    const verifyWallet = useVerifyWallet({
        consumeNonce,
        displaySiweStatement,
        environmentId,
        projectSettings,
        setIsSingleWalletAccount,
    });
    const onErrorHandler = (err) => {
        logger.debug(err);
        goToInitialView();
        setIsVerificationInProgress(false);
        /**
         * On mobile we don't want to show error message because the user
         * is redirected to the wallet mobile app
         */
        const isMissingPublicAddressErrorExpected = err instanceof MissingPublicAddressError && isMobile();
        if (!isMissingPublicAddressErrorExpected) {
            setErrorMessage(err.toString());
        }
    };
    // This method is similar to useConnectAndSign, but it skips signing for now
    // It's used when we want to connect and sign in two separate steps
    // For example on mobile when we want to sign on button click
    // or in Dapper
    const onlyConnectUser = ({ walletConnector, fetchPublicAddressOpts = undefined, }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // Raise verification ongoing flag
        setIsVerificationInProgress(true);
        yield showPendingConnectView(walletConnector, setView);
        try {
            const connectionResult = yield connectWallet(walletConnector, fetchPublicAddressOpts);
            setCallback('connectSuccess', {
                walletId: connectionResult === null || connectionResult === void 0 ? void 0 : connectionResult.id,
            });
            if (isConnectOnly(user, authMode)) {
                LocalStorage.setToLS(LAST_USED_WALLET, walletConnector.key);
                handleWalletsToConnect({ walletConnector });
                return;
            }
            if ((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.security.hCaptcha) === null || _a === void 0 ? void 0 : _a.enabled) {
                engageCaptcha({
                    authMethod: 'wallet',
                    onCaptchaSuccess: (_captchaToken) => __awaiter(void 0, void 0, void 0, function* () {
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
    const signAlreadyConnectedUser = ({ walletConnector, fetchPublicAddressOpts = undefined, }) => __awaiter(void 0, void 0, void 0, function* () {
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

export { useConnectAndSignSplitSteps };
